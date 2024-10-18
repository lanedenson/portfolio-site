document.addEventListener("DOMContentLoaded", function() {
    // Sticky header functionality
    window.onscroll = function() {
        const header = document.querySelector('.sticky-header');
        header.classList.toggle('shrink', document.body.scrollTop > 50 || document.documentElement.scrollTop > 50);
    };

    // Dropdown positioning logic
    const navItems = document.querySelectorAll('.navigation li');

    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const dropdown = this.querySelector('ul');
            if (dropdown) {
                const rect = dropdown.getBoundingClientRect();
                const windowWidth = window.innerWidth;

                // Adjust position if dropdown is overflowing
                if (rect.right > windowWidth) {
                    dropdown.style.left = 'auto';
                    dropdown.style.right = '0';
                } else if (rect.left < 0) {
                    dropdown.style.left = '0';
                    dropdown.style.right = 'auto';
                }
            }
        });

        // Reset position on mouse leave
        item.addEventListener('mouseleave', function() {
            const dropdown = this.querySelector('ul');
            if (dropdown) {
                dropdown.style.left = '0';
                dropdown.style.right = 'auto';
            }
        });
    });
});
