const bookmarks = [
	{
		link: "https://www.youtube.com/",
		description: "Видеохостинг, предоставляющий пользователям услуги хранения, доставки и показа видео.",
		tags: ["Видео,", "Соц. сеть,"],
		group: ["Избранные"],
	},
	{
		link: "https://dzen.ru",
		description: "Это Дзен — платформа для создания и просмотра контента. ",
		tags: ["Видео,", "Соц.сеть,"],
		group: ["Соц. сети"],
	},
	{
		link: "https://vk.com/",
		description: "ВКонта́кте — российская социальная сеть",
		tags: ["Соц. сеть,"],
		group: ["Избранные"],
	},
	{
		link: "https://translate.yandex.ru/",
		description: "Перевод с английского",
		tags: ["Переводчик,"],
		group: ["Избранные", "Инструменты"],
	},
	{
		link: "https://www.deepl.com/en/translator#ru",
		description: "онлайн-переводчик, работающий на основе машинного перевода",
		tags: ["Пререводчик,"],
		group: ["Инструменты"],
	},
	{
		link: "https://sbsplay.net/index.php?do=favorites",
		description: "Сериалы онлаин",
		tags: ["Видео,"],
		group: ["Избранное", "Что посмотреть"],
	},
	{
		link: "https://dvd.vse-chasti-filmov.biz/",
		description: "Все части фильмов",
		tags: ["Видео,"],
		group: ["Что посмотреть"],
	},
	{
		link: "https://oper.ru/video/",
		description: "Сайт гоблина",
		tags: ["Видео,"],
		group: ["Что посмотреть"],
	},
	{
		link: "https://vse-filmy-akterov.ru/",
		description: "Фильмы актеров",
		tags: ["Видео,"],
		group: ["Что посмотреть"],
	},
	{
		link: "https://knigavuhe.org/book/tajjny-khoroshejj-kukhni/",
		description: "Тайны хорошей кухни",
		tags: ["Аудио книга,"],
		group: ["Книги"],
	},
	{
		link: "https://sbsplay.net/1024-startrekpicard.html",
		tags: ["Видео,"],
		group: ["Что посмотреть"],
	},
	{
		link: "https://sbsplay.net/975-themandalorian.html",
		tags: ["Видео,"],
		group: ["Что посмотреть"],
	},
	{
		link: "https://sbsplay.net/1395-starwarsthebadbatch.html",
		tags: ["Видео,"],
		group: ["Что посмотреть"],
	},
];

const getBookmarks = () => fillBookmarks(bookmarks);

const fillBookmarks = (bookmarks) => bookmarks.map((obj) => fillBookmark(obj));

const fillBookmark = (bookmark) => {
	const filledBookmark = { ...bookmark };
	const url = new URL(filledBookmark.link);
	filledBookmark.imgLink = url.hostname;
	filledBookmark.title = url.hostname.trim().replace(/(.com|www.|.ru|.net|.org|.biz|dvd.)/g, "");
	return filledBookmark;
};

export { getBookmarks };
