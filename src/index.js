import { createContact } from "./contact";
import { createHome } from "./home";
import { createMenu } from "./menu";
import bgBanner from "./background.png";
import './style.css';

const banner = document.createElement("img");
banner.src = bgBanner;
banner.id = "banner";
export function switchTab(event) {
  let clickedBtn = event.target.id;

  switch (clickedBtn) {
    case "home-btn":
      createHome();
      break;
    case "menu-button":
      createMenu();
      break;
    case "contact-button":
      createContact();
      break;
  }
}
//create elements one by one
// we will be using grid anyway, for ease of styling
const homeName = document.createElement("div");
homeName.className = "name-container";
const pageName = document.createElement("h1");
pageName.textContent = "River's Flow Noodle Shop";
pageName.id = "name";
const header = document.querySelector("header");

const buttonArr = ["home", "menu", "contact"].map((label) => {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.id = label.toLowerCase() + "-btn";
  btn.addEventListener("click", switchTab);
  return btn;
});

header.append(pageName);

const nav = document.querySelector("nav");
buttonArr.forEach((btn) => nav.appendChild(btn));
nav.id = "nav";
