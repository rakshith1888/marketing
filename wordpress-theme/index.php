
<?php get_header(); ?>

<!-- HERO SECTION -->
<main class="hero-section">
    <div class="hero-background"></div>
    <div class="hero-float hero-float-1"></div>
    <div class="hero-float hero-float-2"></div>
    
    <div class="hero-content">
        <h1 class="hero-title">
            <span class="text-gradient">Clarity to Know</span><br>
            <span>What to Do Next</span>
        </h1>
        
        <p class="hero-subtitle">
            Predictive analytics. Prescriptive next steps.<br>
            Powered by AI, designed for decisive leaders.
        </p>
        
        <div class="hero-buttons">
            <a href="#trial" class="btn-primary">Start Free Trial</a>
            <a href="#demo" class="btn-secondary">See How It Works</a>
        </div>
        
        <!-- Animated Flywheel -->
        <div class="flywheel">
            <div class="flywheel-grid">
                <div class="flywheel-step">
                    <div class="flywheel-icon">🔗</div>
                    <h3 class="flywheel-title">Connect</h3>
                </div>
                <div class="flywheel-step">
                    <div class="flywheel-icon">🔮</div>
                    <h3 class="flywheel-title">Predict</h3>
                </div>
                <div class="flywheel-step">
                    <div class="flywheel-icon">📋</div>
                    <h3 class="flywheel-title">Prescribe</h3>
                </div>
                <div class="flywheel-step">
                    <div class="flywheel-icon">⚡</div>
                    <h3 class="flywheel-title">Act</h3>
                </div>
            </div>
        </div>
        
        <!-- Dashboard Preview -->
        <div class="dashboard-preview">
            <div class="dashboard-placeholder">
                📊 Dashboard Preview<br>
                <small>Insert dashboard screenshot or video here</small>
            </div>
        </div>
    </div>
</main>

<!-- PROBLEM SECTION -->
<section class="section">
    <div class="container">
        <h2 class="section-title">
            <span class="text-gradient">Why Can't You See What's Coming—</span><br>
            <span>Or What to Do About It?</span>
        </h2>
        
        <div class="grid-3">
            <div class="card">
                <div class="card-icon">🔗</div>
                <div style="font-size: 3rem; font-weight: bold; color: var(--brand-purple); margin-bottom: 1rem;">86%</div>
                <h3 class="card-title">Siloed Systems</h3>
                <p class="card-description">say their systems are too fragmented</p>
                <div style="margin-top: 1rem; padding: 1rem; background: rgba(139, 92, 246, 0.2); border-left: 4px solid var(--brand-coral); border-radius: 8px; font-style: italic; color: rgba(255, 255, 255, 0.7);">
                    "We have data everywhere but insights nowhere"
                </div>
            </div>
            
            <div class="card">
                <div class="card-icon">🧠</div>
                <div style="font-size: 3rem; font-weight: bold; color: var(--brand-purple); margin-bottom: 1rem;">72%</div>
                <h3 class="card-title">Gut Decisions Still Dominate</h3>
                <p class="card-description">rely on intuition over dashboards</p>
                <div style="margin-top: 1rem; padding: 1rem; background: rgba(139, 92, 246, 0.2); border-left: 4px solid var(--brand-coral); border-radius: 8px; font-style: italic; color: rgba(255, 255, 255, 0.7);">
                    "I trust my gut more than our reports"
                </div>
            </div>
            
            <div class="card">
                <div class="card-icon">📊</div>
                <div style="font-size: 3rem; font-weight: bold; color: var(--brand-purple); margin-bottom: 1rem;">92%</div>
                <h3 class="card-title">No Prescriptive Path</h3>
                <p class="card-description">don't trust BI to tell them what to do next</p>
                <div style="margin-top: 1rem; padding: 1rem; background: rgba(139, 92, 246, 0.2); border-left: 4px solid var(--brand-coral); border-radius: 8px; font-style: italic; color: rgba(255, 255, 255, 0.7);">
                    "Our dashboards show what happened, not what to do"
                </div>
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 3rem;">
            <a href="#clarity" class="btn-primary">Learn Why Clarity Matters</a>
        </div>
    </div>
