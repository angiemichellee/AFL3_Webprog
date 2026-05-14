document.addEventListener('DOMContentLoaded', () => {
    
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
            header.style.backgroundColor = 'rgba(253, 245, 240, 0.98)';
        } else {
            header.style.boxShadow = 'none';
            header.style.backgroundColor = 'rgba(253, 245, 240, 0.9)';
        }
    });

    const revealElements = document.querySelectorAll('main, .gallery-card, .hobby-circle, h2');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.transition = 'all 0.8s ease-out';
            }
        });
    };

    console.log("Portfolio Angie Michelle: Animations & Interactions Loaded");
});
