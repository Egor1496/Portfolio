$(document).ready(() => {
	$("head").append("<style> :root{" + colorThemeList[getRandomInt(0, 5)].join(";") + "}</style>");
});

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
