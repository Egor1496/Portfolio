import { nanoid } from "nanoid";

import { getJSON, setStore, getStore, getObject } from "../../../shared/model";

let bookmarks = getObject(getStore("bookmarks"));

const tags = new Set(),
	groups = new Set();

const addTagsAndGroups = (newTags, newGroups) => {
	newTags.split(",").forEach((tag) => {
		tags.add(tag.trim());
	});

	newGroups.split(",").forEach((group) => {
		groups.add(group.trim());
	});
};

const fillTagsAndGroups = () => {
	bookmarks.forEach((bookmark) => {
		addTagsAndGroups(bookmark.tags, bookmark.group);
	});
};

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

const uploadBookmarks = (bookmark, setState) => {
	addBookmark(bookmark);
	setStore("bookmarks", getJSON(bookmarks));
	setState(getBookmarks());
};

const getTags = () => {
	return tags;
};

const getGroups = () => {
	return groups;
};

const getBookmarks = (filterName = ["", ""], sortType = "title") => {
	let newBookmark = filter(filterName, bookmarks);
	newBookmark = sort(sortType, newBookmark);
	return newBookmark;
};

const filter = (filter, bookmarks) => {
	let [groupName, tagsName] = filter;

	groupName = groupName.trim().toLowerCase();
	tagsName = tagsName.trim().toLowerCase();

	const filtered = bookmarks.filter((elem) => {
		let suitableElem = false;

		const cleanGroup = elem.group.trim().toLowerCase();
		const cleanTags = elem.tags.trim().toLowerCase();

		const isSuitableGroup = Boolean(~cleanGroup.indexOf(groupName) || groupName === ""),
			isSuitableTags = Boolean(~cleanTags.indexOf(tagsName) || tagsName === "");

		if (isSuitableGroup && isSuitableTags) suitableElem = elem;

		return suitableElem;
	});

	return filtered;
};

const sortTitleBookmarks = (bookmarks) => {
	return bookmarks.sort((a, b) => {
		if (!a.title) return false;
		if (!b.title) return false;
		return a.title.localeCompare(b.title);
	});
};

const sortDescriptionBookmarks = (bookmarks) => {
	return bookmarks.sort((a, b) => {
		if (!a.description) return false;
		if (!b.description) return false;
		return a.description.localeCompare(b.description);
	});
};

const sort = (sortType, bookmarks) => {
	const type = {
		title: sortTitleBookmarks,
		description: sortDescriptionBookmarks,
	};

	return type[sortType.trim().toLowerCase()](bookmarks);
};

fillTagsAndGroups();

export { getBookmarks, deleteBookmark, editBookmark, uploadBookmarks, getTags, getGroups };
