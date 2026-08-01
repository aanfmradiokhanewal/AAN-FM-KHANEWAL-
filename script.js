document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       LIVE CLOCK + DATE
    ========================= */

    const clock = document.getElementById("liveClock");

    function updateClock() {
        if (!clock) return;

        const now = new Date();

        const time = now.toLocaleTimeString("en-PK", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        });

        const date = now.toLocaleDateString("en-PK", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric"
        });

        clock.innerHTML = `
            <div>${time}</div>
            <div>${date}</div>
        `;
    }

    updateClock();
    setInterval(updateClock, 1000);


    /* =========================
       HERO SLIDER
    ========================= */

    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        if (!slides.length) return;

        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");
    }

    if (slides.length > 1) {
        showSlide(currentSlide);

        setInterval(function () {
            currentSlide++;

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }

            showSlide(currentSlide);
        }, 5000);
    }


    /* =========================
       RADIO PLAYER
    ========================= */

    const radioPlayer = document.getElementById("radioPlayer");

    window.playRadio = function () {

        if (!radioPlayer) return;

        radioPlayer.play()
            .then(function () {
                console.log("AAN FM Radio started.");
            })
            .catch(function (error) {
                console.log("Browser blocked autoplay/play:", error);
            });
    };


    /* =========================
       BACK TO TOP BUTTON
    ========================= */

    const topBtn = document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }

        });

        topBtn.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }


    /* =========================
       SMOOTH NAVIGATION
    ========================= */

    document.querySelectorAll('nav a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });

});
