'use strict'
new Vue({
    el:"#app",
    data(){
        return{
            message:"Check Now !",
            menus:[
                {label:"TOP",path:"./index.html"},
                {label:"ABOUT",path:"./about.html"},
                {label:"SERVICE",path:"./service.html"},
                {label:"RECRUIT",path:"./recruit.html"},
                {label:"CONTACT",path:"./contact.html"}
            ],
            services:[
                {id:"01",
                name:"analysis & efficiency",
                picture:"./picture/undraw_Analysis_re_w2vd.svg",
                comment:"message.message.message.message.message.message.message.message.message.message."
            },
                {id:"02",
                name:"Marketing",
                picture:"./picture/undraw_All_the_data_re_hh4w.svg",
                comment:"message.message.message.message.message.message.message.message.message.message."
            },
                {id:"03",
                name:"Make Website",
                picture:"./picture/undraw_building_websites_i78t.svg",
                comment:"message.message.message.message.message.message.message.message.message.message."
            }
            ],
            recruits:[
                {name:"TRAINING",image:"./picture/undraw_exams_g4ow.svg"},
                {name:"CARRIER",image:"./picture/undraw_finish_line_katerina_limpitsouni_xy20.svg"},
                {name:"WORK LIFE",image:"./picture/undraw_Loving_it_re_jfh4.svg"}
            ]
        }
    },
    methods: {
        mouseOverAction(){
            this.message = "Go !!"
        },
        mouseLeaveAction(){
            this.message = "Check Now !"
        }
    }
});


//   ハンバーガーメニュー
function toggleNav() {
    let body = document.body;
    let hamburger = document.getElementById("js-hamburger");
    let blackBg = document.getElementById("js-black-bg");
    let item = document.getElementsByClassName("global-nav__item");
  
    hamburger.addEventListener("click",()=> {
      body.classList.toggle("nav-open");
    });
    blackBg.addEventListener("click",()=> {
      body.classList.remove("nav-open");
    });
    for(let i = 0; i < item.length; i++){
      item[i].addEventListener("click", ()=> {
        body.classList.remove("nav-open");
      });
    }
  }
  toggleNav();


//   スクロールアニメーション
  const animation1 = document.querySelector(".animationTarget1");
  const animation2 = document.querySelector(".animationTarget2");
  const animation3 = document.querySelector(".animationTarget3");
  const animation4 = document.querySelector(".animationTarget4");
  const animation5 = document.querySelector(".animationTarget5");
  const animation6 = document.querySelector(".animationTarget6");

  const title1 = document.querySelector(".title1");
  const title2 = document.querySelector(".title2");
  const title3 = document.querySelector(".title3");
  const title4 = document.querySelector(".title4");

  const aboutImg1 = document.querySelector(".about-image-one > img");
  const aboutImg2 = document.querySelector(".about-image-two > img");

  let recItem = document.querySelectorAll(".rec-item");
  const recImg = document.querySelector(".rec-image > img");

  const conTitle = document.querySelector(".con-message > h1");
  const conMessage = document.querySelector(".con-message > p");


//   １ アニメーション
  // スクロールする度にブラウザの上からの距離を測定
document.addEventListener("scroll",function(){
    // ブラウザの上からの距離を測定するコード
        const getElementDistance = animation1.getBoundingClientRect().top + animation1.clientHeight * 0.5;
    // 現在のブラウザの高さを取得するコード
    if(window.innerHeight > getElementDistance ){
        title1.style.transform = "translateY(0px)";
        title1.style.opacity = 1;
    }
});

// ２ アニメーション
  // スクロールする度にブラウザの上からの距離を測定
document.addEventListener("scroll",function(){
    // ブラウザの上からの距離を測定するコード
        const getElementDistance = animation2.getBoundingClientRect().top + animation2.clientHeight * 0.5;
    // 現在のブラウザの高さを取得するコード
    if(window.innerHeight > getElementDistance ){
        title2.style.transform = "rotate(90deg) translateY(0px)";
        title2.style.opacity = 1;
        aboutImg1.style.opacity = 1;
        aboutImg1.style.transform = "translateX(0)";
    }
});


// ３ アニメーション
  // スクロールする度にブラウザの上からの距離を測定
document.addEventListener("scroll",function(){
    // ブラウザの上からの距離を測定するコード
        const getElementDistance = animation3.getBoundingClientRect().top + animation3.clientHeight * 0.5;
    // 現在のブラウザの高さを取得するコード
    if(window.innerHeight > getElementDistance ){
        aboutImg2.style.opacity = 1;
        aboutImg2.style.transform = "translateX(0)";
    }
});


// ４ アニメーション
  // スクロールする度にブラウザの上からの距離を測定
document.addEventListener("scroll",function(){

    if(window.innerWidth <= 414) {
        const getElementDistance = animation4.getBoundingClientRect().top * 2;

        if(window.innerHeight > getElementDistance ){
            title3.style.opacity = 1;
            title3.style.transform = "translateY(0px)";
    
            for(let i=0; i < recItem.length; i++){
                recItem[i].style.opacity = 1;
                recItem[i].style.transform = "translateY(0px)";
            }
        }
    }else if(window.innerWidth > 414) {
    // ブラウザの上からの距離を測定するコード
        const getElementDistance = animation4.getBoundingClientRect().top + animation4.clientHeight * 0.4;
    // 現在のブラウザの高さを取得するコード
    if(window.innerHeight > getElementDistance ){
        title3.style.opacity = 1;
        title3.style.transform = "translateY(0px)";

        for(let i=0; i < recItem.length; i++){
            recItem[i].style.opacity = 1;
            recItem[i].style.transform = "translateY(0px)";
        }
    }
  }
});

// ５ アニメーション
  // スクロールする度にブラウザの上からの距離を測定
  document.addEventListener("scroll",function(){
    // ブラウザの上からの距離を測定するコード
        const getElementDistance = animation5.getBoundingClientRect().top + animation5.clientHeight * 0.4;
    // 現在のブラウザの高さを取得するコード
    if(window.innerHeight > getElementDistance ){
        recImg.style.opacity = 1;
        recImg.style.transform = "translateY(0px)";
    }
});

// ６ アニメーション
  // スクロールする度にブラウザの上からの距離を測定
  document.addEventListener("scroll",function(){
    // ブラウザの上からの距離を測定するコード
        const getElementDistance = animation6.getBoundingClientRect().top + animation6.clientHeight;
    // 現在のブラウザの高さを取得するコード
    if(window.innerHeight > getElementDistance ){
        title4.style.opacity = 1;
        title4.style.transform = "translateY(0px)";
        conTitle.style.opacity = 1;
        conTitle.style.transform = "translateY(0px)";
        conMessage.style.opacity = 1;
        conMessage.style.transform = "translateY(0px)";
    }
});

// スワイパー
var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });