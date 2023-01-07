function assign() {
    setInterval(function() {
        const date = new Date();
        let hours = padWithLeadingZeros(date.getHours(),2)
        let minutes = padWithLeadingZeros(date.getMinutes(),2)
        let seconds = padWithLeadingZeros(date.getSeconds(),2)
        display.innerHTML = hours + ":" + minutes + ":" + seconds
    }, 1000);
}
assign();