const setStore = (name, obj) => {
	localStorage.setItem(name, obj);
};

const getStore = (name) => {
	return localStorage.getItem(name) || "[]";
};

export { setStore, getStore };
