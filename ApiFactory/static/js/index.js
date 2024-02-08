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
		myOffcanvas.setAttribute("style", "max-height: 0!important;");
	});

	$(".navbar-toggler").click(function () {
		$(this).toggleClass('open')
	})
});
