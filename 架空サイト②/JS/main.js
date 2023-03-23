'use strict'

console.log(window.outerWidth);

//グラフ１
var ctx1 = document.getElementById("myChart1");
var chartFunc1 = function(){
    var myBarChart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
          labels: ['2019年9月', '2020年9月', '2021年9月'],
          datasets: [
            {
              label: '会員数',
              data: [1935, 30934, 76459],
              backgroundColor: "rgba(217, 32, 2, 1)"
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: '会社総会員数の推移'
          },
          scales: {
            xAxes: [{
              display: true,
              stacked: false,
              categoryPercentage:0.4,
              barPercentage:0.9,
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
                display: true,
                stacked: false,
                gridLines: {
                  display: false
            }
          }],
        }
       }
    });
}

//グラフ２
var ctx2 = document.getElementById("myChart2");
var chartFunc2 = function(){
    var myBarChart2 = new Chart(ctx2, {
        type: 'horizontalBar',
        data: {
            labels: ['スターモバイル', 'A社', 'B社','C社'],
            datasets: [
              {
                label: '平均ダウンロード速度（Mbps）',
                data: [73.8, 51.11, 48.02,42.78],
                backgroundColor: "rgba(45,138,253, 1)"
              },
              {
                label: '平均アップロード速度（Mbps）',
                data: [27.23, 12.07, 11.72,9.37],
                backgroundColor: "rgba(34,195,111,1)"
              }
            ]
          },
        options: {
            title: {
                display: true,
                text: 'スターモバイルと大手MVNO事業会社の格安SIMの通信速度比較'
              },
              scales: {
                xAxes: [{
                  display: true,
                  stacked: false,
                  categoryPercentage:0.4,
                  barPercentage:0.9,
                  gridLines: {
                    display: false
                  }
                }],
                yAxes: [{
                    display: true,
                    stacked: false,
                    gridLines: {
                      display: false
                }
              }],
            }
        }
    });
}

// フラグをスクロールで起動
var chartFlag1 = false;
var chartFlag2 = false;

//グラフ１
document.addEventListener("scroll",function(){
    const getElementDistanceGraph1 = ctx1.getBoundingClientRect().top + ctx1.clientHeight * 1;
if(window.innerHeight > getElementDistanceGraph1 && chartFlag1 == false ){
    chartFunc1();
    chartFlag1 = true;
    }
});
//グラフ１ーメッセージ
const graphMessage = document.querySelector(".graph-message");
document.addEventListener("scroll",function(){
    const getElementDistanceMessage1 = graphMessage.getBoundingClientRect().top + graphMessage.clientHeight * 0.3;
// 現在のブラウザの高さを取得するコード
if(window.innerHeight > getElementDistanceMessage1){
    document.querySelector(".graph-message > h1").classList.add("active");
    document.querySelector(".graph-message > p").classList.add("active");
    document.querySelector(".graph-message > button").classList.add("active");
}
});

//グラフ２
document.addEventListener("scroll",function(){
    const getElementDistanceGraph2 = ctx2.getBoundingClientRect().top + ctx2.clientHeight * 1;
if(window.innerHeight > getElementDistanceGraph2){
    document.querySelector(".beside-message > h1").classList.add("active");
    document.querySelector(".beside-message > p").classList.add("active");
    }
    // 現在のブラウザの高さを取得するコード
if(window.innerHeight > getElementDistanceGraph2 && chartFlag2 == false ){
    chartFunc2();
    chartFlag2 = true;
    }
});
//グラフ２ーメッセージ
const besideMessage = document.querySelector(".beside-message");
document.addEventListener("scroll",function(){
    const getElementDistanceMessage2 = besideMessage.getBoundingClientRect().top + besideMessage.clientHeight * 0.3;
// 現在のブラウザの高さを取得するコード
if(window.innerHeight > getElementDistanceMessage2){
    document.querySelector(".beside-message > h1").classList.add("active");
    document.querySelector(".beside-message > p").classList.add("active");
}
});

