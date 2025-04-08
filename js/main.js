

/* 스크롤 메뉴 */
// const scrollMenu = document.querySelectorAll('.right_scroll_box li')

// scrollMenu.forEach(function(menu) {
//   menu.addEventListener('click', function() {
//     window.scrollTo({
//       top: 800,
//       behavior: 'smooth'
//     })
//   })
// })

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  const scrollMenuItems = document.querySelectorAll('.scroll_menu li');
  const sectionIds = ['top', 'menu', 'location', 'franchise', 'media'];

  const sectionColors = ['white', 'white', 'orange', 'white', 'white'];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = [...sections].indexOf(entry.target);

        // 색상 바꾸기
        document.querySelector('.right_scroll_box ul').className =
          sectionColors[index] === 'orange' ? 'scroll_menu custom_ul' : 'scroll_menu default_ul';

        scrollMenuItems.forEach((item, i) => {
          item.className = sectionColors[index] === 'orange' ? 'custom_li' : 'default_li';
          if (i === index) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, {
    threshold: 0.6
  });

  sections.forEach(section => observer.observe(section));

  // 메뉴 클릭 시 해당 섹션 이동
  scrollMenuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    });
  });
});
/* menu */
const menuSwiper = new Swiper('.menu_swiper', {
  autoplay: true,
  slidesPerView: 4,
  spaceBetween: 20,
}) 

/* media */
const mediaSwiper = new Swiper('.media_swiper', {
  autoplay: true,
  slidesPerView: 4,
  spaceBetween: 20,
})