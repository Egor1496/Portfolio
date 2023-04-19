import React from "react";
import css from "./Title.module.sass";

const Title = ({ text, style, children, type, floatIcon, BorderStyle }) => {
	return (
		<div className={css.main} >
			<div className={`
				${css.title}
				${css[type]}
				${css[floatIcon]}
				${css[BorderStyle]}
			`} style={style}>{children}{text}</div>
		</div >
	);
}

export { Title };