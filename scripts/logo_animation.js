const logoWrapper = document.getElementById("logoContainer");
const logoText = document.getElementById("logoText");
const logoIcon = document.querySelector(".logo-icon");

logoIcon.style.transform = "translateX(70px)";

logoWrapper.addEventListener("mouseenter", () => {
  logoText.classList.remove("animate__fadeOutLeft");
  logoText.classList.add("animate__animated", "animate__fadeInLeft");
  logoText.style.opacity = "1";
  logoText.style.pointerEvents = "auto";
  logoIcon.style.transform = "translateX(0px)";
});

logoWrapper.addEventListener("mouseleave", () => {
  logoText.classList.remove("animate__fadeInRight");
  logoText.classList.add("animate__fadeOutLeft");

  logoIcon.style.transform = "translateX(70px)";

  logoText.addEventListener("animationend", function handler(e) {
    if (e.animationName === "fadeOutLeft") {
      logoText.style.opacity = "0";
      logoText.classList.remove("animate__animated", "animate__fadeOutLeft");
      logoText.removeEventListener("animationend", handler);
    }
  });
});
