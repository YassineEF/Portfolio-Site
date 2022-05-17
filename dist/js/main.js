import { anims } from "./animation.js";

const menuButton = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn_burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav_item");
const TskillsButt = document.getElementById("Tskills");
const SskillsButt = document.getElementById("skillsSoft");
const TechnicalSquare = document.getElementById("TechnicalSqure");
const SoftSquare = document.getElementById("SoftSquare");

let showMenu = false;

menuButton.addEventListener("click", toggleMenu);



//function menu toggle
function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}





TskillsButt.addEventListener("click", clearClass);
SskillsButt.addEventListener("click", clearClass);


//function add class Hide or not
function clearClass() {
  if (TechnicalSquare.classList.contains("hideSquare")) {
    TechnicalSquare.classList.remove("hideSquare");
    SoftSquare.classList.add("hideSquare");
    TskillsButt.classList.remove('notSelected')
    SskillsButt.classList.add('notSelected')
    const SoftSkills = document.querySelectorAll("#SoftSquare circle");

    anims(SoftSkills);
  } else {
    TechnicalSquare.classList.add("hideSquare");
    SoftSquare.classList.remove("hideSquare");
    TskillsButt.classList.add('notSelected')
    SskillsButt.classList.remove('notSelected')
    // const SoftSkills = document.querySelectorAll("#SoftSquare circle");

    // anims(SoftSkills);
    const SoftSkills = document.querySelectorAll("#SoftSquare circle");

    anims(SoftSkills);
  }
}

//change dynamically the year
const d = new Date();
let year = d.getFullYear();
$(".year").html(year);
