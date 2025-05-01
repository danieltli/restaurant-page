import { createContact } from "./contact.js";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import bgBanner from "./background.jpg";
import './style.css';

const bannerContainer = document.createElement("div");
bannerContainer.className = "banner-container";
const banner = document.createElement("img");
banner.src = bgBanner;
banner.id = "banner";
export function switchTab(event) {
  let clickedBtn = event.target.id;

  switch (clickedBtn) {
    case "home-btn":
      createHome();
      break;
    case "menu-btn":
      createMenu();
      break;
    case "contact-btn":
      createContact();
      break;
  }
}
//create elements one by one
// we will be using grid anyway, for ease of styling
const homeName = document.createElement("div");
homeName.className = "name-container";
const pageName = document.createElement("h1");
pageName.textContent = "Last Era Diner";
pageName.id = "name";
const header = document.querySelector("header");

const buttonArr = ["Home", "Menu", "Contact"].map((label) => {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.id = label.toLowerCase() + "-btn";
  btn.addEventListener("click", switchTab);
  return btn;
});

header.append(pageName);
header.append(bannerContainer);
const nav = document.querySelector("nav");
buttonArr.forEach((btn) => nav.appendChild(btn));
nav.id = "nav";

//TODO 
//1. Make menu items and polish the page
//2 Publish to github pages