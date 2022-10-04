// Bmi calculator (metric)
let bmiSubmit = document.getElementById("bmi-submit");
let bmiDiv = document.getElementById("bmi-div");
let bmiResult = document.getElementById("bmi-result");
let reset = document.getElementById("bmi-reset");

let calculateBmiMet = () => {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  // calculate bmi
  height = parseFloat(height);
  weight = parseFloat(weight);
  let bmi;
  if (height > 0 && weight > 0) {
    bmi = (weight / (height / 100) ** 2).toFixed(1);
  } else {
    alert(`Make sure all fields are filled in correctly!`);
    resetBmiMet();
  }

  // superscript bmi S.I. unit
  let superScript = "\u00B2";

  if (bmiDiv.style.display === "block") {
    alert(`Press the reset button`);
  }

  if (bmi <= 18.4) {
    bmiDiv.style.display = "block";
    bmiResult.innerHTML =
      "Your BMI is " +
      bmi +
      "kg/m" +
      superScript +
      ".<br> According to the World Health Organisation recommendations on Body Mass Index, your BMI falls under the underweight category.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiDiv.style.display = "block";
    bmiResult.innerHTML =
      "Your BMI is " +
      bmi +
      "kg/m" +
      superScript +
      ".<br> According to the World Health Organisation recommendations on Body Mass Index, your BMI falls under the normal weight category.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiDiv.style.display = "block";
    bmiResult.innerHTML =
      "Your BMI is " +
      bmi +
      "kg/m" +
      superScript +
      ".<br> According to the World Health Organisation recommendations on Body Mass Index, your BMI falls under the Pre-Obese category.";
  } else if (bmi > 30) {
    bmiDiv.style.display = "block";
    bmiResult.innerHTML =
      "Your BMI is " +
      bmi +
      "kg/m" +
      superScript +
      ".<br> According to the World Health Organisation recommendations on Body Mass Index, your BMI falls under the Obese category.";
  }
};

bmiSubmit.addEventListener("click", calculateBmiMet);

// BMI metric reset
const resetBmiMet = () => {
  bmiDiv.style.display = "none";
  weight.value = "";
  height.value = "";
};

reset.addEventListener("click", resetBmiMet);

// Bmi calculator (standard)
let bmiSubmitStd = document.getElementById("bmi-submit-s");
let bmiDivStd = document.getElementById("bmi-div-s");
let bmiResultStd = document.getElementById("bmi-result-s");
let resetStd = document.getElementById("bmi-reset-s");

let calculateBmiStd = () => {
  let weightStd = document.getElementById("weight-s").value;
  let heightStdf = document.getElementById("height-ft-s").value;
  let heightStdi = document.getElementById("height-in-s").value;

  weightStd = parseFloat(weightStd);
  heightStdf = parseFloat(heightStdf);
  heightStdi = parseFloat(heightStdi);

  let heightStd = heightStdf * 12 + heightStdi;

  // calculate bmi
  let bmi = ((weightStd / heightStd ** 2) * 703).toFixed(1);

  // superscript bmi S.I. unit
  let superScript = "\u00B2";

  if (bmiDivStd.style.display === "block") {
    alert(`Press the reset button!`);
  }

  if (
    bmi <= 18.4 &&
    heightStdi <= 12 &&
    heightStdi >= 0 &&
    weightStd > 0 &&
    heightStdf > 0
  ) {
    bmiDivStd.style.display = "block";
    bmiResultStd.innerHTML =
      "Your BMI is " +
      bmi +
      "kg/m" +
      superScript +
      ".<br> According to the World Health Organisation recommendations on Body Mass Index, your BMI falls under the underweight category.";
  } else if (
    bmi >= 18.5 &&
    bmi <= 24.9 &&
    heightStdi <= 12 &&
    heightStdi >= 0 &&
    weightStd > 0 &&
    heightStdf > 0
  ) {
    bmiDivStd.style.display = "block";
    bmiResultStd.innerHTML =
      "Your BMI is " +
      bmi +
      "kg/m" +
      superScript +
      ".<br> According to the World Health Organisation recommendations on Body Mass Index, your BMI falls under the normal weight category.";
  } else if (
    bmi >= 25 &&
    bmi <= 29.9 &&
    heightStdi <= 12 &&
    heightStdi >= 0 &&
    weightStd > 0 &&
    heightStdf > 0
  ) {
    bmiDivStd.style.display = "block";
    bmiResultStd.innerHTML =
      "Your BMI is " +
      bmi +
      "kg/m" +
      superScript +
      ".<br> According to the World Health Organisation recommendations on Body Mass Index, your BMI falls under the Pre-Obese category.";
  } else if (
    bmi > 30 &&
    heightStdi <= 12 &&
    heightStdi >= 0 &&
    weightStd > 0 &&
    heightStdf > 0
  ) {
    bmiDivStd.style.display = "block";
    bmiResultStd.innerHTML =
      "Your BMI is " +
      bmi +
      "kg/m" +
      superScript +
      ".<br> According to the World Health Organisation recommendations on Body Mass Index, your BMI falls under the Obese category.";
  } else {
    alert(
      `Make sure all fields are filled in correctly with the value for inches no greater than 12 or less than 0!`
    );
    resetBmiStd();
  }
};

bmiSubmitStd.addEventListener("click", calculateBmiStd);

// BMI standard reset
const resetBmiStd = () => {
  bmiDivStd.style.display = "none";
  document.getElementById("weight-s").value = "";
  document.getElementById("height-ft-s").value = "";
  document.getElementById("height-in-s").value = "";
};

resetStd.addEventListener("click", resetBmiStd);

// BMI standard metric toggle switch
let bmiSwitch = document.getElementById("bmi-switch");
let bmiMet = document.getElementById("bmi-form-container-metric");
let bmiStd = document.getElementById("bmi-form-container-standard");
const bmiToggle = () => {
  if (bmiMet.style.display === "block" && bmiStd.style.display === "none") {
    bmiMet.style.display = "none";
    bmiStd.style.display = "block";
  } else {
    bmiMet.style.display = "block";
    bmiStd.style.display = "none";
  }
};

bmiSwitch.addEventListener("click", bmiToggle);
