import { getURL, getId, getLink, getImgLink, getDescription, getTags, getGroup } from "../../../shared/model";

const fillBookmark = (bookmark) => {
	const url = getURL(getLink(bookmark.link));
	const filledBookmark = {
		id: getId(bookmark.id),
		link: getLink(bookmark.link),
		imgLink: getImgLink(url),
		title: bookmark.title,
		description: getDescription(bookmark.description),
		tags: getTags(bookmark.tags),
		group: getGroup(bookmark.group),
	};
	return filledBookmark;
};

export { fillBookmark };
