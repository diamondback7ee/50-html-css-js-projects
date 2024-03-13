const container = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
  container.classList.remove("hover-right");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
  container.classList.remove("hover-left");
});
