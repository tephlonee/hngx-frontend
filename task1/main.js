let dates = new Date();
let current_day = document.querySelector("span[data-testid='currentDayOfTheWeek']");
let utc_time = document.querySelector("span[data-testid='currentUTCTime']");
const day_of_the_week = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday', 'Saturday'];

current_day.textContent = day_of_the_week[dates.getDay()];
utc_time.textContent = dates.getMilliseconds();



setInterval(function () {
    dates = new Date();
    utc_time.textContent = dates.getMilliseconds()
    
    ;}, 

1000);
