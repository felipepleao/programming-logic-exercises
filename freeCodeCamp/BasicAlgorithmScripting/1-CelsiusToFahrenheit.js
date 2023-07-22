// A fórmula para converter de Celsius para Fahrenheit é a temperatura em Celsius vezes 9/5, mais 32.

// Você recebe uma variável celsiusque representa uma temperatura em Celsius. Use a variável fahrenheitjá definida e atribua a ela a temperatura Fahrenheit equivalente à temperatura Celsius dada. Use a fórmula mencionada acima para ajudar a converter a temperatura Celsius para Fahrenheit.

function convertCtoF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

console.log(convertCtoF(-10));