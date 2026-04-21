// Mobile Menu Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            // Toggle visibility
            mobileMenu.classList.toggle('hidden');
            
            // Update button text
            const isHidden = mobileMenu.classList.contains('hidden');
            menuBtn.innerText = isHidden ? 'Menu' : 'Close';
        });

        // Close menu when a link is clicked (useful for anchor links)
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuBtn.innerText = 'Menu';
            });
        });
    }
});