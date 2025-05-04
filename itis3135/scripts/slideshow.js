$(document).ready(function () {
    // Array of images and captions
    const imageList = [
        { src: "images/Moon.jpeg", caption: "M - Moon sight" },
        { src: "images/UNCC.jpeg", caption: "U - UNC Charlotte" },
        { src: "images/Jazan.jpeg", caption: "J - Jazan - My Home Town" },
        { src: "images/Telephone.jpeg", caption: "T - Telephone" },
        { src: "images/Avocado.jpeg", caption: "A - Avocado" },
        { src: "images/baking.jpeg", caption: "B - Baking" },
        { src: "images/AlBaik.jpeg", caption: "A - AL Baik" },
        { src: "images/Apple.jpeg", caption: "A - Apple" },
        { src: "images/LosA.jpeg", caption: "L - Los Angeles" },
        { src: "images/IceCream.jpeg", caption: "I - Ice Cream" },
        { src: "images/Karak Tea.jpeg", caption: "K - Karak Tea" },
        { src: "images/Hyundai.jpeg", caption: "H - Hyundai" },
        { src: "images/Horse.jpeg", caption: "A - Abha KSA Hill Station" },
        { src: "images/Noodles.jpeg", caption: "N - Noodles" }

       
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
  
    // Initialize slideshow
    showSlide(currentSlide);
  });