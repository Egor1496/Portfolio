import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import sass from "./Layout.module.sass";

import { ThemeParams, MainMenu, MainHeader, MainAside, MainFooter } from "../../features/ui";
import { ThemeSelect } from "../../entities/ui";

const Layout = () => {
	const THEME_DEFAULT = 12;
	const [numberTheme, setTheme] = useState(THEME_DEFAULT);
	return (
		<div className={sass.main}>
			<ThemeParams thisNumberTheme={numberTheme} />
			<nav className={`${sass["col-1"]} ${sass.nav}`}>
				<MainMenu />
			</nav>
			<div className={sass["col-2"]}>
				<header className={sass.header} >
					<MainHeader />
				</header>
				<main className={sass.main}>
					<article className={sass.article} ><Outlet /></article>
					<aside className={sass.aside} >
						<MainAside />
						<ThemeSelect setTheme={setTheme} />
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