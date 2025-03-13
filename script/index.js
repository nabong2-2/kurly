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
    else {
        //초기화
        bannerTxt.innerHTML = "";
        t = 0;
    }
}
setInterval(writer, 300);

//팝업 끄기 , 새로고침하면 다시 나오기...(?)
const popupMain = document.querySelector('.main_popup');
const closeBtn = document.querySelector('.main_popup .close');
console.log(popupMain);


closeBtn.addEventListener('click', ()=>{
    popupMain.style.display = 'none';
})





//메인 배너 swiper
const mainBnr = new Swiper(".main_bnr", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 45,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".main_bnr .swiper-button-next",
        prevEl: ".main_bnr .swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    observer: true, // ✅ DOM 변경 감지하여 Swiper 자동 업데이트
    observeParents: true, // ✅ 부모 요소 변경도 감지
});

// item - swiper

const itemSwiper = new Swiper('.items_wrap', {
    spaceBetween: 25,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
        nextEl: ".items_wrap .swiper-button-next",
        prevEl: ".items_wrap .swiper-button-prev",
    },
})

const dailySwiper = new Swiper('.daily_time_wrap', {
    slidesPerView: 'auto',
    spaceBetween: 23,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
})

// 취향 저격 제품 swiper

const shotSwiper = new Swiper('.shot_items_box', {
    spaceBetween: 50,
    slidesPerView: 'auto',
    loop: true,
    scrollbar: {
        el: ".swiper-scrollbar", 
    },
    centeredSlides: 0,
})

//menu_list 호버시 클래스 제거/추가
//마우스 오버 시 클래스 추가 (처음 적용한 거 제거)
//호버시 a첫번째 요소의 클래스 제거

const menuList = document.querySelectorAll('.popular_product_wrap .menu_list > a')
console.log(menuList)
const menuList2 = document.querySelectorAll('.daily_price_wrap .menu_list > a')
console.log(menuList2)
const menuList3 = document.querySelectorAll('.shot_product_wrap .menu_list > a')
console.log(menuList3)

menuList.forEach((i)=>{
    i.addEventListener('mouseover', ()=> {
        menuList[0].classList.remove('menu_item_bold')
        i.classList.add('menu_item_bold');
    });
    i.addEventListener('mouseout', ()=> {
        if(!i.classList.contains('active')){
            i.classList.remove('menu_item_bold');
        } //active요소를 갖고 있지 않을 때 제거
    });
    i.addEventListener('click', ()=> {
        menuList.forEach((item)=>{
            item.classList.remove('menu_item_bold', 'active'); //초기화
            i.classList.add('menu_item_bold', 'active');
        })
    })
})
menuList2.forEach((i)=>{
    i.addEventListener('mouseover', ()=> {
        menuList2[0].classList.remove('menu_item_bold')
        i.classList.add('menu_item_bold');
    });
    i.addEventListener('mouseout', ()=> {
        if(!i.classList.contains('active')){
            i.classList.remove('menu_item_bold');
        } //active요소를 갖고 있지 않을 때 제거
    });
    i.addEventListener('click', ()=> {
        menuList2.forEach((item)=>{
            item.classList.remove('menu_item_bold', 'active'); //초기화
            i.classList.add('menu_item_bold', 'active');
        })
    })
})
menuList3.forEach((i)=>{
    i.addEventListener('mouseover', ()=> {
        menuList3[0].classList.remove('menu_item_bold')
        i.classList.add('menu_item_bold');
    });
    i.addEventListener('mouseout', ()=> {
        if(!i.classList.contains('active')){
            i.classList.remove('menu_item_bold');
        } //active요소를 갖고 있지 않을 때 제거
    });
    i.addEventListener('click', ()=> {
        menuList3.forEach((item)=>{
            item.classList.remove('menu_item_bold', 'active'); //초기화
            i.classList.add('menu_item_bold', 'active');
        })
    })
})

//24시간 카운트 만들기

//0. 함수 만들기 -timeUpdate()
//1. 변수 가져오기 - 현재 시간/ 현재 시,분,초
//2. 하루에서 현재 시간 뺀 변수 - 자바스크립트에서는 23,59부터 시작
//3. 00:00:00 형식으로 반환 - 10보다 작으면 0으로 반환
//4. 콘솔에 출력
//5. html에 표시 - txtContent
//6. 1초마다 실행 - 함수 밖 -> setInterval

function timeUpdate() {
//1
let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();

//2
let nowHour = 23 - hour;
let nowMinute = 60 - minute;
let nowSecond = 60 - second;

//3 
let timefomat = (nowHour < 10 ? "0" : "") + nowHour + ':' + (nowMinute < 10 ? "0" : "") + nowMinute + ':' + (nowSecond < 10 ? "0" : "") + nowSecond;

//4
// console.log(timefomat);

//5
const timeAttack = document.querySelector('.remain_time .time');
// console.log(timeAttack);

timeAttack.textContent = timefomat;
}

//6
setInterval(timeUpdate, 1000);