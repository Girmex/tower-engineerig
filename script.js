let navbar = document.querySelector(".header .navbar");
let menu = document.getElementById("menu");
let nav=document.getElementById('nav')
let hide=document.getElementById('close')

menu.onclick = () => {
  nav.style.display="block";
  menu.style.display="none"
  hide.style.display="block"
 
};
hide.onclick=()=>{
  nav.style.display="none";
  menu.style.display="block"
  hide.style.display="none"
}




window.onscroll = () => {
  const header = document.querySelector("header");
  if (window.scrollY > 5) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

  const activePage= window.location.pathname;
  const NavLinks= document.querySelectorAll('nav a').forEach(link=>{
    if(link.href.includes(`${activePage}`)){
      link.classList.add('active');
      console.log(link.href);
      console.log(activePage)
    }
  })
