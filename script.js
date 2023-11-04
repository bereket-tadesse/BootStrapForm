function costCalculation() {
  // checkin and checkout date values
  console.log("working");
  let checkinString = new Date(document.getElementById("checkindate").value);
  let checkoutString = new Date(document.getElementById("checkoutdate").value);

  let checkin = moment(checkinString);
  let checkout = moment(checkoutString);

  //check if date has been entered
  if (!isNaN(checkin) && !isNaN(checkout)) {
    //set days value
    document.getElementById("numberOfDays").value = checkout.diff(
      checkin,
      "days"
    );
    let numOfAdults = document.getElementById("dropdown").value;

    // set cost value
    document.getElementById("cost").value =
      numOfAdults * checkout.diff(checkin, "days") * 150 + "$";
  } else {
    //clear
    document.getElementById("numberOfDays").value = "";
    document.getElementById("cost").value = "";
  }
}

function clearElements() {
  let form = document.getElementsByClassName("row");

  let inputElements = form.querySelectorAll("input");

  inputElements.forEach((element) => {
    element.value = "";
  });
}

function hey() {
  console.log("hey");
}

document.getElementById("shit").addEventListener(onclick, hey());
document
  .getElementById("checkindate")
  .addEventListener("change", costCalculation());

document
  .getElementById("checkoutdate")
  .addEventListener("change", costCalculation());
