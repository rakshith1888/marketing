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

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://groflex.ai/wp-json/wp/v2/posts?per_page=10&_embed"
        );

        const categoryRes = await axios.get(
          "https://groflex.ai/wp-json/wp/v2/categories?per_page=100"
        );

        const filteredCategories = categoryRes.data.filter(
          (cat) =>
            cat.name !== "Uncategorized" &&
            cat.name !== "Blog Single" &&
            cat.name !== "Blog"
        );

        setPosts(res.data);
        setFilteredPosts(res.data);
        setCategories([{ id: "All", name: "All" }, ...filteredCategories]);
      } catch (err) {
        console.error("Error fetching posts or categories:", err);
      }
    };

    fetchData();
  }, []);

  const handleCategoryFilter = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setFilteredPosts(posts);
    } else {
      const categoryObj = categories.find((cat) => cat.name === category);
      const filtered = posts.filter((post) =>
        post.categories.includes(categoryObj.id)
      );
      setFilteredPosts(filtered);
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

          {/*Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryFilter(category.name)}
                className={`px-6 py-2 rounded-full border ${
                  activeCategory === category.name
                    ? "bg-brand-purple text-white"
                    : "border-brand-purple/50 text-white/80 hover:bg-brand-purple/20"
                } transition-all duration-300`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/*Blog Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post, index) => {
              const isFirst = index === 0 && activeCategory === "All";

              return (
                <FuturisticCard
                  key={post.id}
                  variant={isFirst ? "neon" : "default"}
                  className={`p-0 transition-all duration-300 cursor-pointer ${
                    isFirst ? "md:col-span-2 lg:col-span-3" : ""
                  }`}
                >
                  <div
                    onClick={() =>
                      navigate(`/blog/${post.slug}`, { state: { post } })
                    }
                    className="flex flex-col h-full"
                  >
                    {/*Image on top */}
                    <img
                      src={getPostImage(post)}
                      alt="Post"
                      className={`w-full ${
                        isFirst ? "h-96" : "h-56"
                      } object-cover rounded-t-xl`}
                    />

                    {/*Post Body */}
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center space-x-4 mb-3">
                          {/* <span className="text-brand-coral text-sm font-semibold">
                            News
                          </span> */}
                          <span className="text-white/60 text-sm">
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                        </div>
                        <h3
                          className="text-xl font-bold text-gradient mb-3"
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                          }}
                        />
                        <p
                          className="text-white/70 mb-4 text-sm"
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
                            navigate(`/blog/${post.slug}`, {
                              state: { post },
                            });
                          }}
                          className="text-brand-purple hover:text-brand-coral transition-colors text-sm font-semibold cursor-pointer"
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

          {/*Newsletter Signup */}
          <FuturisticCard variant="neon" className="p-12 text-center">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Ready to see Groflex in action
            </h2>
            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300"
            >
              Start Free Trial
            </button>
            {/* <p className="text-white/80 mb-8 text-lg">
              Get the latest insights on predictive analytics and data-driven
              decision making delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
              <button
                onClick={handleBookDemo}
                className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300"
              >
                Subscribe
              </button>
            </div> */}
            {/* <div className="pt-8 border-t border-white/20">
              <button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </button>
            </div> */}
          </FuturisticCard>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
