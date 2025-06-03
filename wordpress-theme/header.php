
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'brand-purple': '#8B5CF6',
                        'brand-pink': '#EC4899'
                    }
                }
            }
        }
    </script>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <header class="bg-white shadow-lg fixed w-full top-0 z-50">
        <nav class="container mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                    <a href="<?php echo home_url(); ?>" class="text-2xl font-bold text-gray-800">
                        GrofleX
                    </a>
                </div>
                
                <div class="hidden md:flex items-center space-x-8">
                    <a href="<?php echo home_url(); ?>" class="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
                    <a href="<?php echo home_url('/products'); ?>" class="text-gray-700 hover:text-purple-600 transition-colors">Products</a>
                    <a href="<?php echo home_url('/solutions'); ?>" class="text-gray-700 hover:text-purple-600 transition-colors">Solutions</a>
                    <a href="<?php echo home_url('/about'); ?>" class="text-gray-700 hover:text-purple-600 transition-colors">About</a>
                    <a href="<?php echo home_url('/blog'); ?>" class="text-gray-700 hover:text-purple-600 transition-colors">Blog</a>
                    <button class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
                        Get Started
                    </button>
                </div>
                
                <div class="md:hidden">
                    <button class="text-gray-700 hover:text-purple-600">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    </header>
    
    <div style="padding-top: 80px;">
