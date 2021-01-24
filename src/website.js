import loadHome from "./home";
import loadMenu from "./menu";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.textContent = "Mozzafiato";
  header.appendChild(restaurantName);

  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("nav");
}

function createButton(text) {}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");

  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = "Copyright © 2021 michalosman";
  footer.appendChild(copyright);

  return footer;
}

function initializeWebsite() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  loadHome();
}

export default initializeWebsite;
