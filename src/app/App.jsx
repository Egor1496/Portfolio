import React from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/App.css";

import {
	Error as ErrorPage,
	UIKit, Demo
} from "../pages";

import { Layout } from "./Layout/Layout";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<UIKit />} />
					<Route path="/demo" element={<Demo />} />
					<Route path="/ui" element={<UIKit />} />
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
