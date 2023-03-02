import { useEffect, useState } from "react";
import { BackToTopContainer } from "./styles";

function BackToTopIcon() {
	return (
		<section>
		<div className="displayDesktop">
			<svg
				width="40"
				height="40"
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="20" cy="20" r="20" fill="#9A1A4B" />
				<path d="M10 27L20.3226 13L30 27" stroke="white" strokeWidth={5} />
			</svg>
		</div>
		<div className="displayMobile">
			<svg
				width="30"
				height="30"
				viewBox="0 0 45 45"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="20" cy="20" r="20" fill="#9A1A4B" />
				<path d="M10 27L20.3226 13L30 27" stroke="white" strokeWidth={5} />
			</svg>
		</div>
		</section>
	);
}

export default function BackToTop() {
	const [isShowing, setIsShowing] = useState(false);

	function scrollToTop() {
		if (typeof window != "undefined") {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	}

	function toggleButton() {
		const scrolled = document.documentElement.scrollTop;
		setIsShowing(scrolled > 400 ? true : false);
	}

	useEffect(() => {
		window.addEventListener("scroll", toggleButton);
	}, []);

	return (
		<BackToTopContainer id="back-to-top-btn" onClick={() => scrollToTop()}>
			{isShowing ? (
				<div className="back-to-top-wrapper">
					<BackToTopIcon />
				</div>
			) : null}
		</BackToTopContainer>
	);
}
