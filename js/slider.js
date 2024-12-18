// slick01


// $('.slick-center').slick({
//   centerMode: true,
//   centerPadding: '0px',
//   slidesToShow: 1,

// });

const swiper = new Swiper(".swiper", {
  loop: true, // ループ有効
  slidesPerView: 3, // 一度に表示する枚数
  speed: 6000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay: 0, // 途切れなくループ
  },
});
