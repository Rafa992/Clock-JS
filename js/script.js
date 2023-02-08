const sec = document.querySelector('.s'); 
const min = document.querySelector('.m'); 
const hour = document.querySelector('.h'); 
const minutes = document.querySelector('.minutes'); 
const hours = document.querySelector('.hours'); 
const tabsItem = document.querySelectorAll('.tabsItem'); 
const tabsContentItem = document.querySelectorAll('.tabsContentItem'); 
const stopwatchBtn = document.querySelector('.stopwatch__btn');
const stopwatchSeconds = document.querySelector('.stopwatch__seconds');
const stopwatchMinutes = document.querySelector('.stopwatch__minutes');
const stopwatchHours = document.querySelector('.stopwatch__hours');
const tabsLinkSpan = document.querySelector('.tabsLink__span');


function clock() {  
    let time = new Date();
    let s = time.getSeconds() * 6;
    let m = time.getMinutes() * 6;
    let h = time.getHours() * 30;
    
    sec.style.transform = `rotate(${s}deg)`;
    min.style.transform = `rotate(${m}deg)`;
    hour.style.transform = `rotate(${h}deg)`;
    
    minutes.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    hours.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    
    setTimeout(() => {
        clock()
    }, 1000);
}
clock()

for (let i = 0; i < tabsItem.length; i++) {
    const element = tabsItem[i];
    element.addEventListener("click", ()=>{
        for (let y = 0; y < tabsItem.length; y++) {
            const elem = tabsItem[y];
            elem.classList.remove("active");
            tabsContentItem[y].classList.remove("active");
        }
        element.classList.add("active");
        tabsContentItem[i].classList.add("active");
    });
}

stopwatchBtn.addEventListener("click", ()=>{
    
    if (stopwatchBtn.innerHTML == "start") {
        stopwatchBtn.innerHTML = "stop"
        tabsLinkSpan.classList.add("active");
        start();
    }else if(stopwatchBtn.innerHTML == "stop"){
        stopwatchBtn.innerHTML = "clear";
        tabsLinkSpan.classList.remove("active");
        tabsLinkSpan.classList.add("active_clear");
    }else if(stopwatchBtn.innerHTML == "clear"){
        tabsLinkSpan.classList.remove("active_clear");
        stopwatchBtn.innerHTML = "start";
        stopwatchSeconds.innerHTML = 0;
        stopwatchMinutes.innerHTML = 0;
        stopwatchHours.innerHTML = 0;
    }
    
    function start() {  
        setTimeout(() => {
            if (stopwatchBtn.innerHTML == "stop") {
                stopwatchSeconds.innerHTML++;
                start()
            }
        }, 1000);
        
        if(stopwatchSeconds.innerHTML > 59){
            stopwatchSeconds.innerHTML = 0;
            stopwatchMinutes.innerHTML++;
        }else if(stopwatchMinutes.innerHTML > 59){
            stopwatchMinutes.innerHTML = 0;
            stopwatchHours.innerHTML++;
        }
    }
});