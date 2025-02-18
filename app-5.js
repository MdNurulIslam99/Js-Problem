function calculateSleepTime(times) {
  let sum = 0;
  let value = 0;
  if (
    !Array.isArray(times) ||
    !times.every((value) => typeof value === "number") ||
    isNaN(value)
  ) {
    return "Invalid";
  } else {
    for (const array of times) {
      sum = sum + array;
    }
    let hour = Math.floor(sum / 3600);
    let minute = Math.floor((sum % 3600) / 60);
    let second = Math.ceil(sum % 60);
    return { hour, minute, second };
  }
}

const array = calculateSleepTime(359);
console.log(array);
