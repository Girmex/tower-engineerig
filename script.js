let navbar = document.querySelector(".header .navbar");
let menu = document.querySelector("#menu");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
window.onscroll = () => {
  const header = document.querySelector("header");
  if (window.scrollY > 5) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};
  var swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 3000, // Adjust the delay between slides (in milliseconds)
    },
  });
