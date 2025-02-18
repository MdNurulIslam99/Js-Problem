function sendProposal(heroBio, patriBio) {
  if (
    typeof heroBio === "object" &&
    typeof patriBio === "object" &&
    !Array.isArray(heroBio)
  ) {
    if (heroBio.district === patriBio.district) {
      console.log("proposal Done");
    } else {
      console.log("Noooooooooooooooo");
    }
  } else {
    console.log("invalid input");
  }
}

const heroBiodata = {
  name: "hero alom",
  age: 20,
  district: "dhaka",
  fatherName: "Omuk",
  email: "h@gad.com",
};

const henaBiodata = {
  name: "hena",
  age: 20,
  district: "ctg",
  fatherName: "yOmuk",
  email: "hena@gad.com",
};

const status = sendProposal(heroBiodata, henaBiodata);
console.log(status);
