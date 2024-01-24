$(document).ready(function () {
    let lastScrollTop = 0;

    $(window).scroll(function () {
        if ($(this).scrollTop() > lastScrollTop) {
            $('.navbar').css( 'transform', 'translateY(-100px)')
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

    updateLogosState()

    $(window).resize(function () {
        updateLogosState()
    })
})

