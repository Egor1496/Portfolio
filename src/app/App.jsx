import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./styles/App.css";

import { UIKit } from "../pages";
import { Demo } from "../pages";
import { Error as ErrorPage } from "../pages";

const App = () => {
	return (
		<div>
			<Link to="/ui">
				<h1>Интерфейс</h1>
			</Link>
			<Link to="/demo">
				<h1>Шаблон</h1>
			</Link>
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
