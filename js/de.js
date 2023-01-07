function de() {
    setInterval(function() {
        let hours = padWithLeadingZeros(calcHours('+1.0'),2)
        let minutes = padWithLeadingZeros(calcMinutes('+1.0'),2)
        let seconds = padWithLeadingZeros(calcSeconds('+1.0'),2)
        detime.innerHTML = hours + ":" + minutes + ":" + seconds
    }, 1000);
}
detime.innerHTML = "Loading..."
de();