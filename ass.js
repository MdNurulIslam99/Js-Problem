function calculateVAT(price) {
  if (typeof price !== "number" || isNaN(price) || price <= 0) {
    return "Invalid";
  } else {
    const totalAmount = price * 7.5;
    const totalVat = totalAmount / 100;
    return totalVat;
  }
}

function validContact(contact) {
  if (typeof contact === "string") {
    if (
      contact.length === 11 &&
      !isNaN(contact) &&
      contact.startsWith("01", 0) &&
      !contact.includes(" ")
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}

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
