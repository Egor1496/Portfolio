let AllBookmarks = [
	{
		id: 0,
		link: "https://www.youtube.com/",
		description: "Видеохостинг, предоставляющий пользователям услуги хранения, доставки и показа видео.",
		tags: ["Видео", "Соц. сеть"],
		group: ["Избранные"],
	},
	{
		id: 1,
		link: "https://dzen.ru",
		description: "Это Дзен — платформа для создания и просмотра контента. ",
		tags: ["Видео", "Соц.сеть"],
		group: ["Соц. сети"],
	},
	{
		id: 2,
		link: "https://vk.com/",
		description: "ВКонта́кте — российская социальная сеть",
		tags: ["Соц. сеть"],
		group: ["Избранные"],
	},
	{
		id: 3,
		link: "https://translate.yandex.ru/",
		description: "Перевод с английского",
		tags: ["Переводчик"],
		group: ["Избранные", "Инструменты"],
	},
	{
		id: 4,
		link: "https://www.deepl.com/en/translator#ru",
		description: "онлайн-переводчик, работающий на основе машинного перевода",
		tags: ["Пререводчик"],
		group: ["Инструменты"],
	},
	{
		id: 5,
		link: "https://sbsplay.net/index.php?do=favorites",
		description: "Сериалы онлаин",
		tags: ["Видео"],
		group: ["Избранное", "Просмотр"],
	},
	{
		id: 6,
		link: "https://dvd.vse-chasti-filmov.biz/",
		description: "Все части фильмов",
		tags: ["Видео"],
		group: ["Просмотр"],
	},
	{
		id: 7,
		link: "https://oper.ru/video/",
		description: "Сайт гоблина",
		tags: ["Видео"],
		group: ["Просмотр"],
	},
	{
		id: 8,
		link: "https://vse-filmy-akterov.ru/",
		description: "Фильмы актеров",
		tags: ["Видео"],
		group: ["Просмотр"],
	},
	{
		id: 9,
		link: "https://knigavuhe.org/book/tajjny-khoroshejj-kukhni/",
		description: "Тайны хорошей кухни",
		tags: ["Аудио книга"],
		group: ["Книги"],
	},
	{
		id: 10,
		link: "https://sbsplay.net/1024-startrekpicard.html",
		tags: ["Видео"],
		group: ["Просмотр"],
	},
	{
		id: 11,
		link: "https://sbsplay.net/975-themandalorian.html",
		tags: ["Видео"],
		group: ["Просмотр"],
	},
	{
		id: 12,
		link: "https://sbsplay.net/1395-starwarsthebadbatch.html",
		tags: ["Видео"],
		group: ["Просмотр"],
	},
];

const addBookmarks = (bookmark) => {
	AllBookmarks = [...AllBookmarks, { ...bookmark }];
};

const getBookmarks = () => fillBookmarks(AllBookmarks);

const fillBookmarks = (AllBookmarks) => AllBookmarks.map((obj) => fillBookmark(obj));

const fillBookmark = (bookmark) => {
	const filledBookmark = { ...bookmark };
	const url = new URL(filledBookmark.link);
	filledBookmark.imgLink = url.hostname;
	filledBookmark.title = url.hostname.trim().replace(/(.com|www.|.ru|.net|.org|.biz|dvd.)/g, "");
	return filledBookmark;
};

export { getBookmarks, addBookmarks };
