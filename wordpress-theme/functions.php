
<?php
// Theme setup
function groflex_setup() {
    // Add theme support for title tag
    add_theme_support('title-tag');
    
    // Add theme support for post thumbnails
    add_theme_support('post-thumbnails');
    
    // Add theme support for HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'groflex'),
    ));
}
add_action('after_setup_theme', 'groflex_setup');

// Enqueue scripts and styles
function groflex_scripts() {
    wp_enqueue_style('groflex-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Add custom CSS for animations
    wp_add_inline_style('groflex-style', '
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .animate-on-scroll {
            animation: fadeInUp 0.6s ease forwards;
        }
    ');
}
add_action('wp_enqueue_scripts', 'groflex_scripts');

// Custom post types for solutions, products, etc.
function groflex_custom_post_types() {
    // Solutions post type
    register_post_type('solutions', array(
        'labels' => array(
            'name' => 'Solutions',
            'singular_name' => 'Solution'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-lightbulb'
    ));
    
    // Products post type
    register_post_type('products', array(
        'labels' => array(
            'name' => 'Products',
            'singular_name' => 'Product'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-products'
    ));
}
add_action('init', 'groflex_custom_post_types');

// Add custom fields for team members, testimonials, etc.
function groflex_add_meta_boxes() {
    add_meta_box(
        'groflex_page_options',
        'Page Options',
        'groflex_page_options_callback',
        'page'
    );
}
add_action('add_meta_boxes', 'groflex_add_meta_boxes');

function groflex_page_options_callback($post) {
    wp_nonce_field('groflex_save_meta_box_data', 'groflex_meta_box_nonce');
    
    $hero_title = get_post_meta($post->ID, '_groflex_hero_title', true);
    $hero_subtitle = get_post_meta($post->ID, '_groflex_hero_subtitle', true);
    
    echo '<table class="form-table">';
    echo '<tr>';
    echo '<th><label for="groflex_hero_title">Hero Title</label></th>';
    echo '<td><input type="text" id="groflex_hero_title" name="groflex_hero_title" value="' . esc_attr($hero_title) . '" class="regular-text" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="groflex_hero_subtitle">Hero Subtitle</label></th>';
    echo '<td><textarea id="groflex_hero_subtitle" name="groflex_hero_subtitle" rows="3" class="regular-text">' . esc_textarea($hero_subtitle) . '</textarea></td>';
    echo '</tr>';
    echo '</table>';
}

function groflex_save_meta_box_data($post_id) {
    if (!isset($_POST['groflex_meta_box_nonce'])) {
        return;
    }
    
    if (!wp_verify_nonce($_POST['groflex_meta_box_nonce'], 'groflex_save_meta_box_data')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (isset($_POST['groflex_hero_title'])) {
        update_post_meta($post_id, '_groflex_hero_title', sanitize_text_field($_POST['groflex_hero_title']));
    }
    
    if (isset($_POST['groflex_hero_subtitle'])) {
        update_post_meta($post_id, '_groflex_hero_subtitle', sanitize_textarea_field($_POST['groflex_hero_subtitle']));
    }
}
add_action('save_post', 'groflex_save_meta_box_data');

// Shortcodes for reusable components
function groflex_cta_shortcode($atts) {
    $atts = shortcode_atts(array(
        'text' => 'Get Started',
        'url' => '#',
        'style' => 'primary'
    ), $atts);
    
    $class = $atts['style'] === 'primary' ? 'btn-primary' : 'btn-secondary';
    
    return '<a href="' . esc_url($atts['url']) . '" class="' . $class . '">' . esc_html($atts['text']) . '</a>';
}
add_shortcode('groflex_cta', 'groflex_cta_shortcode');

function groflex_feature_card_shortcode($atts, $content = null) {
    $atts = shortcode_atts(array(
        'icon' => '🚀',
        'title' => 'Feature Title'
    ), $atts);
    
    return '<div class="card">
        <div class="card-icon">' . $atts['icon'] . '</div>
        <h3 class="card-title">' . esc_html($atts['title']) . '</h3>
        <div class="card-description">' . do_shortcode($content) . '</div>
    </div>';
}
add_shortcode('groflex_feature_card', 'groflex_feature_card_shortcode');
?>
