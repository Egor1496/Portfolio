import React from "react";
import sass from "./BaseModal.module.sass";

import { AiOutlineCloseCircle } from 'react-icons/ai';

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
						<div className={sass.close} onClick={() => { setActive(false) }} >
							<AiOutlineCloseCircle />
						</div>
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