// Q&A アコーディオンリスト
$(function(){
    $("#accordion dt").on("click", function() {
      $(this).next().slideToggle();
    });
  });

  //サイドメニュー　起動
  $("#side_menu").click(function () {//ボタンがクリックされたら
    $("#g-nav").toggleClass('active');//ナビゲーションにpanelactiveクラスを付与
});
  //サイドメニュー　終了
$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $("#g-nav").removeClass('active');//ナビゲーションのpanelactiveクラスも除去
});


//アバウトアニメーション
const about = document.getElementById("about");
document.addEventListener("scroll",function(){
    const getElementDistance1 = about.getBoundingClientRect().top + about.clientHeight * 0.5;

    // 現在のブラウザの高さを取得するコード
if(window.innerHeight > getElementDistance1 ){
    document.querySelector(".about-title").classList.add("active");
    document.querySelector(".about-contents").classList.add("active");
    document.querySelector(".about-message > p").classList.add("active");
    document.querySelector(".about-message > button").classList.add("active");
    }
});

//ファンクションアニメーション
const func = document.getElementById("function");
document.addEventListener("scroll",function(){
    const getElementDistance2 = func.getBoundingClientRect().top + func.clientHeight * 0.5;

    // 現在のブラウザの高さを取得するコード
if(window.innerHeight > getElementDistance2 ){
    document.querySelector(".func1 > .func-message > h1").classList.add("active");
    document.querySelector(".func1 > .func-message > p").classList.add("active");
    document.querySelector(".func2 > .func-message > h1").classList.add("active");
    document.querySelector(".func2 > .func-message > p").classList.add("active");
    }
});

//プランアニメーション
const plan = document.getElementById("plan");
document.addEventListener("scroll",function(){
    const getElementDistance3 = plan.getBoundingClientRect().top + plan.clientHeight * 0.3;

    // 現在のブラウザの高さを取得するコード
if(window.innerHeight > getElementDistance3 ){
    document.querySelector(".planD1").classList.add("active");
    document.querySelector(".planD2").classList.add("active");
    document.querySelector(".planAu").classList.add("active");
    document.querySelector(".planPocket").classList.add("active");
    }
});

//ブログアニメーション
const blog = document.getElementById("blog");
document.addEventListener("scroll",function(){
    const getElementDistance4 = blog.getBoundingClientRect().top + blog.clientHeight * 0.5;

    // 現在のブラウザの高さを取得するコード
if(window.innerHeight > getElementDistance4 ){
    document.querySelector(".blog-contents > h1").classList.add("active");
    document.querySelector(".blog-contents > p").classList.add("active");
    document.querySelector(".blog-contents > button").classList.add("active");
    }
});

//Q&Aアニメーション
const review = document.getElementById("review");
document.addEventListener("scroll",function(){
    const getElementDistance5 = review.getBoundingClientRect().top + review.clientHeight * 0.5;

    // 現在のブラウザの高さを取得するコード
if(window.innerHeight > getElementDistance5 ){
    document.querySelector(".review-contents > h1").classList.add("active");
    document.querySelector(".review-contents > p").classList.add("active");
    document.querySelector("#accordion").classList.add("active");
    document.querySelector(".review-contents > button").classList.add("active");
    }
});

//レッスンアニメーション
const listen = document.getElementById("listen");
document.addEventListener("scroll",function(){
    const getElementDistance6 = listen.getBoundingClientRect().top + listen.clientHeight * 0.8;

    // 現在のブラウザの高さを取得するコード
if(window.innerHeight > getElementDistance6 ){
    document.querySelector(".listen-contents > h1").classList.add("active");
    document.querySelector(".listen-contents > button").classList.add("active");
    }
});

// ハンバーガーメニューのクリックイベント
function toggleNav() {
  let right = document.getElementById("right");
  let hamburger = document.getElementById("js-hamburger");
  let blackBg = document.getElementById("js-black-bg");
  let item = document.getElementsByClassName("global-nav__item");

  hamburger.addEventListener("click",()=> {
    right.classList.toggle("nav-open");
  });
  blackBg.addEventListener("click",()=> {
    right.classList.remove("nav-open");
  });
  for(let i = 0; i < item.length; i++){
    item[i].addEventListener("click", ()=> {
      right.classList.remove("nav-open");
    });
  }
}
toggleNav();