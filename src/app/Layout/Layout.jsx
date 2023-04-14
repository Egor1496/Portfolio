import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import css from "./Layout.module.sass";

import { ThemeParams } from "../../features/ui";
import { ThemeSelect } from "../../entities/ui";
import { BaseDropMenu } from "../../shared/ui";

const Layout = () => {
	const THEME_DEFAULT = 12;
	const [numberTheme, setTheme] = useState(THEME_DEFAULT);
	return (
		<div className={css.main}>
			<ThemeParams thisNumberTheme={numberTheme} />
			<nav className={`${css["col-1"]} ${css.nav}`}>
				<BaseDropMenu />
			</nav>
			<div className={css["col-2"]}>
				<header className={css.header} >
					<h1>Bookmarks prototype</h1>
				</header>
				<main className={css.main}>
					<article className={css.article} ><Outlet />	</article>
					<aside className={css.aside} >
						<ThemeSelect setTheme={setTheme} />
					</aside>
				</main>
				<footer className={css.footer} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
					<h3>Develop my App ^ Egor1496</h3>
				</footer>
			</div>
		</div >
	);
}

export { Layout };