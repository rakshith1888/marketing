
import Layout from '../components/Layout';
import FuturisticCard from '../components/FuturisticCard';

const Blog = () => {
  const handleGetStarted = () => {
    window.open('https://app.groflex.ai', '_blank');
  };

  const blogPosts = [
    {
      title: 'The Future of Predictive Analytics in Business',
      excerpt: 'Discover how AI-powered predictive analytics is transforming decision-making across industries.',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Analytics',
      image: '/placeholder.svg'
    },
    {
      title: 'From Data to Action: Building a Data-Driven Culture',
      excerpt: 'Learn practical strategies for implementing data-driven decision making in your organization.',
      author: 'Marcus Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Strategy',
      image: '/placeholder.svg'
    },
    {
      title: 'Understanding Customer Churn: Prevention Through Prediction',
      excerpt: 'How predictive models can help you identify at-risk customers before they leave.',
      author: 'Dr. Emily Watson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Customer Success',
      image: '/placeholder.svg'
    },
    {
      title: 'ROI Optimization: Making Every Marketing Dollar Count',
      excerpt: 'Maximize your marketing effectiveness with predictive analytics and smart budget allocation.',
      author: 'James Thompson',
      date: '2023-12-28',
      readTime: '4 min read',
      category: 'Marketing',
      image: '/placeholder.svg'
    },
    {
      title: 'Supply Chain Forecasting in Uncertain Times',
      excerpt: 'Navigate supply chain challenges with advanced forecasting and risk management strategies.',
      author: 'Sarah Chen',
      date: '2023-12-20',
      readTime: '8 min read',
      category: 'Operations',
      image: '/placeholder.svg'
    },
    {
      title: 'The Science Behind Prescriptive Analytics',
      excerpt: 'Deep dive into how our AI recommends the best actions for your specific business context.',
      author: 'Dr. Emily Watson',
      date: '2023-12-15',
      readTime: '6 min read',
      category: 'Technology',
      image: '/placeholder.svg'
    }
  ];

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
          <FuturisticCard variant="neon" className="p-8 mb-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-brand-coral text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="text-brand-purple text-sm">{blogPosts[0].category}</span>
                </div>
                <h2 className="text-3xl font-bold text-gradient mb-4">{blogPosts[0].title}</h2>
                <p className="text-white/80 mb-6 text-lg">{blogPosts[0].excerpt}</p>
                <div className="flex items-center space-x-4 text-white/60 text-sm mb-6">
                  <span>By {blogPosts[0].author}</span>
                  <span>•</span>
                  <span>{blogPosts[0].date}</span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <button className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300">
                  Read Article
                </button>
              </div>
              <div>
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 object-cover rounded-lg bg-brand-purple/20"
                />
              </div>
            </div>
          </FuturisticCard>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.slice(1).map((post, index) => (
              <FuturisticCard key={index} className="p-6 hover:bg-white/10 transition-all duration-300">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 bg-brand-purple/20"
                />
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-brand-coral text-sm font-semibold">{post.category}</span>
                  <span className="text-white/60 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gradient mb-3">{post.title}</h3>
                <p className="text-white/70 mb-4 text-sm">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-white/60 text-sm">
                    <p>By {post.author}</p>
                    <p>{post.date}</p>
                  </div>
                  <button className="text-brand-purple hover:text-brand-coral transition-colors text-sm font-semibold">
                    Read More →
                  </button>
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
              <button className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300">
                Subscribe
              </button>
            </div>
            <div className="pt-8 border-t border-white/20">
              <p className="text-white/80 mb-4">Ready to see GrofleX in action?</p>
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
