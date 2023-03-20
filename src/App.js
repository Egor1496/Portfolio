import React from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Home from "./pages/Home.jsx";
import Demo from "./pages/Demo.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const App = () => {
	return (
		<div>
			<Routes>
				<Route index element={<Home />} />
				<Route path="demo" element={<Demo />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
};

export default App;