</section>

<!-- AUDIENCE NAVIGATION -->
<section class="section" style="background: linear-gradient(90deg, rgba(139, 92, 246, 0.1), rgba(255, 107, 107, 0.1));">
    <div class="container">
        <h2 class="section-title">
            <span class="text-gradient">Clarity, for Everyone</span><br>
            <span>Who Makes Decisions</span>
        </h2>
        
        <div class="grid-3">
            <div class="card">
                <div class="card-icon">👔</div>
                <h3 class="card-title">Executives</h3>
                <p class="card-description">See where you're heading and what to do about it—before others do.</p>
                <a href="<?php echo home_url('/solutions'); ?>" class="btn-primary" style="display: inline-block; margin-top: 1rem;">Explore Use Cases</a>
            </div>
            
            <div class="card">
                <div class="card-icon">📊</div>
                <h3 class="card-title">BI Managers</h3>
                <p class="card-description">Deliver predictive dashboards that tell leadership what matters.</p>
                <a href="<?php echo home_url('/solutions'); ?>" class="btn-primary" style="display: inline-block; margin-top: 1rem;">Explore Use Cases</a>
            </div>
            
            <div class="card">
                <div class="card-icon">🔍</div>
                <h3 class="card-title">Analysts</h3>
                <p class="card-description">Automate insight delivery and eliminate low-impact work.</p>
                <a href="<?php echo home_url('/solutions'); ?>" class="btn-primary" style="display: inline-block; margin-top: 1rem;">Explore Use Cases</a>
            </div>
        </div>
    </div>
</section>

<!-- WHAT GROFLEX DOES -->
<section class="section">
    <div class="container">
        <h2 class="section-title">
            <span class="text-gradient">From Prediction to Action—</span><br>
            <span>In Real Time</span>
        </h2>
        
        <div class="grid-3">
            <div class="card">
                <div class="card-icon">🧠</div>
                <h3 class="card-title">Predictive Intelligence</h3>
                <p class="card-description">Built-in ML models forecast risks and opportunities</p>
            </div>
            
            <div class="card">
                <div class="card-icon">📋</div>
                <h3 class="card-title">Prescriptive Recommendations</h3>
                <p class="card-description">Suggested next-best actions with decision framing tools</p>
            </div>
            
            <div class="card">
                <div class="card-icon">💬</div>
                <h3 class="card-title">AI for Everyone</h3>
                <p class="card-description">Natural language Q&A works across all roles—executives to analysts</p>
            </div>
        </div>
    </div>
</section>

<!-- FEATURE GRID -->
<section class="section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(255, 107, 107, 0.05));">
    <div class="container">
        <h2 class="section-title">
            <span class="text-gradient">What You'll Get</span><br>
            <span>With GrofleX</span>
        </h2>
        
        <div class="grid-3">
            <div class="card">
                <div class="card-icon">📈</div>
                <h3 class="card-title">Predictive Forecasts</h3>
                <p class="card-description">See what's coming before it happens</p>
            </div>
            
            <div class="card">
                <div class="card-icon">💬</div>
                <h3 class="card-title">Natural Language Q&A</h3>
                <p class="card-description">Ask business questions in plain English</p>
            </div>
            
            <div class="card">
                <div class="card-icon">⚡</div>
                <h3 class="card-title">Prescriptive Next Steps</h3>
                <p class="card-description">Know exactly what to do next</p>
            </div>
            
            <div class="card">
                <div class="card-icon">🔄</div>
                <h3 class="card-title">Real-Time Sync</h3>
                <p class="card-description">Always up-to-date insights</p>
            </div>
            
            <div class="card">
                <div class="card-icon">☁️</div>
                <h3 class="card-title">Multi-Cloud Data Engine</h3>
                <p class="card-description">Connect any data source, anywhere</p>
            </div>
            
            <div class="card">
                <div class="card-icon">🎯</div>
                <h3 class="card-title">Clarity Score</h3>
                <p class="card-description">Measure decision confidence</p>
            </div>
        </div>
    </div>
