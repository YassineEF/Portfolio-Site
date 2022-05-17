//effect typed in home page
$(document).ready(() => {
    let typed = new Typed('.textTyped', {
        strings: ["I'm a Developer", "I'm 23 years old", 'Creativity never end.', 'Ideas as infinite as space.'],
        typeSpeed: 80,
        backSpeed: 60,
        // shuffle: true,
        loop: true
    });
});