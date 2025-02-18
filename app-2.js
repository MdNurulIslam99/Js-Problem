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

const result = validContact("01819234567");
console.log(result);
