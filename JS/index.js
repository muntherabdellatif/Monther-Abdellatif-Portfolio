let hireMeProject =document.querySelectorAll(".project .balls p span");
let hireMeAbilities =document.querySelectorAll(".abilities .balls p span");
let hireMeProfile =document.querySelectorAll(".profile .balls p span");
let hireMeExperiances =document.querySelectorAll(".experiances .balls p span");
let listelement =document.querySelectorAll(".bar li");
let myImg = document.querySelector (".profile .profile-info img");
let stars = document.getElementsByClassName("stars");
let contactLink =document.querySelector(".contact .links");
let contactSection =document.getElementById("contact");
// start bar 
document.querySelectorAll(".bar")[0].addEventListener("click", function() {
    for (let i = 0 ;i<5 ; i++) {
        listelement[i].classList.toggle("active");}
    document.querySelector(".bar").classList.toggle("active");
});
// end bar
// start onscroll
window.onscroll = function () {
  // img 
  if(myImg.getBoundingClientRect().top < window.innerHeight && myImg.getBoundingClientRect().bottom >= 0){
    myImg.classList.add("grow");
  }else{
    myImg.classList.remove("grow");
  }
  // hire Me Profile
  if(hireMeProfile[0].getBoundingClientRect().top < window.innerHeight && hireMeProfile[0].getBoundingClientRect().bottom >= 0){
    for (let i=0 ; i<7; i++){
      hireMeProfile[i].classList.add("move");
    }
  }else{
    for (let i=0 ; i<7; i++){
      hireMeProfile[i].classList.remove("move");
    }
  }
  // bar 
  if (window.scrollY >=615) {
    document.querySelector(".bar").classList.remove("none");
  } else {
    document.querySelector(".bar").classList.add("none");
  }
  for (let i = 0 ;i<5 ; i++) {
    listelement[i].classList.remove("active");}
  document.querySelector(".bar").classList.remove("active");
  // stars 
  if(stars[0].getBoundingClientRect().top < window.innerHeight && stars[0].getBoundingClientRect().bottom >= 0){
    for(let i=0 ;i<stars.length ; i++){
      stars[i].classList.remove("none");
    }
  }else {
    for(let i=0 ;i<stars.length ; i++){
      stars[i].classList.add("none");
    }
  }
  // experiances ball 
  if (hireMeExperiances[0].getBoundingClientRect().top < window.innerHeight && hireMeExperiances[0].getBoundingClientRect().bottom >= 0) {
    for (let i=0 ; i<7; i++){
      hireMeExperiances[i].classList.add("move");
    }
  } else {
    for (let i=0 ; i<7; i++){
      hireMeExperiances[i].classList.remove("move");
    }
  }
  // abilities ball 
  if (hireMeAbilities[0].getBoundingClientRect().top < window.innerHeight && hireMeAbilities[0].getBoundingClientRect().bottom >= 0) {
    for (let i=0 ; i<7; i++){
      hireMeAbilities[i].classList.add("move");
    }
  } else {
    for (let i=0 ; i<7; i++){
      hireMeAbilities[i].classList.remove("move");
    }
  }
  // project ball 
  if (hireMeProject[0].getBoundingClientRect().top < window.innerHeight && hireMeProject[0].getBoundingClientRect().bottom >= 0) {
    for (let i=0 ; i<7; i++){
      hireMeProject[i].classList.add("move");
    }
  } else {
    for (let i=0 ; i<7; i++){
      hireMeProject[i].classList.remove("move");
    }
  }
      // contact link
  if (contactSection.getBoundingClientRect().top < window.innerHeight && contactSection.getBoundingClientRect().bottom >= 0) {
    contactLink.classList.remove("hidden");
  } else {
    contactLink.classList.add("hidden");
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