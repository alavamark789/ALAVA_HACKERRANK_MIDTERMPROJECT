function timeConversion(s) {
    let period = s.slice(-2);      
    let hours = parseInt(s.slice(0, 2)); 
    let minutesSeconds = s.slice(2, 8); 

    if (period === "AM") {
        if (hours === 12) {
            hours = "00"; 
        } else {
            hours = String(hours).padStart(2, '0');
        }
    } else { 
        if (hours !== 12) {
            hours = hours + 12;
        }
    }

    return hours + minutesSeconds;
}

