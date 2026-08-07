document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       AAN FM 91.60 KHANEWAL
       LIVE CLOCK + DATE + DESI CALENDAR + FPC
    ===================================================== */


    /* =====================================================
       HIJRI MONTHS
    ===================================================== */

    const hijriMonths = [
        "محرم",
        "صفر",
        "ربیع الاول",
        "ربیع الثانی",
        "جمادی الاول",
        "جمادی الثانی",
        "رجب",
        "شعبان",
        "رمضان",
        "شوال",
        "ذوالقعدہ",
        "ذوالحجہ"
    ];


    /* =====================================================
       GREGORIAN → JULIAN DAY
    ===================================================== */

    function gregorianToJulianDay(year, month, day) {

        const a =
            Math.floor((14 - month) / 12);

        const y =
            year + 4800 - a;

        const m =
            month + 12 * a - 3;

        return (
            day +
            Math.floor((153 * m + 2) / 5) +
            365 * y +
            Math.floor(y / 4) -
            Math.floor(y / 100) +
            Math.floor(y / 400) -
            32045
        );
    }


    /* =====================================================
       JULIAN DAY → ISLAMIC CIVIL DATE
    ===================================================== */

    function julianDayToIslamic(jd) {

        let l =
            jd - 1948440 + 10632;

        const n =
            Math.floor((l - 1) / 10631);

        l =
            l - 10631 * n + 354;

        const j =
            Math.floor((10985 - l) / 5316) *
            Math.floor((50 * l) / 17719) +
            Math.floor(l / 5670) *
            Math.floor((43 * l) / 15238);

        l =
            l -
            Math.floor((30 - j) / 15) *
            Math.floor((17719 * j) / 50) -
            Math.floor(j / 16) *
            Math.floor((15238 * j) / 43) +
            29;

        const month =
            Math.floor((24 * l) / 709);

        const day =
            l -
            Math.floor((709 * month) / 24);

        const year =
            30 * n + j - 30;

        return {
            day: day,
            month: month,
            year: year
        };
    }


    /* =====================================================
       GET HIJRI DATE
    ===================================================== */

    function getHijriDate(date) {

        const jd =
            gregorianToJulianDay(
                date.getFullYear(),
                date.getMonth() + 1,
                date.getDate()
            );

        const hijri =
            julianDayToIslamic(jd);

        const monthName =
            hijriMonths[hijri.month - 1] || "";

        return (
            hijri.day +
            " " +
            monthName +
            " " +
            hijri.year +
            " ہجری"
        );
    }


    /* =====================================================
       TRADITIONAL DESI / BIKRAMI MONTHS
    ===================================================== */

    const desiMonths = [
        "Chet",
        "Vaisakh",
        "Jeth",
        "Harh",
        "Sawan",
        "Bhadon",
        "Assu",
        "Kattak",
        "Magghar",
        "Poh",
        "Magh",
        "Phagan"
    ];


    /* =====================================================
       DESI MONTH START DATES
       
       Traditional Punjab approximate dates:
       
       Chet       14 March
       Vaisakh    14 April
       Jeth       15 May
       Harh       15 June
       Sawan      16 July
       Bhadon     16 August
       Assu       15 September
       Kattak     15 October
       Magghar    14 November
       Poh        14 December
       Magh       13 January
       Phagan     12 February
    ===================================================== */

    function getDesiDate(date) {

        const year =
            date.getFullYear();

        const month =
            date.getMonth();

        const day =
            date.getDate();


        let desiMonthIndex;
        let desiDay;
        let desiYear;


        /* January */

        if (month === 0) {

            if (day >= 13) {

                desiMonthIndex = 10;
                desiDay = day - 12;
                desiYear = year - 1468;

            } else {

                desiMonthIndex = 9;

                const previousDate =
                    new Date(
                        year,
                        month,
                        0
                    );

                return getDesiDate(previousDate);
            }
        }


        /* February */

        else if (month === 1) {

            if (day >= 12) {

                desiMonthIndex = 11;
                desiDay = day - 11;
                desiYear = year - 1468;

            } else {

                const previousDate =
                    new Date(
                        year,
                        month,
                        0
                    );

                return getDesiDate(previousDate);
            }
        }


        /* March */

        else if (month === 2) {

            if (day >= 14) {

                desiMonthIndex = 0;
                desiDay = day - 13;
                desiYear = year - 1468;

            } else {

                const previousDate =
                    new Date(
                        year,
                        month,
                        0
                    );

                return getDesiDate(previousDate);
            }
        }


        /* April */

        else if (month === 3) {

            if (day >= 14) {

                desiMonthIndex = 1;
                desiDay = day - 13;
                desiYear = year - 1468;

            } else {

                const previousDate =
                    new Date(
                        year,
                        month,
                        0
                    );

                return getDesiDate(previousDate);
            }
        }


        /* May */

        else if (month === 4) {

            if (day >= 15) {

                desiMonthIndex = 2;
                desiDay = day - 14;
                desiYear = year - 1468;

            } else {

                const previousDate =
                    new Date(
                        year,
                        month,
                        0
                    );

                return getDesiDate(previousDate);
            }
        }


        /* June */

        else if (month === 5) {

            if (day >= 15) {

                desiMonthIndex = 3;
                desiDay = day - 14;
                desiYear = year - 1468;

            } else {

                const previousDate =
                    new Date(
                        year,
                        month,
                        0
                    );

                return getDesiDate(previousDate);
            }
        }


        /* July */

        else if (month === 6) {

            if (day >= 16) {

                desiMonthIndex = 4;
                desiDay = day - 15;
                desiYear = year - 1468;

            } else {

                const previousDate =
                    new Date(
                        year,
                        month,
                        0
                    );

                return getDesiDate(previousDate);
            }
        }


        /* August */

        else if (month === 7) {

            if (day >= 16) {

                desiMonthIndex = 5;
                desiDay = day - 15;
                desiYear = year - 1468;

            } else {

                desiMonthIndex = 4;
                desiDay = day + 16;
                desiYear = year - 1468;
            }
        }


        /* September */

        else if (month === 8) {

            if (day >= 15) {

                desiMonthIndex = 6;
                desiDay = day - 14;
                desiYear = year - 1468;

            } else {

                desiMonthIndex = 5;
                desiDay = day + 16;
                desiYear = year - 1468;
            }
        }


        /* October */

        else if (month === 9) {

            if (day >= 15) {

                desiMonthIndex = 7;
                desiDay = day - 14;
                desiYear = year - 1468;

            } else {

                desiMonthIndex = 6;
                desiDay = day + 16;
                desiYear = year - 1468;
            }
        }


        /* November */

        else if (month === 10) {

            if (day >= 14) {

                desiMonthIndex = 8;
                desiDay = day - 13;
                desiYear = year - 1468;

            } else {

                desiMonthIndex = 7;
                desiDay = day + 17;
                desiYear = year - 1468;
            }
        }


        /* December */

        else {

            if (day >= 14) {

                desiMonthIndex = 9;
                desiDay = day - 13;
                desiYear = year - 1468;

            } else {

                desiMonthIndex = 8;
                desiDay = day + 16;
                desiYear = year - 1468;
            }
        }


        return {
            day: desiDay,
            month: desiMonths[desiMonthIndex],
            year: desiYear
        };
    }


    /* =====================================================
       LIVE CLOCK
    ===================================================== */

    function updateTime() {

        const now =
            new Date();


        /* DIGITAL CLOCK */

        const hours =
            now.getHours();

        const minutes =
            now.getMinutes();

        const seconds =
            now.getSeconds();


        let displayHour =
            hours % 12;


        if (displayHour === 0) {
            displayHour = 12;
        }


        const ampm =
            hours >= 12
                ? "PM"
                : "AM";


        const timeString =
            String(displayHour).padStart(2, "0") +
            ":" +
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0") +
            " " +
            ampm;


        const digitalClock =
            document.getElementById(
                "digitalClock"
            );


        if (digitalClock) {

            digitalClock.textContent =
                timeString;

        }


        /* ANALOG CLOCK */

        const hourHand =
            document.getElementById("hourHand");

        const minuteHand =
            document.getElementById("minuteHand");

        const secondHand =
            document.getElementById("secondHand");


        const secondDegree =
            seconds * 6;

        const minuteDegree =
            minutes * 6 +
            seconds * 0.1;

        const hourDegree =
            (hours % 12) * 30 +
            minutes * 0.5;


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


        /* ENGLISH DATE */

        const englishElement =
            document.getElementById(
                "englishDate"
            );


        if (englishElement) {

            englishElement.textContent =
                "📅 " +
                now.toLocaleDateString(
                    "en-PK",
                    {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                    }
                );

        }


        /* HIJRI DATE */

        const islamicElement =
            document.getElementById(
                "islamicDate"
            );


        if (islamicElement) {

            islamicElement.textContent =
                "🌙 " +
                getHijriDate(now);

        }


        /* DESI DATE */

        const desiElement =
            document.getElementById(
                "desiDate"
            );


        if (desiElement) {

            const desi =
                getDesiDate(now);


            desiElement.textContent =
                "🌾 " +
                desi.day +
                " " +
                desi.month +
                " " +
                desi.year +
                " Bikrami";

        }

    }


    updateTime();

    setInterval(
        updateTime,
        1000
    );


    /* =====================================================
       FPC PROGRAM SCHEDULE
       AUGUST + SEPTEMBER 2026
    ===================================================== */

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
            ["12:00 PM – 02:00 PM", "RJ Maher Akmal Sial", ""],
            ["02:00 PM – 04:00 PM", "B-2-B", ""],
            ["04:00 PM – 06:00 PM", "RJ Wasim Sajjad", ""],
            ["06:00 PM – 08:00 PM", "RJ Maher Hafeez", "Mehfil Sajna Di"],
            ["08:00 PM – 10:00 PM", "RJ Shafqat Bukhari", ""],
            ["10:00 PM – 12:00 AM", "Love Beats With RJ Nazi Naz", ""]
        ],

        2: [
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

        3: [
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

        4: [
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

        5: [
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

        6: [
            ["06:00 AM – 09:00 AM", "RJ Parviaz Ahmad", "Good Morning Pakistan"],
            ["09:00 AM – 10:00 AM", "B-2-B", ""],
            ["10:00 AM – 12:00 PM", "RJ Ghulam Nabi", ""],
            ["12:00 PM – 02:00 PM", "B-2-B", ""],
            ["02:00 PM – 04:00 PM", "RJ Muskan Khan", ""],
            ["04:00 PM – 06:00 PM", "RJ Tabbasum", ""],
            ["06:00 PM – 08:00 PM", "RJ Maher Akmal Sial", ""],
            ["08:00 PM – 10:00 PM", "RJ Munawar Shehzad", ""],
            ["10:00 PM – 12:00 AM", "RJ Parviaz Ahmad", "Haar Hamelan"]
        ]

    };


    /* =====================================================
       CALENDAR VARIABLES
    ===================================================== */

    let calendarDate =
        new Date(2026, 7, 1);

    let selectedDate =
        new Date(2026, 7, 1);


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


    /* =====================================================
       UPDATE FPC DATES
    ===================================================== */

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
            getHijriDate(date);


        const desi =
            getDesiDate(date);


        if (calendarEnglish) {

            calendarEnglish.textContent =
                "📅 " + english;

        }


        if (calendarHijri) {

            calendarHijri.textContent =
                "🌙 " + hijri;

        }


        if (calendarDesi) {

            calendarDesi.textContent =
                "🌾 " +
                desi.day +
                " " +
                desi.month +
                " " +
                desi.year +
                " Bikrami";

        }


        if (calendarToday) {

            calendarToday.textContent =
                "📻 FPC Program Schedule";

        }

    }


    /* =====================================================
       RENDER FPC CALENDAR
    ===================================================== */

    function renderFPCalendar() {

        if (!calendarDays) {
            return;
        }


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


        calendarDays.innerHTML =
            "";


        const firstDay =
            new Date(
                year,
                month,
                1
            ).getDay();


        const daysInMonth =
            new Date(
                year,
                month + 1,
                0
            ).getDate();


        /* EMPTY DAYS */

        for (
            let i = 0;
            i < firstDay;
            i++
        ) {

            const empty =
                document.createElement("div");

            empty.className =
                "calendar-day empty";

            calendarDays.appendChild(
                empty
            );

        }


        /* ACTUAL DAYS */

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
                new Date(
                    year,
                    month,
                    day
                );


            const today =
                new Date();


            /* TODAY */

            if (
                day === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear()
            ) {

                dayElement.classList.add(
                    "today"
                );

            }


            /* SELECTED */

            if (
                day === selectedDate.getDate() &&
                month === selectedDate.getMonth() &&
                year === selectedDate.getFullYear()
            ) {

                dayElement.classList.add(
                    "selected"
                );

            }


            /* CLICK */

            dayElement.addEventListener(
                "click",
                function () {

                    selectedDate =
                        new Date(
                            thisDate
                        );


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


    /* =====================================================
       SHOW DAILY FPC PROGRAMS
    ===================================================== */

    function showDailyPrograms(date) {

        if (!dailyProgramList) {
            return;
        }


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


        if (selectedDayTitle) {

            selectedDayTitle.textContent =
                "📻 " +
                dayName +
                " — Today's Programs";

        }


        dailyProgramList.innerHTML =
            "";


        const programs =
            fpcSchedule[day] || [];


        programs.forEach(
            function (program) {

                const row =
                    document.createElement(
                        "div"
                    );

                row.className =
                    "program-row";


                const time =
                    document.createElement(
                        "div"
                    );

                time.className =
                    "program-time";

                time.textContent =
                    program[0];


                const name =
                    document.createElement(
                        "div"
                    );

                name.className =
                    "program-name";

                name.textContent =
                    program[1];


                const note =
                    document.createElement(
                        "div"
                    );

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

            }
        );

    }


    /* =====================================================
       PREVIOUS MONTH
       AUGUST ←
    ===================================================== */

    if (prevMonth) {

        prevMonth.addEventListener(
            "click",
            function () {

                if (
                    calendarDate.getMonth() === 7
                ) {

                    calendarDate =
                        new Date(
                            2026,
                            7,
                            1
                        );

                }


                selectedDate =
                    new Date(
                        calendarDate
                    );


                renderFPCalendar();

                showDailyPrograms(
                    selectedDate
                );

            }
        );

    }


    /* =====================================================
       NEXT MONTH
       SEPTEMBER →
    ===================================================== */

    if (nextMonth) {

        nextMonth.addEventListener(
            "click",
            function () {

                if (
                    calendarDate.getMonth() === 7
                ) {

                    calendarDate =
                        new Date(
                            2026,
                            8,
                            1
                        );

                    selectedDate =
                        new Date(
                            2026,
                            8,
                            1
                        );

                    renderFPCalendar();

                    showDailyPrograms(
                        selectedDate
                    );

                }

            }
        );

    }


    /* =====================================================
       START FPC
    ===================================================== */

    renderFPCalendar();

    showDailyPrograms(
        selectedDate
    );


    /* =====================================================
       MAIN WEBSITE SLIDER
    ===================================================== */

    const slides =
        document.querySelectorAll(
            ".slide"
        );

    const dots =
        document.querySelectorAll(
            ".dot"
        );


    let currentSlide = 0;


    function showSlide(index) {

        if (!slides.length) {
            return;
        }


        slides.forEach(
            function (slide) {

                slide.classList.remove(
                    "active"
                );

            }
        );


        dots.forEach(
            function (dot) {

                dot.classList.remove(
                    "active-dot"
                );

            }
        );


        if (slides[index]) {

            slides[index].classList.add(
                "active"
            );

        }


        if (dots[index]) {

            dots[index].classList.add(
                "active-dot"
            );

        }

    }


    showSlide(
        currentSlide
    );


    if (slides.length > 1) {

        setInterval(
            function () {

                currentSlide++;

                if (
                    currentSlide >=
                    slides.length
                ) {

                    currentSlide = 0;

                }


                showSlide(
                    currentSlide
                );

            },
            5000
        );

    }


    dots.forEach(
        function (dot, index) {

            dot.addEventListener(
                "click",
                function () {

                    currentSlide =
                        index;

                    showSlide(
                        currentSlide
                    );

                }
            );

        }
    );


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const topButton =
        document.getElementById(
            "topBtn"
        );


    if (topButton) {

        window.addEventListener(
            "scroll",
            function () {

                if (
                    window.scrollY > 400
                ) {

                    topButton.style.display =
                        "block";

                } else {

                    topButton.style.display =
                        "none";

                }

            }
        );


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


    /* =====================================================
       LOADER
    ===================================================== */

    const loader =
        document.getElementById(
            "loader"
        );


    if (loader) {

        setTimeout(
            function () {

                loader.style.opacity =
                    "0";

                loader.style.transition =
                    "opacity 0.5s ease";


                setTimeout(
                    function () {

                        loader.style.display =
                            "none";

                    },
                    500
                );

            },
            1500
        );

    }

});

/* =====================================================
   🇵🇰 AAN FM 91.60 KHANEWAL
   SPECIAL INDEPENDENCE DAY CAMPAIGN
   02 AUGUST → 14 AUGUST 2026
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const campaign =
        document.getElementById("independenceCampaign");

    const slider =
        document.getElementById("independenceSlider");

    const dotsContainer =
        document.getElementById("independenceDots");

    if (!campaign || !slider || !dotsContainer) {
        return;
    }


    /* =================================================
       CAMPAIGN DATES
    ================================================= */

    const campaignStart =
        new Date(2026, 7, 2);

    const campaignEnd =
        new Date(2026, 7, 15);


    const now =
        new Date();


    /* =================================================
       CHECK CAMPAIGN DATE
    ================================================= */

    if (
        now < campaignStart ||
        now >= campaignEnd
    ) {

        campaign.style.display = "none";

        return;
    }


    /* =================================================
       SLIDE DATA
    ================================================= */

    const campaignSlides = [

        {
            date: "02 AUGUST 2026",
            title: "جشنِ آزادی 2026",
            text: "آزادی کا جشن، محبتِ وطن کے ساتھ۔",
            message: "Special Independence Day Transmission"
        },

        {
            date: "03 AUGUST 2026",
            title: "قائداعظم محمد علی جناح",
            text: "اتحاد، ایمان اور نظم و ضبط — مضبوط پاکستان کی بنیاد۔",
            message: "Special Independence Day Transmission"
        },

        {
            date: "04 AUGUST 2026",
            title: "علامہ محمد اقبال",
            text: "خودی، علم، کردار اور بلند مقصد کا پیغام۔",
            message: "Special Independence Day Transmission"
        },

        {
            date: "05 AUGUST 2026",
            title: "آزادی قربانیوں کا ثمر ہے",
            text: "پاکستان کے قیام کے لیے دی جانے والی قربانیوں کو سلام۔",
            message: "Special Independence Day Transmission"
        },

        {
            date: "06 AUGUST 2026",
            title: "پاکستان — ہماری پہچان",
            text: "سبز ہلالی پرچم ہماری امید، اتحاد اور شناخت کی علامت ہے۔",
            message: "Special Independence Day Transmission"
        },

        {
            date: "07 AUGUST 2026",
            title: "نوجوان اور پاکستان",
            text: "آج کے نوجوان کا علم اور کردار، کل کے پاکستان کی طاقت ہے۔",
            message: "Special Independence Day Transmission"
        },

        {
            date: "08 AUGUST 2026",
            title: "اتحاد ہماری طاقت ہے",
            text: "ایک قوم، ایک وطن، ایک پاکستان۔",
            message: "Special Independence Day Transmission"
        },

        {
            date: "09 AUGUST 2026",
            title: "پاکستان کے معماروں کو سلام",
            text: "تحریکِ پاکستان کے رہنماؤں اور کارکنوں کو خراجِ تحسین۔",
            message: "Special Independence Day Transmission"
        },

        {
            date: "10 AUGUST 2026",
            title: "آزادی کا سفر",
            text: "منزل آزادی تھی، سفر جدوجہد اور قربانیوں کا تھا۔",
            message: "Special Independence Day Transmission"
        },

        {
            date: "11 AUGUST 2026",
            title: "قائداعظم کا پیغام",
            text: "مساوی حقوق، قانون کی حکمرانی اور ذمہ دار شہری — مضبوط پاکستان کی بنیاد۔",
            message: "Special Independence Day Transmission"
        },

        {
            date: "12 AUGUST 2026",
            title: "پاکستان سے محبت",
            text: "وطن سے محبت صرف الفاظ نہیں، اپنی ذمہ داری پوری کرنا بھی ہے۔",
            message: "Special Independence Day Transmission"
        },

        {
            date: "13 AUGUST 2026",
            title: "جشنِ آزادی کی آمد",
            text: "کل ہے پاکستان کا دن! اپنے دلوں کو سبز و سفید رنگ دیں۔",
            message: "Special Independence Day Transmission"
        },

        {
            date: "14 AUGUST 2026",
            title: "جشنِ آزادی مبارک",
            text: "پاکستان کی آزادی کے 79 سال مکمل ہونے پر پوری قوم کو دل کی گہرائیوں سے مبارکباد۔",
            message: "HAPPY INDEPENDENCE DAY"
        }

    ];


    /* =================================================
       CREATE SLIDES
    ================================================= */

    campaignSlides.forEach(function (item, index) {

        const slide =
            document.createElement("div");

        slide.className =
            "independence-slide";


        if (index === 0) {

            slide.classList.add("active");

        }


        /* ---------- FLAGS ---------- */

        const flags =
            document.createElement("div");

        flags.className =
            "animated-flags";


        for (let i = 0; i < 5; i++) {

            const flag =
                document.createElement("span");

            flag.textContent = "🇵🇰";

            flag.style.animationDelay =
                (i * 0.25) + "s";

            flags.appendChild(flag);

        }


        /* ---------- DATE ---------- */

        const date =
            document.createElement("div");

        date.className =
            "campaign-date";

        date.textContent =
            "📅 " + item.date;


        /* ---------- FLAG ---------- */

        const mainFlag =
            document.createElement("div");

        mainFlag.className =
            "campaign-flag";

        mainFlag.textContent =
            "🇵🇰";


        /* ---------- SPECIAL TRANSMISSION ---------- */

        const transmission =
            document.createElement("h2");

        transmission.textContent =
            item.message;


        /* ---------- RADIO NAME ---------- */

        const radioName =
            document.createElement("h1");

        radioName.textContent =
            "AAN FM 91.60 KHANEWAL";


        /* ---------- TITLE ---------- */

        const title =
            document.createElement("h3");

        title.textContent =
            item.title;


        /* ---------- TEXT ---------- */

        const text =
            document.createElement("p");

        text.textContent =
            item.text;


        /* ---------- FOOTER ---------- */

        const footer =
            document.createElement("strong");

        footer.textContent =
            "Har Dil Ki Awaaz • Happy Independence Day 🇵🇰";


        slide.appendChild(flags);

        slide.appendChild(date);

        slide.appendChild(mainFlag);

        slide.appendChild(transmission);

        slide.appendChild(radioName);

        slide.appendChild(title);

        slide.appendChild(text);

        slide.appendChild(footer);


        slider.appendChild(slide);


        /* =================================================
           DOT
        ================================================= */

        const dot =
            document.createElement("button");

        dot.className =
            "independence-dot";


        if (index === 0) {

            dot.classList.add("active");

        }


        dot.setAttribute(
            "aria-label",
            item.date
        );


        dot.addEventListener(
            "click",
            function () {

                currentSlide =
                    index;

                showSlide(
                    currentSlide
                );

            }
        );


        dotsContainer.appendChild(dot);

    });


    const slides =
        slider.querySelectorAll(
            ".independence-slide"
        );

    const dots =
        dotsContainer.querySelectorAll(
            ".independence-dot"
        );


    let currentSlide = 0;


    /* =================================================
       SHOW SLIDE
    ================================================= */

    function showSlide(index) {

        slides.forEach(
            function (slide) {

                slide.classList.remove(
                    "active"
                );

            }
        );


        dots.forEach(
            function (dot) {

                dot.classList.remove(
                    "active"
                );

            }
        );


        if (slides[index]) {

            slides[index].classList.add(
                "active"
            );

        }


        if (dots[index]) {

            dots[index].classList.add(
                "active"
            );

        }

    }


    /* =================================================
       AUTO SLIDER
    ================================================= */

    showSlide(0);


    setInterval(function () {

        currentSlide++;


        if (
            currentSlide >=
            slides.length
        ) {

            currentSlide = 0;

        }


        showSlide(
            currentSlide
        );

    }, 6000);


});
/* =====================================================
   🇵🇰 AAN FM 91.60 KHANEWAL
   INDEPENDENCE DAY CAMPAIGN
   SMART DAILY REMAINING SLIDES
   02 AUGUST → 14 AUGUST 2026
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const campaign =
        document.getElementById("independenceCampaign");

    const slider =
        document.getElementById("independenceSlider");

    const dotsContainer =
        document.getElementById("independenceDots");

    if (!campaign || !slider || !dotsContainer) {
        return;
    }


    /* =================================================
       CAMPAIGN SETTINGS
    ================================================= */

    const campaignStart =
        new Date(2026, 7, 2, 0, 0, 0);

    const independenceDay =
        new Date(2026, 7, 14, 0, 0, 0);

    const campaignEnd =
        new Date(2026, 7, 15, 0, 0, 0);


    /* =================================================
       ALL CAMPAIGN SLIDES
    ================================================= */

    const campaignSlides = [

        {
            day: 2,
            title: "جشنِ آزادی 2026",
            text: "آزادی کا جشن، محبتِ وطن کے ساتھ۔"
        },

        {
            day: 3,
            title: "قائداعظم محمد علی جناح",
            text: "اتحاد، ایمان اور نظم و ضبط — مضبوط پاکستان کی بنیاد۔"
        },

        {
            day: 4,
            title: "علامہ محمد اقبال",
            text: "خودی، علم، کردار اور بلند مقصد کا پیغام۔"
        },

        {
            day: 5,
            title: "آزادی قربانیوں کا ثمر ہے",
            text: "پاکستان کے قیام کے لیے دی جانے والی قربانیوں کو سلام۔"
        },

        {
            day: 6,
            title: "پاکستان — ہماری پہچان",
            text: "سبز ہلالی پرچم ہماری امید، اتحاد اور شناخت کی علامت ہے۔"
        },

        {
            day: 7,
            title: "نوجوان اور پاکستان",
            text: "آج کے نوجوان کا علم اور کردار، کل کے پاکستان کی طاقت ہے۔"
        },

        {
            day: 8,
            title: "اتحاد ہماری طاقت ہے",
            text: "ایک قوم، ایک وطن، ایک پاکستان۔"
        },

        {
            day: 9,
            title: "پاکستان کے معماروں کو سلام",
            text: "تحریکِ پاکستان کے رہنماؤں اور کارکنوں کو خراجِ تحسین۔"
        },

        {
            day: 10,
            title: "آزادی کا سفر",
            text: "منزل آزادی تھی، سفر جدوجہد اور قربانیوں کا تھا۔"
        },

        {
            day: 11,
            title: "قائداعظم کا پیغام",
            text: "مساوی حقوق، قانون کی حکمرانی اور ذمہ دار شہری — مضبوط پاکستان کی بنیاد۔"
        },

        {
            day: 12,
            title: "پاکستان سے محبت",
            text: "وطن سے محبت صرف الفاظ نہیں، اپنی ذمہ داری پوری کرنا بھی ہے۔"
        },

        {
            day: 13,
            title: "جشنِ آزادی کی آمد",
            text: "کل ہے پاکستان کا دن! اپنے دلوں کو سبز و سفید رنگ دیں۔"
        },

        {
            day: 14,
            title: "جشنِ آزادی مبارک",
            text: "پاکستان کی آزادی کے 79 سال مکمل ہونے پر پوری قوم کو دل کی گہرائیوں سے مبارکباد۔"
        }

    ];


    /* =================================================
       GET TODAY
    ================================================= */

    function getToday() {

        const now = new Date();

        return new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            0,
            0,
            0
        );

    }


    /* =================================================
       CHECK CAMPAIGN
    ================================================= */

    function checkCampaign() {

        const today = getToday();

        if (
            today < campaignStart ||
            today >= campaignEnd
        ) {

            campaign.style.display = "none";

            return false;

        }

        campaign.style.display = "flex";

        return true;

    }


    /* =================================================
       REMAINING DAYS
    ================================================= */

    function getRemainingDays() {

        const today = getToday();

        const difference =
            independenceDay.getTime() -
            today.getTime();

        return Math.ceil(
            difference /
            (1000 * 60 * 60 * 24)
        );

    }


    /* =================================================
       CLEAR OLD SLIDES
    ================================================= */

    slider.innerHTML = "";
    dotsContainer.innerHTML = "";


    /* =================================================
       CREATE ONLY REMAINING SLIDES
    ================================================= */

    function buildCampaign() {

        if (!checkCampaign()) {
            return;
        }


        slider.innerHTML = "";
        dotsContainer.innerHTML = "";


        const today =
            getToday();


        const todayDay =
            today.getDate();


        /* ---------------------------------------------
           FILTER:
           TODAY → 14 AUGUST
        --------------------------------------------- */

        const remainingSlides =
            campaignSlides.filter(function (item) {

                return item.day >= todayDay;

            });


        let currentSlide = 0;


        /* =================================================
           CREATE SLIDES
        ================================================= */

        remainingSlides.forEach(function (item, index) {

            const slide =
                document.createElement("div");

            slide.className =
                "independence-slide";


            if (index === 0) {

                slide.classList.add("active");

            }


            /* ---------- ANIMATED FLAGS ---------- */

            const flags =
                document.createElement("div");

            flags.className =
                "animated-flags";


            for (let i = 0; i < 5; i++) {

                const flag =
                    document.createElement("span");

                flag.textContent =
                    "🇵🇰";

                flag.style.animationDelay =
                    (i * 0.25) + "s";

                flags.appendChild(flag);

            }


            /* ---------- DATE ---------- */

            const date =
                document.createElement("div");

            date.className =
                "campaign-date";

            date.textContent =
                "📅 " +
                item.day +
                " AUGUST 2026";


            /* ---------- MAIN FLAG ---------- */

            const mainFlag =
                document.createElement("div");

            mainFlag.className =
                "campaign-flag";

            mainFlag.textContent =
                "🇵🇰";


            /* ---------- SPECIAL TRANSMISSION ---------- */

            const transmission =
                document.createElement("h2");

            transmission.textContent =
                "SPECIAL INDEPENDENCE DAY TRANSMISSION";


            /* ---------- RADIO NAME ---------- */

            const radioName =
                document.createElement("h1");

            radioName.textContent =
                "AAN FM 91.60 KHANEWAL";


            /* ---------- TITLE ---------- */

            const title =
                document.createElement("h3");

            title.textContent =
                item.title;


            /* ---------- TEXT ---------- */

            const text =
                document.createElement("p");

            text.textContent =
                item.text;


            /* ---------- COUNTDOWN ---------- */

            const countdown =
                document.createElement("strong");

            countdown.className =
                "independence-countdown";


            const remaining =
                getRemainingDays();


            if (remaining > 0) {

                countdown.textContent =
                    "⏳ " +
                    remaining +
                    " DAYS REMAINING UNTIL INDEPENDENCE DAY";

            } else {

                countdown.textContent =
                    "🇵🇰 TODAY IS INDEPENDENCE DAY! 🇵🇰";

            }


            /* ---------- FOOTER ---------- */

            const footer =
                document.createElement("strong");

            footer.textContent =
                "Har Dil Ki Awaaz • Happy Independence Day 🇵🇰";


            /* ---------- ADD ELEMENTS ---------- */

            slide.appendChild(flags);

            slide.appendChild(date);

            slide.appendChild(mainFlag);

            slide.appendChild(transmission);

            slide.appendChild(radioName);

            slide.appendChild(title);

            slide.appendChild(text);

            slide.appendChild(countdown);

            slide.appendChild(footer);


            slider.appendChild(slide);


            /* =================================================
               DOT
            ================================================= */

            const dot =
                document.createElement("button");

            dot.className =
                "independence-dot";


            if (index === 0) {

                dot.classList.add("active");

            }


            dot.setAttribute(
                "aria-label",
                item.day +
                " August 2026"
            );


            dot.addEventListener(
                "click",
                function () {

                    currentSlide =
                        index;

                    showSlide(
                        currentSlide
                    );

                }
            );


            dotsContainer.appendChild(dot);

        });


        /* =================================================
           GET CREATED ELEMENTS
        ================================================= */

        const slides =
            slider.querySelectorAll(
                ".independence-slide"
            );

        const dots =
            dotsContainer.querySelectorAll(
                ".independence-dot"
            );


        /* =================================================
           SHOW SLIDE
        ================================================= */

        function showSlide(index) {

            slides.forEach(function (slide) {

                slide.classList.remove(
                    "active"
                );

            });


            dots.forEach(function (dot) {

                dot.classList.remove(
                    "active"
                );

            });


            if (slides[index]) {

                slides[index].classList.add(
                    "active"
                );

            }


            if (dots[index]) {

                dots[index].classList.add(
                    "active"
                );

            }

        }


        /* =================================================
           START SLIDER
        ================================================= */

        if (slides.length > 0) {

            showSlide(0);

        }


        /* =================================================
           AUTO SLIDE
           6 SECONDS
        ================================================= */

        if (slides.length > 1) {

            setInterval(function () {

                currentSlide++;

                if (
                    currentSlide >=
                    slides.length
                ) {

                    currentSlide = 0;

                }

                showSlide(
                    currentSlide
                );

            }, 6000);

        }

    }


    /* =================================================
       FIRST LOAD
    ================================================= */

    buildCampaign();


    /* =================================================
       CHECK DATE EVERY MINUTE
       اگر رات 12 بجے تاریخ تبدیل ہو
       تو نئی slides خود بنیں گی
    ================================================= */

    let lastDate =
        getToday().getTime();


    setInterval(function () {

        const today =
            getToday().getTime();


        if (
            today !== lastDate
        ) {

            lastDate =
                today;

            buildCampaign();

        }

    }, 30000);


    /* =================================================
       COUNTDOWN UPDATE
       EVERY MINUTE
    ================================================= */

    setInterval(function () {

        if (
            !checkCampaign()
        ) {

            return;

        }


        const countdowns =
            document.querySelectorAll(
                ".independence-countdown"
            );


        const remaining =
            getRemainingDays();


        countdowns.forEach(function (element) {

            if (remaining > 0) {

                element.textContent =
                    "⏳ " +
                    remaining +
                    " DAYS REMAINING UNTIL INDEPENDENCE DAY";

            } else {

                element.textContent =
                    "🇵🇰 TODAY IS INDEPENDENCE DAY! 🇵🇰";

            }

        });

    }, 60000);

});
const player = document.getElementById("radioPlayer");
const playButton = document.getElementById("playButton");
const volume = document.getElementById("volumeSlider");
const status = document.getElementById("playerStatus");

playButton.addEventListener("click", function () {

    if (player.paused) {

        player.play();

    } else {

        player.pause();

    }

});

player.addEventListener("play", function () {

    playButton.innerHTML = "⏸ Pause";
    status.innerHTML = "🔴 LIVE";

});

player.addEventListener("pause", function () {

    playButton.innerHTML = "▶ Listen Live";
    status.innerHTML = "Paused";

});

player.addEventListener("waiting", function () {

    status.innerHTML = "Buffering...";

});

player.addEventListener("error", function () {

    status.innerHTML = "Stream Offline";

});

volume.addEventListener("input", function () {

    player.volume = this.value;

});
