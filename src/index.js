import "./styles.scss";
import "./reset.css";
import diamond from "./assets/diamond.svg";

const logo = document.querySelector(".logo");
let img = document.createElement("img");
img.src = diamond;
logo.appendChild(img);

const pass = document.querySelector("#password");
const conf = document.querySelector("#confirm");
conf.addEventListener("blur", () => {
  if (conf.value !== pass.value) {
    conf.classList.add("error");
  } else {
    conf.classList.remove("error");
  }
});

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  document.querySelector("form").classList.add("submitted");
});
