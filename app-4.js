/* function validProposal(person1, person2) {
  if (typeof person1 === "Object" && typeof person2 === "Object") {
    if (person1.gender !== person2.gender) {
      if (Math.abs(person1.age - person2.age) < 7) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return "Invalid";
  }
}

const result = validProposal(
  { name: "Rafi", gender: "male", age: 25 },
  { name: "Sarah", gender: "female", age: 22 }
);
console.log(result); */

/* function validProposal(person1, person2) {
  if (typeof person1 !== "Object" && typeof person2 !== "Object") {
    return "Invalid";
  } else {
    if (
      person1.gender !== person2.gender ||
      Math.abs(person1.age - person2.age) > 7
    ) {
      return true;
    } else {
      return false;
    }
  }
}
const result = validProposal(
  { name: "milon", gender: "male", age: 20 },
  { name: "sumi", gender: "female", age: 25 }
);
console.log(result); */

function validProposal(person1, person2) {
  if (
    typeof person1 !== "object" ||
    typeof person2 !== "object" ||
    Array.isArray(person1) ||
    Array.isArray(person2)
  ) {
    return "Invalid";
  } else if (
    person1.gender === person2.gender ||
    Math.abs(person1.age - person2.age) > 7
  ) {
    return false;
  } else {
    return true;
  }
}

console.log(validProposal({ name: "mitu", gender: "male", age: 32 }, "Mizan"));
