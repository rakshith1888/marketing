
import Layout from '../components/Layout';
import FuturisticCard from '../components/FuturisticCard';

const Blog = () => {
  const featuredPost = {
    title: 'The Future of Decision Intelligence: How AI is Reshaping Business Strategy',
    excerpt: 'Explore how predictive analytics and prescriptive AI are transforming the way leaders make critical business decisions in real-time.',
    category: 'Decision Intelligence',
    readTime: '8 min read',
    date: '2024-01-15',
    author: 'GrofleX Team'
  };

  const blogPosts = [
    {
      title: 'Why 92% of BI Tools Fail to Drive Action',
      excerpt: 'Understanding the gap between data visualization and actionable insights—and how to bridge it.',
      date: '2024-01-12',
      category: 'AI in Business',
      readTime: '6 min read',
      author: 'Sarah Chen'
    },
    {
      title: 'From Gut Decisions to Data-Driven Clarity',
      excerpt: 'How modern executives are moving beyond intuition to embrace predictive decision-making.',
      date: '2024-01-10',
      category: 'Decision Intelligence',
      readTime: '5 min read',
      author: 'Michael Rodriguez'
    },
    {
      title: 'Real-Time Operations: The New Competitive Advantage',
      excerpt: 'Why speed of insight matters more than depth of analysis in today\'s business environment.',
      date: '2024-01-08',
      category: 'Real-Time Ops',
      readTime: '7 min read',
      author: 'Emily Davis'
    },
    {
      title: 'Automating Analyst Work: Friend or Foe?',
      excerpt: 'How AI-powered analytics can free analysts from routine work to focus on strategic insights.',
      date: '2024-01-05',
      category: 'Analyst Automation',
      readTime: '6 min read',
      author: 'Alex Johnson'
    },
    {
      title: 'The ROI of Prescriptive Analytics',
      excerpt: 'Measuring the business impact of AI that doesn\'t just predict, but prescribes next steps.',
      date: '2024-01-03',
      category: 'AI in Retail',
      readTime: '8 min read',
      author: 'Data Science Team'
    }
  ];

  const categories = [
    'All Posts',
    'Decision Intelligence',
    'AI in Business', 
    'Real-Time Ops',
    'Analyst Automation',
    'AI in Retail'
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">GrofleX Insights</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Thought leadership on decision intelligence, AI, and the future of business analytics
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  index === 0 
                    ? 'bg-gradient-to-r from-brand-purple to-brand-coral text-white shadow-lg' 
                    : 'glass-card border border-brand-purple/30 text-white/80 hover:bg-brand-purple/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <FuturisticCard variant="neon" className="p-12 mb-16 hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-gradient-to-r from-brand-coral to-brand-cream text-black px-4 py-2 rounded-full text-sm font-semibold">Featured</span>
              <span className="text-brand-cream text-sm font-medium">{featuredPost.category}</span>
              <span className="text-white/60 text-sm">•</span>
              <span className="text-white/60 text-sm">{featuredPost.readTime}</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gradient mb-6 group-hover:text-brand-coral transition-colors">
              {featuredPost.title}
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {featuredPost.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-white/60">
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>By {featuredPost.author}</span>
              </div>
              <button className="bg-gradient-to-r from-brand-purple to-brand-coral text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-brand-purple/25 transition-all duration-300">
                Read Article
              </button>
            </div>
          </FuturisticCard>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <FuturisticCard key={index} className="p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-brand-purple text-sm font-semibold">{post.category}</span>
                  <span className="text-white/40 text-sm">•</span>
                  <span className="text-white/60 text-sm">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-coral transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-white/80 mb-6 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span>{post.date}</span>
                  <span>By {post.author}</span>
                </div>
              </FuturisticCard>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mb-16">
            <button className="glass-card border border-brand-purple/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-purple/20 transition-all duration-300">
              Load More Articles
            </button>
          </div>

          {/* Newsletter Signup */}
          <FuturisticCard variant="neon" className="p-12 text-center">
            <h2 className="text-3xl font-bold text-gradient mb-4">Subscribe to the GrofleX Insight Brief</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Get weekly insights on decision intelligence, AI trends, and actionable strategies 
              for data-driven leaders. Join 5,000+ executives who rely on our analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-brand-purple focus:bg-white/15 transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-brand-purple/25 transition-all duration-300 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-white/60 text-sm mt-4">
              No spam. Unsubscribe anytime. Read by leaders at Fortune 500 companies.
            </p>
          </FuturisticCard>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
