function removeDuplicate(mainList) {
  let newDawatlist = [];
  for (const relative of mainList) {
    let isUnique = true;
    for (const newRelative of newDawatlist) {
      if (
        relative.name === newRelative.name &&
        relative.member === newRelative.member
      ) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      newDawatlist.push(relative);
    }
  }
  return newDawatlist;
}

const relatives = [
  { name: "Alice", member: 1 },
  { name: "Bob", member: 2 },
  { name: "Charlie", member: 3 },
  { name: "Alice", member: 1 },
  { name: "David", member: 4 },
  { name: "Eve", member: 5 },
  { name: "Bob", member: 2 },
  { name: "Frank", member: 6 },
  { name: "Grace", member: 7 },
  { name: "Alice", member: 1 },
];

// let sumTotal = 0;
// for (const person of relatives) {
//   sumTotal = sumTotal + person.member;
// }
// console.log(sumTotal);

const total = removeDuplicate(relatives);
console.log(total);
