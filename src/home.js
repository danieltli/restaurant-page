export function createHome(){
//get the container
const container = document.getElementById("content");
//create elements one by one
// we will be using grid anyway, for ease of styling 
const homeName = document.createElement("div");
homeName.className = "name-container";
const pageName = document.createElement("h1");
pageName.textContent = "River's Flow Noodle Shop"
pageName.id = "name";
const header = document.querySelector("header");

const buttonArr = ["Home","About","Contact"].map((label) => {
    const btn = document.createElement("button");
  btn.textContent = label;
  btn.id = label.toLowerCase() + "-btn"; // optional: assign an ID like 'home-btn'
  return btn;
});

header.append(pageName);
const nav = document.querySelector("nav");
buttonArr.forEach((btn) => nav.appendChild(btn));
nav.id = "nav";

}

