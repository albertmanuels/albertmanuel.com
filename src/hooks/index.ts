import { useState, useEffect } from "react";

export const useCheckScreenSize = () => {
	const [width, setWidth] = useState(0);

	const handleScreenSizeChange = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleScreenSizeChange);

		return () => {
			window.removeEventListener("resize", handleScreenSizeChange);
		};
	}, [width]);

	const isMobile = width <= 768;

	return { isMobile };
};
