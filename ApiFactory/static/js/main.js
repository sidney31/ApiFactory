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

  const carousel = new bootstrap.Carousel($("#carousel"), {
    interval: 2000,
  });

  let $mq = $("#marquee").marquee({
    duration: window.matchMedia("(max-width: 1200px)").matches ? 5000 : 25000,
    gap: 0,
    delayBeforeStart: 0,
    direction: "left",
    duplicated: true,
    // pauseOnHover: true,
    startVisible: true,
  });

  const $swithes = $("[id^=switch]");

  $swithes.on("change", function () {
    const $root = $(this).closest(".section2");
    $root
      .children(".content")
      .css(
        "opacity",
        $(this).is(":checked") ? "100%" : "30%",
        "pointer-events",
        $(this).is(":checked") ? "auto" : "none"
      );
    // $root.children('.content').css('pointer-events', ($(this).is(':checked') ? 'auto' : 'none'));
  });

  const myOffcanvas = document.querySelector("#offcanvas");
  const navLinks = document.querySelectorAll(".nav-link");
  const offcanvas = new bootstrap.Offcanvas(myOffcanvas);

  navLinks.forEach((e) => {
    e.addEventListener("click", () => {
      offcanvas.hide();
    });
  });

  myOffcanvas.addEventListener("show.bs.offcanvas", () => {
    myOffcanvas.setAttribute(
      "style",
      "max-height: calc(100svh - 100px)!important;"
    );
  });

  myOffcanvas.addEventListener("hide.bs.offcanvas", () => {
    myOffcanvas.setAttribute("style", "max-height: 0;");
  });

  const $subtitle = $('#subtitle')
  const $listOfSubtitle = $subtitle.children()

  let it = 1;

  init()

  function init() {
    if (window.matchMedia('(max-width: 576px)').matches) {
      $subtitle.html($listOfSubtitle[0]).css('opacity', '100');
      switchSubtitleElements
      setInterval(switchSubtitleElements, 5000)
    } else {
      $subtitle.html($listOfSubtitle).css('opacity', '100')
    }
  }

  $(window).resize(() => {
    init()
    $(".navbar-toggler").removeClass('open')
  })


  async function switchSubtitleElements() {
    if (!window.matchMedia('(max-width: 576px)').matches)
      return false
    it = (it == 2) ? 0 : it + 1
    await setOpacity($subtitle, 0)
    $subtitle.html($listOfSubtitle[it])
    await setOpacity($subtitle, 100)
  }

  function setOpacity(el, val) {
    return new Promise((resolve) => {

      $(el).animate({
        opacity: val
      }, {
        duration: 500,
        easing: 'ease'
      });

      setTimeout(() => {
        resolve('success')
      }, 500)
    })
  }


  let addresses = {
    'Moscow': {
      'title': 'Инновационный центр Сколково',
      'address': '1121205, г. Москва, Большой бульвар, д. 40',
      'mapURL': 'https://yandex.ru/maps/-/CDBzaC4N',
    },
    'Perm': {
      'title': 'шоссе Космонавтов, д. 111 е',
      'address': '614982, г. Пермь, шоссе Космонавтов, д. 111 е',
      'mapURL': 'https://yandex.ru/maps/-/CDBziA47',
    },
    'Izhevsk': {
      'title': 'ул. Орджоникидзе, д. 2',
      'address': '426063, г. Ижевск, ул. Орджоникидзе, д. 2',
      'mapURL': 'https://yandex.ru/maps/-/CDBzmZKr',
    },
    'Almetyevsk': {
      'title': 'ул. Сургутская, д. 2',
      'address': '423458, г. Альметьевск, ул. Сургутская, д. 2, офис 301',
      'mapURL': 'https://yandex.ru/maps/-/CDBzmJ14',
    }
  }

  function defineContacts(city) {
    const address = addresses[city]
    $('#results').html(`
                  <div class="fs-4 mt-3 ms-1 text-wrap">
                    <p class="fw-500 mb-0">${address['title']}</p>
                    <p> ${address['address']} </p>
                    <a href="${address['mapURL']}" class="btn bg-gray fs-4 fw-200 text-black border-0 hover-opacity">Показать на карте</a>
                  </div>
                `)
  }

  defineContacts(city.value)

  $('#city').change(() => {
    defineContacts(city.value)
  })

  $('.callbackModalbtn').click((e) => {
    const modalState = $('#callbackModal').is(':visible')
    $('body').css('overflowY', !modalState ? 'hidden' : 'visible')
    modalState ? $('#callbackModal')[0].close() : $('#callbackModal')[0].showModal()
  })

  $(document).keydown(function (e) {
    if (e.keyCode == 27 && $('#callbackModal').is(':visible'))
      e.preventDefault()
  });

  $('input[type=tel]').mask('+7 (999) 999-99-99');

  $('#callbackModal form').submit(function (e) {
    e.preventDefault()

    $.ajax({
      url: 'send_callback/',
      method: 'POST',
      data: $(this).serialize(),
      processData: false,
      success: (data) => {
        if (data.valid == true) {
          showAlert('<strong>Спасибо!</strong> В близжайшее время с Вами свяжется менеджер.', 3000)
          $('body').css('overflowY', 'visible')
          $('#callbackModal')[0].close()
          $(this)[0].reset()
        } else {
          showAlert(JSON.stringify(data.errors), 3000)
        }
      }
    });
    return false;
  });

  function showAlert(html, ms) {
    const $alert = $("#alert")
    $alert.html(html)
    $alert.addClass('show')
    setTimeout(() => {
      $alert.removeClass('show')
    }, ms)

  }

})
