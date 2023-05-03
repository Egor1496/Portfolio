import { nanoid } from "nanoid";

import { getJSON, setStore, getStore, getObject } from "../../../shared/model";

let bookmarks = getObject(getStore("bookmarks"));

let filledBookmarks;

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
	tags.clear();
	groups.clear();
	filledBookmarks.forEach((bookmark) => {
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
	fillTagsAndGroups();
	return [...tags].sort((a, b) => a.localeCompare(b));
};

const getGroups = () => {
	fillTagsAndGroups();
	return [...groups].sort((a, b) => {
		return a.localeCompare(b);
	});
};

const getBookmarks = (filterName = ["", ""], sortType = "title") => {
	filledBookmarks = filter(filterName, bookmarks);
	filledBookmarks = sort(sortType, filledBookmarks);
	return filledBookmarks;
};

const filter = (filter, bookmarks) => {
	let [groupNames, tagsNames] = filter;

	groupNames = groupNames.trim().split(",");
	tagsNames = tagsNames.trim().split(",");

	const filtered = bookmarks.filter((elem) => {
		let suitableElem = false;

		const cleanGroup = elem.group.trim().toLowerCase();
		const cleanTags = elem.tags.trim().toLowerCase();

		let isSuitableGroup = false,
			isSuitableTags = false;

		for (let i = 0; i < groupNames.length; i++) {
			const name = groupNames[i].trim().toLowerCase();
			if (~cleanGroup.indexOf(name) || name === "") {
				isSuitableGroup = true;
				break;
			}
		}

		if (tagsNames.length === 1) isSuitableTags = true;
		else
			for (let i = 0; i < tagsNames.length - 1; i++) {
				const name = tagsNames[i].trim().toLowerCase();
				if (~cleanTags.indexOf(name) || name === "") {
					isSuitableTags = true;
					break;
				}
			}

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

filledBookmarks = getBookmarks();

fillTagsAndGroups();

export { getBookmarks, deleteBookmark, editBookmark, uploadBookmarks, getTags, getGroups };