</section>

<!-- HOW IT WORKS -->
<section class="section">
    <div class="container">
        <h2 class="section-title">
            <span class="text-gradient">How GrofleX Helps You</span><br>
            <span>Make the Right Move—Fast</span>
        </h2>
        
        <div class="glass-card" style="padding: 3rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 2rem;">
                <div style="text-align: center; flex: 1; min-width: 150px;">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, var(--brand-purple), var(--brand-coral)); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto 1rem; color: white; font-weight: bold;">1</div>
                    <h4 style="color: var(--brand-purple); font-weight: 600; margin-bottom: 0.5rem;">Connect</h4>
                    <p style="color: rgba(255, 255, 255, 0.7); font-size: 0.9rem;">Systems and data sources</p>
                </div>
                
                <div style="color: var(--brand-coral); font-size: 1.5rem;">→</div>
                
                <div style="text-align: center; flex: 1; min-width: 150px;">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, var(--brand-coral), #FF8E8E); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto 1rem; color: white; font-weight: bold;">2</div>
                    <h4 style="color: var(--brand-coral); font-weight: 600; margin-bottom: 0.5rem;">Predict</h4>
                    <p style="color: rgba(255, 255, 255, 0.7); font-size: 0.9rem;">Trends and emerging risks</p>
                </div>
                
                <div style="color: var(--brand-coral); font-size: 1.5rem;">→</div>
                
                <div style="text-align: center; flex: 1; min-width: 150px;">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, var(--brand-purple), var(--brand-coral)); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto 1rem; color: white; font-weight: bold;">3</div>
                    <h4 style="color: var(--brand-cream); font-weight: 600; margin-bottom: 0.5rem;">Clarity Score</h4>
                    <p style="color: rgba(255, 255, 255, 0.7); font-size: 0.9rem;">+ recommended actions</p>
                </div>
                
                <div style="color: var(--brand-coral); font-size: 1.5rem;">→</div>
                
                <div style="text-align: center; flex: 1; min-width: 150px;">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, var(--brand-coral), #FF8E8E); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto 1rem; color: white; font-weight: bold;">4</div>
                    <h4 style="color: var(--brand-purple); font-weight: 600; margin-bottom: 0.5rem;">Act</h4>
                    <p style="color: rgba(255, 255, 255, 0.7); font-size: 0.9rem;">Visualize trade-offs and decide</p>
                </div>
                
                <div style="color: var(--brand-coral); font-size: 1.5rem;">→</div>
                
                <div style="text-align: center; flex: 1; min-width: 150px;">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, var(--brand-purple), var(--brand-coral)); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto 1rem; color: white; font-weight: bold;">5</div>
                    <h4 style="color: var(--brand-cream); font-weight: 600; margin-bottom: 0.5rem;">Learn</h4>
                    <p style="color: rgba(255, 255, 255, 0.7); font-size: 0.9rem;">Platform learns from outcomes</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- SOCIAL PROOF -->
