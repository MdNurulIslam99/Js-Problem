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

const result = validContact(500);
console.log(result);
