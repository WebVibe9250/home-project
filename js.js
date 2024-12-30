let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Function to change the slide based on index
function changeSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1; // Go to the last slide if going back from the first
    } else if (index >= slides.length) {
        currentIndex = 0; // Go to the first slide if going forward from the last
    } else {
        currentIndex = index;
    }

    // Update carousel position (move horizontally)
    document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update indicators
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[currentIndex].classList.add('active');
}

// Event listener for the "Previous" button
prevButton.addEventListener('click', () => {
    changeSlide(currentIndex - 1); // Decrease the index
});

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
    changeSlide(currentIndex + 1); // Increase the index
});

// Event listener for indicator clicks
indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        const index = parseInt(indicator.getAttribute('data-index'));
        changeSlide(index); // Change to the clicked indicator's corresponding slide
    });
});

// Initialize first indicator as active
changeSlide(currentIndex);


       // Grab elements
       const menuToggle = document.getElementById('menuToggle');
       const mobileMenu = document.getElementById('mobileMenu');

       // Toggle the mobile menu visibility
       menuToggle.addEventListener('click', () => {
           mobileMenu.classList.toggle('active');
       });