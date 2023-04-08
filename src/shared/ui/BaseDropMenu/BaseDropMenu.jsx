import React from "react";
import { Link } from "react-router-dom";

import css from "./BaseDropMenu.module.css";

const BaseDropMenu = () => {
	return (
		<nav id="navigation">
			<ul className={`${css["links"]}`}>
				<li>
					<a href="/">Страницы</a>
					<ul className={`${css["drop"]}`}>
						<li><Link to="/ui">UI Шаблон</Link></li>
						<li><Link to="/demo">HTML Образец</Link></li>
						<li><Link to="/Eror">404</Link></li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}

export { BaseDropMenu };