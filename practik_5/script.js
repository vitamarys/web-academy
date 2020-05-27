/*let button = document.querySelector("#button");
console.log(button);
function clickOk() {
  let exMargin = parseInt(button.style.marginLeft || "0");
  console.log("helloo");
  let x = exMargin + 10 + "px";
  button.style.marginLeft = x;
}
button.addEventListener("click", clickOk);
*/
let btn = document.querySelector("#button");
let block = document.querySelector(".paragraf");
console.log(btn);
function clickOk() {
  console.log(btn.classList.contains("active"));
  if (block.classList.contains("active")) {
    btn.classList.remove("active");
    block.classList.remove("active");
  } else {
    block.classList.add("active");
  }
}
button.addEventListener("click", clickOk);
