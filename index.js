
const toConvert = document.getElementById("toConvert");
const convertToCelsius = document.getElementById("toCelsius");
const convertToFahrenheit = document.getElementById("toFahrenheit");
const converted = document.getElementById("converted");

let conversionResult;


function convert(){
    if(convertToCelsius.checked){
        conversionResult = Number(toConvert.value)
        conversionResult = (conversionResult-32) * (5/9)
        converted.textContent = conversionResult.toFixed(2) + "Cº"
        convertToCelsius.checked = false;

    }else if(convertToFahrenheit.checked){
        conversionResult = Number(toConvert.value)
        conversionResult = (conversionResult * 9/5) + 32;
        converted.textContent = conversionResult.toFixed(2) + "Fº"
        convertToFahrenheit.checked = false;

        

    }
    else{
        converted.textContent = "Select an Option"
    }

};
