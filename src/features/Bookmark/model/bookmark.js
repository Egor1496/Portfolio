const fillBookmark = (bookmark) => {
	const filledBookmark = {
		id: Date.now() + Math.random(),
		link: getLink(bookmark.link),
		description: getDescription(bookmark.description),
		tags: getTags(bookmark.tags),
		group: getGroup(bookmark.group),
	};
	const url = new URL(filledBookmark.link);
	filledBookmark.imgLink = getImgLink(url);
	filledBookmark.title = getTitle(bookmark.title, url);
	return filledBookmark;
};
const getLink = (link) => {
	const filledLink = link;

	return filledLink;
};
const getImgLink = (url) => {
	const filledimgLink = url.hostname;

	return filledimgLink;
};
const getTitle = (title = "", url) => {
	let filledTitle = "";
	if (title.trim().replace(/(.|,|-|_|;|:|'|)/gi, "")) {
		filledTitle = title.trim();
	} else {
		filledTitle = url.hostname.trim().replace(/(.com|www.|.ru|.net|.org|.biz|dvd.|.io)/g, "");
	}

	return filledTitle;
};
const getDescription = (description) => {
	const filledDescription = description;

	return filledDescription;
};
const getTags = (tags) => {
	const filledTags = tags.trim() && tags.toLowerCase().trim().split(",");

	return filledTags;
};
const getGroup = (group) => {
	const filledGroup = group.trim() && group.toLowerCase().trim().split(",");

	return filledGroup;
};

export { fillBookmark };
