const texts = [
  "Smarter HR",
  "Faster Payroll",
  "Stronger Compliance"
];

let index = 0;
const rotateText = document.getElementById("rotateText");

setInterval(() => {
  rotateText.style.opacity = 0;
  rotateText.style.transform = "translateY(10px)";

  setTimeout(() => {
    index = (index + 1) % texts.length;
    rotateText.textContent = texts[index];
    rotateText.style.opacity = 1;
    rotateText.style.transform = "translateY(0)";
  }, 400);

}, 2500);
