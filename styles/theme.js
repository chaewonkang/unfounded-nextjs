import { css, Global, keyframes } from "@emotion/react";

export const downArrowBox = css`
    cursor: pointer;
    width: 100vw;
    height: 126px;
    display: flex;
    flex-direction: row;
    margin-top: -1px;
    padding-left: 21px;
    padding-right: 21px;
    padding-bottom: 27px;
    display: flex;
    justify-content: space-between;

    &:hover {
        img {
            transform: rotate(10deg);
            transition: 1s;
        }
    }

    img {
        width: 4%;
        height: 90%;
        object-fit: contain;
    }

    @media (max-width: 781px) {
        justify-content: flex-end;
        img {
            width: 25%;
            height: 90%;
            object-fit: contain;
        }

        img:first-of-type {
            display: none;
        }
    }
`;

export const headerContainer = css`
    width: 100%;
    padding-left: 21px;
    padding-right: 21px;
    height: 112px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    cursor: pointer;
    padding-top: 11px;
    padding-bottom: 12px;
    z-index: 10;

    & > div:first-of-type {
        height: 100%;
        & > img {
            height: 100%;
        }
    }

    @media (max-width: 781px) {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
        height: 59px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #000;
        cursor: pointer;
        padding-top: 9px;
        padding-bottom: 9px;
        z-index: 10;

        & > div:first-of-type {
            height: 100%;
            & > img {
                height: 100%;
            }
        }
    }
`;

export const marquee = css`
    position: relative;
    width: 100vw;
    overflow: hidden;
    padding-top: 10px;
    white-space: nowrap;
`;

export const menuWheel = css`
    width: 100%;
    position: absolute;
    top: 112px;
    background-color: #000;
    padding-left: 21px;
    padding-right: 21px;
    color: #fff;
    display: flex;
    height: 46px;

    & > img:first-of-type {
        position: relative;
        top: 3px;
        width: 26px;
        height: 28px;
        object-fit: contain;
        margin-right: 10px;
    }

    & > img:last-of-type {
        position: relative;
        top: 3px;
        width: 26px;
        height: 28px;
        object-fit: contain;
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

    @media (max-width: 781px) {
        top: 59px;
        padding-left: 15px;
        padding-right: 15px;

        & > img:first-of-type {
            position: relative;
            top: 3px;
            width: 26px;
            height: 28px;
            object-fit: contain;
            margin-right: 10px;
        }

        & > img:last-of-type {
            position: relative;
            top: 3px;
            width: 26px;
            height: 28px;
            object-fit: contain;
            margin-left: 10px;
        }

        & > div {
            cursor: pointer;
            display: flex;
            width: calc(100% - 52px);
            justify-content: space-between;

            & > div:nth-of-type(2) {
                display: flex;
                width: 100%;
                justify-content: center;
            }

            span {
                font-family: "GTFAgentur", serif;
                font-size: 22px;
                letter-spacing: -0.2px;
            }

            & > div:first-of-type,
            & > div:last-of-type {
                display: none;
            }
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
    -webkit-text-stroke: 0.5px #000;
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
    mobile: "781px",
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
    marquee: marquee,
};

export default theme;
