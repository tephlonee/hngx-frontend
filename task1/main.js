let dates = new Date();
let current_day = document.querySelector("span[data-testid='currentDayOfTheWeek']");
let utc_time = document.querySelector("span[data-testid='currentUTCTime']");
const day_of_the_week = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday', 'Saturday'];

utc_time.textContent = dates.toISOString();
current_day.textContent = day_of_the_week[dates.getDay()];
