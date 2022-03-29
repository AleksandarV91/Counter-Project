const countNum = document.querySelector(".count");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const reset = document.querySelector(".reset");

let count = "";

plus.addEventListener("click", () => {
  count++;
  countNum.innerHTML = count;
});

minus.addEventListener("click", () => {
  count--;
  countNum.innerHTML = count;
});

reset.addEventListener("click", () => {
  count = 0;
  countNum.innerHTML = count;
});
