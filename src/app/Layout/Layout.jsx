import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import css from "./Layout.module.css";

import { ThemeParams } from "../../features/ui";
import { ThemeSelect } from "../../entities/ui";

const Layout = () => {
	const THEME_DEFAULT = 12;
	const [numberTheme, setTheme] = useState(THEME_DEFAULT);
	return (
		<div className={css.main}>
			<nav className={css["col-1"]}>
				<h1>Nav</h1>
			</nav>
			<div className={css["col-2"]}>
				<header>
					<ThemeParams thisNumberTheme={numberTheme} />
					<h1><Link to="/ui">UI Шаблон</Link></h1>
					<h1><Link to="/demo">HTML Образец</Link></h1>
					<ThemeSelect setTheme={setTheme} />
				</header>
				<main className={css.content}>
					<article><Outlet />	</article>
					<aside>
						<h1>Aside</h1>
					</aside>
				</main>
				<footer>
					<h1>Footer</h1>
				</footer>
			</div>


		</div >
	);
}

export { Layout };