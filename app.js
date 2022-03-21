const Bulb = document.querySelector("#bulb");
const Switch = document.querySelector("#switch");

Switch.addEventListener("click", function () {
  if (Bulb.src.match("off")) {
    Bulb.src = "./img/bulb-on.png";
    Switch.innerHTML = "Turn Off";
  } else {
    Bulb.src = "./img/bulb-off.png";
    Switch.innerHTML = "Turn On";
  }
});
