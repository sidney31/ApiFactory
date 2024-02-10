$(document).ready(function () {
  $("body").on('mousedown', e => {

    if (e.button === 0 &&
      e.target != $('.menu-toggler').get(0) &&
      e.target.tagName != 'SPAN')
      $(".menu-toggler.open").toggleClass('open')

  })
})