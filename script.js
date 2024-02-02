const controlBtn = document.querySelectorAll(".controlBtn");
const gallery = document.querySelector(".gallery");
// const imgDiv = document.querySelector("#imgDiv");
gallery.addEventListener("wheel", (e) => {
  e.preventDefault();
  gallery.scrollLeft += e.deltaY;
});
controlBtn[0].addEventListener("click", () => {
  gallery.style.scrollBehavior = "smooth";
  gallery.scrollLeft -= 900;
});
controlBtn[1].addEventListener("click", () => {
  gallery.style.scrollBehavior = "smooth";
  gallery.scrollLeft += 900;
});
