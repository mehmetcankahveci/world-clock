function ny() {
    setInterval(function() {
        let hours = padWithLeadingZeros(calcHours('-5.0'),2)
        let minutes = padWithLeadingZeros(calcMinutes('-5.0'),2)
        let seconds = padWithLeadingZeros(calcSeconds('-5.0'),2)
        nytime.innerHTML = hours + ":" + minutes + ":" + seconds
    }, 1000);
}
nytime.innerHTML = "Loading..."
ny();