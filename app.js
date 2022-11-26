// header scroll
window.addEventListener("scroll",function(){
   
    var headerContact= document.querySelector(".header-contact__list");
    var headerBottom= document.querySelector(".header-bottom");
    var headerWrap=document.querySelector(".header-wrap");
    headerContact.classList.toggle("scroll-hidden",window.scrollY>0);
    headerBottom.classList.toggle("scroll-sticky",window.scrollY>0);
    headerWrap.classList.toggle("scroll-header",window.scrollY>0);
    
})


// menu link hover effect scroll
window.addEventListener("load", function(){
    const link1s= [...document.querySelectorAll(".header-nav_link")];
    
    // console.log(links);
    link1s.forEach( (item) => item.addEventListener("mouseenter", handleHoverLink1));

    const line= document.querySelector(".line-effect");

    // scroll
    function handleHoverLink1(event){
        const {left, top, width, height, right}= event.target.getBoundingClientRect();
        // console.log({left,top,width,height,right});
        const offsetLeft= event.target.offsetLeft;
        const offsetTop= event.target.offsetTop;
        // console.log(offsetTop);
        // console.log(offsetLeft);
        if(window.scrollY <=0){
            line.style.width= `${width}px`;
            line.style.left= `${left}px`;
            line.style.top= `${top + offsetTop*4}px`;
        }
        else{
        line.style.width= `${width}px`;
        line.style.left= `${offsetLeft}px`;
        line.style.top= `${top +top/2}px`;
        }
    }
    const nav= document.querySelector(".header-nav");
    nav.addEventListener("mouseleave", function(){
        line.style.width=0;
    })

})



//modal giỏ hàng
let list = document.querySelectorAll('.list .item');
list.forEach(item => {
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('add')){
            var itemNew = item.cloneNode(true);
            let checkIsset  = false;

            let listCart = document.querySelectorAll('.cart .item');
            listCart.forEach(cart =>{
                if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                    checkIsset = true;
                    cart.classList.add('danger');
                    setTimeout(function(){
                        cart.classList.remove('danger');
                    },1000)
                }
            })
            if(checkIsset == false){
                document.querySelector('.listCart').appendChild(itemNew);
            }

        }
    })
})
function Remove($key){
    let listCart = document.querySelectorAll('.cart .item');
    listCart.forEach(item => {
        if(item.getAttribute('data-key') == $key){
            item.remove();
            return;
        }
    })
}
const cart= document.querySelector(".header-cart");
const modal= document.querySelector(".modal");
cart.addEventListener("click",function(e){
    // e.target.stopPropagasion();
    // console.log(e.target);
    modal.classList.add("modal-active");
})
modal.addEventListener("click",function(e){
    e.target.classList.remove("modal-active");
})
// end modal giỏ hàng 
















// home slider 
const slideContainer = document.querySelector('.home-slider_container');
const slide = document.querySelector('.slider-main');

const interval = 3000;

let slides = document.querySelectorAll('.home-slider_items');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
// console.log(firstClone,lastClone);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);
// console.log(slides[index].style.marginRight);
const slideWidth = slides[index].offsetWidth;
console.log(slideWidth);

slide.style.transform = `translateX(${-slideWidth * index}px)`;

// console.log(slides);

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

const getSlides = () => document.querySelectorAll('.home-slider_items');

slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};
slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
});
slideContainer.addEventListener('mouseleave', startSlide);
startSlide();
// end home slider 





// rotate trai nghiem little brick
const experienceItems= document.querySelectorAll(".experience-item");
const text= document.querySelector(".experience-item__title span");

[...experienceItems].forEach((item) => item.addEventListener("mouseenter",function(e){
    e.target.querySelector(".experience-item__img").style.transform= "rotate(360deg)";
    e.target.querySelector(".experience-item__img").style.transition= "0.5s ease-in-out";
    e.target.querySelector(".experience-item__title span").style.color="white";
    
}));

[...experienceItems].forEach((item) => item.addEventListener("mouseleave",function(e){
    e.target.querySelector(".experience-item__img").style.transform= "rotate(-360deg)";
    e.target.querySelector(".experience-item__img").style.transition= "0.5s ease-in-out";
    e.target.querySelector(".experience-item__title span").style.color="#417505";
}));



// xử lý phần search
const formCart= document.querySelector(".form");
formCart.addEventListener("input",function(e){
    e.preventDefault();
    searchItem=document.querySelectorAll(".search-item");
    inputValue=e.target.value;
     arrText=document.querySelectorAll(".content .title");
    for(let i=0; i<arrText.length; i++){
        if(arrText[i].innerHTML.includes(inputValue.toUpperCase())){
            searchItem[i].style.display= `block`;
        }else{
            searchItem[i].style.display= `none`;
        }
    }
})