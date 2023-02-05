/* 
    HOMEWORK 1 => TASK 1
    * Write a program which reads a string from the standard input stdin,
      reverses it and then writes it to the standard output stdout.
*/

function revertString(stringToReverse) {
  return stringToReverse.split("").reverse().join("");
}

process.stdout.write("Enter a string to reverse: ");

process.stdin.on("data", (inputString) => {
  process.stdout.write("Reverse String--> ");
  process.stdout.write(revertString(inputString.toString()));
  process.stdout.write("\n");
  process.stdout.write("Enter a string to reverse: ");
});
