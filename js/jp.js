function jp() {
    setInterval(function() {
        let hours = padWithLeadingZeros(calcHours('+9.0'),2)
        let minutes = padWithLeadingZeros(calcMinutes('+9.0'),2)
        let seconds = padWithLeadingZeros(calcSeconds('+9.0'),2)
        jptime.innerHTML = hours + ":" + minutes + ":" + seconds
    }, 1000);
}
jptime.innerHTML = "Loading..."
jp();