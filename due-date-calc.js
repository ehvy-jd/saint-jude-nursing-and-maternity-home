// Due day calculator
lmp.max = new Date().toISOString().split("T")[0]; // For setting today as calendar date max
let dueDateSubmit = document.getElementById("due-date-submit");
let dueDateDiv = document.getElementById("due-date-div");
let dueDateResult = document.getElementById("due-date-result");
let dueDateReset = document.getElementById("due-date-reset");

const dueDate = () => {
  let lmp = document.getElementById("lmp").value;
  if (dueDateDiv.style.display === "block") {
    alert(`Press the reset button!`);
  }

  if (lmp) {
    lmp = new Date(lmp).getTime();
    let due = lmp + 1000 * 24 * 60 * 60 * 280;
    let dueDay = new Date(due).toDateString();
    dueDateResult.innerHTML = "Your due day is " + dueDay + ".";
    dueDateDiv.style.display = "block";
  } else {
    alert(`Select the date for the first day of your menstrual last period`);
  }
};

dueDateSubmit.addEventListener("click", dueDate);

// Due day reset button
const resetDueDay = () => {
  dueDateDiv.style.display = "none";
  document.getElementById("lmp").value = "";
};

dueDateReset.addEventListener("click", resetDueDay);
