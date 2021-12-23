import { useRef, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Footer from "../components/Footer";

const sliderArrow = css`
    position: absolute;
    width: 100vw;
    height: 70px;
    top: calc(50vh - 35px);
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;

    & > div {
        width: 70px;
        height: 70px;
        :hover {
            cursor: pointer;
        }

        & > img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
`;

const comingSoonContainer = css`
    width: 100vw;
    height: calc(100vh - 48px);
    overflow: hidden;
    display: flex;
    padding-bottom: 21px;
    padding-top: calc(112px + 46px);
    position: relative;
    align-items: center;
    justify-content: center;

    & > div {
        width: 60%;
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            height: 100%;
            object-fit: contain;
        }
    }

    @media (max-width: 781px) {
        display: none;
    }
`;

const sliderWrapper = css`
    width: 100vw;
    height: 100%;
    display: inline-block;
    position: absolute;
    z-index: 2;
    white-space: nowrap;
    transition: ease 1000ms;

    & > div {
        height: 100vh;
        width: 100vw;
        display: inline-block;
        flex-direction: column;
    }
`;

const sliderBGWrapper = css`
    width: 100vw;
    height: 100%;
    display: inline-block;
    position: absolute;
    z-index: 1;
    white-space: nowrap;
    transition: ease 1000ms;

    & > div {
        height: 100vh;
        width: 100vw;

        display: inline-block;
        flex-direction: column;
    }
`;

const sliderContent = css`
    width: 100vw;
    height: calc(100vh - 169px);
    margin-top: 169px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const sliderContentWrapper = css`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > div:first-of-type {
        width: calc((100% / 12) * 8);
        height: 90%;
        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

const slideText = css`
    width: calc((100% / 12) * 8);
    display: flex;

    p {
        display: inline-block;
        width: 100%;
        margin-top: 27px;
        text-align: center;
    }
`;

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
    justify-content: center;

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

const invitation1 = [
    {
        src: "/static/images/invitation/1/1_1.png",
        title: "프로젝트 A Project A",
        partici: "김얼터 Nahyun Kim",
        link: "",
    },
    {
        src: "/static/images/invitation/1/1_2.png",
        title: "프로젝트 A Project A",
        partici: "김얼터 Nahyun Kim",
        link: "",
    },
    {
        src: "/static/images/invitation/1/1_3.jpg",
        title: "프로젝트 A Project A",
        partici: "김얼터 Nahyun Kim",
        link: "",
    },
    {
        src: "/static/images/invitation/1/1_4.png",
        title: "프로젝트 A Project A",
        partici: "김얼터 Nahyun Kim",
        link: "",
    },
    {
        src: "/static/images/invitation/1/1_5.jpg",
        title: "프로젝트 A Project A",
        partici: "김얼터 Nahyun Kim",
        link: "",
    },
];

const Exploration = () => {
    const router = useRouter();
    const [index, setIndex] = useState(0);

    const scrollRef = useRef(null);
    const [isMoreOpen, setIsMoreOpen] = useState({
        bool: false,
        index: 0,
    });

    useEffect(() => {}, [isMoreOpen]);

    return (
        <ThemeProvider theme={theme}>
            <div css={introContainer}>
                <div css={comingSoonContainer}>
                    <div>
                        <img
                            src="/static/images/comingSoon.png"
                            alt="coming_soon"
                        />
                    </div>
                </div>
                <div css={bottomBanner}>
                    <p>FOLLOW US ON INSTAGRAM AT @UNFOUNDED</p>
                </div>
                <Footer bgColor={"#000"} color={"#fff"} />
            </div>
        </ThemeProvider>
    );
};

export default Exploration;
