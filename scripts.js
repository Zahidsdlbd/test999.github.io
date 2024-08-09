function calculateCPM() {
    const totalCostBDT = parseFloat(document.getElementById('totalCostBDT').value);
    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);
    const totalLines = parseInt(document.getElementById('totalLines').value);
    const manpowerPerLine = parseInt(document.getElementById('manpowerPerLine').value);
    
    if (isNaN(totalCostBDT) || isNaN(exchangeRate) || isNaN(totalLines) || isNaN(manpowerPerLine) || totalCostBDT <= 0 || exchangeRate <= 0 || totalLines <= 0 || manpowerPerLine <= 0) {
        alert('Please enter valid positive numbers for all fields.');
        return;
    }
    
    const totalCostUSD = totalCostBDT / exchangeRate;
    const totalProductionMinutes = manpowerPerLine * 600 * 25 * totalLines;
    const cpm = totalCostUSD / totalProductionMinutes;
    
    document.getElementById('result').innerText = `Cost Per Minute (CPM): $${cpm.toFixed(4)}`;
}
