// HEADER JS 
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $(".custom-header").addClass("addBg");
    } else {
        $(".custom-header").removeClass("addBg");
    }
});
$(document).ready(function () {
    $("#close-menu").click(function () {
        $(".modal-headers").removeClass("show-menu").addClass("show-down");
        $("#menu-items").toggleClass("active");
    });

    $("#menu-open").click(function () {
        let $modal = $(".modal-headers");
        $('.logo-main').toggleClass("white");
        $('.grid-header').toggleClass("white");
        if ($modal.hasClass("show-menu")) {
            $modal.removeClass("show-menu").addClass("show-down");
        } else {
            $modal.removeClass("show-down").addClass("show-menu");
        }
    });
});
document.querySelector('#menu-open .bars').addEventListener('click', function () {
    document.getElementById('menu-items').classList.toggle('active');
});

// HEADER JS END

// VIDEO HOME 
document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo');
    video.muted = true;
    setTimeout(function () {
        video.play().catch(function (error) { });
    }, 500);
});

// VIDEO HOME END

// ANIMATED TEXT ANIMATION JS 
document.addEventListener("DOMContentLoaded", () => {
    // First animate bigTextAnimate
    const bigTextTargets = document.querySelectorAll(".bigTextAnimate");
    const animateTextTargets = document.querySelectorAll(".animate-text");

    const animateElements = (targets, delayFactor) => {
        targets.forEach(el => {
            const text = el.textContent.trim();
            el.textContent = "";
            const words = text.split(/\s+/);
            words.forEach((word, wordIndex) => {
                const wordSpan = document.createElement("span");
                wordSpan.classList.add("word");
                wordSpan.style.whiteSpace = "nowrap";
                Array.from(word).forEach((char, charIndex) => {
                    const charSpan = document.createElement("span");
                    charSpan.textContent = char;
                    charSpan.style.transitionDelay = `${(wordIndex * 5 + charIndex) * delayFactor}s`;
                    wordSpan.appendChild(charSpan);
                });
                el.appendChild(wordSpan);
                el.appendChild(document.createTextNode(" "));
            });
        });
    };
    // Animate both groups with different delay factors
    animateElements(bigTextTargets, 0.09); // Faster to show first
    animateElements(animateTextTargets, 0.05); // Slower and appears after
    // Use IntersectionObserver
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 1
    });
    // Observe in order: bigTextAnimate first, then animate-text
    [...bigTextTargets, ...animateTextTargets].forEach(el => observer.observe(el));
});

// ANIMATED TEXT ANIMATION JS END

// ANIMATED BTN 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const btn = entry.target;
            const path = btn.querySelector('.square-path');
            const span = btn.querySelector('.square-border-btn span');
            // Step 1: Add .show and .animate immediately
            btn.classList.add('show');
            path.classList.add('animate');
            // Step 2: Add a class to the span after 1 second
            setTimeout(() => {
                if (span) {
                    span.classList.add('active'); // change 'active' to whatever class you need
                }
            }, 2800);

            observer.unobserve(btn);
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the button is visible
});


document.querySelectorAll('.square-border-btn').forEach(btn => {
    observer.observe(btn);
});
// ANIMATED BTN END

var swiper = new Swiper(".myBeforeAfterSlider", {
    speed: 1000,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper2 = new Swiper(".partners-slide", {
    loop: true,
    speed: 1500,
    slidesPerView: 6,
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 2000
    },
    breakpoints: {
        // when window width is >= 640px
        100: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 20,
        }
    }
});

// Hide the button initially



// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function () {
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});
document.addEventListener("DOMContentLoaded", function () {
    // Common AOS configuration
    const initAOS = () => {
        AOS.init({
            duration: 1000,
            once: true,
            disable: () => window.innerWidth < 992
        });
    };

    // Apply AOS attributes to each selector group
    const applyAOS = (selector) => {
        const items = document.querySelectorAll(selector);
        items.forEach((el, index) => {
            el.setAttribute("data-aos", "fade-up");
            el.setAttribute("data-aos-delay", `${index * 150}`);
            el.setAttribute("data-aos-duration", "800");
        });
    };

    // Apply AOS to multiple class groups
    const classGroups = ['.news-media', '.top-scroll', '.dreams', '.gallery-img'];
    classGroups.forEach(applyAOS);

    // Initialize AOS
    initAOS();

    // Optional: Custom IntersectionObserver logic
    const allItems = document.querySelectorAll(classGroups.join(', '));
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const rect = entry.boundingClientRect;
                const screenCenter = window.innerHeight / 2;
                const elementCenter = rect.top + rect.height / 2;
                if (Math.abs(elementCenter - screenCenter) <= 100) {
                    entry.target.classList.add('aos-animate');
                }
            }
        });
    }, {
        threshold: 0.5
    });

    allItems.forEach(el => observer.observe(el));
});


window.addEventListener('scroll', function () {
    const gototop = document.querySelector('.gototop');

    if (window.scrollY > 100) { // adjust the value as needed
        gototop.classList.add('active'); // replace 'active' with your desired class
    } else {
        gototop.classList.remove('active');
    }
});


// ON SCROLL END
// Click function
$(".swiper-button-next").mouseover(function () {
    $(".ba-grid .ba-wrapper:nth-child(2)").addClass("hovered-next");
});

$(".swiper-button-next").mouseout(function () {
    $(".ba-grid .ba-wrapper:nth-child(2)").removeClass("hovered-next");
});
$(".swiper-button-prev").mouseover(function () {
    $(".ba-grid .ba-wrapper:nth-child(1)").addClass("hovered-next");
});

$(".swiper-button-prev").mouseout(function () {
    $(".ba-grid .ba-wrapper:nth-child(1)").removeClass("hovered-next");
});

AOS.init({
    duration: 1500,
    easing: 'ease',
    once: true,
    disable: window.innerWidth < 1200
});