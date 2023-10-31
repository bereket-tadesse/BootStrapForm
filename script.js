function costCalculation() {
  // checkin and checkout date values
  let checkin = new Date(document.getElementById("checkindate").value);
  let checkout = new Date(document.getElementById("checkoutdate").value);

  //check if date has been entered
  if (!isNaN(checkin) && !isNaN(checkout)) {
    let daysDifference = (checkout - checkin) / (1000 * 3600 * 24) + 1;

    //set days value
    document.getElementById("numberOfDays").value = daysDifference;

    let numOfAdults = document.getElementById("dropdown").value;
    //find cost
    let cost = numOfAdults * daysDifference * 150;
    // set cost value
    document.getElementById("cost").value = cost + "$";
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
