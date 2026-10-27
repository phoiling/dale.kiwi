const toggle = document.getElementById("day-night-toggle");
const wipe = document.getElementById("wipe")

toggle.addEventListener("click", () => {
  const rect = toggle.getBoundingClientRect();
  wipe.style.left = rect.left + "px";
  wipe.style.top = rect.top + "px";

  toggle.classList.toggle("day");
  document.body.classList.toggle("day");
})
