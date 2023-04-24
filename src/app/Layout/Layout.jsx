import React from "react";
import { Outlet } from "react-router-dom";

import sass from "./Layout.module.sass";

import { MainMenu, MainHeader, MainAside, MainFooter } from "../../widgets";


const Layout = () => {

	return (
		<div className={sass.mainWrap}>

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