import $ from 'jquery'
import 'slick-carousel'
import '@fortawesome/fontawesome-free'

$('.image-slider').slick({
  arrows: true,
  prevArrow: $('.image-slider__arrow-prev'),
  nextArrow: $('.image-slider__arrow-next'),
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  speed: 2000
})
