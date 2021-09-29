let hireMeAbilities =document.querySelectorAll(".abilities .balls p span");
let hireMeProfile =document.querySelectorAll(".profile .balls p span");
let hireMeExperiances =document.querySelectorAll(".experiances .balls p span");
let listelement =document.querySelectorAll(".bar li");
let myImg = document.querySelector (".profile .profile-info img");
let stars = document.getElementsByClassName("stars");
let contactLink =document.querySelector(".contact .links");
// start bar 
document.querySelectorAll(".bar")[0].addEventListener("click", function() {
    for (let i = 0 ;i<5 ; i++) {
        listelement[i].classList.toggle("active");}
    document.querySelector(".bar").classList.toggle("active");
});
window.onscroll = () => {
    for (let i = 0 ;i<5 ; i++) {
        listelement[i].classList.remove("active");}
    document.querySelector(".bar").classList.remove("active");
}
// end bar
// start onscroll
window.onscroll = function () {
  console.log(window.scrollY);
  // bar , img and hire Me Profile
  if (window.scrollY >=615) {
    document.querySelector(".bar").classList.remove("none");
    myImg.classList.add("grow");
    for (let i=0 ; i<7; i++){
      hireMeProfile[i].classList.add("move");
    }
  } else {
    document.querySelector(".bar").classList.add("none");
    myImg.classList.remove("grow");
    for (let i=0 ; i<7; i++){
      hireMeProfile[i].classList.remove("move");
    }
  }
  // large screen
  if (window.innerWidth>992){
    // stars 
    if (window.scrollY >=2100) {
      for(let i=0 ;i<stars.length ; i++){
        stars[i].classList.remove("none");
      }
    } else {
      for(let i=0 ;i<stars.length ; i++){
        stars[i].classList.add("none");
      }
    }
    // contact link
    if (window.scrollY >=3800) {
      contactLink.classList.remove("hidden");
    } else {
      contactLink.classList.add("hidden");
    }
    // experiances ball 
    if (window.scrollY >=1500) {
      for (let i=0 ; i<7; i++){
        hireMeExperiances[i].classList.add("move");
      }
    } else {
      for (let i=0 ; i<7; i++){
        hireMeExperiances[i].classList.remove("move");
      }
    }
    // abilities ball 
    if (window.scrollY >=2700) {
      for (let i=0 ; i<7; i++){
        hireMeAbilities[i].classList.add("move");
      }
    } else {
      for (let i=0 ; i<7; i++){
        hireMeAbilities[i].classList.remove("move");
      }
    }
  }
    // small screen
  else {
     // stars 
    if (window.scrollY >=4000) {
      for(let i=0 ;i<stars.length ; i++){
        stars[i].classList.remove("none");
      }
    } else {
      for(let i=0 ;i<stars.length ; i++){
        stars[i].classList.add("none");
      }
    }
    // contact link
    if (window.scrollY >=5500) {
      contactLink.classList.remove("hidden");
    } else {
      contactLink.classList.add("hidden");
    }
    // experiances ball 
    if (window.scrollY >=2700) {
      for (let i=0 ; i<7; i++){
        hireMeExperiances[i].classList.add("move");
      }
    } else {
      for (let i=0 ; i<7; i++){
        hireMeExperiances[i].classList.remove("move");
      }
    }
    // abilities ball 
    if (window.scrollY >=4060) {
      for (let i=0 ; i<7; i++){
        hireMeAbilities[i].classList.add("move");
      }
    } else {
      for (let i=0 ; i<7; i++){
        hireMeAbilities[i].classList.remove("move");
      }
    }
  }
}
// end onscroll
// start project 
var swiper = new Swiper(".project-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay : 7500,
        disableOnInteraction:false,
    },
    centeredSlides:false,
    breakpoints: {
      510: {
        slidesPerView: 1,
      },
      1020: {
        slidesPerView: 2,
      },
    },
  });
// end project