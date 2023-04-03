let rows = 6;
let char = "";

for (let i = 0; i < rows; i++) {
  // printing star
  for (let k = 0; k < rows - i; k++) {
    char += "*";
  }
  char += "\n";
}
console.log(char);
