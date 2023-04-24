import React from "react";
import sass from "./BaseTextarea.module.sass";

const BaseTextarea = (props) => {

	const {
		state,
		setState,
		readonly,
		placeholder = "",
		width
	} = props;

	return (
		<div className={sass.main}>
			<textarea className={`${sass.textarea} ${sass[width]} ${readonly && sass.disable}`}
				value={state}
				onChange={(e) => setState(e.target.value)}
				readOnly={readonly}
				placeholder={placeholder}
			/>
		</div>
	);
}

export { BaseTextarea };