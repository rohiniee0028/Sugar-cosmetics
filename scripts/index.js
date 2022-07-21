import footer_container from "../Components/footer.js";
document.querySelector('.footer_container').innerHTML=footer_container();

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
