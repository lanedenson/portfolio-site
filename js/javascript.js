document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
        const header = document.querySelector('.sticky-header');
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    };
});