function costCalculation() {
  // checkin and checkout date values
  let checkinString = new Date(document.getElementById("checkindate").value);
  let checkoutString = new Date(document.getElementById("checkoutdate").value);
  //moment objects
  let checkin = moment(checkinString);
  let checkout = moment(checkoutString);

  //check if date has been entered and is +ve
  if (!isNaN(checkin) && !isNaN(checkout)) {
    //set days value
    let dayDifference = checkout.diff(checkin, "days");

    let costValue =
      document.getElementById("dropdown").value * dayDifference * 150;

    //set days
    document.getElementById("numberOfDays").value = dayDifference;
    // set cost value
    document.getElementById("cost").value = costValue;
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

document
  .getElementById("checkindate")
  .addEventListener("change", costCalculation);
document
  .getElementById("checkoutdate")
  .addEventListener("change", costCalculation);

// parent ID of inputs
let divIDs = [
  "userNameDiv",
  "firstNameDiv",
  "lastNameDiv",
  "phoneDiv",
  "faxDiv",
  "emailDiv",
];

//all input ids
let inputElements = document.querySelectorAll("input[id]");

//submit button ( using jquery)
$("#submit").on("click", function () {
  let testPassed = true;
  let i = 0;
  while (i <= 5) {
    //input id
    let id = `#${inputElements[i].id}`;
    //Div classes
    let classid = `#${divIDs[i]}`;

    let inputValue = $(id).val();
    if (!inputValue) {
      toastr.error("Enter: " + id);
      $(classid).addClass("has-error");
      testPassed = false;
    } else {
      $(classid).removeClass("has-error");
    }

    i++;
  }

  if (!$("#cost").val()) {
    toastr.error("Cost is not calculated!");
  } else if ($("#cost").val() < 0) {
    toastr.error("Cost is negative!");
  } else if (testPassed) {
    toastr.success("Sibmitted Succefully!" + "😀");
  }
});

// for removing the red error realtime
let c = 0;
while (c <= 5) {
  //input id
  let id = `#${inputElements[c].id}`;
  //Div classes
  let classid = `#${divIDs[c]}`;

  $(id).on("input", function () {
    let inputValue = $(id).val();
    if (inputValue) {
      $(classid).removeClass("has-error");
    }
  });
  c++;
}

// reset button
$("#reset").on("click", function () {
  toastr.success("Cleard!");
  inputElements.forEach((e) => {
    e.value = "";
  });
  //removing textarea val
  $("#message").val("");
});
