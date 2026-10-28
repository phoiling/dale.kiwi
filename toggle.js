const toggle = document.getElementById("day-night-toggle");
const wipe = document.getElementById("wipe");
const clouds = document.getElementById("clouds");

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


for (let i = 0; i < 100; i++) {
  const star = document.createElement("span");
  star.className = "star";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDelay = Math.random() * 1 + "s";
  stars.appendChild(star);
}

for (let i = 0; i < 8; i++) {
  const cloud = document.createElement("span");
  cloud.className = "cloud"
  cloud.style.top = (200 + Math.random() * (window.innerHeight - 300)) + "px";
  cloud.style.animationDuration = 14 + Math.random() * 10 + "s";
  cloud.style.animationDelay = Math.random() * 8 + "s"
  clouds.appendChild(cloud);
}

if (document.body.classList.contains("day")) {
  document.body.classList.add("run");
} else {
  setTimeout(() => {
    document.body.classList.toggle("run");
  }, 500);
}
