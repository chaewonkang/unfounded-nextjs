import { css, Global, keyframes } from "@emotion/react";

export const downArrowBox = css`
    cursor: pointer;
    width: 100vw;
    height: 126px;
    display: flex;
    flex-direction: row;
    padding-left: 21px;
    padding-right: 21px;
    padding-bottom: 27px;
    display: flex;
    justify-content: space-between;

    &:hover {
        img {
            transform: rotate(360deg);
            transition: 1s;
        }
    }

    img {
        width: 4%;
        height: 126px;
        object-fit: contain;
    }
`;

export const headerContainer = css`
    width: 100%;
    height: 112px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;

    padding-top: 11px;
    padding-bottom: 12px;

    & > div:first-of-type {
        cursor: pointer;
        height: 100%;
        & > img {
            height: 100%;
        }
    }

    & > div:last-of-type {
        cursor: pointer;
        height: 100%;
        width: 98px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & > div {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            div {
                height: calc(100% / 3);
                display: flex;
                flex-direction: column;
                justify-content: center;

                img {
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
`;

export const menuWheel = css`
    width: 100%;
    background-color: #000;
    color: #fff;
    display: flex;

    & > img:first-of-type {
        width: 26px;
        margin-right: 10px;
    }

    & > img:last-of-type {
        width: 26px;
        margin-left: 10px;
    }

    & > div {
        cursor: pointer;
        display: flex;
        width: calc(100% - 52px);
        justify-content: space-between;

        span {
            font-family: "GTFAgentur", serif;
            font-size: 38px;
            letter-spacing: -0.2px;
            line-height: 35px;
        }
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
    headerContainer: headerContainer,
    menuWheel: menuWheel,
    downArrowBox: downArrowBox,
};

export default theme;
