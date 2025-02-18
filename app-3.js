/* let text = 50;
let result = Array.isArray(text);
console.log(result); */

function willSuccess(marks) {
  let pass = 0;
  let fail = 0;
  let value = 0;
  if (
    !Array.isArray(marks) ||
    !marks.every((value) => typeof value === "number") ||
    isNaN(value)
  ) {
    return "Invalid";
  } else {
    for (const mark of marks) {
      if (mark >= 50) {
        pass += 1;
      } else {
        fail += 1;
      }
    }
    return pass > fail;
  }
}

const result = willSuccess(90);
console.log(result);
