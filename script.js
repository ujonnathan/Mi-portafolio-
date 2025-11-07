ocument.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Voice Over Demo Player
    const mainAudioPlayer = document.querySelector('.main-audio-player');
    const demoItems = document.querySelectorAll('.demo-item');

    demoItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            demoItems.forEach(i => i.classList.remove('active'));
            // Add active class to the clicked item
            item.classList.add('active');

            // Change audio source and play
            const audioSrc = item.getAttribute('data-src');
            mainAudioPlayer.src = audioSrc;
            mainAudioPlayer.play();
        });
    });

    // Initialize the first demo as active
    if (demoItems.length > 0) {
        demoItems[0].click(); // Simulate click on the first item
    }

    // Content Creation Tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked button
            button.classList.add('active');

            // Show the corresponding content
            const targetTabId = button.getAttribute('data-tab');
            document.getElementById(targetTabId).classList.add('active');
        });
    });

    // Initialize the first tab as active
    if (tabButtons.length > 0) {
        tabButtons[0].click(); // Simulate click on the first tab
    }

    // "Read More" functionality for Text Cards
    document.querySelectorAll('.text-card .read-more').forEach(button => {
        button.addEventListener('click', function() {
            const paragraph = this.previousElementSibling; // The <p> tag before the button
            if (paragraph.classList.contains('expanded')) {
                paragraph.classList.remove('expanded');
                this.textContent = 'Leer más';
            } else {
                paragraph.classList.add('expanded');
                this.textContent = 'Leer menos';
            }
        });
    });

    // Testimonial Carousel (simplified - manual buttons)
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const prevTestimonialBtn = document.querySelector('.prev-testimonial');
    const nextTestimonialBtn = document.querySelector('.next-testimonial');
    let currentIndex = 0;

    function updateCarousel() {
        // Simple slide effect by changing transform
        testimonialCarousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevTestimonialBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonialItems.length - 1;
        updateCarousel();
    });

    nextTestimonialBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < testimonialItems.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Optional: Auto-slide for testimonials (uncomment to enable)
    // setInterval(() => {
    //     nextTestimonialBtn.click();
    // }, 7000); // Change testimonial every 7 seconds


    // Contact Form Submission (example - usually handled by backend)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
            this.reset(); // Clear the form
            // In a real application, you would send this data to a server
        });
    }
});
