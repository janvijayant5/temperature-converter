console.log('Welcome to 🌡️ Temperature Converter');

const tempLoad = () => {
    const fa = document.getElementById('fa');
    fa.innerHTML = "&#xf2cb";
    fa.style.color = "#ffa41b";

    setTimeout(() => {
        fa.innerHTML = "&#xf2ca;";
    }, 1000);

    setTimeout(() => {
        fa.innerHTML = "&#xf2c9;";
    }, 2000);

    setTimeout(() => {
        fa.innerHTML = "&#xf2c8;";
    }, 3000);

    setTimeout(() => {
        fa.innerHTML = "&#xf2c7;";
        fa.style.color = "#ff5151";
    }, 4000);
};

setInterval(tempLoad, 5000);

const calculateTemp = () => {
    const numberTemp = parseFloat(document.getElementById('temp').value);
    const tempSelected = document.getElementById('temp_diff').value;

    const celToFah = (cel) => (cel * 9 / 5) + 32;
    const fahToCel = (fah) => (fah - 32) * 5 / 9;

    let result;
    if (tempSelected === "cel") {
        result = celToFah(numberTemp).toFixed(2);
        document.getElementById('resultContainer').innerHTML = `${numberTemp}° Celsius = ${result}° Fahrenheit`;
    } else {
        result = fahToCel(numberTemp).toFixed(2);
        document.getElementById('resultContainer').innerHTML = `${numberTemp}° Fahrenheit = ${result}° Celsius`;
    }

    setTimeout(() => {
        document.getElementById('resultContainer').innerHTML = '';
    }, 3000);
};

document.addEventListener('DOMContentLoaded', tempLoad);
