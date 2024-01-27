$(document).ready(function () {
    updateLogosState()
    let lastScrollTop = 0;

    $(window).scroll(function () {
        if ($(this).scrollTop() > lastScrollTop) {
            $('.navbar').css('transform', 'translateY(-100px)')
        } else {
            $('.navbar').css('transform', 'translateY(0)')
        }
        lastScrollTop = $(this).scrollTop();
    });

    function updateLogosState() {
        let navbarState = $('.navbar-toggler').css('display')
        $('.navbar-brand:odd').css('display', navbarState === 'block' ? 'none' : 'block')
        $('.navbar-brand:even').css('display', navbarState === 'block' ? 'block' : 'none')
    }

    window.onresize = () => {
        updateLogosState()
    }

    const carousel = new bootstrap.Carousel($('#carousel'), {
        interval: 2000,
    })

    const $mq = $('#marquee').marquee({
        duration: 25000,
        gap: 10,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        // pauseOnHover: true,
        startVisible: true,
    });
})

