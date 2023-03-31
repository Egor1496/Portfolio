import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./styles/App.css";

import {
	Error as ErrorPage,
	UIKit, Demo
} from "../pages";

import {
	ThemeSelect
} from "../entities/ui";

const App = ({ setTheme }) => {
	return (
		<div>
			<h1><Link to="/ui">UI Шаблон</Link></h1>
			<h1><Link to="/demo">HTML Образец</Link></h1>
			<ThemeSelect setTheme={setTheme} />
			<Routes>
				<Route index element={<UIKit />} />
				<Route path="/demo" element={<Demo />} />
				<Route path="/ui" element={<UIKit />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
};

export default App;
