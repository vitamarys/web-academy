const randomColorCircles = document.querySelector(".random-circle");

function random_rgba() {
  let o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}
console.log("random_rgba");
function randomColor() {
  randomColorCircles.style.background = "red";
}

randomColorCircles.addEventListener("click", randomColor);
