const swiper = new Swiper(".swiper", {
  slidesPerView: 1, // スマホ時は1枚表示
  centeredSlides: true, // 1枚表示の時は中央配置
  loop: true, // ループ有効化
  autoplay: {
      delay: 2000, // 2秒ごとに自動スライド
      disableOnInteraction: false, // ユーザー操作後も自動スライド継続
  },
  spaceBetween: 10, // スライド間の隙間 (スマホ)
  breakpoints: {
      768: {
          slidesPerView: 5, // PC時は7枚表示
          centeredSlides: false, // 7枚表示時は中央配置オフ
          spaceBetween: 40, // スライドの隙間
      },
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true, // ページネーションのクリック有効
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  loopAdditionalSlides: 5, // ループ時に追加するスライド (不足防止)
});
const slides = document.querySelectorAll('.swiper-slide');
slides.forEach(slide => {
  if (!slide.innerHTML.trim()) {
    slide.remove(); // 空のスライドを削除
  }
});

const menu = document.querySelector('.Hum');
const Bar = document.querySelector('.bar');
const exit = document.querySelector('.exit');

menu.addEventListener("click", (event) => {
  event.preventDefault(); 
  // 'close' クラスが付いている場合は削除、ない場合は追加
  Bar.classList.toggle('close');
  exit.classList.toggle('close');
  menu.classList.toggle('close');
});

// エグジットをクリックしたときにバーとエグジットを非表示にする
exit.addEventListener("click", (event) => {
  event.preventDefault();
  Bar.classList.add('close');
  exit.classList.add('close');
  menu.classList.toggle('close');
});

// const hum = document.querySelector('.Hum');  // Hum 要素
// const menu = document.querySelector('.Hum'); // Hum が menu であればこれでOK

// スクロールイベントを監視
// window.addEventListener('scroll', () => {
//   const humRect = menu.getBoundingClientRect();
  
//   // 画面の上部にいる場合は非表示にする
//   if (humRect.top <= 10) {
//     menu.classList.add('hidden');  // Hum 要素が100px以下の場合に hidden クラスを追加
//   } else {
//     menu.classList.remove('hidden');  // それ以外の場合に hidden クラスを削除
//   }
// });

// window.addEventListener('load', () => {
//   const humRect = menu.getBoundingClientRect();
  
//   // ページが読み込まれた時点での位置を確認
//   if (humRect.top <= 100) {
//     menu.classList.add('hidden');  // 画面上部にいる場合に非表示に
//   } else {
//     menu.classList.remove('hidden');  // それ以外の場合に表示
//   }
// });