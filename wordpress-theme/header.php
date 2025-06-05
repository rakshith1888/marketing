<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<nav class="main-nav glass-card">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="<?php echo home_url(); ?>">
                <span style="font-size: 1.5rem; font-weight: bold; background: linear-gradient(135deg, var(--brand-purple), var(--brand-coral)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">GrofleX</span>
            </a>
        </div>
        
        <ul class="nav-menu" id="nav-menu">
            <li><a href="<?php echo home_url(); ?>" class="<?php echo is_front_page() ? 'active' : ''; ?>">Home</a></li>
            <li><a href="<?php echo home_url('/products'); ?>" class="<?php echo is_page('products') ? 'active' : ''; ?>">Products</a></li>
            <li><a href="<?php echo home_url('/solutions'); ?>" class="<?php echo is_page('solutions') ? 'active' : ''; ?>">Solutions</a></li>
            <li><a href="<?php echo home_url('/about'); ?>" class="<?php echo is_page('about') ? 'active' : ''; ?>">About</a></li>
            <li><a href="<?php echo home_url('/blog'); ?>" class="<?php echo is_page('blog') ? 'active' : ''; ?>">Blog</a></li>
            <li><a href="<?php echo home_url('/pricing'); ?>" class="<?php echo is_page('pricing') ? 'active' : ''; ?>">Pricing</a></li>
            <li><a href="#trial" class="nav-cta">Get Started</a></li>
        </ul>
        
        <button class="mobile-toggle" onclick="toggleMobileMenu()">☰</button>
    </div>
</nav>

<script>
function toggleMobileMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('.main-nav');
    const menu = document.getElementById('nav-menu');
    const toggle = document.querySelector('.mobile-toggle');
    
    if (!nav.contains(event.target)) {
        menu.classList.remove('active');
    }
});
</script>

</body>
</html>
