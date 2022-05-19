// import { anims } from "./animation.js";

const menuButton = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn_burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav_item");


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







const Intersect = document.getElementById('Intersect');
const Intersect2 = document.getElementById('Intersect_2');
const Intersect3 = document.getElementById('Intersect_3');
const Intersect4 = document.getElementById('Intersect_4');
const Intersect5 = document.getElementById('Intersect_5');
const Intersect6 = document.getElementById('Intersect_6');
const LogoSvg = document.getElementById('logoSVG')

console.log(LogoSvg);
//Split Logo In different ways
LogoSvg.addEventListener('mouseover', function() {

  Intersect.style.transform = "translate(20%, -20%)";
  Intersect2.style.transform = "translate(20%, 0%)";
  Intersect3.style.transform = "translate(20%, 20%)";
  Intersect4.style.transform = "translate(-20%, -20%)";
  Intersect5.style.transform = "translate(-20%, 0%)";
  Intersect6.style.transform = "translate(-20%, 20%)";

})

//assemble logo to the origin
LogoSvg.addEventListener('mouseout', function() {

  Intersect.style.transform = "translate(0%, 0%)";
  Intersect2.style.transform = "translate(0%, 0%)";
  Intersect3.style.transform = "translate(0%, 0%)";
  Intersect4.style.transform = "translate(0%, 0%)";
  Intersect5.style.transform = "translate(0%, 0%)";
  Intersect6.style.transform = "translate(0%, 0%)";

})

//change dynamically the year
const d = new Date();
let year = d.getFullYear();
$(".year").html(year);
