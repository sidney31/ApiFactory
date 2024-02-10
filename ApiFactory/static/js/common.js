$(document).ready(function () {
  let lastScrollTop = 0;

  $(window).scroll(() => {
    if ($(this).scrollTop() < 50) return;

    if ($(this).scrollTop() > lastScrollTop + 5) {
      $(".navbar").css("transform", "translateY(-100px)");
    } else if ($(this).scrollTop() < lastScrollTop - 5) {
      $(".navbar").css("transform", "translateY(0)");
    }
    lastScrollTop = $(this).scrollTop();
  });

  $(".menu-toggler").click(() => { $(".menu-toggler").toggleClass('open') })

  startAnimate()

  $(window).scroll(() => {
    startAnimate()
  })

  function startAnimate() {
    $(".appear-down").each((i, e) => {
      if (window.innerHeight > $(e).get(0).getBoundingClientRect().top) {
        $(e).css('opacity', '100')
        $(e).css('transform', 'translateY(0)')
      }
    })

    $(".appear-right, .appear-left").each((i, e) => {
      if (window.innerHeight > $(e).get(0).getBoundingClientRect().top) {
        $(e).css('transform', 'translateX(0)')
      }
    })

    $(".animate-number").each((i, e) => {
      if (window.innerHeight > $(e).get(0).getBoundingClientRect().top) {
        animateNumber(e)
        $(e).removeClass("animate-number")
      }
    })
  }

  async function animateNumber(el) {
    let initialValue = $(el).text()
    let num = initialValue.match(/\d+/)[0]
    $(el).text('0')
    $(el).css('opacity', '100')

    for (let i = 1; i <= num; i++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          $(el).text(i)
          if (i == num)
            $(el).text(initialValue.replace(/\d+/, num))

          resolve('success')
        }, 100 / num * 15)
      })
    }
  }

})