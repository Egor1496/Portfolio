import React from "react";
import sass from "./BaseModal.module.sass";

const BaseModal = (props) => {
	const {
		cssInner,
		cssBg,
		cssModal,
		children,
		active,
		setActive
	} = props;

	return (
		<>
			{
				active && (<div>
					<div className={sass.bg} style={cssBg} onClick={() => { setActive(false) }} />
					<div className={sass.modal} style={cssModal} >
						<div className={sass.mainInner} style={cssInner} >
							{children}
						</div>
					</div>
				</div>)
			}
		</>
	);
}

export { BaseModal };