function tr() {
    setInterval(function() {
        let hours = padWithLeadingZeros(calcHours('+3.0'),2)
        let minutes = padWithLeadingZeros(calcMinutes('+3.0'),2)
        let seconds = padWithLeadingZeros(calcSeconds('+3.0'),2)
        trtime.innerHTML = hours + ":" + minutes + ":" + seconds
    }, 1000);
}
trtime.innerHTML = "Loading..."
tr()