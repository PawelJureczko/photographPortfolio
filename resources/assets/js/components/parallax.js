import $ from 'jquery'

$('window').scroll(function () {
  var scrolled = $(window).scrollTop()
  $('parallax__image').css({
    'background-position-y': +scrolled + 'px'
  })
  console.log(scrolled)
})
