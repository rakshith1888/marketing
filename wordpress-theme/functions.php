
<?php
function groflex_theme_setup() {
    // Add theme support for menus
    add_theme_support('menus');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'groflex'),
        'footer' => __('Footer Menu', 'groflex'),
    ));
    
    // Add theme support for title tag
    add_theme_support('title-tag');
    
    // Add theme support for post thumbnails
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'groflex_theme_setup');

// Enqueue styles and scripts
function groflex_scripts() {
    wp_enqueue_style('groflex-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'groflex_scripts');

// Create custom menu walker for better control
class Groflex_Walker_Nav_Menu extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $classes[] = 'menu-item-' . $item->ID;
        
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
        $class_names = $class_names ? ' class="' . esc_attr($class_names) . '"' : '';
        
        $id = apply_filters('nav_menu_item_id', 'menu-item-' . $item->ID, $item, $args);
        $id = $id ? ' id="' . esc_attr($id) . '"' : '';
        
        $output .= '<li' . $id . $class_names .'>';
        
        $attributes = ! empty($item->attr_title) ? ' title="' . esc_attr($item->attr_title) .'"' : '';
        $attributes .= ! empty($item->target) ? ' target="' . esc_attr($item->target) .'"' : '';
        $attributes .= ! empty($item->xfn) ? ' rel="' . esc_attr($item->xfn) .'"' : '';
        $attributes .= ! empty($item->url) ? ' href="' . esc_attr($item->url) .'"' : '';
        
        // Check if current page
        $current_class = '';
        if (in_array('current-menu-item', $classes) || in_array('current_page_item', $classes)) {
            $current_class = ' class="current"';
        }
        
        $item_output = isset($args->before) ? $args->before : '';
        $item_output .= '<a' . $attributes . $current_class . '>';
        $item_output .= (isset($args->link_before) ? $args->link_before : '') . apply_filters('the_title', $item->title, $item->ID) . (isset($args->link_after) ? $args->link_after : '');
        $item_output .= '</a>';
        $item_output .= isset($args->after) ? $args->after : '';
        
        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }
}

// Add custom page templates
function groflex_page_template_redirect() {
    if (is_page()) {
        $pagename = get_query_var('pagename');
        
        if ($pagename === 'products' && locate_template('page-products.php')) {
            include(locate_template('page-products.php'));
            exit;
        }
        
        if ($pagename === 'solutions' && locate_template('page-solutions.php')) {
            include(locate_template('page-solutions.php'));
            exit;
        }
        
        if ($pagename === 'about' && locate_template('page-about.php')) {
            include(locate_template('page-about.php'));
            exit;
        }
        
        if ($pagename === 'blog' && locate_template('page-blog.php')) {
            include(locate_template('page-blog.php'));
            exit;
        }
        
        if ($pagename === 'pricing' && locate_template('page-pricing.php')) {
            include(locate_template('page-pricing.php'));
            exit;
        }
    }
}
add_action('template_redirect', 'groflex_page_template_redirect');

// Create pages on theme activation
function groflex_create_pages() {
    $pages = array(
        'Products' => 'Discover our powerful analytics platform',
        'Solutions' => 'Tailored solutions for your business needs',
        'About' => 'Learn more about GrofleX',
        'Blog' => 'Latest insights and updates',
        'Pricing' => 'Choose the right plan for you'
    );
    
    foreach ($pages as $title => $content) {
        $page_check = get_page_by_title($title);
        if (!isset($page_check->ID)) {
            $page = array(
                'post_title' => $title,
                'post_content' => $content,
                'post_status' => 'publish',
                'post_type' => 'page',
                'post_slug' => strtolower($title)
            );
            wp_insert_post($page);
        }
    }
}
add_action('after_switch_theme', 'groflex_create_pages');
?>
