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
                " " + englishDate;
        }


        /* =========================
           ISLAMIC / HIJRI DATE
        ========================= */

const islamicDate =
    new Intl.DateTimeFormat(
        "ur-PK-u-ca-islamic",
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
        "🌙 " + islamicDate;
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
/* =========================
   AAN FM FPC CALENDAR
   AUGUST + SEPTEMBER 2026
========================= */

const fpcSchedule = {

    0: [
        ["06:00 AM – 09:00 AM", "RJ Parviaz Ahmad", "Good Morning Pakistan"],
        ["09:00 AM – 10:00 AM", "B-2-B", ""],
        ["10:00 AM – 12:00 PM", "RJ Ghulam Nabi", ""],
        ["12:00 PM – 02:00 PM", "B-2-B", ""],
        ["02:00 PM – 04:00 PM", "RJ Maher Akmal Sial", ""],
        ["04:00 PM – 06:00 PM", "RJ Hussain Raaz", ""],
        ["06:00 PM – 08:00 PM", "RJ Maher Hafeez", "Mehfil Sajna Di"],
        ["08:00 PM – 10:00 PM", "RJ Munawar Shehzad", ""],
        ["10:00 PM – 12:00 AM", "RJ Tahir Warsi", "Shabe-Ghazal"]
    ],

    1: [
        ["06:00 AM – 09:00 AM", "Shafqat Bukhari", "Good Morning Pakistan"],
        ["09:00 AM – 10:00 AM", "B-2-B", ""],
        ["10:00 AM – 12:00 PM", "B-2-B", ""],
        ["12:00 PM – 02:00 PM", "RJ Munawar Shehzad", ""],
        ["02:00 PM – 04:00 PM", "B-2-B", ""],
        ["04:00 PM – 06:00 PM", "RJ Khasta Gull", ""],
        ["06:00 PM – 08:00 PM", "B-2-B", ""],
        ["08:00 PM – 10:00 PM", "RJ Shafqat Bukhari", ""],
        ["10:00 PM – 12:00 AM", "RJ Saif ur Rehman Hashmi", ""]
    ],

    2: [
        ["06:00 AM – 09:00 AM", "Shafqat Bukhari", "Good Morning Pakistan"],
        ["09:00 AM – 10:00 AM", "B-2-B", ""],
        ["10:00 AM – 12:00 PM", "B-2-B", ""],
        ["12:00 PM – 02:00 PM", "RJ Ghulam Nabi", ""],
        ["02:00 PM – 04:00 PM", "B-2-B", ""],
        ["04:00 PM – 06:00 PM", "B-2-B", ""],
        ["06:00 PM – 08:00 PM", "RJ Maher Hafeez", "Mehfil Sajna Di"],
        ["08:00 PM – 10:00 PM", "RJ Latif Khan Qalandrani", ""],
        ["10:00 PM – 12:00 AM", "Shafqat Bukhari", "Raat Baat Karti Hai"]
    ],

    3: [
        ["06:00 AM – 09:00 AM", "Shafqat Bukhari", "Good Morning Pakistan"],
        ["09:00 AM – 10:00 AM", "B-2-B", ""],
        ["10:00 AM – 12:00 PM", "RJ Maher Akmal Sial", ""],
        ["12:00 PM – 02:00 PM", "RJ Munawar Shehzad", ""],
        ["02:00 PM – 04:00 PM", "B-2-B", ""],
        ["04:00 PM – 06:00 PM", "RJ Abdul Razaq Zahid", ""],
        ["06:00 PM – 08:00 PM", "RJ Ghulam Nabi", ""],
        ["08:00 PM – 10:00 PM", "RJ Bilal Shaheen", ""],
        ["10:00 PM – 12:00 AM", "Shafqat Bukhari", "Raat Baat Karti Hai"]
    ],

    4: [
        ["06:00 AM – 09:00 AM", "RJ Parviaz Ahmad", "Good Morning Pakistan"],
        ["09:00 AM – 10:00 AM", "B-2-B", ""],
        ["10:00 AM – 12:00 PM", "B-2-B", ""],
        ["12:00 PM – 02:00 PM", "B-2-B", ""],
        ["02:00 PM – 04:00 PM", "B-2-B", ""],
        ["04:00 PM – 06:00 PM", "RJ Abdul Razaq Zahid", ""],
        ["06:00 PM – 08:00 PM", "RJ Hussain Raaz", ""],
        ["08:00 PM – 10:00 PM", "RJ Latif Khan Qalandrani", ""],
        ["10:00 PM – 12:00 AM", "RJ Khalid Mirza", "Chalo Humjan Hojain"]
    ],

    5: [
        ["06:00 AM – 09:00 AM", "RJ Parviaz Ahmad", "Good Morning Pakistan"],
        ["09:00 AM – 10:00 AM", "B-2-B", ""],
        ["10:00 AM – 12:00 PM", "RJ Ghulam Nabi", ""],
        ["12:00 PM – 02:00 PM", "B-2-B", ""],
        ["02:00 PM – 04:00 PM", "RJ Muskan Khan", ""],
        ["04:00 PM – 06:00 PM", "RJ Tabbasum", ""],
        ["06:00 PM – 08:00 PM", "RJ Maher Akmal Sial", ""],
        ["08:00 PM – 10:00 PM", "RJ Munawar Shehzad", ""],
        ["10:00 PM – 12:00 AM", "RJ Parviaz Ahmad", "Haar Hamelan"]
    ],

    6: [
        ["06:00 AM – 09:00 AM", "RJ Parviaz Ahmad", "Good Morning Pakistan"],
        ["09:00 AM – 10:00 AM", "B-2-B", ""],
        ["10:00 AM – 12:00 PM", "RJ Ghulam Nabi", ""],
        ["12:00 PM – 02:00 PM", "B-2-B", ""],
        ["02:00 PM – 04:00 PM", "RJ Maher Akmal Sial", ""],
        ["04:00 PM – 06:00 PM", "RJ Hussain Raaz", ""],
        ["06:00 PM – 08:00 PM", "RJ Maher Hafeez", "Mehfil Sajna Di"],
        ["08:00 PM – 10:00 PM", "RJ Munawar Shehzad", ""],
        ["10:00 PM – 12:00 AM", "RJ Tahir Warsi", "Shabe-Ghazal"]
    ]
};


/* Calendar starts August 2026 */

let calendarDate = new Date(2026, 7, 1);

let selectedDate = new Date(2026, 7, 1);


const calendarDays =
    document.getElementById("calendarDays");

const calendarMonth =
    document.getElementById("calendarMonth");

const calendarToday =
    document.getElementById("calendarToday");

const calendarEnglish =
    document.getElementById("calendarEnglish");

const calendarHijri =
    document.getElementById("calendarHijri");

const calendarDesi =
    document.getElementById("calendarDesi");

const dailyProgramList =
    document.getElementById("dailyProgramList");

const selectedDayTitle =
    document.getElementById("selectedDayTitle");

const prevMonth =
    document.getElementById("prevMonth");

const nextMonth =
    document.getElementById("nextMonth");


function renderFPCalendar() {

    if (!calendarDays) return;

    const year =
        calendarDate.getFullYear();

    const month =
        calendarDate.getMonth();


    calendarMonth.textContent =
        calendarDate.toLocaleDateString(
            "en-PK",
            {
                month: "long",
                year: "numeric"
            }
        );


    calendarDays.innerHTML = "";


    const firstDay =
        new Date(year, month, 1).getDay();


    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        const empty =
            document.createElement("div");

        empty.className =
            "calendar-day empty";

        calendarDays.appendChild(empty);
    }


    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const dayElement =
            document.createElement("div");

        dayElement.className =
            "calendar-day";

        dayElement.textContent =
            day;


        const thisDate =
            new Date(year, month, day);


        const today =
            new Date();


        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {

            dayElement.classList.add("today");
        }


        if (
            day === selectedDate.getDate() &&
            month === selectedDate.getMonth() &&
            year === selectedDate.getFullYear()
        ) {

            dayElement.classList.add("selected");
        }


        dayElement.addEventListener(
            "click",
            function () {

                selectedDate =
                    thisDate;

                renderFPCalendar();

                showDailyPrograms(
                    selectedDate
                );

            }
        );


        calendarDays.appendChild(
            dayElement
        );
    }


    updateCalendarDates(
        selectedDate
    );
}


