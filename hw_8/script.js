const lights = document.querySelectorAll(".light");

function cancelAll() {
  for (let i = 0; i < lights.length; i++) {
    lights[i].classList.remove("active");
  }
}
function onClick(button) {
  cancelAll();
  button.classList.add("active");
}
