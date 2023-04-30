import { getURL } from "./URL";

const getId = (id) => {
	const filledId = id;
	return filledId;
};

const getLink = (link = "") => {
	const filledLink = link;
	return filledLink;
};

const getImgLink = (url) => {
	const filledimgLink = url.hostname;
	return filledimgLink;
};

const getTitle = (title = "", link) => {
	const url = getURL(link);
	let filledTitle = title,
		isTitle = title.replace(/(.|,|-|_|;|:|'|)/gi, "");

	if (!isTitle) {
		filledTitle = url.hostname.replace(/(.com|www.|.ru|.net|.org|.biz|dvd.|.io)/g, "");
	}

	return filledTitle;
};

const getDescription = (description = "") => {
	const filledDescription = description;
	return filledDescription;
};

const getTags = (tags = "") => {
	const filledTags = tags.trim() && tags.toLowerCase().trim().split(",");
	return filledTags;
};

const getGroup = (group = "") => {
	const filledGroup = group.trim() && group.toLowerCase().trim().split(",");
	return filledGroup;
};

export { getId, getLink, getImgLink, getTitle, getDescription, getTags, getGroup };