function updateCalendarDates(date) {

    const english =
        date.toLocaleDateString(
            "en-PK",
            {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );


    const hijri =
        new Intl.DateTimeFormat(
            "en-TN-u-ca-islamic",
            {
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        ).format(date);


    if (calendarEnglish) {

        calendarEnglish.textContent =
            "📅 " + english;
    }


    if (calendarHijri) {

        calendarHijri.textContent =
            "🌙 " + hijri + " AH";
    }


    if (calendarDesi) {

        calendarDesi.textContent =
            "🌾 Desi Calendar";
    }


    if (calendarToday) {

        calendarToday.textContent =
            "📻 FPC Program Schedule";
    }
}


function showDailyPrograms(date) {

    if (!dailyProgramList) return;


    const day =
        date.getDay();


    const dayName =
        date.toLocaleDateString(
            "en-PK",
            {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );


    selectedDayTitle.textContent =
        "📻 " + dayName +
        " — Today's Programs";


    dailyProgramList.innerHTML = "";


    const programs =
        fpcSchedule[day] || [];


    programs.forEach(function(program) {

        const row =
            document.createElement("div");

        row.className =
            "program-row";


        const time =
            document.createElement("div");

        time.className =
            "program-time";

        time.textContent =
            program[0];


        const name =
            document.createElement("div");

        name.className =
            "program-name";

        name.textContent =
            program[1];


        const note =
            document.createElement("div");

        note.className =
            "program-note";

        note.textContent =
            program[2];


        row.appendChild(time);

        row.appendChild(name);

        if (program[2]) {
            row.appendChild(note);
        }


        dailyProgramList.appendChild(
            row
        );

    });

}


/* Previous Month */

if (prevMonth) {

    prevMonth.addEventListener(
        "click",
        function() {

            calendarDate.setMonth(
                calendarDate.getMonth() - 1
            );


            /*
              Only August and September
              2026 are available.
            */

            const minDate =
                new Date(2026, 7, 1);

            const maxDate =
                new Date(2026, 8, 1);


            if (calendarDate < minDate) {
                calendarDate = minDate;
            }


            if (calendarDate > maxDate) {
                calendarDate = maxDate;
            }


            selectedDate =
                new Date(
                    calendarDate.getFullYear(),
                    calendarDate.getMonth(),
                    1
                );


            renderFPCalendar();

            showDailyPrograms(
                selectedDate
            );

        }
    );
}


/* Next Month */

if (nextMonth) {

    nextMonth.addEventListener(
        "click",
        function() {

            calendarDate.setMonth(
                calendarDate.getMonth() + 1
            );


            const minDate =
                new Date(2026, 7, 1);

            const maxDate =
                new Date(2026, 8, 1);


            if (calendarDate < minDate) {
                calendarDate = minDate;
            }


            if (calendarDate > maxDate) {
                calendarDate = maxDate;
            }


            selectedDate =
                new Date(
                    calendarDate.getFullYear(),
                    calendarDate.getMonth(),
                    1
                );


            renderFPCalendar();

            showDailyPrograms(
                selectedDate
            );

        }
    );
}


/* Start */

renderFPCalendar();

showDailyPrograms(selectedDate);
/* =====================================================
   🇵🇰 14 AUGUST INDEPENDENCE DAY SPECIAL SLIDER
   Automatically active until 14 August 2026
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const today = new Date();

    const startDate = new Date(2026, 7, 1);   // 01 August 2026
    const endDate   = new Date(2026, 7, 14, 23, 59, 59); // 14 August 2026

    /* Only show Independence Day content during August 1–14 */
    if (today >= startDate && today <= endDate) {

        const hero = document.querySelector(".hero");

        if (!hero) return;

        /* Remove old slider content */
        const oldSlider = hero.querySelector(".slider");

        if (oldSlider) {
            oldSlider.innerHTML = "";
        }

        const slider = oldSlider || document.createElement("div");

        slider.className = "slider";

        const independenceSlides = [

            {
                icon: "🇵🇰",
                title: "14 August — Independence Day",
                text: "AAN FM 91.60 Khanewal — Har Dil Ki Awaaz",
                detail: "پاکستان کی آزادی کا دن — 14 اگست 1947"
            },

            {
                icon: "⭐",
                title: "Quaid-e-Azam Muhammad Ali Jinnah",
                text: "“With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.”",
                detail: "قائداعظم محمد علی جناح — اتحاد، ایمان اور نظم و ضبط"
            },

            {
                icon: "🇵🇰",
                title: "Pakistan Zindabad",
                text: "Our Pakistan • Our Pride • Our Identity",
                detail: "پاکستان ہماری پہچان، ہمارا فخر اور ہماری امید ہے۔"
            },

            {
                icon: "🌟",
                title: "Allama Iqbal",
                text: "“Khudi ko kar buland itna ke har taqdeer se pehle”",
                detail: "علامہ اقبال — خودی، محنت اور بلند حوصلے کا پیغام"
            },

            {
                icon: "🕊️",
                title: "A Message for Pakistan",
                text: "May our beloved Pakistan always shine with peace, unity and prosperity.",
                detail: "آئیں عہد کریں کہ ہم پاکستان کی ترقی، امن اور خوشحالی کے لیے اپنا کردار ادا کریں گے۔"
            },

            {
                icon: "💚",
                title: "14 August Special",
                text: "Freedom is a blessing. Pakistan is our responsibility.",
                detail: "آزادی ایک نعمت ہے اور پاکستان ہماری ذمہ داری ہے۔"
            },

            {
                icon: "🇵🇰",
                title: "AAN FM 91.60 Khanewal",
                text: "14 August Independence Day Special Transmission",
                detail: "Har Dil Ki Awaaz — جشنِ آزادی مبارک"
            }

        ];


        independenceSlides.forEach(function (item, index) {

            const slide = document.createElement("div");

            slide.className =
                index === 0 ? "slide active" : "slide";


            slide.innerHTML = `
                <div class="slide-icon">${item.icon}</div>

                <h2>${item.title}</h2>

                <p>${item.text}</p>

                <div class="independence-detail">
                    ${item.detail}
                </div>
            `;

            slider.appendChild(slide);

        });


        /* Slider dots */
        const dotsContainer = document.createElement("div");

        dotsContainer.className = "slider-dots";


        independenceSlides.forEach(function (_, index) {

            const dot = document.createElement("button");

            dot.className =
                index === 0
                    ? "dot active-dot"
                    : "dot";

            dot.setAttribute(
                "aria-label",
                "Slide " + (index + 1)
            );

            dot.addEventListener("click", function () {

                showIndependenceSlide(index);

            });

            dotsContainer.appendChild(dot);

        });


        slider.appendChild(dotsContainer);


        if (!oldSlider) {
            hero.appendChild(slider);
        }


        const slides =
            slider.querySelectorAll(".slide");

        const dots =
            slider.querySelectorAll(".dot");

        let current = 0;


        function showIndependenceSlide(index) {

            slides.forEach(function (slide) {

                slide.classList.remove("active");

            });


            dots.forEach(function (dot) {

                dot.classList.remove("active-dot");

            });


            if (slides[index]) {

                slides[index].classList.add("active");

            }


            if (dots[index]) {

                dots[index].classList.add("active-dot");

            }


            current = index;

        }


        /* Automatic change every 6 seconds */

        setInterval(function () {

            current++;

            if (current >= slides.length) {

                current = 0;

            }

            showIndependenceSlide(current);

        }, 6000);

    }

});
/* =====================================================
   🇵🇰 AAN FM 91.60 — 14 AUGUST SPECIAL SLIDER
   Independence Day Special Styling
===================================================== */

.hero {
    position: relative;
    overflow: hidden;
}

/* Main Slider */
.hero .slider {
    position: relative;
    width: 100%;
    min-height: 360px;
    overflow: hidden;
    border-radius: 20px;
    background:
        linear-gradient(
            135deg,
            rgba(0, 102, 51, 0.98),
            rgba(0, 70, 35, 0.96)
        );
    box-shadow:
        0 15px 40px rgba(0, 0, 0, 0.25);
}

/* Individual Slide */
.hero .slider .slide {
    position: absolute;
    inset: 0;
    width: 100%;
    min-height: 360px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    padding: 45px 25px 70px;
    box-sizing: border-box;

    opacity: 0;
    visibility: hidden;

    transform: scale(1.03);

    transition:
        opacity 0.8s ease,
        transform 0.8s ease,
        visibility 0.8s ease;

    color: #ffffff;
}

/* Active Slide */
.hero .slider .slide.active {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
}

/* Pakistan Flag Style Background */
.hero .slider .slide::before {
    content: "🇵🇰";

    position: absolute;

    font-size: 220px;

    opacity: 0.06;

    right: -20px;
    bottom: -45px;

    pointer-events: none;
}

/* Slide Icon */
.hero .slide-icon {
    position: relative;
    z-index: 2;

    font-size: 58px;

    margin-bottom: 12px;

    filter:
        drop-shadow(
            0 5px 10px
            rgba(0,0,0,0.25)
        );
}

/* Slide Heading */
.hero .slider .slide h2 {
    position: relative;
    z-index: 2;

    margin: 8px 0 15px;

    font-size: clamp(25px, 4vw, 42px);

    line-height: 1.2;

    font-weight: 800;

    color: #ffffff;

    text-shadow:
        0 3px 8px
        rgba(0,0,0,0.35);
}

/* Main Slide Text */
.hero .slider .slide p {
    position: relative;
    z-index: 2;

    max-width: 900px;

    margin: 0 auto 18px;

    font-size: clamp(17px, 2.3vw, 25px);

    line-height: 1.6;

    font-weight: 600;

    color: #ffffff;
}

/* Urdu / Detail Text */
.hero .independence-detail {
    position: relative;
    z-index: 2;

    max-width: 900px;

    margin-top: 5px;

    padding: 12px 22px;

    border-radius: 12px;

    background:
        rgba(255,255,255,0.12);

    border:
        1px solid
        rgba(255,255,255,0.25);

    backdrop-filter: blur(5px);

    font-size: clamp(16px, 2vw, 23px);

    line-height: 1.8;

    color: #ffffff;

    font-weight: 600;

    box-shadow:
        0 5px 20px
        rgba(0,0,0,0.12);
}

/* Golden Highlight */
.hero .slider .slide h2::after {
    content: "";

    display: block;

    width: 70px;
    height: 4px;

    margin: 13px auto 0;

    border-radius: 10px;

    background: #f5d76e;
}

/* =====================================================
   SLIDER DOTS
===================================================== */

.hero .slider-dots {
    position: absolute;

    z-index: 20;

    bottom: 18px;

    left: 50%;

    transform: translateX(-50%);

    display: flex;

    justify-content: center;

    align-items: center;

    gap: 8px;
}

/* Dot Button */
.hero .slider-dots .dot {
    width: 11px;
    height: 11px;

    padding: 0;

    border: none;

    border-radius: 50%;

    background:
        rgba(255,255,255,0.45);

    cursor: pointer;

    transition:
        all 0.3s ease;
}

/* Active Dot */
.hero .slider-dots .dot.active-dot {
    width: 28px;

    border-radius: 20px;

    background: #ffffff;

    box-shadow:
        0 0 10px
        rgba(255,255,255,0.8);
}

/* Hover Dot */
.hero .slider-dots .dot:hover {
    background: #f5d76e;

    transform: scale(1.15);
}

/* =====================================================
   INDEPENDENCE DAY SPECIAL GLOW
===================================================== */

.hero .slider::after {
    content: "";

    position: absolute;

    inset: 0;

    pointer-events: none;

    background:
        radial-gradient(
            circle at 20% 20%,
            rgba(255,255,255,0.13),
            transparent 30%
        ),
        radial-gradient(
            circle at 80% 80%,
            rgba(245,215,110,0.10),
            transparent 30%
        );

    z-index: 5;
}

/* Make sure slide content stays above overlay */
.hero .slider .slide {
    z-index: 6;
}

/* =====================================================
   DESKTOP
===================================================== */

@media (min-width: 992px) {

    .hero .slider {
        min-height: 400px;
    }

    .hero .slider .slide {
        min-height: 400px;

        padding-left: 60px;
        padding-right: 60px;
    }

    .hero .slide-icon {
        font-size: 68px;
    }
}

/* =====================================================
   TABLET
===================================================== */

@media (max-width: 991px) {

    .hero .slider {
        min-height: 350px;
    }

    .hero .slider .slide {
        min-height: 350px;

        padding:
            40px
            22px
            65px;
    }
}

/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 600px) {

    .hero .slider {
        min-height: 390px;

        border-radius: 14px;
    }

    .hero .slider .slide {
        min-height: 390px;

        padding:
            35px
            16px
            65px;
    }

    .hero .slide-icon {
        font-size: 48px;

        margin-bottom: 8px;
    }

    .hero .slider .slide h2 {
        font-size: 25px;

        line-height: 1.35;

        margin-bottom: 12px;
    }

    .hero .slider .slide p {
        font-size: 16px;

        line-height: 1.6;

        max-width: 95%;
    }

    .hero .independence-detail {
        font-size: 15px;

        line-height: 1.7;

        padding:
            9px
            13px;

        max-width: 94%;
    }

    .hero .slider-dots {
        bottom: 15px;
    }

    .hero .slider-dots .dot {
        width: 9px;
        height: 9px;
    }

    .hero .slider-dots .dot.active-dot {
        width: 23px;
    }
}

/* =====================================================
   VERY SMALL MOBILE
===================================================== */

@media (max-width: 380px) {

    .hero .slider,
    .hero .slider .slide {
        min-height: 410px;
    }

    .hero .slider .slide h2 {
        font-size: 22px;
    }

    .hero .slider .slide p {
        font-size: 14px;
    }

    .hero .independence-detail {
        font-size: 14px;
    }
}
