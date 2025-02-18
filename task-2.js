function findHena(list) {
  let temp = [];
  for (i = 0; i < list.length; i++) {
    const patriName = list[i];
    if (patriName.includes("h")) {
      temp.push(patriName);
    }
  }
  return temp;
}

const patriList = [
  "rahima",
  "sokina",
  "apa",
  "borsha",
  "morjina",
  "reshma",
  "karishma",
  "hena",
];

const newPatriList = findHena(patriList);
console.log(newPatriList);
