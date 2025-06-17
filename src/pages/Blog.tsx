import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FuturisticCard from '../components/FuturisticCard';
import Layout from '../components/Layout';


const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://groflex.ai/wp-json/wp/v2/posts?per_page=10'); // Load 10 posts
        setPosts(res.data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    };

    fetchData();
  }, []);

  const handleGetStarted = () => {
    window.open('https://app.groflex.ai', '_blank');
  };

  const navigate = useNavigate();
  const handleBookDemo = () => {
    navigate('/Pricing');
  };


  const categories = ['All', 'Analytics', 'Strategy', 'Customer Success', 'Marketing', 'Operations', 'Technology'];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights, strategies, and thought leadership on predictive analytics, 
              data-driven decision making, and business intelligence.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-brand-purple/50 text-white/80 hover:bg-brand-purple/20 hover:text-white transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {/* {posts[0] && (
            <FuturisticCard variant="neon" className="p-8 mb-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-brand-coral text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <span className="text-brand-purple text-sm">News</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gradient mb-4" dangerouslySetInnerHTML={{ __html: posts[0].title.rendered }} />
                  <p className="text-white/80 mb-6 text-lg" dangerouslySetInnerHTML={{ __html: posts[0].excerpt.rendered }} />
                  <div className="flex items-center space-x-4 text-white/60 text-sm mb-6">
                    <span>By Admin</span>
                    <span>•</span>
                    <span>{new Date(posts[0].date).toLocaleDateString()}</span>
                  </div>
                  <a 
                    href={posts[0].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300 inline-block"
                  >
                    Read Article
                  </a>
                </div>
                <div>
                  <img 
                    src={'/placeholder.svg'} // You can replace this with a featured image from WP if available
                    alt="Featured"
                    className="w-full h-64 object-cover rounded-lg bg-brand-purple/20"
                  />
                </div>
              </div>
            </FuturisticCard>
          )} */}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {posts.slice(1).map((post) => (
              <FuturisticCard key={post.id} className="p-6 hover:bg-white/10 transition-all duration-300">
                {/* <img 
                  src={'/placeholder.svg'} 
                  alt="Post"
                  className="w-full h-48 object-cover rounded-lg mb-4 bg-brand-purple/20"
                /> */}
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-brand-coral text-sm font-semibold">News</span>
                  <span className="text-white/60 text-sm">{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <h3 className="text-xl font-bold text-gradient mb-3" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <p className="text-white/70 mb-4 text-sm" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                <div className="flex items-center justify-between">
                  <div className="text-white/60 text-sm">
                    <p>By Admin</p>
                  </div>
                  <a 
                    onClick={() => navigate(`/blog/${post.slug}`, { state: { post } })}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-purple hover:text-brand-coral transition-colors text-sm font-semibold"
                  >
                    Read More →
                  </a>
                </div>
              </FuturisticCard>
            ))}
          </div>

          {/* Newsletter Signup */}
          <FuturisticCard variant="neon" className="p-12 text-center">
            <h2 className="text-3xl font-bold text-gradient mb-4">Stay Updated</h2>
            <p className="text-white/80 mb-8 text-lg">
              Get the latest insights on predictive analytics and data-driven decision making delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
              <button
              onClick={handleBookDemo}
               className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300">
                Subscribe
              </button>
            </div>
            <div className="pt-8 border-t border-white/20">
              <p className="text-white/80 mb-4">Ready to see Groflex in action?</p>
              <button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </button>
            </div>
          </FuturisticCard>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
