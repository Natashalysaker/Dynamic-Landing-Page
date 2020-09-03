// DOM elements
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

// Show time
function showeTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML =`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showeTime,1000);
}

// Add Zero
function addZero(n) {
    return (parseInt(n,10) < 10 ? '0' : '') + n;
}

//Set background and greeting 
function setBggreet() {
    let today = new Date()
    hour = today.getHours
}

//Run 
showeTime();