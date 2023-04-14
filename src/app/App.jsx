import React from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/App.sass";

import {
	Error, Main,
	UIKit, Demo,
} from "../pages";

import { Layout } from "./Layout/Layout";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Main />} />
					<Route path="/demo" element={<Demo />} />
					<Route path="/ui" element={<UIKit />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
