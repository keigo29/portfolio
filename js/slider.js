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
  exit.classList.remove('close');  // Exitボタンを表示
  Bar.classList.remove('close');  // Barを表示
  menu.classList.toggle('close'); // Menuボタンを閉じる
});

exit.addEventListener("click", () => {
  console.log("Exit clicked");
  exit.classList.add('close');    // Exitボタンを閉じる
  Bar.classList.add('close');    // Barを閉じる
  menu.classList.remove('close'); // Menuボタンを表示
});

menu.addEventListener("click", () => {
  console.log("Menu clicked");
  console.log("Before:", { menu: menu.className, exit: exit.className, Bar: Bar.className });
  exit.classList.remove('close');
  Bar.classList.remove('close');
  menu.classList.toggle('close');
  console.log("After:", { menu: menu.className, exit: exit.className, Bar: Bar.className });
});