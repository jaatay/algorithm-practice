function factorialize(num) {
  if (num < 0) {
    alert("No negativity allowed!");
    console.log("No negativity allowed!");
    document.write("You tried " + num + ". No negativity allowed.");
    return;
  } else if (num === 0) {
    return 1;
  }

  return num * factorialize(num - 1);
}

const printMsg = (message) => document.write("<h3>" +  factorialize(message) + "</h3>");

printMsg(5);
printMsg(10);
printMsg(20);
printMsg(-1);
printMsg(0);
