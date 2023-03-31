import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";

import { SelectThisTheme } from "./features/ui";

const root = ReactDOM.createRoot(document.getElementById("root"));

let thixNumberTheme = 4;

const setTheme = (numberTheme) => {
	thixNumberTheme = numberTheme;
	console.log(thixNumberTheme);

	root.render(
		<BrowserRouter>
			<SelectThisTheme numberTheme={thixNumberTheme}>
				<App setTheme={setTheme} />
			</SelectThisTheme>
		</BrowserRouter>
	);
};

root.render(
	<BrowserRouter>
		<SelectThisTheme numberTheme={thixNumberTheme}>
			<App setTheme={setTheme} />
		</SelectThisTheme>
	</BrowserRouter>
);
