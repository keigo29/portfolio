const swiper = new Swiper(".swiper", {
  slidesPerView: 1, // 同時表示スライド数
  centeredSlides: true, // 中央に配置
  loop: true,
  autoplay:{
    delay:2000,
  },
  spaceBetween: 0, 
  breakpoints: {
    768: {
      slidesPerView: 7, // スライドの幅に応じて変更
     
    },  
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // ページネーションのクリックを有効化
  },
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

menu.addEventListener("click", () => {
  // 'close' クラスが付いている場合は削除、ない場合は追加
  Bar.classList.toggle('close');
  exit.classList.toggle('close');
  menu.classList.toggle('close');
});

// エグジットをクリックしたときにバーとエグジットを非表示にする
exit.addEventListener("click", () => {
  Bar.classList.add('close');
  exit.classList.add('close');
  menu.classList.toggle('close');
});