
document.querySelector(".fa-xmark").addEventListener("click", myFun);
function myFun() {
    // console.log("none");
    document.querySelector(".top-navbar").style.display = "none";
}

// slideshow--start-------------------------------------------

const swiper = new Swiper('.swiper', {
    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable:true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// slideshow--end-------------------------------------------

// slider after video starts--------------------

let left = 1;
let right = 4;
function show(){
    for(let i=left;i<=right;i++){
        document.getElementById("c"+i).style.display="inline-block";
    }
}
show();
function moveLeft(){
    if(left<=12 && right<=16){
        document.getElementById("c"+left).style.display="none";
        left+=1;
        right+=1;
        for(let i=left;i<=right;i++){
         document.getElementById("c"+i).style.display="inline-block";
        }
    }else{
        return;
    }
  
}
function moveRight(){
    if(left>=1 && right>=5){
        document.getElementById("c"+right).style.display="none";
        left-=1;
        right-=1;
        for(let i=left;i<=right;i++){
         document.getElementById("c"+i).style.display="inline-block";
        }
    }else{
        return;
    }
 }
// hot deals slider-------------------

const productContainer = [...document.querySelectorAll('.product-container')];

const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainer.forEach((item, i) =>{
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', ()=>{
     item.scrollLeft += containerWidth;
  })
  preBtn[i].addEventListener('click', ()=>{
    item.scrollLeft -= containerWidth;
 })
 
});
      
