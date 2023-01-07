function padWithLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
  }
const display = document.getElementById("time");
const nytime = document.getElementById("ny_time");
const latime = document.getElementById("la_time");
const detime = document.getElementById("de_time");
const jptime = document.getElementById("jp_time");
const cntime = document.getElementById("cn_time");
const trtime = document.getElementById("tr_time");
const uktime = document.getElementById("uk_time");

function calcHours(offset) {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000*offset));
    return nd.getHours().toLocaleString();
}
function calcMinutes(offset) {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000*offset));
    return nd.getMinutes().toLocaleString();
}
function calcSeconds(offset) {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000*offset));
    return nd.getSeconds().toLocaleString();
}
display.innerHTML = "Loading..."
 