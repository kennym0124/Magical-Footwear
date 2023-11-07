document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelector('.image-carousel');
    var images = carousel.querySelectorAll('img');
    var leftArrow = document.querySelector('.left-arrow');
    var rightArrow = document.querySelector('.right-arrow');
    var imageWidth = carousel.offsetWidth;
    var currentIndex = 0; // Keep track of the current index
    var totalImages = images.length;

    leftArrow.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        carousel.scrollLeft = currentIndex * imageWidth;
    });

    rightArrow.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalImages;
        carousel.scrollLeft = currentIndex * imageWidth;
    });

    function advanceCarousel() {
        currentIndex = (currentIndex + 1) % totalImages;

        if (currentIndex === 0) {
            // Instantly reset to the start without animating the scroll
            carousel.classList.add('no-transition');
            carousel.scrollLeft = 0;

            // Force a reflow, then restart the transition
            carousel.offsetHeight; // no-op read to trigger reflow
            carousel.classList.remove('no-transition');
        } else {
            carousel.scrollLeft = currentIndex * imageWidth;
        }
    }

    setInterval(advanceCarousel, 10000);
});
