const getJSON = (json) => {
	return JSON.stringify(json);
};

const getObject = (json) => {
	return JSON.parse(json);
};

export { getJSON, getObject };
