function bazarHishab(totalMoney, morich, fish, shobji) {
  const cost = morich + fish + shobji;
  const totalDue = totalMoney - cost;
  return totalDue;
}

const totalMoney = 500;
const morich = 100;
const fish = 200;
const shobji = 50;

const result = bazarHishab(totalMoney, morich, fish, shobji);
console.log(result);
