

const PI = Math.PI;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myText").value;
  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumference + " cm";
};
