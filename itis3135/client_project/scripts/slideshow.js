$(document).ready(function () {
    // Array of images and captions
    const imageList = [
        { src: "images/president.jpeg", caption: "President" },
        { src: "images/VP.jpeg", caption: "Vice President" },
        { src: "images/treasurer.jpeg", caption: "Treasurer" },
        { src: "images\Event_coordinator.png", caption: "Events Chair" },
        {
            src: "images/secretary.png", caption: "Events Chair" }
    ];
  
    // Dynamically load images into the slideshow
    imageList.forEach((image) => {
        $(".slideshow-container .slides").append(`
            <div class="slide">
                <img src="${image.src}" alt="${image.caption}">
                <div class="caption">${image.caption}</div>
            </div>
        `);
    });
  
    let currentSlide = 0;
    const slides = $(".slide");
    const totalSlides = slides.length;
  
    // Function to show a specific slide
    function showSlide(index) {
        slides.hide();
        $(slides[index]).fadeIn(300);
    }
  
    // Next/Previous navigation
    $(".next").click(function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });
  
    $(".prev").click(function () {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });
  
    // Dots navigation
    $(".dot").click(function () {
        const index = $(this).index();
        currentSlide = index;
        showSlide(currentSlide);
    });
  
    // Initialize slideshow
    showSlide(currentSlide);
  });
  