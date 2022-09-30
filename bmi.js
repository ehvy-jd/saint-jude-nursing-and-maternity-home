// Bmi calculator
let bmiSubmit = document.getElementById("bmi-submit");
let bmiDiv = document.getElementById("bmi-div");
let bmiResult = document.getElementById("bmi-result");
let reset = document.getElementById("bmi-reset");

let calculateBmi = () => {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let bmi = (weight / (height / 100) ** 2).toFixed(2);
  let superScript = "\u00B2";

  if (bmi <= 18.4) {
    bmiDiv.style.display = "block";
    bmiResult.innerHTML =
      "Your BMI is " +
      bmi +
      "kg/m" +
      superScript +
      ".<br> According to the World Health Organisation recommendations on Body Mass Index, your bmi falls under the underweight category.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiDiv.style.display = "block";
    bmiResult.innerHTML =
      "Your BMI is " +
      bmi +
      "kg/m" +
      superScript +
      ".<br> According to the World Health Organisation recommendations on Body Mass Index, your bmi falls under the normal weight category.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiDiv.style.display = "block";
    bmiResult.innerHTML =
      "Your BMI is " +
      bmi +
      "kg/m" +
      superScript +
      ".<br> According to the World Health Organisation recommendations on Body Mass Index, your bmi falls under the Pre-Obese category.";
  } else if (bmi > 30) {
    bmiDiv.style.display = "block";
    bmiResult.innerHTML =
      "Your BMI is " +
      bmi +
      "kg/m" +
      superScript +
      ".<br> According to the World Health Organisation recommendations on Body Mass Index, your bmi falls under the Obese category.";
  } else {
    alert(`Fill in your values`);
  }
};

bmiSubmit.addEventListener("click", calculateBmi);

const resetBmi = () => {
  bmiDiv.style.display = "none";
  weight.value = "";
  height.value = "";
};

reset.addEventListener("click", resetBmi);
