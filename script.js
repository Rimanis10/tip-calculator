function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const numPeople = parseInt(document.getElementById('numPeople').value);

    if (billAmount && numPeople) {
        const tipAmount = (billAmount * tipPercentage) / numPeople;
        const totalAmount = (billAmount + (billAmount * tipPercentage)) / numPeople;

        document.getElementById('result').innerHTML = `
            <p>Tip per person: $${tipAmount.toFixed(2)}</p>
            <p>Total per person: $${totalAmount.toFixed(2)}</p>
        `;
    } else {
        document.getElementById('result').innerHTML = `
            <p>Please enter valid inputs.</p>
        `;
    }
}
