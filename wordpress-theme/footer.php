
<footer class="section" style="background: rgba(255, 255, 255, 0.05); border-top: 1px solid rgba(255, 255, 255, 0.1);">
    <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem; margin-bottom: 3rem;">
            <div>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/logo.png" alt="GrofleX" style="height: 32px; margin-bottom: 1rem;" />
                <p style="color: rgba(255, 255, 255, 0.7); margin-bottom: 1rem;">
                    Predictive analytics and prescriptive next steps, powered by AI.
                </p>
                <div style="display: flex; gap: 1rem;">
                    <a href="#" style="color: var(--brand-purple); font-size: 1.5rem;">📧</a>
                    <a href="#" style="color: var(--brand-purple); font-size: 1.5rem;">💼</a>
                    <a href="#" style="color: var(--brand-purple); font-size: 1.5rem;">🐦</a>
                    <a href="#" style="color: var(--brand-purple); font-size: 1.5rem;">📺</a>
                </div>
            </div>
            
            <div>
                <h4 style="color: var(--brand-purple); margin-bottom: 1rem; font-weight: 600;">Product</h4>
                <ul style="list-style: none; color: rgba(255, 255, 255, 0.7);">
                    <li style="margin-bottom: 0.5rem;"><a href="/products" style="color: inherit; text-decoration: none;">Features</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="/pricing" style="color: inherit; text-decoration: none;">Pricing</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#" style="color: inherit; text-decoration: none;">API</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#" style="color: inherit; text-decoration: none;">Integrations</a></li>
                </ul>
            </div>
            
            <div>
                <h4 style="color: var(--brand-purple); margin-bottom: 1rem; font-weight: 600;">Company</h4>
                <ul style="list-style: none; color: rgba(255, 255, 255, 0.7);">
                    <li style="margin-bottom: 0.5rem;"><a href="/about" style="color: inherit; text-decoration: none;">About</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="/blog" style="color: inherit; text-decoration: none;">Blog</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#" style="color: inherit; text-decoration: none;">Careers</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#" style="color: inherit; text-decoration: none;">Contact</a></li>
                </ul>
            </div>
            
            <div>
                <h4 style="color: var(--brand-purple); margin-bottom: 1rem; font-weight: 600;">Support</h4>
                <ul style="list-style: none; color: rgba(255, 255, 255, 0.7);">
                    <li style="margin-bottom: 0.5rem;"><a href="#" style="color: inherit; text-decoration: none;">Documentation</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#" style="color: inherit; text-decoration: none;">Help Center</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#" style="color: inherit; text-decoration: none;">Privacy Policy</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="#" style="color: inherit; text-decoration: none;">Terms of Service</a></li>
                </ul>
            </div>
        </div>
        
        <div style="border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 2rem; text-align: center; color: rgba(255, 255, 255, 0.6);">
            <p>&copy; <?php echo date('Y'); ?> GrofleX. All rights reserved.</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

<script>
// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll effects
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.05)';
    }
});

// Initialize animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
</script>

</body>
</html>
