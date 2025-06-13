import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const BlogPostPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state?.post;

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Oops! Blog post not found.</h2>
          <button
            onClick={() => navigate('/blog')}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-brand-purple to-brand-coral text-white rounded-full hover:shadow-xl transition-all duration-300"
          >
            Go Back to Blog
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span
                className="text-gradient"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
            </h1>
            <p className="text-xl text-white/80">
              Published: {new Date(post.date).toLocaleDateString()}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <div
              className="text-white/80 space-y-8 prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostPage;
