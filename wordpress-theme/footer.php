
    </div> <!-- Close the padding div from header -->
    
    <footer class="bg-gray-900 text-white py-16">
        <div class="container mx-auto px-6">
            <div class="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-2xl font-bold mb-6">GrofleX</h3>
                    <p class="text-gray-400 mb-6">
                        Transform your business with intelligent analytics and data-driven insights.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-6">Products</h4>
                    <ul class="space-y-3">
                        <li><a href="<?php echo home_url('/products'); ?>" class="text-gray-400 hover:text-white transition-colors">Analytics Platform</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Data Integration</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Dashboards</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Mobile App</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-6">Solutions</h4>
                    <ul class="space-y-3">
                        <li><a href="<?php echo home_url('/solutions'); ?>" class="text-gray-400 hover:text-white transition-colors">Business Intelligence</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Retail Analytics</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Healthcare</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Manufacturing</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-semibold mb-6">Company</h4>
                    <ul class="space-y-3">
                        <li><a href="<?php echo home_url('/about'); ?>" class="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                        <li><a href="<?php echo home_url('/blog'); ?>" class="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-12 pt-8 text-center">
                <p class="text-gray-400">
                    &copy; <?php echo date('Y'); ?> GrofleX. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
    
    <?php wp_footer(); ?>
</body>
</html>
