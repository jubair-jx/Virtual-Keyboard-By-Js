//Select All Elements

const button = document.querySelectorAll(".btn");
const textarea = document.querySelector("textarea");
const delete_item = document.querySelector(".delete");
const space_btn = document.querySelector(".space");
const shift_btn = document.querySelector(".shift");
const shift_btn2 = document.getElementById("shift");

let chars = [];

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    textarea.value += btn.innerText;
    chars = textarea.value.split("");
  });
});

delete_item.addEventListener("click", () => {
  chars.pop();
  textarea.value = chars.join("");
});

space_btn.addEventListener("click", () => {
  chars.push(" ");
  textarea.value = chars.join("");
});

shift_btn.addEventListener("click", () => {
  button.forEach((btnz) => {
    btnz.classList.toggle("upper");
  });
});

shift_btn2.addEventListener("click", () => {
  button.forEach((btns) => {
    btns.classList.toggle("upper");
  });
});
