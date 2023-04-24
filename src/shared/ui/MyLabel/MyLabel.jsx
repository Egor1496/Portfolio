import React from "react";
import sass from "./MyLabel.module.sass";

const MyLabel = ({ labelText = "", children, position = "top", width }) => {
	return (
		<div className={sass.main}>
			{
				<label className={`${sass.label} ${sass[width]} ${sass[position]}`}>
					{labelText}
					{children}
				</label>
			}
		</div>
	);
}

export { MyLabel };