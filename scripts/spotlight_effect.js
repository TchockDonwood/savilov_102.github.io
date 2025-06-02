const spotlight = document.querySelector(".spotlight-overlay");
let targetX = 50,
  targetY = 50;
let currentX = 50,
  currentY = 50;

document.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function animateSpotlight() {
  currentX += (targetX - currentX) * 0.08;
  currentY += (targetY - currentY) * 0.08;

  spotlight.style.setProperty("--x", `${currentX}px`);
  spotlight.style.setProperty("--y", `${currentY}px`);

  requestAnimationFrame(animateSpotlight);
}

animateSpotlight();
