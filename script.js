function costCalculation() {
  // checkin and checkout date values
  let checkinString = new Date(document.getElementById("checkindate").value);
  let checkoutString = new Date(document.getElementById("checkoutdate").value);

  let checkin = moment(checkinString);
  let checkout = moment(checkoutString);

  //check if date has been entered
  if (!isNaN(checkin) && !isNaN(checkout)) {
    //set days value
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

let datepicker = document.getElementById("checkoutdate");

//datepicker.addEventListener("click", costCalculation());

let button1 = document.getElementById("heyy");
button1.onclick = console.log("jkhg");

console.log("sfjhjksdjkg");
console.log(button1);
// buttt.addEventListener("click", hey());
//resetButton = document.getElementById("Reset");
//resetButton.onClick = clearElements();

//resetButton.addEventListener("click", clearElements);
// //call function every 0.5 second
// setInterval(costCalculation, 500);
