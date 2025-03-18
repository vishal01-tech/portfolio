
let prevScrollPos = window.scrollY; // Fixed variable name

console.log(prevScrollPos);

window.addEventListener("scroll", () => {
  const navBar = document.querySelector(".navBar");
  const currentScrollPos = window.scrollY;

  if (currentScrollPos > prevScrollPos) {
    navBar.classList.add("hide");
    navBar.classList.remove("show");
  } else {
    navBar.classList.add("show");
    navBar.classList.remove("hide");
  }

  prevScrollPos = currentScrollPos;
});
