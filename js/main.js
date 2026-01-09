// Constants & Variables
const openNav = document.querySelector("#openNav");
const closeNav = document.querySelector("#closeNav");
const navUl = document.querySelector("nav").querySelector("ul");
const loadAbles = document.querySelectorAll(".loadAble");

// Open & Close NavBar
openNav.addEventListener("click", ()=>{
    navUl.style.transform = "translateX(0)"; // ComeBack
    openNav.style.fontSize = "0";
    closeNav.style.fontSize = "2rem";
});

closeNav.addEventListener("click", closeNavBar);

// Twicking Nav on Portrait View
if (window.matchMedia("(orientation: portrait)").matches) { 
  navUl.querySelectorAll("a").forEach( (element) => { 
    element.classList.add("button"); // Make All Nav links = Button
    element.addEventListener("click", closeNavBar); // Close Nav when click on link 
  });
}

// Animate on Scroll
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting){ entry.target.classList.add("reveal"); }
    });
    },  {
      threshold: 0.5
    });

document.querySelectorAll(".noReveal").forEach(element => { observer.observe(element) });

// Disable Placeolder on Img Load
loadAbles.forEach((loadAble)=>{
  loadAble.querySelectorAll("img").forEach((img)=>
    {
      img.addEventListener("load", ()=>{
        loadAble.classList.remove("placeholder");
        img.style.opacity = "1";
    });
  });
});

// Some Functions
function closeNavBar() {
  navUl.style.transform = "translateX(1000px)"; // SendBack
  closeNav.style.fontSize = "0";
  openNav.style.fontSize = "2rem";
}
