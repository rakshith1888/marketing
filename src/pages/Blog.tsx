
import Layout from '../components/Layout';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business Automation',
      excerpt: 'Explore how artificial intelligence is reshaping business processes and driving efficiency across industries.',
      date: '2024-01-15',
      category: 'AI & Technology',
      readTime: '5 min read'
    },
    {
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to successful cloud migration strategies and avoiding common pitfalls.',
      date: '2024-01-10',
      category: 'Cloud Computing',
      readTime: '8 min read'
    },
    {
      title: 'Data Security in the Digital Age',
      excerpt: 'Understanding the importance of data protection and implementing robust security measures.',
      date: '2024-01-05',
      category: 'Security',
      readTime: '6 min read'
    },
    {
      title: 'Scaling Your Business with Modern Technology',
      excerpt: 'How to leverage cutting-edge technology solutions to accelerate business growth.',
      date: '2024-01-01',
      category: 'Business Growth',
      readTime: '7 min read'
    }
  ];

  const categories = ['All', 'AI & Technology', 'Cloud Computing', 'Security', 'Business Growth'];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Insights, trends, and expert perspectives on technology and business innovation
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  index === 0 
                    ? 'bg-gradient-purple text-white' 
                    : 'glass-card border border-brand-purple/30 text-white/80 hover:bg-brand-purple/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="glass-card p-8 mb-12 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-coral text-black px-3 py-1 rounded-full text-sm font-semibold">Featured</span>
              <span className="text-brand-cream text-sm">{blogPosts[0].category}</span>
            </div>
            <h2 className="text-3xl font-bold text-gradient mb-4">{blogPosts[0].title}</h2>
            <p className="text-white/80 text-lg mb-6">{blogPosts[0].excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-white/60">
                <span>{blogPosts[0].date}</span>
                <span>•</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <button className="bg-gradient-purple text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
                Read More
              </button>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.slice(1).map((post, index) => (
              <div key={index} className="glass-card p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-brand-purple text-sm font-semibold">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gradient mb-3 group-hover:text-brand-coral transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/80 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl font-bold text-gradient mb-4">Stay Updated</h2>
            <p className="text-white/80 mb-8">Subscribe to our newsletter for the latest insights and updates</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-brand-purple"
              />
              <button className="bg-gradient-brand text-black font-semibold px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
