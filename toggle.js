const toggle = document.getElementById("day-night-toggle");
const wipe = document.getElementById("wipe")

if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  const rect = toggle.getBoundingClientRect();
  wipe.style.left = rect.left + "px";
  wipe.style.top = rect.top + "px";

  toggle.classList.add("day");
  document.body.classList.add("day")
}

toggle.addEventListener("click", () => {
  const rect = toggle.getBoundingClientRect();
  wipe.style.left = rect.left + "px";
  wipe.style.top = rect.top + "px";

  toggle.classList.toggle("day");
  document.body.classList.toggle("day");
})


setTimeout(() => {
  document.body.classList.remove("loading");
}, 50);
