import React from "react";
import css from "./BaseTextarea.module.sass";

const BaseTextarea = (props) => {

	const {
		state,
		setState,
		readonly,
		placeholder = ""
	} = props;

	return (
		<div className={css.main}>
			<textarea className={`${css.textarea} ${readonly && css.disable}`}
				value={state}
				onChange={(e) => setState(e.target.value)}
				readOnly={readonly}
				placeholder={placeholder}
			/>
		</div>
	);
}

export { BaseTextarea };