function costCalculation() {
  // checkin and checkout date values
  let checkinString = new Date(document.getElementById("checkindate").value);
  let checkoutString = new Date(document.getElementById("checkoutdate").value);

  let checkin = moment(checkinString);
  let checkout = moment(checkoutString);

  //check if date has been entered
  if (!isNaN(checkin) && !isNaN(checkout)) {
    //let daysDifference = (checkout - checkin) / (1000 * 3600 * 24) + 1;

    //set days value

    //document.getElementById("numberOfDays").value = daysDifference;
    document.getElementById("numberOfDays").value = checkin.diff(checkout);
    let numOfAdults = document.getElementById("dropdown").value;

    // set cost value
    document.getElementById("cost").value =
      numOfAdults * checkin.diff(checkout) * 150 + "$";
  } else {
    //clear
    document.getElementById("numberOfDays").value = "";
    document.getElementById("cost").value = "";
  }
  console.log("hey");
}

function clearElements() {
  let form = document.getElementsByClassName("row");

  let inputElements = form.querySelectorAll("input");

  inputElements.forEach((element) => {
    element.value = "";
  });
}

resetButton = document.getElementById("Reset");
resetButton.onClick = clearElements();

//resetButton.addEventListener("click", clearElements);
// call function every 0.5 second
setInterval(costCalculation, 500);
console.log("hello world");
