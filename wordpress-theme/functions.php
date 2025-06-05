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
    
    // Add custom CSS for animations and additional styles
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
        
        /* Mobile responsiveness improvements */
        @media (max-width: 768px) {
            .hero-title {
                font-size: 2.5rem !important;
            }
            
            .hero-subtitle {
                font-size: 1.1rem !important;
            }
            
            .section-title {
                font-size: 2rem !important;
            }
            
            .grid-3 {
                grid-template-columns: 1fr !important;
            }
            
            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }
        }
    ');
}
add_action('wp_enqueue_scripts', 'groflex_scripts');

// Create pages on theme activation with proper content and slugs
function groflex_create_pages() {
    $pages = array(
        'products' => array(
            'title' => 'Products',
            'content' => 'Products page content',
            'slug' => 'products'
        ),
        'solutions' => array(
            'title' => 'Solutions', 
            'content' => 'Solutions page content',
            'slug' => 'solutions'
        ),
        'about' => array(
            'title' => 'About',
            'content' => 'About page content',
            'slug' => 'about'
        ),
        'blog' => array(
            'title' => 'Blog',
            'content' => 'Blog page content',
            'slug' => 'blog'
        ),
        'pricing' => array(
            'title' => 'Pricing',
            'content' => 'Pricing page content',
            'slug' => 'pricing'
        )
    );
    
    foreach ($pages as $page_key => $page_data) {
        $existing_page = get_page_by_path($page_data['slug']);
        if (!$existing_page) {
            $page_id = wp_insert_post(array(
                'post_title' => $page_data['title'],
                'post_name' => $page_data['slug'],
                'post_status' => 'publish',
                'post_type' => 'page',
                'post_content' => $page_data['content']
            ));
            
            // Ensure the page slug is set correctly
            if ($page_id) {
                wp_update_post(array(
                    'ID' => $page_id,
                    'post_name' => $page_data['slug']
                ));
            }
        }
    }
    
    // Flush rewrite rules after creating pages
    flush_rewrite_rules();
}
add_action('after_switch_theme', 'groflex_create_pages');

// Force WordPress to use our custom page templates
function groflex_page_template($template) {
    global $post;
    
    if (is_page()) {
        $page_slug = $post->post_name;
        
        switch($page_slug) {
            case 'products':
                $new_template = locate_template(array('page-products.php'));
                if (!empty($new_template)) {
                    return $new_template;
                }
                break;
                
            case 'solutions':
                $new_template = locate_template(array('page-solutions.php'));
                if (!empty($new_template)) {
                    return $new_template;
                }
                break;
                
            case 'about':
                $new_template = locate_template(array('page-about.php'));
                if (!empty($new_template)) {
                    return $new_template;
                }
                break;
                
            case 'blog':
                $new_template = locate_template(array('page-blog.php'));
                if (!empty($new_template)) {
                    return $new_template;
                }
                break;
                
            case 'pricing':
                $new_template = locate_template(array('page-pricing.php'));
                if (!empty($new_template)) {
                    return $new_template;
                }
                break;
        }
    }
    
    return $template;
}
add_filter('page_template', 'groflex_page_template');

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

// Custom navigation walker for better control
class Groflex_Walker_Nav_Menu extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $classes[] = 'menu-item-' . $item->ID;
        
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
        $class_names = $class_names ? ' class="' . esc_attr($class_names) . '"' : '';
        
        $id = apply_filters('nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args);
        $id = $id ? ' id="' . esc_attr($id) . '"' : '';
        
        $output .= '<li' . $id . $class_names .'>';
        
        $attributes = ! empty($item->attr_title) ? ' title="' . esc_attr($item->attr_title) .'"' : '';
        $attributes .= ! empty($item->target) ? ' target="' . esc_attr($item->target ) .'"' : '';
        $attributes .= ! empty($item->xfn) ? ' rel="' . esc_attr($item->xfn ) .'"' : '';
        $attributes .= ! empty($item->url) ? ' href="' . esc_attr($item->url ) .'"' : '';
        
        $item_output = isset($args->before) ? $args->before : '';
        $item_output .= '<a' . $attributes .'>';
        $item_output .= (isset($args->link_before) ? $args->link_before : '') . apply_filters('the_title', $item->title, $item->ID) . (isset($args->link_after) ? $args->link_after : '');
        $item_output .= '</a>';
        $item_output .= isset($args->after) ? $args->after : '';
        
        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }
}

// Ensure proper rewrite rules
function groflex_flush_rewrite_rules() {
    flush_rewrite_rules();
}
add_action('after_switch_theme', 'groflex_flush_rewrite_rules');
?>
