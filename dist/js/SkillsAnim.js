import { anims } from "./animation.js";

const TskillsButt = document.getElementById("Tskills");
const SskillsButt = document.getElementById("skillsSoft");
const TechnicalSquare = document.getElementById("TechnicalSqure");
const SoftSquare = document.getElementById("SoftSquare");

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
