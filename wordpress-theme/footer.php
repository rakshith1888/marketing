
</main>

<footer class="main-footer">
    <div class="footer-content">
        <div class="footer-links">
            <a href="<?php echo home_url(); ?>">Home</a>
            <a href="<?php echo home_url('/products'); ?>">Products</a>
            <a href="<?php echo home_url('/solutions'); ?>">Solutions</a>
            <a href="<?php echo home_url('/about'); ?>">About</a>
            <a href="<?php echo home_url('/blog'); ?>">Blog</a>
            <a href="<?php echo home_url('/pricing'); ?>">Pricing</a>
        </div>
        <div class="footer-copyright">
            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
