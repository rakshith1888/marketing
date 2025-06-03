
<?php get_header(); ?>

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
        
        <!-- Dashboard Preview Placeholder -->
        <div class="dashboard-preview">
            <div class="dashboard-placeholder">
                📊 Dashboard Preview<br>
                <small>Insert dashboard screenshot or video here</small>
            </div>
        </div>
    </div>
</main>

<!-- Problem Section -->
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
    </div>
</section>

<!-- Audience Navigation -->
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

<?php get_footer(); ?>
