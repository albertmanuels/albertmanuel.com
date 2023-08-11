import React from "react";

const ThemeSlider = (props: {
	theme: string | undefined;
	onToggle: (val: string) => void;
}) => {
	const { theme, onToggle } = props;
	return (
		<label className="relative inline-block w-[50px] height-[20px] bg-transparent">
			<input
				type="checkbox"
				className="toggle opacity-0 w-0 h-0"
				checked={theme === "light"}
				onChange={() => onToggle(theme === "light" ? "dark" : "light")}
			/>
			<span className="slider bg-accent rounded-[24px] before:rounded-[24px] absolute cursor-pointer top-0 left-0 right-0 bottom-0 before:absolute before:contens-none before:w-[15px] before:h-[15px] before:left-[5px] before:bottom-[3px] before:bg-white before:transition-all delay-[0.5s]" />
		</label>
	);
};

export default ThemeSlider;
