//顧客評論事件
var swiper = new Swiper(".swiper-container", {
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChange: function () {
      var activeIndex = this.activeIndex;

      const swiper = document.querySelector('.swiper-slide') 

      if(window.innerWidth < 464){
        var slideWidth = swiper.style.width;
      }else if(window.innerWidth < 768){
        var slideWidth = swiper.style.width;

      }else if(window.innerWidth > 768){
        var slideWidth = 416 + 24;
      }

      var offset = activeIndex * slideWidth;
      var slideContainer = document.querySelector(".swiper-wrapper");
      slideContainer.style.transform = "translateX(-" + offset + "px)";
    }
  }
});  