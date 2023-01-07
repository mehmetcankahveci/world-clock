function cn() {
    setInterval(function() {
        let hours = padWithLeadingZeros(calcHours('+8.0'),2)
        let minutes = padWithLeadingZeros(calcMinutes('+8.0'),2)
        let seconds = padWithLeadingZeros(calcSeconds('+8.0'),2)
        cntime.innerHTML = hours + ":" + minutes + ":" + seconds
    }, 1000);
}
cntime.innerHTML = "Loading..."
cn();