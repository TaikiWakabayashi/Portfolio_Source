'use strict'


luxy.init();

// スクロールアニメーション
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
const section5 = document.getElementById("section5");
const skillCard = document.querySelectorAll(".skill-card");
const smoke = document.getElementById("smoke");
const message = document.querySelectorAll(".mess-contents > p");
const SNS = document.querySelectorAll(".footer-icon > a");

// セクション３　アニメーション
document.addEventListener("scroll",function(){
// ブラウザの上からの距離を測定するコード
const getElementDistance1 = section3.getBoundingClientRect().top + section3.clientHeight * 0.3;

// 現在のブラウザの高さを取得するコード
if(window.innerHeight > getElementDistance1 ){
    for(let i=0; i<skillCard.length; i++){
        skillCard[i].classList.add("active");
    }
  }
});

// セクション４　アニメーション
document.addEventListener("scroll",function(){
// ブラウザの上からの距離を測定するコード
const getElementDistance2 = section4.getBoundingClientRect().top + section4.clientHeight * 0.8;

// 現在のブラウザの高さを取得するコード
if(window.innerHeight > getElementDistance2 ){
    smoke.classList.add("active");

    for(let i=0; i<message.length; i++){
        message[i].classList.add("active");
    }
  }
});

// セクション５　アニメーション
document.addEventListener("scroll",function(){
// ブラウザの上からの距離を測定するコード
const getElementDistance3 = section5.getBoundingClientRect().top + section5.clientHeight * 0.8;

// 現在のブラウザの高さを取得するコード
if(window.innerHeight > getElementDistance3 ){
    for(let i=0; i<SNS.length; i++){
        SNS[i].classList.add("active");
    }
  }
});

