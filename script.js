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
