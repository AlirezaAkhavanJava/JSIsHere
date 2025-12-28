function calculateBMI() {
  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);
  const result = document.getElementById("result");
  const img = document.getElementById("who");

  if (!height || !weight) {
    result.textContent = "Enter valid numbers.";
    img.src = "";
    return;
  }

  const bmi = weight / ((height / 100) ** 2);

  if (bmi < 18.5) {
    result.textContent = `BMI: ${bmi.toFixed(1)} — Skinny`;
    img.src = "images/meg.png";
    img.alt = "Meg";
  } else if (bmi < 25) {
    result.textContent = `BMI: ${bmi.toFixed(1)} — Fit`;
    img.src = "images/joe.png";
    img.alt = "Joe";
  } else {
    result.textContent = `BMI: ${bmi.toFixed(1)} — Fat`;
    img.src = "images/pitter.png";
    img.alt = "Peter";
  }
}
