document.getElementById("dayOfWeek").textContent = getCurrentDayOfWeek();
document.getElementById("utcTime").textContent = getCurrentUTCTime();

function getCurrentDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    return daysOfWeek[currentDate.getUTCDay()];
}

function getCurrentUTCTime() {
    return new Date().getTime();
}