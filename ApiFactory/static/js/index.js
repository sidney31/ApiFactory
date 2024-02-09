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
		$(".navbar-toggler").toggleClass('open')
	});

	myOffcanvas.addEventListener("hide.bs.offcanvas", () => {
		myOffcanvas.setAttribute("style", "max-height: 0!important;");
		$(".navbar-toggler").toggleClass('open')
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

			setTimeout(() => { resolve('success') }, 500)
		})
	}

	startAnimate()

	$(window).scroll(() => {
		startAnimate()
	})

	function startAnimate() {
		$(".appear-down").each((i, e) => {
			if (window.scrollY = window.innerHeight > $(e).get(0).getBoundingClientRect().top) {
				$(e).css('opacity', '100')
				$(e).css('transform', 'translateY(0)')
			}
		})

		$(".appear-right, .appear-left").each((i, e) => {
			if (window.scrollY = window.innerHeight > $(e).get(0).getBoundingClientRect().top) {
				$(e).css('transform', 'translateX(0)')
			}
		})
	}

	$(".animate-number").each((i, e) => animateNumber(e))

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
