import { useRef, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Footer from "../../../components/Footer";
import Link from "next/link";
import Menu from "../../../components/Menu";

const introContainer = css`
    position: relative;
    top: 0;
    width: 100vw;
    height: 100vh;
`;

const bottomBanner = css`
    width: 100vw;
    position: relative;
    bottom: 0;
    height: 48px;
    background-color: #fff;
    padding-left: 21px;
    padding-right: 21px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-size: 32px;
        font-family: PP Neue Montreal Book, sans-serif;
        letter-spacing: 0.1px;
    }

    @media (max-width: 781px) {
        height: 32px;
        p {
            font-size: 15px;
        }
    }
`;

const downArrowBoxStyle = css`
    position: absolute;
    width: 100%;
    z-index: 1;
    bottom: 48px;
    padding-left: 21px;
    padding-right: 21px;
`;

const infoText = css`
    width: 100%;
    height: calc(100vh - 48px);
    padding-left: 21px;
    padding-right: 21px;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        width: calc((100% / 12) * 8);
        height: 100%;
        padding-top: 160px;
        color: #fff;
        padding-bottom: 21px;

        p:first-of-type {
            width: calc(50% - 9px);
            margin-right: 9px;
            font-family: Gothic A1, sans-serif;
            font-size: 24px;
            font-weight: 500;
            line-height: 40px;
            word-break: keep-all;
            height: 100%;
            overflow: auto;
        }

        p:last-of-type {
            width: calc(50% - 9px);
            margin-left: 9px;
            font-family: PP Neue Montreal Book, sans-serif;
            -webkit-text-stroke: 0.5px #fff;
            font-size: 25px;
            line-height: 40px;
            letter-spacing: 0.1px;
            height: 100%;
            overflow: auto;
        }
    }

    @media (max-width: 781px) {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
        display: flex;
        height: calc(100vh - 32px);
        position: relative;

        align-items: center;
        justify-content: center;

        div {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: calc(100% - 94px);
            position: relative;
            top: 35px;
            padding-top: 10px;
            color: #fff;
            padding-bottom: 0px;

            p:first-of-type {
                width: 100%;
                margin-right: 9px;
                font-family: Gothic A1, sans-serif;
                font-size: 18px;
                font-weight: 500;
                line-height: 29px;
                letter-spacing: -0.2px;
                word-break: keep-all;
                padding-top: 10px;
                padding-bottom: 20.5px;
                height: calc(50% - 20.5px);
                overflow: auto;
                border-bottom: 1px solid #fff;
            }

            p:last-of-type {
                width: 100%;
                margin-left: 0px;
                font-family: PP Neue Montreal Book, sans-serif;
                -webkit-text-stroke: 0.5px #fff;
                font-size: 20px;
                line-height: 29px;
                letter-spacing: 0px;
                height: calc(50% - 20.5px);
                margin-top: 20.5px;
                overflow: auto;
            }
        }
    }
`;

const invitationBox = css`
    width: 100vw;
    height: 100vh;
    background-color: #ff9d46;
    padding-top: 10px;
    & > div:first-of-type {
        span {
            font-family: GTFAgentur, serif;
            font-size: 86px;
            letter-spacing: -0.2px;
            color: #000;
        }
    }

    @media (max-width: 781px) {
        width: 100vw;

        background-color: #ff9d46;
        padding-top: 0px;
        & > div:first-of-type {
            span {
                font-family: GTFAgentur, serif;
                font-size: 60px;
                letter-spacing: -0.2px;
                color: #000;
            }
        }
    }
`;

const invitationTextBox = css`
    display: flex;
    padding-left: 21px;
    padding-right: 21px;
    word-break: keep-all;
    position: relative;
    margin-bottom: 15px;

    & > div {
        width: calc(50% - 9px);
    }

    & > div:first-of-type {
        margin-right: 9px;

        div {
            display: flex;
            p:first-of-type {
                width: calc((100% / 6) * 2);
            }

            p:last-of-type {
                width: calc((100% / 6) * 4);
            }
        }
    }

    & > div:last-of-type {
        margin-left: 9px;
        width: calc(50% - 9px);
        position: relative;

        div {
            display: flex;
            justify-content: flex-end;

            span {
                font-family: Union, sans-serif;
                font-weight: 500;
                font-size: 15px;
            }
        }
    }

    @media (max-width: 781px) {
        display: none;
    }
`;

const marqueeBox1 = css`
    display: inline-block;
    animation: marquee 30s linear infinite;
`;

const marqueeBox2 = css`
    display: inline-block;
    animation: marquee2 30s linear infinite;
    animation-delay: 15s;
`;

const moreContainer = css`
    border-top: 1px solid #000;
    width: 100%;
    height: 55vh;
    transition: 3s ease-in;
    padding-left: 21px;
    padding-right: 21px;
    padding-top: 25.3px;
    padding-bottom: 10px;
    display: flex;

    & > div {
        width: calc(50% - 9px);
        display: flex;
    }
`;

const moreTextBox = css`
    width: 100%;
    word-break: keep-all;

    div:first-of-type {
        width: calc((100% / 6) * 2);

        p {
            width: 100%;
            padding-right: 9px;
        }
    }

    div:last-of-type {
        width: calc((100% / 6) * 4);
        overflow: auto;

        p {
            width: 100%;
        }
    }
`;

const sliderWave = css`
    width: calc(100% - 44px);
    margin-left: 21px;
    margin-right: 21px;
    position: absolute;

    & > img {
        mix-blend-mode: difference;
    }

    @media (max-width: 781px) {
        display: none;
    }
`;

const sliderContainer = css`
    width: calc(100% - 41px);
    height: 55vh;
    display: flex;
    margin-left: 21px;
    margin-right: 21px;
    padding-bottom: 21px;

    & > img {
        width: calc(100% - 40px);
        position: absolute;
        mix-blend-mode: difference;
        height: auto;
    }

    div {
        height: calc(100% - 21px);

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    & > div:first-of-type {
        width: calc((100% / 3) - 9px);
        margin-right: 9px;
    }

    & > div:nth-of-type(2) {
        width: calc((100% / 3) - 19px);
        margin-left: 9px;
        margin-right: 9px;
    }

    & > div:last-of-type {
        width: calc((100% / 3) - 9px);
        margin-left: 9px;
    }

    @media (max-width: 781px) {
        display: none;
    }
`;

const slideText = css`
    width: 100%;

    span {
        display: inline-block;
        width: 50%;
    }
`;

const invitationContainer = css`
    width: 100vw;
    background-color: #000;
    height: calc(100vh - 48px);
`;

const InvitationOneSlug = () => {
    const router = useRouter();
    console.log(router);
    const scrollRef = useRef(null);
    const [isMoreOpen, setIsMoreOpen] = useState({
        bool: false,
        index: 0,
    });

    useEffect(() => {}, [isMoreOpen]);

    return (
        <ThemeProvider theme={theme}>
            <div css={introContainer}>
                <Menu transX={1} />
                <div css={invitationContainer}>Helloo</div>
                <div css={[theme.downArrowBox, downArrowBoxStyle]}>
                    <img
                        src="../../../../static/images/downArrowW.png"
                        alt="down_arrow"
                    />
                    <img
                        src="../../../../static/images/downArrowW.png"
                        alt="down_arrow"
                    />
                </div>
                <div css={bottomBanner}>
                    <p>PROJECT A</p>
                    <p>01</p>
                    <p>NAHYUN KIM</p>
                </div>
                <Footer bgColor={"#000"} color={"#fff"} />
            </div>
        </ThemeProvider>
    );
};

export default InvitationOneSlug;
