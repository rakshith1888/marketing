
<?php get_header(); ?>

<main class="section" style="padding-top: 8rem;">
    <div class="container">
        <div style="text-align: center; margin-bottom: 4rem;">
            <h1 class="section-title">
                <span class="text-gradient">Simple, Transparent Pricing</span><br>
                <span>Choose the Plan That Fits Your Needs</span>
            </h1>
            <p style="font-size: 1.25rem; color: rgba(255, 255, 255, 0.8); max-width: 600px; margin: 0 auto;">
                Start with our free trial and scale as your business grows
            </p>
        </div>

        <!-- Pricing Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1000px; margin: 0 auto;">
            <!-- Starter Plan -->
            <div class="card" style="position: relative;">
                <div style="text-align: center; margin-bottom: 2rem;">
                    <h3 style="color: var(--brand-purple); font-size: 1.5rem; margin-bottom: 0.5rem;">Starter</h3>
                    <p style="color: rgba(255, 255, 255, 0.7);">Perfect for small teams</p>
                </div>
                
                <div style="text-align: center; margin-bottom: 2rem;">
                    <div style="font-size: 3rem; font-weight: bold; color: var(--brand-purple);">$99</div>
                    <div style="color: rgba(255, 255, 255, 0.7);">per month</div>
                </div>
                
                <ul style="list-style: none; margin-bottom: 2rem;">
                    <li style="margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: var(--brand-coral); margin-right: 0.5rem;">✓</span>
                        Up to 5 data sources
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: var(--brand-coral); margin-right: 0.5rem;">✓</span>
                        Basic predictive models
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: var(--brand-coral); margin-right: 0.5rem;">✓</span>
                        Natural language Q&A
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: var(--brand-coral); margin-right: 0.5rem;">✓</span>
                        Email support
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: var(--brand-coral); margin-right: 0.5rem;">✓</span>
                        5 users included
                    </li>
                </ul>
                
                <a href="#trial" class="btn-secondary" style="width: 100%; text-align: center; display: block;">Start Free Trial</a>
            </div>
            
            <!-- Professional Plan -->
            <div class="card" style="position: relative; border: 2px solid var(--brand-purple);">
                <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--brand-purple); color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.8rem;">MOST POPULAR</div>
                
                <div style="text-align: center; margin-bottom: 2rem; margin-top: 1rem;">
                    <h3 style="color: var(--brand-coral); font-size: 1.5rem; margin-bottom: 0.5rem;">Professional</h3>
                    <p style="color: rgba(255, 255, 255, 0.7);">For growing businesses</p>
                </div>
                
                <div style="text-align: center; margin-bottom: 2rem;">
                    <div style="font-size: 3rem; font-weight: bold; color: var(--brand-coral);">$299</div>
                    <div style="color: rgba(255, 255, 255, 0.7);">per month</div>
                </div>
                
                <ul style="list-style: none; margin-bottom: 2rem;">
                    <li style="margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: var(--brand-coral); margin-right: 0.5rem;">✓</span>
                        Up to 25 data sources
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: var(--brand-coral); margin-right: 0.5rem;">✓</span>
                        Advanced ML models
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: var(--brand-coral); margin-right: 0.5rem;">✓</span>
                        Prescriptive recommendations
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: var(--brand-coral); margin-right: 0.5rem;">✓</span>
                        Priority support
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: var(--brand-coral); margin-right: 0.5rem;">✓</span>
                        25 users included
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: var(--brand-coral); margin-right: 0.5rem;">✓</span>
                        Custom dashboards
                    </li>
                </ul>
                
                <a href="#trial" class="btn-primary" style="width: 100%; text-align: center; display: block;">Start Free Trial</a>
            </div>
            
            <!-- Enterprise Plan -->
            <div class="card" style="position: relative;">
                <div style="text-align: center; margin-bottom: 2rem;">
                    <h3 style="color: var(--brand-cream); font-size: 1.5rem; margin-bottom: 0.5rem;">Enterprise</h3>
                    <p style="color: rgba(255, 255, 255, 0.7);">For large organizations</p>
                </div>
                
                <div style="text-align: center; margin-bottom: 2rem;">
                    <div style="font-size: 2rem; font-weight: bold; color: var(--brand-cream);">Custom</div>
                    <div style="color: rgba(255, 255, 255, 0.7);">pricing</div>
                </div>
                
                <ul style="list-style: none; margin-bottom: 2rem;">
                    <li style="margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: var(--brand-coral); margin-right: 0.5rem;">✓</span>
                        Unlimited data sources
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: var(--brand-coral); margin-right: 0.5rem;">✓</span>
                        Custom ML models
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: var(--brand-coral); margin-right: 0.5rem;">✓</span>
                        White-label options
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: var(--brand-coral); margin-right: 0.5rem;">✓</span>
                        Dedicated support
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: var(--brand-coral); margin-right: 0.5rem;">✓</span>
                        Unlimited users
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: center;">
                        <span style="color: var(--brand-coral); margin-right: 0.5rem;">✓</span>
                        On-premise deployment
                    </li>
                </ul>
                
                <a href="#contact" class="btn-secondary" style="width: 100%; text-align: center; display: block;">Contact Sales</a>
            </div>
        </div>

        <!-- FAQ Section -->
        <div style="margin-top: 4rem;">
            <h2 style="text-align: center; margin-bottom: 3rem;" class="text-gradient">Frequently Asked Questions</h2>
            <div style="max-width: 800px; margin: 0 auto;">
                <div class="card" style="margin-bottom: 1rem;">
                    <h4 style="color: var(--brand-purple); font-weight: 600; margin-bottom: 0.5rem;">Can I change plans at any time?</h4>
                    <p style="color: rgba(255, 255, 255, 0.8);">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p>
                </div>
                
                <div class="card" style="margin-bottom: 1rem;">
                    <h4 style="color: var(--brand-purple); font-weight: 600; margin-bottom: 0.5rem;">What's included in the free trial?</h4>
                    <p style="color: rgba(255, 255, 255, 0.8);">The free trial includes full access to Professional plan features for 14 days. No credit card required.</p>
                </div>
                
                <div class="card" style="margin-bottom: 1rem;">
                    <h4 style="color: var(--brand-purple); font-weight: 600; margin-bottom: 0.5rem;">Do you offer discounts for annual billing?</h4>
                    <p style="color: rgba(255, 255, 255, 0.8);">Yes, we offer 20% off when you pay annually. Contact our sales team for more details.</p>
                </div>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>
