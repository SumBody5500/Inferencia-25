document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const mainContent = document.querySelector('main');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mainContent.classList.toggle('shift');
    });

    // Close menu when mouse leaves the menu area
    navMenu.addEventListener('mouseleave', function() {
        navMenu.classList.remove('active');
        mainContent.classList.remove('shift');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const bgVideo = document.getElementById('bg-video');
    const imageContainer = document.querySelector('.image-container');
    
    
    

    bgVideo.addEventListener('mouseleave', () => {
        if (window.scrollY < scrollThreshold) {
            imageContainer.style.opacity = "0"; // Hide image
        }
    });

    // Disable hover behavior if user scrolls past the threshold
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > scrollThreshold) {
            imageContainer.style.opacity = "0"; // Ensure image is hidden
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollUi = document.querySelector('.scroll-ui');

    // Initially hide the scroll UI
    scrollUi.style.display = 'none';

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const threshold = 600; // Adjust as needed

        // Show the scroll UI when the threshold is crossed
        if (scrollY > threshold) {
            scrollUi.style.display = 'block';
        } else {
            scrollUi.style.display = 'none';
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".scroll-header");
    const posters = document.querySelectorAll(".poster-wrapper");
    const bgVideo = document.getElementById("bg-video");

    const videos = {
        "poster1": "resources/Inferencia .mp4",
        
    };

    function checkScroll() {
        let scrollPosition = window.scrollY + window.innerHeight * 0.6;

        headers.forEach(header => {
            if (header.offsetTop < scrollPosition) {
                header.classList.add("visible");
            }
        });

        posters.forEach(poster => {
            if (poster.offsetTop < scrollPosition) {
                let videoSrc = videos[poster.id];
                if (videoSrc && bgVideo.getAttribute("src") !== videoSrc) {
                    bgVideo.src = videoSrc;
                    bgVideo.load(); // Reload the video
                    bgVideo.play();
                }
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run on page load in case user refreshes mid-scroll
});

