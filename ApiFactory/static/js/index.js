$(document).ready(function () {
    updateLogosState()
    let lastScrollTop = 0;

    $(window).scroll(() => {
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
    const $swithes = $('[id^=switch]')

    $swithes.on('change', function () {
        const $root = $(this).closest('.section2');
        $root.children('.content').css(
            'opacity', ($(this).is(':checked') ? '100%' : '30%'),
            'pointer-events', ($(this).is(':checked') ? 'auto' : 'none')
        );
        // $root.children('.content').css('pointer-events', ($(this).is(':checked') ? 'auto' : 'none'));
    });
})

