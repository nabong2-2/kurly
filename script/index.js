//글자 무한으로 하나씩 나오게 하기.
const txt = '신선함을 담다, 마켓컬리'
const bannerTxt = document.querySelector('.header_txt_move');
let t = 0;

console.log(bannerTxt);

function writer() {
    if(txt.length > t) {
        //한글자씩 추가
        bannerTxt.innerHTML += txt.charAt(t);
        t++;
    }
}
setInterval(writer, 300);


//메인 배너 swiper

const mainBnr = new Swiper(".main_bnr", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 45,
    // loop: true,
    loopAdditionalSlides: 3,
    initialSlide: 1,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".main_bnr .swiper-button-next",
        prevEl: ".main_bnr .swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});