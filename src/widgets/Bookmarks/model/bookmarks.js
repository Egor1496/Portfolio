import { fillBookmark } from "../../../features";

let bookmarks = [
	{
		id: 1,
		link: "https://www.youtube.com/",
		description: "Видеохостинг, предоставляющий пользователям услуги хранения, доставки и показа видео.",
		tags: "Видео, Соц. сеть",
		group: "Избранные",
	},
	{
		id: 2,
		link: "https://dzen.ru",
		description: "Это Дзен — платформа для создания и просмотра контента. ",
		tags: "Видео, Соц.сеть",
		group: "Соц. сети",
	},
	{
		id: 3,
		link: "https://vk.com/",
		description: "ВКонта́кте — российская социальная сеть",
		tags: "Соц. сеть",
		group: "Избранные",
	},
	{
		id: 4,
		link: "https://translate.yandex.ru/",
		description: "Перевод с английского",
		tags: "Переводчик",
		group: "Избранные, Инструменты",
	},
	// {
	// 	id: 4,
	// 	link: "https://www.deepl.com/en/translator#ru",
	// 	description: "онлайн-переводчик, работающий на основе машинного перевода",
	// 	tags: "Пререводчик",
	// 	group: "Инструменты",
	// },
	// {
	// 	id: 5,
	// 	link: "https://sbsplay.net/index.php?do=favorites",
	// 	description: "Сериалы онлаин",
	// 	tags: "Видео",
	// 	group: "Избранное, Просмотр",
	// },
	// {
	// 	id: 6,
	// 	link: "https://dvd.vse-chasti-filmov.biz/",
	// 	description: "Все части фильмов",
	// 	tags: "Видео",
	// 	group: "Просмотр",
	// },
	// {
	// 	id: 7,
	// 	link: "https://oper.ru/video/",
	// 	description: "Сайт гоблина",
	// 	tags: "Видео",
	// 	group: "Просмотр",
	// },
	// {
	// 	id: 8,
	// 	link: "https://vse-filmy-akterov.ru/",
	// 	description: "Фильмы актеров",
	// 	tags: "Видео",
	// 	group: "Просмотр",
	// },
	// {
	// 	id: 9,
	// 	link: "https://knigavuhe.org/book/tajjny-khoroshejj-kukhni/",
	// 	description: "Тайны хорошей кухни",
	// 	tags: "Аудио книга",
	// 	group: "Книги",
	// },
	// {
	// 	id: 10,
	// 	link: "https://sbsplay.net/1024-startrekpicard.html",
	// 	tags: "Видео",
	// 	group: "Просмотр",
	// },
	// {
	// 	id: 11,
	// 	link: "https://sbsplay.net/975-themandalorian.html",
	// 	tags: "Видео",
	// 	group: "Просмотр",
	// },
	// {
	// 	id: 12,
	// 	link: "https://sbsplay.net/1395-starwarsthebadbatch.html",
	// 	tags: "Видео",
	// 	group: "Просмотр",
	// },
];

const addBookmark = (bookmark) => {
	bookmarks = [...bookmarks, { ...bookmark }];
};

const deleteBookmark = (id, setBookmarks) => {
	const clone = [...bookmarks];
	bookmarks.forEach((elem, index) => {
		if (elem.id === id) {
			clone.splice(index, 1);
			bookmarks = [...clone];
			setBookmarks(getBookmarks(bookmarks));
		}
	});
};

const editBookmark = (id, newBookmark, setBookmarks) => {
	const clone = [...bookmarks];
	bookmarks.forEach((elem, index) => {
		if (elem.id === id) {
			clone.splice(index, 1);
			bookmarks = [...clone];
			addBookmark(newBookmark);
			setBookmarks(getBookmarks(bookmarks));
		}
	});
};

const getBookmarks = () => fillBookmarks(bookmarks);

const fillBookmarks = (bookmarks) => {
	return sortTitleBookmarks(bookmarks.map((obj) => fillBookmark(obj)));
};

const sortTitleBookmarks = (bookmarks) => [...bookmarks].sort((a, b) => a.title.localeCompare(b.title));

// const sortDescriptionBookmarks = (bookmarks) => {
// 	return [...bookmarks].sort((a, b) => {
// 		return a.description.localeCompare(b.description);
// 	});
// };

export { getBookmarks, addBookmark, deleteBookmark, editBookmark };