<section class="section" style="background: linear-gradient(90deg, rgba(139, 92, 246, 0.1), rgba(255, 107, 107, 0.1));">
    <div class="container">
        <h2 class="section-title">
            <span class="text-gradient">Trusted by Leaders</span><br>
            <span>Who Act Ahead of the Curve</span>
        </h2>
        
        <div class="grid-3">
            <div class="card">
                <div style="margin-bottom: 1.5rem;">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, var(--brand-purple), var(--brand-coral)); border-radius: 50%; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">👨‍💼</div>
                </div>
                <p style="font-style: italic; color: rgba(255, 255, 255, 0.9); margin-bottom: 1rem;">"GrofleX helped us identify market shifts 3 months before our competition. Our revenue increased 35% this quarter."</p>
                <div style="color: var(--brand-purple); font-weight: 600;">Sarah Chen</div>
                <div style="color: rgba(255, 255, 255, 0.7); font-size: 0.9rem;">VP Strategy, TechCorp</div>
            </div>
            
            <div class="card">
                <div style="margin-bottom: 1.5rem;">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, var(--brand-coral), #FF8E8E); border-radius: 50%; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">📊</div>
                </div>
                <p style="font-style: italic; color: rgba(255, 255, 255, 0.9); margin-bottom: 1rem;">"Finally, our executive team gets insights they actually use. No more waiting for reports."</p>
                <div style="color: var(--brand-coral); font-weight: 600;">Mike Rodriguez</div>
                <div style="color: rgba(255, 255, 255, 0.7); font-size: 0.9rem;">Director of BI, DataFlow Inc</div>
            </div>
            
            <div class="card">
                <div style="margin-bottom: 1.5rem;">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, var(--brand-purple), var(--brand-coral)); border-radius: 50%; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">🔍</div>
                </div>
                <p style="font-style: italic; color: rgba(255, 255, 255, 0.9); margin-bottom: 1rem;">"I spend 80% less time on manual analysis and 300% more time on strategic insights."</p>
                <div style="color: var(--brand-cream); font-weight: 600;">Alex Kim</div>
                <div style="color: rgba(255, 255, 255, 0.7); font-size: 0.9rem;">Senior Analyst, GrowthLab</div>
            </div>
        </div>
    </div>
</section>

<!-- AI INTERFACE DEMO -->
<section class="section">
    <div class="container">
        <h2 class="section-title">
            <span class="text-gradient">Ask Anything.</span><br>
            <span>Get Clarity.</span>
        </h2>
        
        <p style="text-align: center; font-size: 1.25rem; color: rgba(255, 255, 255, 0.8); margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto;">
            Type a business question—GrofleX will respond with context-aware recommendations
        </p>
        
        <div class="glass-card" style="padding: 3rem; max-width: 800px; margin: 0 auto;">
            <div style="background: rgba(0, 0, 0, 0.3); border-radius: 12px; padding: 2rem; margin-bottom: 2rem;">
                <div style="color: var(--brand-purple); font-weight: 600; margin-bottom: 1rem;">Try asking:</div>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <div style="background: rgba(139, 92, 246, 0.1); padding: 1rem; border-radius: 8px; border-left: 4px solid var(--brand-purple);">
                        "Why is churn rising?"
                    </div>
                    <div style="background: rgba(255, 107, 107, 0.1); padding: 1rem; border-radius: 8px; border-left: 4px solid var(--brand-coral);">
                        "Where's my highest risk?"
                    </div>
                    <div style="background: rgba(139, 92, 246, 0.1); padding: 1rem; border-radius: 8px; border-left: 4px solid var(--brand-purple);">
                        "What should we do this quarter?"
                    </div>
                </div>
            </div>
            <div style="text-align: center;">
                <a href="#demo" class="btn-primary">Try the Live Demo</a>
            </div>
        </div>
    </div>
</section>

<!-- FINAL CTA SECTION -->
<section class="section" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(255, 107, 107, 0.2));">
    <div class="container">
        <h2 class="section-title">
            <span class="text-gradient">Clarity Starts Here</span>
        </h2>
        
        <p style="text-align: center; font-size: 1.25rem; color: rgba(255, 255, 255, 0.9); margin-bottom: 3rem; max-width: 700px; margin-left: auto; margin-right: auto;">
            Whether you're leading, enabling, or building insight—GrofleX helps you know what to do next
        </p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; max-width: 800px; margin: 0 auto;">
            <div style="text-align: center;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🚀</div>
                <h3 style="color: var(--brand-purple); font-weight: 600; margin-bottom: 1rem;">Ready to Start?</h3>
                <a href="#trial" class="btn-primary">Start Free Trial</a>
            </div>
            
            <div style="text-align: center;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">👥</div>
                <h3 style="color: var(--brand-coral); font-weight: 600; margin-bottom: 1rem;">Want to See More?</h3>
                <a href="#demo" class="btn-secondary">Book a Demo</a>
            </div>
        </div>
    </div>
