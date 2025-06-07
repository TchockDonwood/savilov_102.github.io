gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.ticket-container').forEach((ticket, i) => {
  const left = ticket.querySelector('.ticket-left');
  const right = ticket.querySelector('.ticket-right');

  gsap.timeline({
    scrollTrigger: {
      trigger: ticket,
      start: `top ${60 + i * 10}%`,
      end: "bottom 40%",
      scrub: true,
    }
  })
  .to(left, {
    x: -150,
    rotation: -10,
    opacity: 0,
    ease: "power2.out"
  }, 0)
  .to(right, {
    x: 150,
    rotation: 6,
    opacity: 0,
    ease: "power2.out"
  }, 0);
});