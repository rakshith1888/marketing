
# GrofleX WordPress Theme

A custom WordPress theme for the GrofleX AI Analytics Platform website.

## Installation

1. Upload the `wordpress-theme` folder to your WordPress `wp-content/themes/` directory
2. Add your logo image as `assets/logo.png` in the theme directory
3. Activate the theme in WordPress Admin → Appearance → Themes

## Features

- Responsive design with mobile-first approach
- Glass morphism UI effects
- Animated elements and scroll effects
- Custom post types for Solutions and Products
- Shortcodes for reusable components
- SEO-friendly structure
- Fast loading with optimized CSS

## Theme Structure

```
wordpress-theme/
├── style.css          # Main stylesheet with all styles
├── index.php          # Homepage template
├── header.php         # Header template with navigation
├── footer.php         # Footer template
├── functions.php      # Theme functions and customizations
├── page-products.php  # Products page template
├── page-solutions.php # Solutions page template
└── assets/
    └── logo.png       # Your logo file
```

## Customization

### Adding Dashboard Screenshots/Videos

Replace the placeholder divs in `index.php` and `page-products.php`:

```html
<!-- Replace this -->
<div class="dashboard-preview">
    <div class="dashboard-placeholder">
        📊 Dashboard Preview
    </div>
</div>

<!-- With this -->
<div class="dashboard-preview">
    <img src="path-to-your-screenshot.jpg" alt="GrofleX Dashboard" />
    <!-- OR -->
    <video autoplay muted loop>
        <source src="path-to-your-video.mp4" type="video/mp4">
    </video>
</div>
```

### Using Shortcodes

The theme includes custom shortcodes for easy content management:

#### CTA Button
```
[groflex_cta text="Get Started" url="/trial" style="primary"]
```

#### Feature Card
```
[groflex_feature_card icon="🚀" title="Amazing Feature"]
Your feature description here
[/groflex_feature_card]
```

### Custom Fields

Pages have custom fields for:
- Hero Title
- Hero Subtitle

Access these in the page editor.

## Page Templates

- `index.php` - Homepage with hero section and problem statement
- `page-products.php` - Product features and architecture
- `page-solutions.php` - Role-based solutions
- Create `page-about.php`, `page-blog.php`, `page-pricing.php` as needed

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance

- Optimized CSS with minimal external dependencies
- Vanilla JavaScript for interactions
- Lazy loading for images (add `loading="lazy"` attribute)
- Minified in production

## Development

To modify styles, edit `style.css`. The CSS is organized in sections:
- Reset and base styles
- Brand colors and variables
- Component styles (navigation, hero, cards, etc.)
- Animations and effects
- Responsive breakpoints

## Support

For customization help, refer to WordPress documentation or contact your developer.
