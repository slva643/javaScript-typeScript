// if, if else, else

let temperatura = 38.5


if (temperatura >= 37.5) {
    console.log('Febre alta');
} else if (temperatura < 37.5 && temperatura >= 37) {
    console.log('Febre moderada');
} else {
    console.log('Saudável');
}

// Exxercício01:

let temperaturaCelsius = 36.5;
let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
if (temperaturaFahrenheit >= 100) {
    console.log('Febre alta');
} else if (temperaturaFahrenheit < 100 && temperaturaFahrenheit >= 97) {
    console.log('Febre moderada');
} else {
    console.log('Saudável');
}