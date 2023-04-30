import { nanoid } from "nanoid";

import { getJSON, setStore, getStore, getObject } from "../../../shared/model";

let bookmarks = getObject(getStore("bookmarks"));

const addBookmark = (bookmark) => {
	bookmarks = [...bookmarks, { ...bookmark, id: nanoid() }];
};

const deleteBookmark = (id, setBookmarks) => {
	bookmarks.forEach((el, i) => {
		if (el.id === id) {
			bookmarks.splice(i, 1);
			setStore("bookmarks", getJSON([...bookmarks]));
			setBookmarks(bookmarks);
		}
	});
};

const editBookmark = (id, newBookmark, setBookmarks) => {
	bookmarks.forEach((el, i) => {
		if (el.id === id) {
			bookmarks.splice(i, 1);
			setStore("bookmarks", getJSON([...bookmarks]));
			uploadBookmarks(newBookmark, setBookmarks);
		}
	});
};

// const sortTitleBookmarks = (bookmarks) => {
// 	return [...bookmarks].sort((a, b) => a.title.localeCompare(b.title));
// };

// const sortDescriptionBookmarks = (bookmarks) => {
// 	return [...bookmarks].sort((a, b) => a.description.localeCompare(b.description));
// };

const getBookmarks = () => bookmarks;

const uploadBookmarks = (bookmark, setState) => {
	addBookmark(bookmark);
	setStore("bookmarks", getJSON(bookmarks));
	setState(getBookmarks());
};

export { getBookmarks, deleteBookmark, editBookmark, uploadBookmarks };
