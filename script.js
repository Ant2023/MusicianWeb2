const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
let autoSlideInterval;

function updateCarousel() {
    const slideWidth = slides[currentIndex].clientWidth;
    carouselContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}


function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }, 10000); // 4 seconds interval
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
    resetAutoSlide();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
    resetAutoSlide();
});

window.addEventListener('resize', updateCarousel);
// Start the automatic slide on page load
startAutoSlide();
updateCarousel();

// Swipe functionality
let touchStartX = 0;
let touchEndX = 0;

carouselContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

carouselContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
});

function handleSwipeGesture() {
    if (touchEndX < touchStartX - 50) {
        // Swipe left
        nextButton.click();
    } else if (touchEndX > touchStartX + 50) {
        // Swipe right
        prevButton.click();
    }
}

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.mainMenu');
    const closeMenu = document.querySelector('.closeMenu');

    hamburger.addEventListener('click', () => {
        navLinks.classList.add('expanded');
    });

    closeMenu.addEventListener('click', () => {
        navLinks.classList.remove('expanded');
    });
});



document.querySelector('.logo img').addEventListener('click', function() {
    this.classList.toggle('rotated');
    setTimeout(function() {
        const logo = document.querySelector('.logo img');
        logo.style.transform = 'rotate(360deg)';
    }, 3000); // Delays the animation by 3 seconds
});

document.getElementById('music').querySelector('h2').addEventListener('click', function() {
    this.textContent = 'You clicked the Music header!';
});

document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            alert('You clicked on ' + item.querySelector('img').alt);
        });
    });
});

//artists profile

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slides img');
    let currentSlide = 0;

    function showNextSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});

