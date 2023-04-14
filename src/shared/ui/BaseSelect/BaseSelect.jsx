import React, { useState } from "react";
import css from "./BaseSelect.module.sass";

const BaseSelect = ({ styles, options }) => {

	const [select, setSelect] = useState({ open: false, value: 0, text: "Опция 1" });

	const click = (e) => {
		if (e.target.getAttribute("data-number"))
			setSelect({
				open: !select.open,
				value: Number(e.target.getAttribute("data-number")),
				text: e.target.textContent.trim()
			});
		else
			setSelect({
				...select,
				open: !select.open,
			});
	}

	return (
		<div className={css.main}>
			<div className={`${css.select} ${select.open ? css.open : css.close}`}
				onClick={click}
				style={styles}
			>
				<div className={css["option-title"]}><span>{options?.title || "Опции"}</span></div>
				<div className={css["option-wrap"]}>
					{options?.arrOption?.map((elem, i) => {
						return <div key={i} className={css.option} data-number={i}>{elem}</div>
					}) || <div className={css.option} data-number="0">Опция</div>}
				</div>
			</div>
		</div >
	);
}

export { BaseSelect };