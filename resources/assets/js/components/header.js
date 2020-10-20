import $ from 'jquery'

// $(document).ready(function () {
//   var headerY = $('header').offset().top
//   console.log(headerY)
// })
$(window).on('scroll', function () {
  let headerHeight = document.querySelector('header').offsetHeight
  console.log($(this).scrollTop())
  if ($(this).scrollTop() > headerHeight) {
    $('header').addClass('sticky')
    $('#logo').addClass('sticky__logo')
    $('.menu__link').addClass('sticky__link')
    $('.menu__link').removeClass('menu__link')
  } else {
    $('header').removeClass('sticky')
    $('#logo').removeClass('sticky__logo')
    $('.sticky__link').addClass('menu__link')
    $('.sticky__link').removeClass('sticky__link')
  }
})

let hamburgerButton = document.querySelector('.hamburger')
let hamburgerBox = document.querySelector('.hamburger__menu')

hamburgerButton.addEventListener('click', () => {
  hamburgerBox.classList.toggle('hamburger__menu__visible')
})
