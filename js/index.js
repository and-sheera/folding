document.addEventListener('DOMContentLoaded', function() {
  headerBurger()
  sliderBenefits()
  sliderUsage()
})

function headerBurger() {
  const header = document.querySelector('header')
  const burgerIcon = header.querySelector('.header__burger')
  const menuHeader = header.querySelector('.header__menu')
  burgerIcon.addEventListener('click', function() {
    this.classList.toggle('header__burger--active')
    header.classList.toggle('header--shadow')
    menuHeader.classList.toggle('header__menu--mb-visible')
    document.documentElement.classList.toggle('no-scroll')
  })
}

function sliderBenefits() {
  if (window.innerWidth < 767) {
    const swiperSlider = new Swiper('.benefits .swiper', {
      spaceBetween: 15,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    })
  }
}

function sliderUsage() {
  const sliderWrapper = document.querySelector('.usage__slider')
  const swiperSlider = new Swiper('.usage .swiper', {
    spaceBetween: 20,
    slidesPerView: 'auto',
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    breakpoints: {
      676: {
        spaceBetween: 40
      }
    },
    on: {
      progress: function(swiper, progress) {
        if (progress >= 1) {
          sliderWrapper.classList.add('usage__slider--no-shadow')
        } else {
          sliderWrapper.classList.remove('usage__slider--no-shadow')
        }
      }
    }
  })
}
