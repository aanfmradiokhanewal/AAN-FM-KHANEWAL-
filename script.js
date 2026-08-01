document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       LIVE DIGITAL CLOCK + DATES
    ========================= */

    function updateTime() {

        const now = new Date();

        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        let displayHour = hours % 12;
        displayHour = displayHour === 0 ? 12 : displayHour;

        const ampm = hours >= 12 ? "PM" : "AM";

        const timeString =
            String(displayHour).padStart(2, "0") + ":" +
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0") +
            " " + ampm;

        const digitalClock = document.getElementById("digitalClock");

        if (digitalClock) {
            digitalClock.textContent = timeString;
        }


        /* =========================
           ANALOG CLOCK
        ========================= */

        const hourHand = document.getElementById("hourHand");
        const minuteHand = document.getElementById("minuteHand");
        const secondHand = document.getElementById("secondHand");

        const secondDegree = seconds * 6;
        const minuteDegree = minutes * 6 + seconds * 0.1;
        const hourDegree = (hours % 12) * 30 + minutes * 0.5;

        if (secondHand) {
            secondHand.style.transform =
                `rotate(${secondDegree}deg)`;
        }

        if (minuteHand) {
            minuteHand.style.transform =
                `rotate(${minuteDegree}deg)`;
        }

        if (hourHand) {
            hourHand.style.transform =
                `rotate(${hourDegree}deg)`;
        }


        /* =========================
           ENGLISH DATE
        ========================= */

        const englishDate =
            now.toLocaleDateString("en-PK", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            });

        const englishElement =
            document.getElementById("englishDate");

        if (englishElement) {
            englishElement.textContent =
                "📅 " + englishDate;
        }


        /* =========================
           ISLAMIC / HIJRI DATE
        ========================= */

        const islamicDate =
            new Intl.DateTimeFormat(
                "en-TN-u-ca-islamic",
                {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                }
            ).format(now);

        const islamicElement =
            document.getElementById("islamicDate");

        if (islamicElement) {
            islamicElement.textContent =
                "🌙 " + islamicDate + " AH";
        }


        /* =========================
           DESI / PUNJABI MONTH
        ========================= */

        const desiMonths = [
            "Chet",
            "Vaisakh",
            "Jeth",
            "Harh",
            "Sawan",
            "Bhadon",
            "Assu",
            "Katak",
            "Maghar",
            "Poh",
            "Magh",
            "Phagun"
        ];

        /*
          Approximate traditional month display.
          Exact Desi calendar date can vary according
          to regional calendar calculations.
        */

        const monthIndex =
            Math.floor(
                ((now.getMonth() + 1) * 12) / 12
            ) % 12;

        const desiElement =
            document.getElementById("desiDate");

        if (desiElement) {

            desiElement.textContent =
                "🌾 Desi Month: " +
                desiMonths[monthIndex];
        }

    }


    updateTime();

    setInterval(updateTime, 1000);


    /* =========================
       SLIDER
    ========================= */

    const slides =
        document.querySelectorAll(".slide");

    const dots =
        document.querySelectorAll(".dot");

    let currentSlide = 0;


    function showSlide(index) {

        if (!slides.length) {
            return;
        }

        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        dots.forEach(function (dot) {
            dot.classList.remove("active-dot");
        });


        slides[index].classList.add("active");

        if (dots[index]) {
            dots[index].classList.add("active-dot");
        }
    }


    showSlide(currentSlide);


    if (slides.length > 1) {

        setInterval(function () {

            currentSlide++;

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }

            showSlide(currentSlide);

        }, 5000);

    }


    /* =========================
       SLIDER DOT CLICK
    ========================= */

    dots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {

            currentSlide = index;

            showSlide(currentSlide);

        });

    });


    /* =========================
       BACK TO TOP
    ========================= */

    const topButton =
        document.getElementById("topBtn");


    if (topButton) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {

                topButton.style.display =
                    "block";

            } else {

                topButton.style.display =
                    "none";
            }

        });


        topButton.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =========================
       LOADER
    ========================= */

    const loader =
        document.getElementById("loader");


    if (loader) {

        setTimeout(function () {

            loader.style.opacity = "0";

            loader.style.transition =
                "opacity 0.5s ease";

            setTimeout(function () {

                loader.style.display =
                    "none";

            }, 500);

        }, 1500);

    }

});
