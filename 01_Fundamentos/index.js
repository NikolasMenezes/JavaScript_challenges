// Temprature Conversion

const fahrenheit = 100
const celsius = 24

const fahrenheitToCelsius = (F) => {
  let celsius = ((F-32) * (5/9))

  console.log(`A temperatura ${F} em Fahrenheit corresponde a temperatura ${celsius.toFixed(2)} em Celsius `)
} 
const celsiusToFahrenheit = (C) => {
  let fahrenheit = ((C * 9/5) + 32)

  console.log(`A temperatura ${C} em Celsius corresponde a temperatura ${fahrenheit.toFixed(2)} em Fahrenheit `)
} 

fahrenheitToCelsius(fahrenheit)
celsiusToFahrenheit(celsius)