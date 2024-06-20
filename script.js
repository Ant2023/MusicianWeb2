document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.carousel-slide');
    let index = 0;
    const intervalTime = 3000; // time in milliseconds

    function showSlide(i) {
        index = i;
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        document.querySelector('.carousel-container').style.transform = `translateX(-${index * 100}%)`;
    }

    function startSlide() {
        setInterval(() => {
            showSlide(index + 1);
        }, intervalTime);
    }

    startSlide(); // Start the automatic sliding
});

document.querySelectorAll('.action-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert("Button clicked!");
        // Add your action here, e.g., open a modal, change the view, etc.
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const closeMenu = document.getElementById('closeMenu');

    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
    });

    closeMenu.addEventListener('click', () => {
        navLinks.style.display = 'none';
    });
});

document.querySelector('.logo img').addEventListener('click', function() {
    this.classList.toggle('rotated');
    setTimeout(function() {
        const logo = document.querySelector('.logo img');
        logo.style.transform = 'rotate(360deg)';
    }, 3000); // Delays the animation by 3 seconds
});
