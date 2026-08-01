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
