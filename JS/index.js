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
  // bar and img 
  if (window.scrollY >=615) {
    document.querySelector(".bar").classList.remove("none");
    myImg.classList.add("grow");
  } else {
    document.querySelector(".bar").classList.add("none");
    myImg.classList.remove("grow");
  }
  // stars and contact link
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
  }else {
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