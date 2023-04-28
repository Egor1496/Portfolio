let bookmarks = [
	{
		id: 1,
		link: "https://www.youtube.com/",
		title: "youtube",
		description: "Видеохостинг, предоставляющий пользователям услуги хранения, доставки и показа видео.",
		tags: "Видео, Соц. сеть",
		group: "Избранные",
	},
	{
		id: 2,
		link: "https://dzen.ru",
		title: "dzen",
		description: "Это Дзен — платформа для создания и просмотра контента. ",
		tags: "Видео, Соц.сеть",
		group: "Соц. сети",
	},
	{
		id: 3,
		link: "https://vk.com/",
		title: "vk",
		description: "ВКонта́кте — российская социальная сеть",
		tags: "Соц. сеть",
		group: "Избранные",
	},
	{
		id: 4,
		link: "https://translate.yandex.ru/",
		title: "translate",
		description: "Перевод с английского",
		tags: "Переводчик",
		group: "Избранные, Инструменты",
	},
	{
		id: 5,
		link: "https://www.deepl.com/en/translator#ru",
		title: "deepl",
		description: "онлайн-переводчик, работающий на основе машинного перевода",
		tags: "Пререводчик",
		group: "Инструменты",
	},
];

const addBookmark = (bookmark) => {
	bookmarks = [...bookmarks, { ...bookmark, id: Date.now() + Math.random() }];
};

const deleteBookmark = (id, setBookmarks) => {
	bookmarks.forEach((el, i) => {
		if (el.id === id) {
			bookmarks.splice(i, 1);
			setBookmarks(bookmarks);
		}
	});
};

const editBookmark = (id, newBookmark, setBookmarks) => {
	bookmarks.forEach((el, i) => {
		if (el.id === id) {
			bookmarks.splice(i, 1);
			uploadBookmarks(newBookmark, setBookmarks);
		}
	});
};

const sortTitleBookmarks = (bookmarks) => {
	return [...bookmarks].sort((a, b) => a.title.localeCompare(b.title));
};

// const sortDescriptionBookmarks = (bookmarks) => {
// 	return [...bookmarks].sort((a, b) => a.description.localeCompare(b.description));
// };

const getBookmarks = () => sortTitleBookmarks(bookmarks);

const uploadBookmarks = (bookmark, setState) => {
	addBookmark(bookmark);
	setState(getBookmarks());
};

export { getBookmarks, deleteBookmark, editBookmark, uploadBookmarks };
