import React from "react";
import css from "./MyLabel.module.sass";

const MyLabel = ({ labelText = "", children, position = "top" }) => {

	console.log();

	return (
		<div className={css.main}>
			{
				<label className={`${css.label} ${css[position]}`}>
					{labelText}
					{children}
				</label>
			}
		</div>
	);
}

export { MyLabel };