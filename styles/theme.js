import { css, Global, keyframes } from "@emotion/react";

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const slideDown = keyframes`
	0% {
		opacity: 0,
		transform: "translate3d(0, 100%,0)",
	}
	100% {
		opacity: 1,
		transform: "translate3d(0, 0, 0)",
	}
`;

export const slideUp = keyframes`
	0% {
		opacity: 1,
		transform: "translate3d(0, 0, 0)",
	}
	100% {
		opacity: 0,
		transform: "translate3d(0, -50%, 0)",
	}
`;

export const titleKr = css`
    font-family: Gothic A1, sans-serif;
    font-weight: bold;
    font-size: 15px;
    letter-spacing: -0.2px;
    line-height: 24px;
`;

export const textKr = css`
    font-family: Gothic A1, sans-serif;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: -0.2px;
    line-height: 24px;
`;

export const mTitleKr = css`
    font-family: Gothic A1, sans-serif;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: -0.2px;
    line-height: 23px;
`;

export const mTextKr = css`
    font-family: Gothic A1, sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.2px;
    line-height: 23px;
`;

export const titleEn = css`
    font-family: PP Neue Montreal Book, sans-serif;
    -webkit-text-stroke: 0.5px #000;
    font-size: 16px;
    letter-spacing: 0.1px;
    line-height: 24px;
`;

export const textEn = css`
    font-family: PP Neue Montreal Book, sans-serif;
    font-size: 16px;
    letter-spacing: 0.1px;
    line-height: 24px;
`;

export const mTitleEn = css`
    font-family: PP Neue Montreal Book, sans-serif;
    -webkit-text-stroke: 0.5px #000;
    font-size: 15px;
    letter-spacing: 0.1px;
    line-height: 23px;
`;

export const mTextEn = css`
    font-family: PP Neue Montreal Book, sans-serif;
    font-size: 15px;
    letter-spacing: 0.1px;
    line-height: 23px;
`;

export const subTitleEn = css`
    font-family: "GTFAgentur", serif;
    font-size: 38px;
    letter-spacing: -0.5px;
    line-height: 55px;
`;

export const size = {
    mobile: "770px",
    tabletS: "1023px",
    tabletM: "1220px",
    tabletL: "1280px",
    laptop: "1460px",
    desktop: "1700px",
};

export const theme = {
    mobile: `(max-width: ${size.mobile})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tabletM: `(max-width: ${size.tabletM})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptop: `(max-width: ${size.laptop})`,
    desktop: `(max-width: ${size.desktop})`,
    primaryDark: "#0D0C1D",
    primaryLight: "#EFFFFA",
    primaryHover: "#343078",
    titleKr: titleKr,
    textKr: textKr,
    mTitleKr: mTitleKr,
    mTextKr: mTextKr,
    titleEn: titleEn,
    textEn: textEn,
    mTitleEn: mTitleEn,
    mTextEn: mTextEn,
    subTitleEn: subTitleEn,
    fadeIn: fadeIn,
};

export default theme;
