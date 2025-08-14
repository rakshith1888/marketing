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
          const response = await axios.get(
            `https://groflex.ai/wp-json/wp/v2/posts?slug=${slug}&_embed`
          );

          if (response.data && response.data.length > 0) {
            setPost(response.data[0]);
          } else {
            setError(true);
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
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Oops! Blog post not found.
          </h2>
          <button
            onClick={() => navigate("/blog")}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-brand-purple to-brand-coral text-white rounded-full hover:shadow-xl transition-all duration-300"
          >
            Go Back to Blog
          </button>
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

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={getPostImage(post)}
              alt={post.title.rendered}
              className="w-full h-64 md:h-96 object-cover rounded-2xl"
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
              <p>{new Date(post.date).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-8">
            <div
              className="text-white/80 space-y-8 prose prose-invert max-w-none prose-headings:text-gradient prose-a:text-brand-purple prose-a:hover:text-brand-coral"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
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
