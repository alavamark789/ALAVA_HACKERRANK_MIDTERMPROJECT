function hurdleRace(k, height) {
     let maxHurdle = Math.max(...height); 
    if (maxHurdle > k) {
        return maxHurdle - k; 
    } else {
        return 0; 
    }
}
