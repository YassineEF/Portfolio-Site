"use-strict";

export function anims(elements) {
  let anims = [];

  elements.forEach((element) => {
    let kE = new KeyframeEffect(
      element,
      [{ strokeDashoffset: "472px" }, { strokeDashoffset: 0 }],
      {
        duration: 1500,
        fill: "forwards",
      }
    );
    anims.push(new Animation(kE, document.timeline));
  });

  console.log(anims);
  anims.forEach((anim) => anim.play());
}
