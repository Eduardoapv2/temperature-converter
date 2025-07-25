function convertToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  const conversion = celsius;
  return conversion;
}

function discribeTemperature(_conversion) {
  if (_conversion < 0) {
    return "very cold!";
  } else if (_conversion < 20) {
    return "cold";
  } else if (_conversion < 30) {
    return "warm";
  } else if (_conversion < 40) {
    return "hot";
  } else if (_conversion >= 40) {
    return "very hot!";
  } else {
    return "unknown temperature";
  }
}
let userinput = prompt("Enter a temperature in Fahrenheit:");
let celsius = convertToCelsius(userinput);
console.log(
  `The temperature in Celsius is ${celsius}°C, which is considered ${discribeTemperature(
    celsius
  )}.`
);

/*
function <nameOfFunction> (parameter1) {
    // code to be executed
    return <value>;
}

if (condition) {
    // code to be executed if condition is true
} else if (anotherCondition) {
    // code to be executed if anotherCondition is true
} else {
    // code to be executed if none of the above conditions are true 
}
*/
