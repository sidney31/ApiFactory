$(document).ready(function () {

  calculateNavbarBackground()

  $(window).scroll(calculateNavbarBackground);

  function calculateNavbarBackground() {
    if ($(window).scrollTop() > $('#main-block').height() / 2)
      $(".navbar").attr('style', 'background-color: #fffffff6!important')
    else
      $(".navbar").attr('style', 'background-color: none!important')
  }

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
  });

  const myOffcanvas = document.querySelector("#offcanvas");
  const navLinks = document.querySelectorAll(".nav-link");
  const offcanvas = new bootstrap.Offcanvas(myOffcanvas);

  navLinks.forEach((e) => {
    e.addEventListener("click", () => {
      offcanvas.hide();
      $(".navbar-toggler").removeClass('open')
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


  $(window).resize(() => {
    $(".navbar-toggler").removeClass('open')
  })

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
                  <div class="result-address">
                    <p> <strong> ${address['title']} </strong> </p>
                    <p> ${address['address']} </p>
                    <button onclick="window.open('${address['mapURL']}', '_blank').focus()" class="btn btn-md">Показать на карте</button>
                  </div>
                `)
  }

  defineContacts(city.value)

  $('#city').change(() => {
    defineContacts(city.value)
  })

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
          showAlert('<strong>Заявление зарегистрировано!</strong> <br> В ближайшее время с Вами свяжется менеджер.', 'success', 3000)
          $(this)[0].reset()
        } else {
          showAlert(data.errors, 'error', 3000)
        }
      }
    });
    return false;
  });

  function showAlert(html, type = 'info', ms) {
    const $alert = $("#alert")
    $alert.html(html)
    $alert.addClass(`show ${type}`)
    setTimeout(() => {
      $alert.removeClass(`show ${type}`)
    }, ms)

  }

})
