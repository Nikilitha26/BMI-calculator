let calculateButton = document.getElementById('Calculate');
let heightInput = document.getElementById('height');
let weightInput = document.getElementById('weight');
let resultElement = document.getElementById('bmi');

calculateButton.addEventListener('click', () => {
    let height = heightInput.value / 100; // Convert height from cm to meters
    let weight = weightInput.value;
    let bmi = weight / (height * height);

    resultElement.value = bmi.toFixed(2); // Round to 2 decimal places
});


