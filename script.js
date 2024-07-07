function updateDateTimer() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const dateString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('dateTimer').textContent = dateString;
}

// Update the date timer every second
setInterval(updateDateTimer, 1000);

// Initial call to display the timer immediately
updateDateTimer();


