document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const hasSubmenuItems = document.querySelectorAll('.has-submenu');

    // Toggle mobile menu
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Handle submenu toggles
    hasSubmenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                item.classList.toggle('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close menu when window is resized above mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            hasSubmenuItems.forEach(item => item.classList.remove('active'));
        }
    });

    // Products Section
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const productsGrid = document.getElementById('productsGrid');

    // Search and filter functionality
    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categoryFilter.value;
        
        const products = document.querySelectorAll('.product-item');
        
        products.forEach(product => {
            const productName = product.querySelector('h3').textContent.toLowerCase();
            const productCategory = product.dataset.category;
            
            const matchesSearch = productName.includes(searchTerm);
            const matchesCategory = category === 'all' || productCategory === category;
            
            product.style.display = matchesSearch && matchesCategory ? 'block' : 'none';
        });
    }

    if (searchInput && categoryFilter) {
        searchInput.addEventListener('input', filterProducts);
        categoryFilter.addEventListener('change', filterProducts);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('.submit-button');
            const formResponse = this.querySelector('.form-response');
            const formData = new FormData(this);

            // Disable submit button and show loading state
            submitButton.disabled = true;
            submitButton.classList.add('loading');
            formResponse.style.display = 'none';

            try {
                const response = await fetch('send-mail.php', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.text();

                if (response.ok) {
                    formResponse.textContent = result;
                    formResponse.className = 'form-response success';
                    this.reset();
                } else {
                    formResponse.textContent = result;
                    formResponse.className = 'form-response error';
                }
            } catch (error) {
                formResponse.textContent = 'An error occurred. Please try again later.';
                formResponse.className = 'form-response error';
            } finally {
                // Re-enable submit button and remove loading state
                submitButton.disabled = false;
                submitButton.classList.remove('loading');
                formResponse.style.display = 'block';
            }
        });
    }
});