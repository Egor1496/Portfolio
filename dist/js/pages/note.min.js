$(document).ready(() => {
	const noteList = {
		Статьи: [
			{
				href: "https://habr.com/ru/all/",
				title: "Хабр",
				description: "Крупнейший в Европе ресурс для IT-специалистов. Сюда приходят обсудить новости индустрии и поделиться опытом.",
				src: "https://assets.habr.com/habr-web/img/favicons/apple-touch-icon-256.png",
			},
			{
				href: "https://html5book.ru/html-html5/",
				title: "HTML5 book",
				description:
					"Основы языка HTML. Таблица тегов и атрибутов. Всё про HTML-таблицы, списки, карты-изображения, спецсимволы, HTML5-видео и аудио, HTML5-формы.",
				src: "https://static.yoomoney.ru/files-front/head-resources/wallet/apple-touch-icon.png",
			},
			{
				href: "https://learn.javascript.ru/",
				title: "Современный учебник JavaScript",
				description: "Перед вами учебник по JavaScript, начиная с основ, включающий в себя много тонкостей и фишек JavaScript/DOM.",
				src: "https://learn.javascript.ru/img/favicon/favicon.png",
			},
			{
				href: "https://reactdev.ru/libs/react-router/",
				title: "Справочник React",
				description: "Справочник web-разработчика с примерами кода - React",
				src: "https://reactdev.ru/react.svg",
			},
			{
				href: "https://liquidhub.ru/blogs/blog/html-verstka",
				title: "HTML-верстка",
				description: "Что это такое и какие основные правила процесса",
				src: "https://static.insales-cdn.com/assets/1/6616/1202648/v_1646921205/apple-touch-icon.png",
			},
		],
		Шпаргалки: [
			{
				href: "https://tpverstak.ru/",
				title: "Типичный Верстальщик",
				description: "Полезный проект для верстальщиков и фронтенд-разработчиков",
				src: "https://tpverstak.ru/wp-content/uploads/2018/03/cropped-favicon-180x180.png",
			},
			{
				href: "https://tretyakov.net/post/shpargalka-po-komandam-git",
				title: "tretyakov.net",
				description: "Шпаргалка по командам Git",
				src: "https://tretyakov.net/static/favicon.ico",
			},
			{
				href: "https://recommend.maxgraph.ru/",
				title: "HTML-код",
				description: "Рекомендации по верстке сайта. Проверка валидности, семантики, кодировки и т.д.",
				src: "https://codeguide.maxgraph.ru/img/logo.png",
			},
			{
				href: "https://codeguide.maxgraph.ru/",
				title: "Код-стайл",
				description: "Базовый синтаксис и правила написания HTML/CSS/js",
				src: "https://codeguide.maxgraph.ru/img/logo.png",
			},
			{
				href: "https://webref.ru/",
				title: "WebReference",
				description: "Руководства по веб-технологиям, учебные курсы, справочник HTML/CSS.",
				src: "https://webref.ru/favicon.ico",
			},
			{
				href: "https://habr.com/ru/company/ruvds/blog/599929/",
				title: "RUVDS.com",
				description: "30 команд Git, необходимых для освоения интерфейса командной строки Git",
				src: "https://habrastorage.org/getpro/habr/company/f27/ea8/5bd/f27ea85bd62fbd985c308110885af7e0.png",
			},
			{
				href: "https://jquery-docs.ru/",
				title: "Русская документация по API jQuery",
				description: "jQuery это быстрая, небольшая и богатая возможностями JavaScript библиотека.",
				src: "https://jquery-docs.ru/images/favicon.ico",
			},
			{
				href: "https://webdesign-master.ru/blog/docs/gulp-documentation.html",
				title: "WebDesign Master",
				description: "Документация Gulp на русском",
				src: "https://webdesign-master.ru/img/favicon.png",
			},
			{
				href: "https://doka.guide/about/",
				title: "Дока",
				description: "Дока — это добрый справочник для веб-разработчиков. Это место, где аккумулируются знания сообщества",
				src: "https://doka.guide/images/icons/180x180.png",
			},
			{
				href: "https://tpverstak.ru/grid/",
				title: "Шпаргалка по Grid CSS",
				description: "",
				src: "https://tpverstak.ru/wp-content/uploads/2018/03/cropped-favicon-180x180.png",
			},
		],
		Валидаторы: [
			{
				href: "https://validator.w3.org/",
				title: "W3C-HTML",
				description: "Validation Service",
				src: "https://validator.w3.org/images/favicon.ico",
			},
			{
				href: "https://jigsaw.w3.org/css-validator/",
				title: "W3C-CSS",
				description: "Validation Service",
				src: "https://validator.w3.org/images/favicon.ico",
			},
			{
				href: "https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect&hl=ru",
				title: "PageSpeed Insights",
				description: "Узнайте, как ускорить загрузку своих страниц на любых устройствах.",
				src: "https://www.gstatic.com/pagespeed/insights/ui/logo/favicon_48.png",
			},
			{
				href: "https://gtmetrix.com/",
				title: "GTmetrix",
				description: "Посмотрите, как работает ваш сайт, узнайте, почему он работает медленно, и откройте для себя возможности оптимизации.",
				src: "https://gtmetrix.com/static/images/documentation/meta_social/gtmetrix.png",
			},
			{
				href: "https://tools.pingdom.com/",
				title: "Pingdom Website Speed Test",
				description: "Тест предназначен для того, чтобы помочь сделать ваш сайт быстрее",
				src: "https://tools.pingdom.com/favicon.ico",
			},
			{
				href: "https://sitechecker.pro/ru/",
				title: "SEO-анализ",
				description:
					"Sitechecker проведет SEO-аудит сайта, найдет ошибки, точки роста и подготовит список задач для увеличения органического трафика из поисковых систем.",
				src: "https://sitechecker.pro/wp-content/themes/sitechecker/favicons/apple-touch-icon-180x180.png",
			},
			{
				href: "https://search.google.com/test/mobile-friendly",
				title: "Проверка оптимизации для мобильных",
				description: "Оптимизирована ли ваша страница для мобильных устройств? Проверьте, удобно ли просматривать страницу на мобильном устройстве.",
				src: "https://ssl.gstatic.com/search-console/scfe/favicon_128-285675eb17c90afa0fe2fbe32dd956bf.png",
			},
			{
				href: "https://www.whatsmyip.org/http-compression-test/",
				title: "HTTP Compression Test",
				description: "Этот инструмент проверяет ваш сервер, чтобы увидеть, отправляет ли он сжатые данные.",
				src: "https://www.whatsmyip.org/images/logo.svg",
			},
			{
				href: "http://iloveadaptive.com/ru/",
				title: "iloveadaptive",
				description: "Посмотрите как выглядит сайт на разных устройствах",
			},
			{
				href: "https://jsonlint.com/",
				title: "JSONLint",
				description: "JSONLint-это валидатор и переформатер для JSON, облегченного формата обмена данными.",
				src: "https://jsonlint.com/icons/apple-touch-icon-128x128.png",
			},
			{
				href: "https://www.artlebedev.ru/orfograf/",
				title: "Орфограф",
				description: "Программа подготовки текстов для публикации на вебе",
				src: "https://img.artlebedev.ru/icons/favicon-set.ico",
			},
			{
				href: "https://rustxt.ru/check-spelling",
				title: "RusTXT",
				description: "Проверка орфографии и пунктуации",
				src: "https://rustxt.ru/images/favicon/apple-icon-180x180.png",
			},
			{
				href: "https://www.artlebedev.ru/typograf/",
				title: '- Это "Типограф"?',
				description: "Проверяет правописание на русском и английском, отдельные тексты или целые веб-страницы",
				src: "https://img.artlebedev.ru/icons/favicon-set.ico",
			},
		],
	};

	const AOSS = [
		"fade",
		"fade-up",
		"fade-down",
		"fade-left",
		"fade-right",
		"fade-up-right",
		"fade-up-left",
		"fade-down-right",
		"fade-down-left",
		"flip-up",
		"flip-down",
		"flip-left",
		"flip-right",
		"zoom-in",
		"zoom-in-up",
		"zoom-in-down",
		"zoom-in-left",
		"zoom-in-right",
		"zoom-out",
		"zoom-out-up",
		"zoom-out-down",
		"zoom-out-left",
		"zoom-out-right",
	];

	const template = document.getElementById("template-note-item");
	for (const key in noteList) {
		let div = $.parseHTML(
			`
    <div class='note__item-list list'>
      <p class='list__title'>` +
				key +
				`:</p>
    </div>`
		);
		for (let i = 0; i < noteList[key].length; i++) {
			const $clone = $($.parseHTML(template.innerHTML));
			$clone.attr("data-aos", AOSS[getRandomInt(0, AOSS.length - 1)]);
			$clone.attr("href", noteList[key][i].href);
			$clone.find(".item__title").text(noteList[key][i].title);
			$clone.find(".item__description").text(noteList[key][i].description);
			$clone.find("img").attr("src", noteList[key][i].src);
			$(div).append($clone);
		}
		$(".note__wrap").append(div);
	}

	AOS.init();
});
