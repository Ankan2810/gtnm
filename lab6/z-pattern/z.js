document.addEventListener('DOMContentLoaded', function() {
    // Add animation class to elements when they come into view
    function animateElements() {
        const elements = document.querySelectorAll('.animated');
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top <= windowHeight * 0.75) {
                element.classList.add('show');
            }
        });
    }

    // Initially animate elements on page load
    animateElements();

    // Animate elements when they come into view during scrolling
    window.addEventListener('scroll', animateElements);

    // Animate title
    const mainTitle = document.getElementById('main-title');
    mainTitle.classList.add('show');

    // Change title dynamically
    setInterval(function() {
        const titles = ['Your Website Title', 'Welcome to Our Dynamic Website', 'Explore Our Services', 'Contact Us Today'];
        const randomTitle = titles[Math.floor(Math.random() * titles.length)];
        mainTitle.innerHTML = randomTitle;
    }, 5000); // Change title every 5 seconds
});
