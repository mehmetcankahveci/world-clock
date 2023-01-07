function uk() {
    setInterval(function() {
        let hours = padWithLeadingZeros(calcHours('+0.0'),2)
        let minutes = padWithLeadingZeros(calcMinutes('+0.0'),2)
        let seconds = padWithLeadingZeros(calcSeconds('+0.0'),2)
        uktime.innerHTML = hours + ":" + minutes + ":" + seconds
    }, 1000);
}
uktime.innerHTML = "Loading..."
uk();