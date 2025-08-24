import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FuturisticCard from "../components/FuturisticCard";
import Layout from "../components/Layout";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const postsPerPage = 10;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        // Fetch posts with pagination
        const res = await axios.get(
          `https://groflex.ai/wp-json/wp/v2/posts?per_page=${postsPerPage}&page=${currentPage}&_embed`
        );

        // Get total posts from headers
        const totalFromHeaders =
          res.headers["x-wp-total"] || res.headers["X-WP-Total"];
        setTotalPosts(parseInt(totalFromHeaders) || res.data.length);

        // Fetch categories only on first load
        if (currentPage === 1) {
          const categoryRes = await axios.get(
            "https://groflex.ai/wp-json/wp/v2/categories?per_page=100"
          );

          // Filter out admin categories and empty categories
          const filteredCategories = categoryRes.data.filter(
            (cat) =>
              cat.name !== "Uncategorized" &&
              cat.name !== "Blog Single" &&
              cat.name !== "Blog" &&
              cat.count > 0 // Only show categories that have posts
          );

          // Sort categories by post count (most posts first)
          filteredCategories.sort((a, b) => b.count - a.count);

          setCategories([
            {
              id: "All",
              name: "All",
              count: parseInt(totalFromHeaders) || res.data.length,
            },
            ...filteredCategories,
          ]);
        }

        setPosts(res.data);
        setFilteredPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts or categories:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleCategoryFilter = async (category) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when filtering
    setIsLoading(true);

    try {
      if (category === "All") {
        // Fetch all posts for the first page with pagination
        const res = await axios.get(
          `https://groflex.ai/wp-json/wp/v2/posts?per_page=${postsPerPage}&page=1&_embed`
        );
        const totalFromHeaders =
          res.headers["x-wp-total"] || res.headers["X-WP-Total"];
        setTotalPosts(parseInt(totalFromHeaders) || res.data.length);
        setPosts(res.data);
        setFilteredPosts(res.data);
      } else {
        // For specific categories, fetch ALL posts in that category (no pagination)
        const categoryObj = categories.find((cat) => cat.name === category);
        if (categoryObj && categoryObj.id !== "All") {
          const res = await axios.get(
            `https://groflex.ai/wp-json/wp/v2/posts?per_page=100&categories=${categoryObj.id}&_embed`
          );
          // For categories, we show all posts so total equals the array length
          setTotalPosts(res.data.length);
          setPosts(res.data);
          setFilteredPosts(res.data);
        }
      }
    } catch (err) {
      console.error("Error filtering posts:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = async (page) => {
    if (page === currentPage) return;

    setCurrentPage(page);
    setIsLoading(true);

    try {
      let url = `https://groflex.ai/wp-json/wp/v2/posts?per_page=${postsPerPage}&page=${page}&_embed`;

      // Add category filter if not "All"
      if (activeCategory !== "All") {
        const categoryObj = categories.find(
          (cat) => cat.name === activeCategory
        );
        if (categoryObj && categoryObj.id !== "All") {
          url += `&categories=${categoryObj.id}`;
        }
      }

      const res = await axios.get(url);

      // Update total posts count from headers for the current filter
      const totalFromHeaders =
        res.headers["x-wp-total"] || res.headers["X-WP-Total"];
      if (totalFromHeaders) {
        setTotalPosts(parseInt(totalFromHeaders));
      }

      setPosts(res.data);
      setFilteredPosts(res.data);
    } catch (err) {
      console.error("Error fetching page:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetStarted = () => {
    window.open("https://app.groflex.ai", "_blank");
  };

  const handleBookDemo = () => {
    navigate("/Pricing");
  };

  const getPostImage = (post) => {
    try {
      return post.yoast_head_json?.og_image?.[0]?.url || "/placeholder.svg";
    } catch {
      return "/placeholder.svg";
    }
  };

  const getAuthorName = (post) => {
    return post._embedded?.author?.[0]?.name || "Admin";
  };

  // Calculate pagination info
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startPost = (currentPage - 1) * postsPerPage + 1;
  const endPost = Math.min(currentPage * postsPerPage, totalPosts);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights, strategies, and thought leadership on predictive
              analytics, data-driven decision making, and business intelligence.
            </p>
          </div>

          {/* Loader */}
          {isLoading ? (
            <div className="flex flex-col justify-center items-center h-64">
              <img
                src="/lovable-uploads/logo.png"
                alt="Loading"
                className="w-24 h-24 mb-4"
              />
              <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-brand-purple"></div>
            </div>
          ) : (
            <>
              {/* Category Filter - Improved Mobile Layout */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryFilter(category.name)}
                    className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full border whitespace-nowrap ${
                      activeCategory === category.name
                        ? "bg-brand-purple text-white border-brand-purple"
                        : "border-brand-purple/50 text-white/80 hover:bg-brand-purple/20"
                    } transition-all duration-300`}
                  >
                    {category.name}{" "}
                    {category.count !== undefined && `(${category.count})`}
                  </button>
                ))}
              </div>

              {/* Posts Info */}
              {activeCategory === "All" && (
                <div className="text-center mb-8">
                  <p className="text-white/60">
                    Showing {startPost}-{endPost} of {totalPosts} posts
                  </p>
                </div>
              )}

              {activeCategory !== "All" && (
                <div className="text-center mb-8">
                  <p className="text-white/60">
                    Showing all {totalPosts} posts in "{activeCategory}"
                  </p>
                </div>
              )}

              {/* Blog Cards - Improved Mobile Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
                {filteredPosts.map((post, index) => {
                  const isFirst =
                    index === 0 &&
                    currentPage === 1 &&
                    activeCategory === "All";

                  return (
                    <FuturisticCard
                      key={post.id}
                      variant={isFirst ? "neon" : "default"}
                      className={`p-0 transition-all duration-300 cursor-pointer ${
                        isFirst ? "sm:col-span-2 lg:col-span-3" : ""
                      }`}
                    >
                      <div
                        onClick={() => {
                          // Use the full WordPress permalink structure if it exists
                          if (post.link) {
                            // Extract the slug from the WordPress link
                            const wpUrl = new URL(post.link);
                            const wpSlug = wpUrl.pathname.replace(
                              /^\/|\/$/g,
                              ""
                            ); // Remove leading/trailing slashes
                            navigate(`/${wpSlug}`, { state: { post } });
                          } else {
                            // Fallback to the original /blog/:slug structure
                            navigate(`/blog/${post.slug}`, { state: { post } });
                          }
                        }}
                        className="flex flex-col h-full"
                      >
                        {/* Image on top - Responsive heights */}
                        <img
                          src={getPostImage(post)}
                          alt="Post"
                          className={`w-full object-cover rounded-t-xl ${
                            isFirst ? "h-48 sm:h-64 lg:h-96" : "h-48 sm:h-56"
                          }`}
                        />

                        {/* Post Body */}
                        <div className="p-4 sm:p-6 flex flex-col justify-between flex-1">
                          <div>
                            <div className="flex items-center space-x-4 mb-3">
                              <span className="text-white/60 text-sm">
                                {new Date(post.date).toLocaleDateString()}
                              </span>
                            </div>
                            <h3
                              className={`font-bold text-gradient mb-3 ${
                                isFirst
                                  ? "text-xl sm:text-2xl"
                                  : "text-lg sm:text-xl"
                              }`}
                              dangerouslySetInnerHTML={{
                                __html: post.title.rendered,
                              }}
                            />
                            <p
                              className="text-white/70 mb-4 text-sm sm:text-base line-clamp-3"
                              dangerouslySetInnerHTML={{
                                __html: post.excerpt.rendered,
                              }}
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="text-white/60 text-sm">
                              <p>By {getAuthorName(post)}</p>
                            </div>
                            <span
                              onClick={(e) => {
                                e.stopPropagation();
                                if (post.link) {
                                  const wpUrl = new URL(post.link);
                                  const wpSlug = wpUrl.pathname.replace(
                                    /^\/|\/$/g,
                                    ""
                                  );
                                  navigate(`/${wpSlug}`, { state: { post } });
                                } else {
                                  navigate(`/blog/${post.slug}`, {
                                    state: { post },
                                  });
                                }
                              }}
                              className="text-brand-purple hover:text-brand-coral transition-colors text-sm font-semibold cursor-pointer whitespace-nowrap"
                            >
                              Read More →
                            </span>
                          </div>
                        </div>
                      </div>
                    </FuturisticCard>
                  );
                })}
              </div>

              {/* Pagination - Only show for "All" section */}
              {totalPages > 1 && activeCategory === "All" && (
                <div className="flex flex-col items-center space-y-4 mb-16">
                  <div className="flex flex-wrap justify-center items-center gap-2">
                    {/* Previous Button */}
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-3 py-2 rounded-lg border border-brand-purple/50 text-white/80 hover:bg-brand-purple/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      ← Previous
                    </button>

                    {/* Page Numbers */}
                    {getPageNumbers().map((page, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          typeof page === "number"
                            ? handlePageChange(page)
                            : null
                        }
                        disabled={page === "..." || page === currentPage}
                        className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                          page === currentPage
                            ? "bg-brand-purple text-white border border-brand-purple"
                            : page === "..."
                            ? "text-white/60 cursor-default"
                            : "border border-brand-purple/50 text-white/80 hover:bg-brand-purple/20"
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    {/* Next Button */}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 rounded-lg border border-brand-purple/50 text-white/80 hover:bg-brand-purple/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      Next →
                    </button>
                  </div>

                  {/* Page Info */}
                  <p className="text-white/60 text-sm">
                    Page {currentPage} of {totalPages}
                  </p>
                </div>
              )}

              {/* Newsletter Signup */}
              <FuturisticCard
                variant="neon"
                className="p-8 sm:p-12 text-center"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gradient mb-4">
                  Ready to see Groflex in action
                </h2>
                <button
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all duration-300"
                >
                  Start Free Trial
                </button>
              </FuturisticCard>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
