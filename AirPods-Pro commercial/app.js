const intro = document.querySelector(".intro");
const video = intro.querySelector("video");


// Scroll Magic

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
duration: 60000,
triggerElemnt: intro,
triggerHook: 0
})
.setPin(intro)
.addTo(controller);

// Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
scrollpos = e.scrollPos / 1000;
});

setInterval(()=>{
delay += (scrollpos-delay) * accelamount;
video.currentTime = delay;
},33.3);
