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
        }
    }

    img {
        height: 100%;
        object-fit: contain;
    }

    @media (max-width: 781px) {
        cursor: pointer;
        width: 100vw;
        height: 70px;
        display: flex;
        flex-direction: row;
        margin-top: -1px;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 15px;
        display: flex;
        justify-content: flex-end;
        z-index: 15;

        &:hover {
            img {
            }
        }

        img:first-of-type {
            display: none;
        }

        img {
            height: 100%;
            object-fit: contain;
        }
    }
`;

export const headerContainer = css`
    width: 100vw;
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
    z-index: 50;

    & > div:first-of-type {
        height: 100%;
        & > img {
            height: 100%;
        }
    }

    @media (max-width: 781px) {
        width: 100%;

        height: 59px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #000;
        cursor: pointer;
        padding-left: 15px;
        padding-right: 15px;
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

export const menuWheelWrapper = css`
    cursor: pointer;
    display: flex;
    width: calc(100vw - 52px);
    justify-content: flex;
    overflow-x: hidden;

    & > div {
        width: 300%;
        display: flex;

        div {
            width: calc((100vw - 110px) / 3);
        }
    }

    span {
        font-family: "GTFAgentur", serif;
        font-size: 38px;
        letter-spacing: -0.2px;
        line-height: 35px;
    }

    @media (max-width: 781px) {
        cursor: pointer;
        display: flex;
        width: 100%;
        justify-content: flex;
        overflow-x: hidden;

        & > div {
            cursor: pointer;
            display: flex;
            width: 100%;
            justify-content: space-between;

            & > div:nth-of-type(2) {
                display: flex;
                width: 100%;
                justify-content: center;
                align-items: center;
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

export const menuWheel = css`
    width: 100vw;
    position: absolute;
    left: 0;
    padding-left: 21px;
    padding-right: 21px;
    top: 112px;
    background-color: #000;

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

    @media (max-width: 781px) {
        width: 100vw;
        position: absolute;
        top: 59px;

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
    }
`;

export const titleKr = css`
    font-family: Gothic A1, sans-serif;
    font-weight: bold;
    font-size: 15px;
    letter-spacing: -0.2px;
    line-height: 24px;

    @media (max-width: 781px) {
        font-size: 14px;
        letter-spacing: -0.2px;
        line-height: 23px;
    }
`;

export const textKr = css`
    font-family: Gothic A1, sans-serif;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: -0.2px;
    line-height: 24px;

    @media (max-width: 781px) {
        font-size: 14px;
        letter-spacing: -0.2px;
        line-height: 23px;
    }
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
    font-family: PP Neue Montreal Regular, sans-serif;
    font-size: 16px;
    letter-spacing: 0.1px;
    line-height: 24px;

    @media (max-width: 781px) {
        font-size: 15px;
        letter-spacing: 0.1px;
        line-height: 23px;
    }
`;

export const textEn = css`
    font-family: PP Neue Montreal Regular, sans-serif;
    font-size: 16px;
    letter-spacing: 0.1px;
    line-height: 24px;

    @media (max-width: 781px) {
        font-size: 15px;
        letter-spacing: 0.1px;
        line-height: 23px;
    }
`;

export const mTitleEn = css`
    font-family: PP Neue Montreal Regular, sans-serif;
    font-size: 15px;
    letter-spacing: 0.1px;
    line-height: 23px;
`;

export const mTextEn = css`
    font-family: PP Neue Montreal Regular, sans-serif;
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

export const flexCenter = css`
    display: flex;
    justify-content: center;
`;

export const flexEnd = css`
    display: flex;
    justify-content: flex-end;
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
    Orange: "#0D0C1D",
    primaryLight: "#EFFFFA",
    primaryHover: "#343078",
    flexCenter: flexCenter,
    flexEnd: flexEnd,
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
    menuWheelWrapper: menuWheelWrapper,
    downArrowBox: downArrowBox,
    marquee: marquee,
};

export default theme;
