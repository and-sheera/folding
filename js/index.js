document.addEventListener('DOMContentLoaded', function () {
  headerBurger()
})

function headerBurger() {
  const header = document.querySelector('header')
  const burgerIcon = header.querySelector('.header__burger')
  const menuHeader = header.querySelector('.header__menu')
  burgerIcon.addEventListener('click', function() {
    this.classList.toggle('header__burger--active')
    header.classList.toggle('header--shadow')
    menuHeader.classList.toggle('header__menu--mb-visible')
  })
}
