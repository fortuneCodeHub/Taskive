if (document.getElementById('mobileMenuBtn')) {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
    const openMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMenuBtn = document.getElementById('closeMenu');

    openMenuBtn?.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenuBackdrop.classList.remove('hidden');
    });

    closeMenuBtn?.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        mobileMenuBackdrop.classList.add('hidden');
    });

    mobileMenuBackdrop?.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        mobileMenuBackdrop.classList.add('hidden');
    });

}

if (document.getElementById('navbar')) {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            navbar.classList.add('bg-white/30', 'backdrop-blur-md', 'border', 'border-white/20', 'rounded-b-xl', 'shadow-lg');
        } else {
            navbar.classList.remove('bg-white/30', 'backdrop-blur-md', 'border', 'border-white/20', 'rounded-b-xl', 'shadow-lg');
        }
    });
}