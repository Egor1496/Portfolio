import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import sass from "./Layout.module.sass";

import { FilterButtons, BookmarksContext } from "../../processes/model/context"

import { MainMenu, MainHeader, MainAside, MainFooter, getGroups, getTags, getBookmarks } from "../../widgets";


const Layout = () => {

	const [filterName, setFilterName] = useState(["", ""]);

	const [bookmarks, setBookmarks] = useState(getBookmarks(filterName, "title"));

	const [groupLinks, setGroupLinks] = useState(getGroups());
	const [tagCloud, setTagCloud] = useState(getTags());

	const cleanGroups = new Array(getGroups().size).fill(false);
	const [listGroup, setListGroup] = useState(cleanGroups);

	const cleanTags = new Array(getTags().size).fill(false);
	const [listTags, setListTags] = useState(cleanTags);

	const setState = (setList, newList, newFilterName) => {
		setFilterName(newFilterName);
		setBookmarks(getBookmarks(newFilterName));
		setList(newList);
		setTagCloud(getTags());
	};

	const onClickGroup = (i, text) => {
		const newList = cleanGroups;
		newList[i] = !listGroup[i];
		const newFilterName = newList[i] ? [text, ""] : ["", ""];
		setListTags(cleanTags);
		setState(setListGroup, newList, newFilterName);
	}

	const onClickTags = (action, i, text) => {
		switch (action) {
			case "toogle":
				const newList = [...listTags];
				newList[i] = !newList[i];
				let newFilterName;
				if (newList[i])
					newFilterName = [filterName[0], text + "," + filterName[1]];
				else
					newFilterName = [filterName[0], filterName[1].replace(text + ",", "")];
				setState(setListTags, newList, newFilterName);
				break;
			case "clean":
				setState(setListTags, cleanTags, [filterName[0], ""]);
				break;
		}
	}

	return (
		<div className={sass.mainWrap}>
			<nav className={`${sass["col-1"]} ${sass.nav}`}>
				<FilterButtons.Provider value={[listGroup, onClickGroup]}>
					<MainMenu groups={groupLinks} />
				</FilterButtons.Provider>
			</nav>
			<div className={sass["col-2"]}>
				<header className={sass.header} >
					<MainHeader />
				</header>
				<main className={sass.main}>
					<article className={sass.article} >
						<BookmarksContext.Provider value={[bookmarks, setBookmarks, filterName[0]]}>
							<Outlet />
						</BookmarksContext.Provider>
					</article>
					<aside className={sass.aside} >
						<FilterButtons.Provider value={[listTags, onClickTags]}>
							<MainAside tags={tagCloud} />
						</FilterButtons.Provider>
					</aside>
				</main>
				<footer className={sass.footer} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
					<MainFooter />
				</footer>
			</div>
		</div >
	);
}

export { Layout };


// обновление облака тэгов и груп при добавлении/изменении/удалении закладки
// обновлении облака закладок при клике на группу
// перенести из лаяута в процесс закладки и облоко тэгов групп