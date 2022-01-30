module.exports = function toReadable (number) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  const toTwenty = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const nty = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let tens;
  let hundredRest;
  let current;
  let hundred;


  if (number <= 10) {
    return numbers[number];

  } else if (number > 10 && number < 20) {
    return toTwenty[number % 10];

  } else if (number >= 20 && number < 100) {
    tens = Math.floor(number / 10);
    return nty[tens - 2] + (number % 10 === 0 ? "" : " " + numbers[number % 10]);

  } else if (number >= 100 && number < 1000) {
    hundredRest = number % 100;

        if (hundredRest <= 10) {
          if (hundredRest === 0) {
            hundred = Math.floor(number / 100);
            return numbers[hundred] + " hundred";
          } else 
        current = numbers[hundredRest];

      } else if (hundredRest > 10 && hundredRest < 20) {
        current = toTwenty[hundredRest % 10];

      } else if (hundredRest >= 20 && hundredRest < 100) {
        tens = Math.floor(hundredRest / 10);
        current = nty[tens - 2] + (hundredRest % 10 === 0 ? "" : " " + numbers[hundredRest % 10]);
      }

  hundred = Math.floor(number / 100);
  return numbers[hundred] + " hundred " + current;

}
}