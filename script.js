function costCalculation() {
  let checkin = new Date(document.getElementById("checkindate").value);
  let checkout = new Date(document.getElementById("checkoutdate").value);

  let daysDifference = (checkout - checkin) / (1000 * 3600 * 24) + 1;
  document.getElementById("numberOfDays").value = daysDifference;

  let numOfAdults = document.getElementById("dropdown").value;

  let cost = numOfAdults * daysDifference * 150;

  document.getElementById("cost").value = cost;
}

setInterval(costCalculation, 1000);
