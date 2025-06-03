
<?php
// Enqueue styles and scripts
function groflex_enqueue_assets() {
    wp_enqueue_style('groflex-style', get_stylesheet_uri());
    wp_enqueue_style('tailwind-css', 'https://cdn.tailwindcss.com');
}
add_action('wp_enqueue_scripts', 'groflex_enqueue_assets');

// Theme support
function groflex_theme_support() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'groflex_theme_support');

// Register navigation menus
function groflex_register_menus() {
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'groflex'),
        'footer' => __('Footer Menu', 'groflex'),
    ));
}
add_action('init', 'groflex_register_menus');

// Custom post types (if needed)
function groflex_custom_post_types() {
    // Case Studies
    register_post_type('case_study', array(
        'labels' => array(
            'name' => 'Case Studies',
            'singular_name' => 'Case Study',
        ),
        'public' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'has_archive' => true,
    ));
}
add_action('init', 'groflex_custom_post_types');

// Customize excerpt length
function groflex_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'groflex_excerpt_length');

// Remove WordPress version from head
remove_action('wp_head', 'wp_generator');
?>
