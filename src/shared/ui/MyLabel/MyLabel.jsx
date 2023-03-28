import React from "react";
import css from "./MyLabel.module.css";

const MyLabel = ({ labelText, children }) => {
	return (
		<div className={css.main}>
			{
				<label className={css.label}>
					{labelText}
					{children}
				</label>
			}
		</div>
	);
}

export { MyLabel };