const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

let count = 0;

const searchArray = (array, targetNumber) => {
  let min = 0;
  let max = array.length - 1;
  let guess;

  while (max >= min) {
    count++;
    guess = Math.floor((max + min)/2);
      if (min > max) {
        return;
      } else if (array[guess] === targetNumber) {
        document.write("<p>Found " + array[guess] + " in " + count + " tries, at index " + array.indexOf(targetNumber) + "</p>");
        return guess;
      } else if (array[guess] < targetNumber) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
  }
document.write("<p>Unable to find " + targetNumber + ".</p>");

};

searchArray(primes, 29);
searchArray(primes, 47);
searchArray(primes, 72);
