const burger = document.querySelector("nav svg");

burger.addEventListener("click", () => {
  if (burger.classList.contains("active")) {
    gsap.to(".links", { x: "100%" });
    gsap.to("line", { stroke: "white" });
  } else {
    gsap.to(".links", { x: "0%" });
    gsap.to(".line", { stroke: "black" });
    gsap.fromTo(
      ".links a",
      { opacity: "0", y: 0 },
      { opacity: "1", y: 20, delay: 0.25, stagger: 0.25 }
    );
  }
  burger.classList.toggle("active");
});
