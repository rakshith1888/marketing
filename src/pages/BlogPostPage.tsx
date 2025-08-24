import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

const BlogPostPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { slug } = useParams();
  const [post, setPost] = useState(location.state?.post || null);
  const [isLoading, setIsLoading] = useState(!post);
  const [error, setError] = useState(false);

  useEffect(() => {
    // If we don't have post data (direct URL access), fetch it
    if (!post && slug) {
      const fetchPost = async () => {
        try {
          setIsLoading(true);
          setError(false);

          // Clean the slug - remove any leading slashes and 'blog/' prefix
          let cleanSlug = slug;
          if (cleanSlug.startsWith("/")) {
            cleanSlug = cleanSlug.substring(1);
          }
          if (cleanSlug.startsWith("blog/")) {
            cleanSlug = cleanSlug.substring(5);
          }

          console.log("Fetching post with slug:", cleanSlug);

          // First try to fetch by slug
          let response = await axios.get(
            `https://groflex.ai/wp-json/wp/v2/posts?slug=${cleanSlug}&_embed`
          );

          if (response.data && response.data.length > 0) {
            console.log("Post found by slug:", response.data[0]);
            setPost(response.data[0]);
          } else {
            console.log("Post not found by slug, trying search...");
            // If slug doesn't work, try searching by post name
            const searchResponse = await axios.get(
              `https://groflex.ai/wp-json/wp/v2/posts?search=${cleanSlug}&_embed`
            );

            if (searchResponse.data && searchResponse.data.length > 0) {
              // Find exact match or closest match
              const exactMatch = searchResponse.data.find(
                (p) => p.slug === cleanSlug
              );
              setPost(exactMatch || searchResponse.data[0]);
              console.log(
                "Post found by search:",
                exactMatch || searchResponse.data[0]
              );
            } else {
              console.log("Post not found by search, trying all posts...");
              // Last resort: fetch all posts and find by slug
              const allPostsResponse = await axios.get(
                `https://groflex.ai/wp-json/wp/v2/posts?per_page=100&_embed`
              );

              const foundPost = allPostsResponse.data.find(
                (p) =>
                  p.slug === cleanSlug ||
                  p.slug === slug ||
                  p.link?.includes(cleanSlug) ||
                  p.link?.includes(slug)
              );

              if (foundPost) {
                console.log("Post found in all posts:", foundPost);
                setPost(foundPost);
              } else {
                console.log("Post not found anywhere");
                setError(true);
              }
            }
          }
        } catch (err) {
          console.error("Error fetching post:", err);
          setError(true);
        } finally {
          setIsLoading(false);
        }
      };

      fetchPost();
    }
  }, [slug, post]);

  // Set document title for SEO
  useEffect(() => {
    if (post) {
      document.title = `${post.title.rendered} | Groflex Blog`;

      // Set meta description for SEO
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription && post.excerpt?.rendered) {
        const cleanExcerpt = post.excerpt.rendered
          .replace(/<[^>]*>/g, "")
          .trim();
        metaDescription.setAttribute(
          "content",
          cleanExcerpt.substring(0, 160) + "..."
        );
      }
    }

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = "Groflex";
    };
  }, [post]);

  // Check if this is a blog post based on the URL or post data
  const isBlogPost = () => {
    if (post) {
      // Check if the post type indicates it's a blog post
      return true; // Assume all posts from WordPress API are blog posts
    }

    // Check URL pattern
    const pathname = location.pathname;
    return (
      pathname.startsWith("/blog/") ||
      (pathname.match(/^\/[^\/]+$/) && pathname !== "/")
    ); // Single slug pattern
  };

  // If this doesn't look like a blog post, redirect to 404
  useEffect(() => {
    if (!isLoading && !post && !error && slug) {
      // Give it a moment to load, then check if it's really a 404
      const timer = setTimeout(() => {
        if (!post && !isBlogPost()) {
          navigate("/404", { replace: true });
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, post, error, slug, navigate]);

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <img
            src="/lovable-uploads/logo.png"
            alt="Loading"
            className="w-24 h-24 mb-4"
          />
          <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-brand-purple"></div>
          <p className="text-white/60 mt-4">Loading blog post...</p>
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center text-center text-white px-4">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-4xl font-bold mb-4 text-gradient">404</h1>
          <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
          <p className="text-white/70 mb-2">
            Looking for:{" "}
            <code className="bg-white/10 px-2 py-1 rounded">{slug}</code>
          </p>
          <p className="text-white/70 mb-6 max-w-md">
            Sorry, we couldn't find the blog post you're looking for. It might
            have been moved or doesn't exist.
          </p>
          <div className="space-x-4">
            <button
              onClick={() => navigate("/blog")}
              className="px-6 py-3 bg-gradient-to-r from-brand-purple to-brand-coral text-white rounded-full hover:shadow-xl transition-all duration-300"
            >
              ← Back to Blog
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 border border-brand-purple/50 text-white rounded-full hover:bg-brand-purple/20 transition-all duration-300"
            >
              Go Home
            </button>
          </div>
        </div>
      </Layout>
    );
  }

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

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-white/60">
              <button
                onClick={() => navigate("/")}
                className="hover:text-white transition-colors"
              >
                Home
              </button>
              <span>›</span>
              <button
                onClick={() => navigate("/blog")}
                className="hover:text-white transition-colors"
              >
                Blog
              </button>
              <span>›</span>
              <span className="text-white/40">
                {post.title.rendered.replace(/<[^>]*>/g, "").substring(0, 30)}
                ...
              </span>
            </div>
          </nav>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={getPostImage(post)}
              alt={post.title.rendered}
              className="w-full h-64 md:h-96 object-cover rounded-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span
                className="text-gradient"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
            </h1>
            <div className="flex items-center justify-center space-x-6 text-white/60">
              <p>By {getAuthorName(post)}</p>
              <span>•</span>
              <p>{formatDate(post.date)}</p>
              {post.modified !== post.date && (
                <>
                  <span>•</span>
                  <p>Updated {formatDate(post.modified)}</p>
                </>
              )}
            </div>
          </div>

          <article className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-8">
            <div
              className="text-white/80 space-y-8 prose prose-invert max-w-none prose-headings:text-gradient prose-a:text-brand-purple prose-a:hover:text-brand-coral prose-img:rounded-lg"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </article>

          {/* Social Share Buttons */}
          <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gradient mb-4 text-center">
              Share this post
            </h3>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => {
                  const url = encodeURIComponent(window.location.href);
                  const text = encodeURIComponent(
                    post.title.rendered.replace(/<[^>]*>/g, "")
                  );
                  window.open(
                    `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
                    "_blank"
                  );
                }}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                Twitter
              </button>
              <button
                onClick={() => {
                  const url = encodeURIComponent(window.location.href);
                  window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
                    "_blank"
                  );
                }}
                className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
              >
                LinkedIn
              </button>
              <button
                onClick={() => {
                  const url = encodeURIComponent(window.location.href);
                  const text = encodeURIComponent(
                    post.title.rendered.replace(/<[^>]*>/g, "")
                  );
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`,
                    "_blank"
                  );
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Facebook
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Copy Link
              </button>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate("/blog")}
              className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300"
            >
              ← Back to Blog Page
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostPage;
