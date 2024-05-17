let calculateButton = document.getElementById('Calculate');
let heightInput = document.getElementById('height');
let weightInput = document.getElementById('weight');
let resultElement = document.getElementById('bmi');

calculateButton.addEventListener('click', () =>{
    resultElement.value = eval(`${weightInput.value} / (${heightInput.value * heightInput.value})`);
    
})

