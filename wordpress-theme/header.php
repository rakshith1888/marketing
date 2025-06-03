
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<nav class="main-navigation">
    <div class="nav-container">
        <div class="logo">
            <a href="<?php echo home_url(); ?>">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/logo.png" alt="<?php bloginfo('name'); ?>" />
            </a>
        </div>
        
        <ul class="nav-menu">
            <li><a href="<?php echo home_url(); ?>" <?php if (is_home() || is_front_page()) echo 'class="current"'; ?>>Home</a></li>
            <li><a href="<?php echo home_url('/products'); ?>" <?php if (is_page('products')) echo 'class="current"'; ?>>Products</a></li>
            <li><a href="<?php echo home_url('/solutions'); ?>" <?php if (is_page('solutions')) echo 'class="current"'; ?>>Solutions</a></li>
            <li><a href="<?php echo home_url('/about'); ?>" <?php if (is_page('about')) echo 'class="current"'; ?>>About</a></li>
            <li><a href="<?php echo home_url('/blog'); ?>" <?php if (is_page('blog')) echo 'class="current"'; ?>>Blog</a></li>
            <li><a href="<?php echo home_url('/pricing'); ?>" <?php if (is_page('pricing')) echo 'class="current"'; ?>>Pricing</a></li>
        </ul>
        
        <a href="#" class="cta-button">Get Started</a>
    </div>
</nav>

<main class="main-content">
