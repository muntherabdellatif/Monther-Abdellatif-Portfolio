// start bar 
let listelement =document.querySelectorAll(".bar li");
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
