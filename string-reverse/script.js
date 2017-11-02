const reverseString = (string) => {
  var newString = string.split("").reverse().join("");
  return newString;
}

const printMsg = (message) => document.write("<p>" +  reverseString(message) + "</p>");


printMsg("Hello");
printMsg("How are you?");
printMsg("hannah");
printMsg("1,2,3,4,5,6,7,8,9");
