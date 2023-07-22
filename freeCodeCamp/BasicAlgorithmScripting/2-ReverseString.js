// Inverta a string fornecida e retorne a string invertida.

// Por exemplo, "hello"deve se tornar "olleh".

function reverseString(str) {
  let stringArray = str.split('')
  let stringReverse = stringArray.reverse().join('')
  return stringReverse
}

console.log(reverseString("hello"));