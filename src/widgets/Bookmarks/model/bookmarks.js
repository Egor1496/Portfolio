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
	{
		id: 5,
		link: "https://www.deepl.com/en/translator#ru",
		description: "онлайн-переводчик, работающий на основе машинного перевода",
		tags: "Пререводчик",
		group: "Инструменты",
	},
];

const addBookmark = (bookmark) => {
	bookmarks = [...bookmarks, { ...bookmark }];
};

const deleteBookmark = (id, setBookmarks) => {
	bookmarks.forEach((el, i) => {
		if (el.id === id) {
			bookmarks.splice(i, 1);
			setBookmarks(fillBookmarks(bookmarks));
		}
	});
};

const editBookmark = (id, newBookmark, setBookmarks) => {
	bookmarks.forEach((el, i) => {
		if (el.id === id) {
			bookmarks.splice(i, 1);
			addBookmark(newBookmark);
			setBookmarks(fillBookmarks(bookmarks));
		}
	});
};

const fillBookmarks = (bookmarks) => {
	return sortTitleBookmarks(bookmarks.map((obj) => fillBookmark(obj)));
};

const sortTitleBookmarks = (bookmarks) => {
	return [...bookmarks].sort((a, b) => a.title.localeCompare(b.title));
};
// const sortDescriptionBookmarks = (bookmarks) => {
// 	return [...bookmarks].sort((a, b) => {
// 		return a.description.localeCompare(b.description);
// 	});
// };

const getBookmarks = () => fillBookmarks(bookmarks);

export { getBookmarks, addBookmark, deleteBookmark, editBookmark };
