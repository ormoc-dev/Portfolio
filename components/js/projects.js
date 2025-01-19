let slideIndices = {
    featured: 1,
    wlc: 1
};

export function initializeProjects() {
    console.log('Projects section initialized');
    // Initialize both slideshows
    showSlides('featured', 1);
    showSlides('wlc', 1);
    
    // Auto advance slides every 5 seconds for both slideshows
    
    setInterval(() => {
        changeSlide('featured', 1);
        changeSlide('wlc', 1);
    }, 5000);
}

export function changeSlide(slideshowId, n) {
    showSlides(slideshowId, slideIndices[slideshowId] += n);
}

export function currentSlide(slideshowId, n) {
    showSlides(slideshowId, slideIndices[slideshowId] = n);
}

function showSlides(slideshowId, n) {
    const container = document.querySelector(`.project-card${slideshowId === 'featured' ? '.featured' : ':not(.featured)'}`);
    if (!container) return;

    const slides = container.getElementsByClassName("slide");
    const dots = container.getElementsByClassName("dot");
    
    if (!slides.length || !dots.length) return;

    // Loop back to first slide
    if (n > slides.length) {
        slideIndices[slideshowId] = 1;
    }
    // Loop forward to last slide
    if (n < 1) {
        slideIndices[slideshowId] = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show current slide and activate corresponding dot
    slides[slideIndices[slideshowId] - 1].style.display = "block";
    dots[slideIndices[slideshowId] - 1].className += " active";
}