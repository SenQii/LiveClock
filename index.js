const hourEl = document.getElementById("hour");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");
const amEl = document.getElementById("ampm");

function updateClock(){

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "default";


    // h = 0;
    if (h >= 3 && h <= 5){
        ampm = "فجرًا";
    }
    if (h >= 6 && h <= 10){
        ampm = "ضحى";
    }
    if (h >= 11 && h <= 13){
        ampm = "ظهرًا";
        if (h > 12){
            h = h -12;
        }
    }
    if (h >= 14 && h <= 15){
        ampm = "عصرًا";
        h = h -12;
    }
    if (h >= 16 && h <= 17){
        ampm = "مسيان";
        h = h -12;
    }
    if (h >=  18  && h <= 23 || h <=2){
        ampm = "ليلًا";
        if (h > 12){
            h = h -12;
        }
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;



    hourEl.innerText = h;
    minEl.innerText = m;
    secEl.innerText = s;
    amEl.innerText = ampm;

    setTimeout(() => {updateClock();}, 1000); // infinate recurcion ++ every second
    
}


updateClock() // call func


/* 
3 4 5 فجر
6 7 8 9 10 ضحى
11 22 13 ظهر
14 15 عصر
16 17مسيان 
18 19 20 21 22 23 00 1 2  ليل
 */

