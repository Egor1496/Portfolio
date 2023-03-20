import React from "react";

import MyButton from "../components/ui/my-button/MyButton.jsx";
import Myinput from "../components/ui/my-input/MyInput.jsx";
import MyTextarea from "../components/ui/my-textarea/MyTextarea.jsx";

function Home() {
	return (
		<>
			<MyButton text="Кнопка" />
			<MyButton text="Кнопка" />
			<Myinput />
			<Myinput />
			<MyTextarea/>
			<MyTextarea/>
		</>
	);
}

export default Home;
