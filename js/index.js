//回到最上方
window.addEventListener('scroll',function(
){
  const backToTop = document.querySelector('.backToTop a');
  backToTop.addEventListener('click',function(){
    window.scrollTo(0,0)
  })
})

//手機右上角選單漢堡事件
const mPrice = document.querySelector('.mPrice')
const mFooter = document.querySelector('.mFooter')
const content = document.querySelector('.content')
const toolHeader = document.querySelector('.tool-header')
const footer = document.querySelector('.footer')
const menuBtn = document.querySelector('.menuBtn')  
const breakpoint = 768; 

function menuClick(){   
  if(menuBtn.innerHTML.trim() === 'menu'){
    mPrice.style.display = 'block';
    mFooter.style.display = 'block';
    content.style.display = 'none';
    toolHeader.style.display = 'none';
    footer.style.display = 'none';
    menuBtn.innerHTML = 'close';
  }else if(menuBtn.innerHTML.trim() === 'close'){
    mPrice.style.display = 'none';
    mFooter.style.display = 'none';
    content.style.display = 'flex';
    toolHeader.style.display = 'flex';
    footer.style.display = 'flex';
    menuBtn.innerHTML = 'menu';                
  }
}

function throttle(func,delay){
  let timer = null;
  return function(){
    if(!timer){
      func.apply(this, arguments);
      timer = setTimeout(()=>{
        timer = null;
      }, delay)
    }
  };
}

//偵測螢幕寬度，復原手機右上角選單漢堡事件
window.addEventListener('resize', throttle(function(){
  var screenWidth = window.innerWidth;
  if(window.innerWidth > breakpoint){
    if(menuBtn.innerHTML.trim() === 'close'){
      mPrice.style.display = 'none';
      mFooter.style.display = 'none';
      content.style.display = 'flex';
      toolHeader.style.display = 'flex';
      footer.style.display = 'flex';
      menuBtn.innerHTML = 'menu';                    
    }
  }  
}, 200))


//AI 工具王 menu 事件
const menuLi = document.querySelectorAll('.menu li')
for(let i=0; i<menuLi.length; i++){
    menuLi[i].addEventListener('mouseenter', function(){
    const menuAct = document.querySelector('.menu .active')
    menuAct.classList.remove('active')
    this.classList.add('active')
  })
}

//分頁事件
menuBtn.addEventListener('click', menuClick);
const page = document.querySelectorAll('.page > li > a')  
for(let i=0; i<page.length; i++){
    page[i].addEventListener('mouseenter',function(){
    document.querySelector('.page .active').classList.remove('active')
    this.parentNode.classList.add('active')
  })
}  

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