</section>

<!-- TOOL INTEGRATIONS -->
<section class="section">
    <div class="container">
        <h2 class="section-title">
            <span class="text-gradient">We Work with What</span><br>
            <span>You Already Use</span>
        </h2>
        
        <div style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 3rem; opacity: 0.6; transition: opacity 0.3s;">
            <div style="font-size: 2rem; color: rgba(255, 255, 255, 0.5);">Google</div>
            <div style="font-size: 2rem; color: rgba(255, 255, 255, 0.5);">Salesforce</div>
            <div style="font-size: 2rem; color: rgba(255, 255, 255, 0.5);">Mailchimp</div>
            <div style="font-size: 2rem; color: rgba(255, 255, 255, 0.5);">Looker</div>
            <div style="font-size: 2rem; color: rgba(255, 255, 255, 0.5);">Tableau</div>
            <div style="font-size: 2rem; color: rgba(255, 255, 255, 0.5);">Power BI</div>
        </div>
    </div>
</section>

<!-- FAQ SECTION -->
<section class="section" style="background: linear-gradient(90deg, rgba(139, 92, 246, 0.1), rgba(255, 107, 107, 0.1));">
    <div class="container">
        <h2 class="section-title">
            <span class="text-gradient">Still Not Clear?</span>
        </h2>
        
        <div style="max-width: 800px; margin: 0 auto;">
            <div class="card" style="margin-bottom: 1rem;">
                <h4 style="color: var(--brand-purple); font-weight: 600; margin-bottom: 0.5rem;">How does GrofleX explain its AI recommendations?</h4>
                <p style="color: rgba(255, 255, 255, 0.8);">Every recommendation comes with clear reasoning, confidence scores, and the data sources that informed the decision.</p>
            </div>
            
            <div class="card" style="margin-bottom: 1rem;">
                <h4 style="color: var(--brand-purple); font-weight: 600; margin-bottom: 0.5rem;">What data sources can GrofleX connect to?</h4>
                <p style="color: rgba(255, 255, 255, 0.8);">200+ pre-built connectors including CRMs, databases, cloud platforms, and APIs. Plus custom integrations.</p>
            </div>
            
            <div class="card" style="margin-bottom: 1rem;">
                <h4 style="color: var(--brand-purple); font-weight: 600; margin-bottom: 0.5rem;">How does this help my BI team specifically?</h4>
                <p style="color: rgba(255, 255, 255, 0.8);">Reduces manual reporting by 80%, automates insight generation, and provides self-serve analytics for stakeholders.</p>
            </div>
            
            <div class="card" style="margin-bottom: 1rem;">
                <h4 style="color: var(--brand-purple); font-weight: 600; margin-bottom: 0.5rem;">Is my data secure with GrofleX?</h4>
                <p style="color: rgba(255, 255, 255, 0.8);">Enterprise-grade security with SOC 2 Type II compliance, end-to-end encryption, and granular access controls.</p>
            </div>
            
            <div class="card" style="margin-bottom: 1rem;">
                <h4 style="color: var(--brand-purple); font-weight: 600; margin-bottom: 0.5rem;">How quickly can we see results?</h4>
                <p style="color: rgba(255, 255, 255, 0.8);">Most customers see actionable insights within the first week and measurable business impact within 30 days.</p>
            </div>
            
            <div class="card">
                <h4 style="color: var(--brand-purple); font-weight: 600; margin-bottom: 0.5rem;">Do I need a data science team to use GrofleX?</h4>
                <p style="color: rgba(255, 255, 255, 0.8);">No. GrofleX is designed for business users. Our AI handles the complex modeling while you focus on decisions.</p>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
