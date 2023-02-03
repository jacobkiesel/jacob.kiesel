import TRUNK from "./node_modules/vanta/src/vanta.trunk.js";


TRUNK({
  el: "#your-element-selector",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x16113c,
  backgroundColor: 0x2b223e,
});

document.querySelector(".fa-code").addEventListener("click", function() {
  document.querySelector(".modal1").style.display = "block";
  console.log("hello")
});
document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.code == "Escape") {
    document.querySelector(".close").style.display = "none";
  }
};

document.querySelector(".fa-x").addEventListener("click", function() {
  document.querySelector(".close").style.display = "none";
});