// Higher-order function to create a weight conversion function
function createWeightConverter(unitFrom, unitTo) {
    if (unitFrom === 'lb' && unitTo === 'kg') {
        return (value) => value * 0.453592;
    } else if (unitFrom === 'kg' && unitTo === 'lb') {
        return (value) => value * 2.20462;
    }
    // Add more conversion cases as needed
}

// Event listener for weight conversion form
const weightForm = document.getElementById('weightForm');
const weightResult = document.getElementById('weightResult');

weightForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputValue = parseFloat(document.getElementById('weightInput').value);
    const unitFrom = document.getElementById('weightUnitFrom').value;
    const unitTo = document.getElementById('weightUnitTo').value;

    const converter = createWeightConverter(unitFrom, unitTo);
    const result = converter(inputValue);

    weightResult.textContent = `${inputValue} ${unitFrom} = ${result.toFixed(2)} ${unitTo}`;
});

// Distance conversion functions
function createDistanceConverter(unitFrom, unitTo) {
    if (unitFrom === 'mi' && unitTo === 'km') {
        return (value) => value * 1.60934;
    } else if (unitFrom === 'km' && unitTo === 'mi') {
        return (value) => value / 1.60934;
    }
    // Add more conversion cases as needed
}

const distanceForm = document.getElementById('distanceForm');
const distanceResult = document.getElementById('distanceResult');

distanceForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputValue = parseFloat(document.getElementById('distanceInput').value);
    const unitFrom = document.getElementById('distanceUnitFrom').value;
    const unitTo = document.getElementById('distanceUnitTo').value;

    const converter = createDistanceConverter(unitFrom, unitTo);
    const result = converter(inputValue);

    distanceResult.textContent = `${inputValue} ${unitFrom} = ${result.toFixed(2)} ${unitTo}`;
});

// Temperature conversion functions
function createTemperatureConverter(unitFrom, unitTo) {
    if (unitFrom === 'celsius' && unitTo === 'fahrenheit') {
        return (value) => (value * 9/5) + 32;
    } else if (unitFrom === 'fahrenheit' && unitTo === 'celsius') {
        return (value) => (value - 32) * 5/9;
    }
    // Add more conversion cases as needed
}

const temperatureForm = document.getElementById('temperatureForm');
const temperatureResult = document.getElementById('temperatureResult');

temperatureForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputValue = parseFloat(document.getElementById('temperatureInput').value);
    const unitFrom = document.getElementById('temperatureUnitFrom').value;
    const unitTo = document.getElementById('temperatureUnitTo').value;

    const converter = createTemperatureConverter(unitFrom, unitTo);
    const result = converter(inputValue);

    temperatureResult.textContent = `${inputValue} ${unitFrom} = ${result.toFixed(2)} ${unitTo}`;
});
