
<?php get_header(); ?>

<main class="section" style="padding-top: 8rem;">
    <div class="container">
        <div style="text-align: center; margin-bottom: 4rem;">
            <h1 class="section-title">
                <span class="text-gradient">GrofleX Blog</span><br>
                <span>Insights on AI, Analytics & Decision Making</span>
            </h1>
            <p style="font-size: 1.25rem; color: rgba(255, 255, 255, 0.8); max-width: 600px; margin: 0 auto;">
                Stay updated with the latest trends in predictive analytics and business intelligence
            </p>
        </div>

        <!-- Featured Post -->
        <div class="glass-card" style="padding: 3rem; margin-bottom: 4rem;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
                <div>
                    <div style="background: var(--brand-purple); color: white; padding: 0.5rem 1rem; border-radius: 20px; display: inline-block; font-size: 0.8rem; margin-bottom: 1rem;">FEATURED</div>
                    <h2 style="color: var(--brand-purple); font-size: 2rem; margin-bottom: 1rem;">The Future of Predictive Analytics in Business Decision Making</h2>
                    <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 1.5rem;">
                        Explore how AI-powered predictive analytics is transforming how businesses make strategic decisions and stay ahead of market trends.
                    </p>
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="color: rgba(255, 255, 255, 0.6); font-size: 0.9rem;">March 15, 2024</div>
                        <div style="color: rgba(255, 255, 255, 0.6); font-size: 0.9rem;">•</div>
                        <div style="color: rgba(255, 255, 255, 0.6); font-size: 0.9rem;">5 min read</div>
                    </div>
                    <a href="#" class="btn-primary">Read More</a>
                </div>
                <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(255, 107, 107, 0.2)); padding: 2rem; border-radius: 12px; text-align: center; min-height: 250px; display: flex; align-items: center; justify-content: center;">
                    <div style="font-size: 4rem;">📊</div>
                </div>
            </div>
        </div>

        <!-- Blog Posts Grid -->
        <div class="grid-3">
            <div class="card">
                <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(255, 107, 107, 0.2)); height: 200px; border-radius: 12px; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; font-size: 3rem;">🧠</div>
                <div style="background: var(--brand-coral); color: white; padding: 0.3rem 0.8rem; border-radius: 15px; display: inline-block; font-size: 0.7rem; margin-bottom: 1rem;">AI & MACHINE LEARNING</div>
                <h3 style="color: var(--brand-purple); margin-bottom: 1rem;">How AI is Revolutionizing Business Intelligence</h3>
                <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 1rem;">
                    Discover the key ways artificial intelligence is transforming traditional BI approaches.
                </p>
                <div style="color: rgba(255, 255, 255, 0.6); font-size: 0.9rem; margin-bottom: 1rem;">March 10, 2024</div>
                <a href="#" style="color: var(--brand-purple); text-decoration: none;">Read More →</a>
            </div>
            
            <div class="card">
                <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(255, 107, 107, 0.2)); height: 200px; border-radius: 12px; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; font-size: 3rem;">📈</div>
                <div style="background: var(--brand-purple); color: white; padding: 0.3rem 0.8rem; border-radius: 15px; display: inline-block; font-size: 0.7rem; margin-bottom: 1rem;">ANALYTICS</div>
                <h3 style="color: var(--brand-coral); margin-bottom: 1rem;">5 Signs Your Business Needs Predictive Analytics</h3>
                <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 1rem;">
                    Learn when it's time to move beyond traditional reporting to predictive insights.
                </p>
                <div style="color: rgba(255, 255, 255, 0.6); font-size: 0.9rem; margin-bottom: 1rem;">March 5, 2024</div>
                <a href="#" style="color: var(--brand-coral); text-decoration: none;">Read More →</a>
            </div>
            
            <div class="card">
                <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(255, 107, 107, 0.2)); height: 200px; border-radius: 12px; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; font-size: 3rem;">🎯</div>
                <div style="background: var(--brand-cream); color: black; padding: 0.3rem 0.8rem; border-radius: 15px; display: inline-block; font-size: 0.7rem; margin-bottom: 1rem;">DECISION MAKING</div>
                <h3 style="color: var(--brand-cream); margin-bottom: 1rem;">From Data to Decisions: A Complete Guide</h3>
                <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 1rem;">
                    A comprehensive guide to turning business data into actionable decisions.
                </p>
                <div style="color: rgba(255, 255, 255, 0.6); font-size: 0.9rem; margin-bottom: 1rem;">February 28, 2024</div>
                <a href="#" style="color: var(--brand-cream); text-decoration: none;">Read More →</a>
            </div>
        </div>

        <!-- Newsletter Signup -->
        <div class="glass-card" style="padding: 3rem; text-align: center; margin-top: 4rem;">
            <h2 class="text-gradient" style="margin-bottom: 1rem;">Stay Updated</h2>
            <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 2rem;">Get the latest insights on AI, analytics, and decision-making delivered to your inbox</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; max-width: 400px; margin: 0 auto;">
                <input type="email" placeholder="Enter your email" style="flex: 1; padding: 0.75rem 1rem; border-radius: 25px; border: 1px solid rgba(255, 255, 255, 0.3); background: rgba(255, 255, 255, 0.1); color: white; min-width: 200px;" />
                <button class="btn-primary">Subscribe</button>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>
