import { useRef, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Footer from "../../../components/Footer";
import InvitationOneData from "../../../data/InvitationOneData";
import parse from "html-react-parser";
import expansion from "../../../static/images/expansion.png";
import Link from "next/link";

const sliderArrow = css`
    position: absolute;
    width: 100vw;
    height: 70px;
    top: 42.5vh;
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

    @media (max-width: 781px) {
        position: absolute;
        width: 100vw;
        height: 41px;
        top: unset;
        bottom: 15px;
        padding-left: 16px;
        padding-right: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 3;

        & > div {
            width: 100%;
            height: 100%;
            display: flex;

            :hover {
                cursor: pointer;
            }

            & > img {
                width: 40px;
                height: 40px;
                object-fit: contain;
            }
        }

        & > div:last-of-type {
            justify-content: flex-end;
        }
    }
`;

const sliderContainer = css`
    width: 100vw;
    height: calc(100vh - 168px);
    overflow: hidden;
    display: flex;
    padding-bottom: 21px;
    position: relative;

    @media (max-width: 781px) {
        width: 100vw;
        height: calc(100vh - 137px);
        overflow: hidden;
        display: flex;
        padding-bottom: 21px;
        position: relative;
    }
`;

const sliderWrapper = css`
    width: 100vw;
    height: 100vh;

    display: inline-block;
    z-index: 2;
    white-space: nowrap;
    transition: ease 1000ms;

    & > div {
        width: 100vw;
        display: inline-block;
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
        height: 100%;
        width: 100vw;
        overflow: hidden;
        display: inline-block;
    }
`;

const sliderContent = css`
    width: 100vw;
    height: calc(100vh - 144px);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 781px) {
        width: 100vw;
        height: calc(100vh - 137px);
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
`;

const sliderContentBg = css`
    width: 100vw;
    height: 100%;
    color: #fff;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;

    @media (max-width: 781px) {
        width: 100vw;
        height: 100%;

        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
`;

const sliderContentWrapper = css`
    width: 100%;
    height: calc(100% - 144px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 781px) {
        width: calc(100vw - 30px);
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const iframeContainer = css`
    width: calc((100% / 12) * 10);
    height: 100%;
    position: relative;

    @media (max-width: 781px) {
        width: 100%;
        height: 90%;
        position: relative;
    }
`;

const iframeWrapper = css`
    width: 100%;
    height: 100%;

    transition: ease-in 2000ms;

    & > div:first-of-type {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const startImageWrapper = css`
    width: 100%;
    height: 100%;

    & > div:first-of-type {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            cursor: pointer;

            :hover {
                filter: invert(100%);
            }
        }

        & > div {
            position: absolute;
            background-color: #000;
            padding-left: 5px;
            padding-right: 5px;

            span {
                font-size: 20px;
                font-family: PP Neue Montreal Regular, sans-serif;

                letter-spacing: 0px;
            }
        }
    }
`;

const slideText = css`
    width: calc((100% / 12) * 8);
    display: flex;
    white-space: pre-wrap;
    word-break: keep-all;

    p {
        width: 100%;
        margin-top: 27px;
        text-align: center;
    }
`;

const introContainer = css`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
`;

const bottomBannerContainer = css`
    width: 100%;
    position: relative;
    bottom: 0;
    overflow: hidden;
    height: 52px;
    margin: 0;
    padding: 0;
    background-color: #fff;
    display: inline-block;

    @media (max-width: 781px) {
        width: 100%;
        position: relative;
        bottom: 0;
        overflow: hieen;
        height: 32px;
        background-color: #fff;
        display: inline-block;
    }
`;

const bottomBanner = css`
    width: 100vw;
    position: relative;
    bottom: 0;
    height: 48px;
    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-size: 32px;
        font-family: PP Neue Montreal Regular, sans-serif;
        letter-spacing: 0.1px;
    }

    @media (max-width: 781px) {
        height: 32px;

        p {
            font-size: 15px;
        }
    }
`;

const bottomBannerWrapper = css`
    width: 100%;
    height: 100%;
    display: inline-block;
    white-space: nowrap;

    transition: ease 1000ms;

    & > div {
        margin-left: 21px;
        margin-right: 21px;
        padding-top: 4px;
        width: calc(100% - 42px);
        height: 100%;
        display: inline-block;

        div {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            position: relative;

            p {
                width: calc(100% / 3);
                font-size: 32px;
                font-family: PP Neue Montreal Regular, sans-serif;
                letter-spacing: 0.1px;
                text-transform: uppercase;
            }

            p:nth-of-type(2) {
                text-align: center;
            }

            p:last-of-type {
                text-align: right;
                text-transform: uppercase;
            }
        }
    }

    @media (max-width: 1192px) {
        & > div {
            div {
                p:nth-of-type(2) {
                    display: none;
                }
            }
        }
    }

    @media (max-width: 781px) {
        width: 100%;
        height: 100%;
        display: inline-block;
        white-space: nowrap;
        transition: ease 1000ms;

        & > div {
            margin-left: 15px;
            margin-right: 15px;
            width: calc(100% - 30px);
            height: 100%;
            display: inline-block;

            div {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-between;
                position: relative;

                p {
                    width: auto;
                    font-size: 15px;
                    font-family: PP Neue Montreal Regular, sans-serif;
                    letter-spacing: 0.1px;
                    margin-top: 3px;
                    text-transform: uppercase;
                }

                p:nth-of-type(2) {
                    display: none;
                }

                p:last-of-type {
                    text-align: right;
                    text-transform: uppercase;
                }
            }
        }
    }
`;

const introductionContainer = css`
    width: 100%;
    height: auto;
    border-top: 0.5px solid;
    border-bottom: 0.5px solid;
    word-break: keep-all;

    & > div {
        width: 100%;
        height: 100%;
        overflow: auto;

        p {
            overflow: auto;
        }
    }

    @media (max-width: 781px) {
        width: 100%;
        height: 100vh;
        border-top: 0.5px solid;
        border-bottom: 0.5px solid;
        overflow: auto;
        word-break: keep-all;

        & > div {
            width: 100%;
            height: 100%;

            p {
                overflow: auto;
            }
        }
    }
`;

const EachTextBox = css`
    width: 100vw;
    height: auto;
    overflow: hidden;

    @media (max-width: 781px) {
        width: 100vw;
        height: auto;

        padding-top: 0px;
        display: flex;
        flex-direction: column;

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
    border-top: 0.5px solid;
    width: 100%;
    height: auto;
    transition: 3s ease-in;
    display: flex;

    @media (max-width: 781px) {
        height: auto;
        overflow: hidden;
    }
`;

const ArtistInfoBox = css`
    width: 100%;
    height: 50vh;

    word-break: keep-all;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 2;

    @media (max-width: 781px) {
        height: 100vh;
    }
`;

const ArtistInfoText = css`
    width: 100%;
    height: 100vh;
    display: inline-block;
    transition: ease 1000ms;
    white-space: nowrap;

    & > div {
        width: 100%;
        height: 100%;
        display: inline-block;
    }

    @media (max-width: 781px) {
        height: 50%;
    }
`;

const ArtistInfoTextContent = css`
    width: 100%;
    height: 25vh;
    display: flex;
    white-space: pre-wrap;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    align-items: flex-start;
    justify-content: center;
    border-bottom: 0.5px solid;

    @media (max-width: 781px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        white-space: pre-wrap;
        padding-top: 20px;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 20px;
    }
`;

const ProjectInfoTextContent = css`
    width: 100%;
    height: 25vh;
    display: flex;
    white-space: pre-wrap;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    border-bottom: 0.5px solid;

    & > div {
        width: calc(100%);
        height: 100%;
        display: flex;

        & > p:first-of-type {
            width: calc((50% / 6) * 2);
            max-width: calc((50% / 6) * 2);
            padding-right: 9px;
        }

        & > p:last-of-type {
            width: calc((50% / 6) * 4 + 50%);
            width: calc((50% / 6) * 4 + 50%);
            oberflow: auto;
            padding-right: 9px;
        }
    }

    & > div:first-of-type {
        margin-right: 9px;
    }

    @media (max-width: 781px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        white-space: pre-wrap;
        padding-top: 20px;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 20px;

        & > div {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            overflow: auto;

            & > p:first-of-type {
                width: 100%;
                max-width: 100%;
                padding-right: 9px;
            }

            & > p:last-of-type {
                width: 100%;
                max-width: 100%;
                padding-right: 9px;
            }
        }

        & > div:first-of-type {
            margin-right: 0px;
        }
    }
`;

const InvitationInfoContent = css`
    width: 100%;
    height: 50vh;
    display: flex;
    white-space: pre-wrap;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    align-items: flex-start;
    justify-content: center;
    border-top: 0.5px solid;

    & > div {
        width: calc(50% - 9px);
        height: 100%;
        display: flex;

        & > p:first-of-type {
            width: calc((100% / 6) * 2);
            max-width: calc((100% / 6) * 2);
            padding-right: 9px;
        }

        & > p:last-of-type {
            width: calc((100% / 6) * 4);
            max-width: calc((100% / 6) * 4);
            overflow: auto;
            padding-right: 9px;
        }
    }

    & > div:first-of-type {
        margin-right: 9px;
    }

    & > div:last-of-type {
        margin-left: 9px;
    }

    @media (max-width: 781px) {
        width: 100%;
        height: auto;

        display: flex;
        flex-direction: column;
        white-space: pre-wrap;
        padding-top: 20px;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 20px;

        & > div {
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: column;

            & > p:first-of-type {
                width: 100%;
                max-width: 100%;
                padding-right: 0px;
            }

            & > p:last-of-type {
                width: 100%;
                max-width: 100%;
                oberflow: auto;
                padding-right: 0px;
            }
        }

        & > div:first-of-type {
            margin-right: 0px;
        }

        & > div:last-of-type {
            margin-top: 30px;
            margin-left: 0px;
        }
    }
`;

const mobileDisplay = css`
    display: none;

    @media (max-width: 781px) {
        width: 100%;
        width: calc(100%);
        height: 100%;
        display: flex;
        & > div {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            overflow: auto;

            & > div {
                p:first-of-type,
                p:nth-of-type(2),
                p:nth-of-type(3) {
                    width: 100%;
                    width: 100%;
                    padding-right: 0px;
                    height: auto;
                }

                p:nth-of-type(3) {
                    padding-top: 30px;
                }

                p:last-of-type {
                    width: calc((100% / 6) * 4);
                    max-width: calc((100% / 6) * 4);
                    overflow: auto;
                    padding-right: 0px;
                }
            }
        }

        & > div:first-of-type {
            margin-right: 0px;
        }

        & > div:last-of-type {
            margin-left: 0px;
        }
    }
`;

const desktopDisplay = css`
    width: 100%;
    width: calc(100%);
    height: 100%;
    display: flex;

    & > div {
        width: calc(50% - 9px);
        height: 100%;
        display: flex;
        overflow: auto;

        & > p:first-of-type {
            width: calc((100% / 6) * 2);
            max-width: calc((100% / 6) * 2);
            padding-right: 9px;
            height: auto;
        }

        & > p:last-of-type {
            width: calc((100% / 6) * 4);
            max-width: calc((100% / 6) * 4);
            overflow: auto;
            padding-right: 9px;
        }
    }

    & > div:first-of-type {
        margin-right: 9px;
    }

    & > div:last-of-type {
        margin-left: 9px;
    }

    @media (max-width: 781px) {
        display: none;
    }
`;

const mt30 = css`
    margin-top: 30px;
`;

const infoText = css`
    width: 100%;
    height: calc(100vh - 48px);
    padding-left: 21px;
    padding-right: 21px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
        display: flex;
        width: calc((100% / 12) * 10);
        height: 100%;
        padding-top: 140px;
        color: #fff;
        padding-bottom: 21px;

        & > p:first-of-type {
            width: calc(50% - 9px);
            margin-right: 9px;
            font-family: Gothic A1, sans-serif;
            font-size: 19px;
            font-weight: 500;
            line-height: 34px;
            word-break: keep-all;
            height: 100%;
            overflow: auto;
        }

        & > p:last-of-type {
            width: calc(50% - 9px);
            margin-left: 9px;
            font-family: PP Neue Montreal Regular, sans-serif;
            font-size: 21px;
            line-height: 31px;
            letter-spacing: 0.1px;
            height: 100%;
            overflow: auto;

            & > span {
                font-style: "italic";
            }
        }
    }

    @media (max-width: 781px) {
        width: 100%;
        height: calc(100vh - 32px);
        padding-left: 0px;
        padding-right: 0px;
        display: flex;
        align-items: center;
        justify-content: center;

        & > div {
            display: flex;
            width: 100%;
            flex-direction: column;
            height: 100%;
            padding-top: calc(59px + 46px);
            color: #fff;
            padding-bottom: 21px;
            padding-left: 15px;
            padding-right: 15px;

            p:first-of-type {
                width: 100%;
                padding-top: 0px;
                padding-left: 0px;
                padding-right: 0px;
                margin-right: 0px;
                font-family: Gothic A1, sans-serif;
                font-size: 20px;
                font-weight: 500;
                line-height: 29px;
                letter-spacing: -0.2px;
                word-break: keep-all;
                height: auto;
                overflow: auto;
            }

            p:last-of-type {
                padding-left: 0px;
                padding-right: 0px;
                padding-top: 0px;
                width: 100%;
                margin-left: 0px;
                font-family: PP Neue Montreal Regular, sans-serif;
                font-size: 20px;
                line-height: 29px;
                letter-spacing: 0.1px;
                height: auto;
                overflow: auto;
            }
        }
    }
`;

const borderMobile = css`
    display: none;

    @media (max-width: 781px) {
        height: 1px;
        border-top: 1px solid #fff;
        display: block;
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
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

const expansionImg = css`
    position: absolute;
    z-index: 100;
    right: 20px;
    bottom: 20px;
    width: 60px;
    height: 60px;
    cursor: pointer;

    :hover {
        filter: invert(100%);
    }
`;

const InvitationOne = () => {
    const router = useRouter();
    const query = router.query;
    const [delay, setDelay] = useState(1);
    const [index, setIndex] = useState(query.index ? parseInt(query.index) : 0);
    const [coverIsShow, setCoverIsShow] = useState({
        index: 0,
        open: false,
    });
    const [headerHeight, setHeaderHeight] = useState(0);

    const scrollRef = useRef(null);
    const [isMoreOpen, setIsMoreOpen] = useState({
        bool: false,
        index: 0,
    });

    const artistInfoBoxRef = useRef();
    const [artistInfoBoxHeight, setArtistInfoBoxHeight] = useState(0);

    useEffect(() => {
        setArtistInfoBoxHeight(artistInfoBoxRef.current.offsetHeight);
    }, [artistInfoBoxHeight]);

    useEffect(() => {
        console.log(index);
    }, [isMoreOpen, coverIsShow, index]);

    useEffect(() => {
        if (window.innerWidth < 782) {
            setHeaderHeight(105);
        } else {
            setHeaderHeight(120);
        }
    }, [headerHeight, scrollRef]);

    return (
        <ThemeProvider theme={theme}>
            <div
                css={[theme.downArrowBox, downArrowBoxStyle]}
                onClick={() => {
                    console.log("arrow is clicked");
                    window.scrollTo({
                        top: scrollRef.current.offsetTop - headerHeight,
                        behavior: "smooth",
                    });
                }}
                style={{
                    animation: `fadeIn ${delay}s ease-in`,
                }}
            >
                <img src="../static/images/downArrowW.png" alt="down_arrow" />
                <img src="../static/images/downArrowW.png" alt="down_arrow" />
            </div>
            <div
                css={infoText}
                style={{
                    animation: `fadeIn ${delay * 2}s ease-in`,
                }}
            >
                <div>
                    <p>
                        <p css={theme.textKr} style={{ fontWeight: "bold" }}>
                            ?????? I: ?????? ?????? ?????? ??????{" "}
                        </p>
                        <p css={theme.textKr}>
                            <span style={{ fontWeight: "bold" }}>Tom and Jerry in the Hollywood Bowl</span>
                            <br />
                            <br />
                            <span style={{ textDecoration: "underline" }}>
                                <a href="https://www.youtube.com/watch?v=th_ro9CiASc" target="_blank">
                                    ???????????? ??????????????? 61????????? ???????????? ??????. ??????????????? ??????????????? ????????? ?????? ??????
                                    ?????? ?????? ????????? ????????? ????????? ?????? ????????? ???????????????.
                                </a>
                            </span>
                            <br />
                            <br />
                            <span style={{ textDecoration: "underline" }}>
                                <a href="https://www.youtube.com/watch?v=aRMzrZ8qm4A" target="_blank">
                                    Tom and Jerry, 52 Episode - Tom and Jerry in the Hollywood Bowl (1950)
                                </a>
                            </span>
                            <br />
                            <br />
                            ???????????? ?????? ????????? ????????? ???????????? ?????????. ???????????? ??????????????? ????????? ?????? ?????? ???????????????
                            ??????. ???????????? ???????????? ???????????? ?????? ????????? ?????? ??? ?????????????????? ?????? ?????? ????????? ?????????.
                            ?????? ???????????? ???????????? ???????????? ????????? ?????? ????????????. ???????????? ????????? ?????? ?????? ???????????????
                            ??????. ???????????? ?????? ??? ???????????? ???????????? ????????? ????????? ?????????. ??? ???????????? ???????????? ??????
                            ?????? ???????????? ???????????????. ????????? ???????????? ?????? ???????????? ?????? ????????? ????????? ???????????? ??????
                            ?????? ?????????. <br /> <br />
                            <span style={{ fontWeight: "bold" }}>?????? ??????</span> <br /> <br /> ??????????????? 2????????????
                            ????????? ?????? ?????? ????????? ?????? ????????? ???????????????. ?????????????????? ????????? ???????????? ????????? ????????????
                            2???????????? ????????? ?????????. ????????? ??????????????? ?????? ?????? ????????? ????????????. ???????????? ?????? ?????????
                            2???????????? ????????? ????????????, ???????????? ?????? ??? ?????? ????????? ????????? ?????????. ????????? ?????????
                            ???????????? ?????????????????? ????????? ????????? ??? ???????????? ????????? ??? ?????????. ????????? ???????????????????????? ???
                            ?????? ??? ?????? ???????????? ???????????? ??? ????????? ??????.??? ??? ????????? ??? ????????? ????????? ????????? <br />
                            (https://thestrings.kr/2018/11/18/jaehyuck_choi/ : ????????? ?????????) <br /> <br />
                            ????????? ???????????? ?????? ???????????? ???????????? ???????????? ?????? ??? ?????????. ????????? ?????? ?????? ?????????
                            ???????????? ????????????. ???????????? ????????? ???????????? ?????? ??????????????? ??????????????? ????????? ????????? ??????
                            ????????? ??????. ???????????? ????????? ???????????? ????????? ????????? ??????????????? ????????? ???????????? ????????????
                            ????????????, ???????????? ????????? ?????? ????????? ???????????? ???????????? ??????????????? ??????. ?????? ????????????
                            ???????????? ?????????, ????????? ????????? ?????? ?????? ?????????????????? ????????? ????????? ????????? ????????? ??????.
                            ????????? ????????????, ???????????? ????????? ?????????(score)?????? ??? ??? ??????. ?????????????????? ????????? ?????????
                            ?????? ????????? ???????????????, ??? ????????? ??? ?????? ?????? ?????? ???????????? ???????????????. ???????????? ?????????
                            ????????? ?????? ?????? ???????????? ?????????, ???????????? ???????????? ????????? ?????? ????????? ????????????. ??? ??????
                            ????????? ???????????? ??????, ????????? ??????, ?????? ?????? ?????? ???????????? ??????????????? ????????????. ????????? ??????
                            ????????? ??????????????? ??? ????????? ???????????? ?????? ???????????? ????????????. <br /> <br />
                            ???????????? ?????? ???????????? ????????? ????????? ????????????, ?????? ???????????? ???????????? ???????????? ???????????? ??????
                            ?????? ??? ????????????. ?????? ???????????? ???????????? ????????? ??????????????? ????????? ????????? ???????????? ??????. ??????
                            ?????? ????????? ???????????? ????????? ?????? ????????? ????????? ???????????? ????????? ???????????? ?????? ????????? ??????
                            ?????????. ?????? ????????? ??????, ?????? ??????, ?????? ?????? ?????? ????????? ?????? ?????? ????????? ????????? ????????????
                            ??? ????????? ???????????? ?????? ???????????? ???????????? ?????? ???????????????. ??? ???????????? ???????????? ??????
                            ???????????? ?????? ????????????. ???????????? ????????? ?????? ????????? ?????? ??????, ????????? ????????? ??? ?????? ??? ??????
                            ?????? ??? ??? ??????. ???????????? ????????? ????????? ??????. ????????? ?????? ????????? ????????? ?????????. ?????????, ???
                            ????????? ????????? ???????????? ????????? ?????? ???????????? ????????? ?????????. <br />
                            <br />
                            ????????? I: ?????? ???????????? ????????? ????????? ????????? ????????? ????????????. ????????? ???????????? ????????? ??????,
                            ?????? ?????? ?????? ?????? ??????, ?????? ???????????? ?????? ?????????????????? ????????? ???????????? ???????????? ?????????
                            ???????????? ????????? ?????? ???????????? ???????????? ?????? ????????? ??????. ?????? ?????? ?????? ???????????? ???????????????
                            ???????????? ?????? ???????????? ????????? ???????????? ???????????????. ????????? ???????????? ???????????? ?????? ??? ?????????,
                            ???????????? ?????? ????????? ???????????? ??? ?????????. ??? ???????????? ?????? ??????????????? ??? ??? ?????? ????????? ??????
                            ?????????. ?????? ????????? ??????????????? ???????????? ????????? ?????? ????????? ????????? ?????? ????????? ????????? ?????????.
                            <br />
                            <br />
                            ????????? ??????????????? ????????? ???????????? ?????? ??? ?????? ??? ?????? ?????? ????????? ???????????? ???????????????
                            ??????????????? ????????????.??? ??? ????????? ?????????
                        </p>
                    </p>
                    <div css={borderMobile}></div>
                    <p>
                        <p css={theme.textEn} style={{ fontWeight: "bold" }}>
                            Invitation I: Conductor???s Lesson
                        </p>
                        <p css={theme.textEn}>
                            <span style={{ fontWeight: "bold" }}>Tom and Jerry in the Hollywood Bowl</span>
                            <br />
                            <br />
                            <span style={{ textDecoration: "underline" }}>
                                <a href="https://www.youtube.com/watch?v=th_ro9CiASc" target="_blank">
                                    A scene mentioned in Score Score page 61. Salieri peeps Mozart's score. Impressed by
                                    imaginary music in his own head, he drops it.
                                </a>
                            </span>
                            <br />
                            <br />
                            <span style={{ textDecoration: "underline" }}>
                                <a href="https://www.youtube.com/watch?v=aRMzrZ8qm4A" target="_blank">
                                    Tom and Jerry, 52 Episode - Tom and Jerry in the Hollywood Bowl (1950)
                                </a>
                            </span>
                            <br />
                            <br />
                            The most important virtue for a composer would be imagination. The music that the composer
                            creates only exists in their head. The composer finishes their score with the imaginary
                            orchestra, consisting of conductor and performer all themselves. This process is similar to
                            how a curator writes an exhibition proposal. The exhibition only exists in their head. The
                            curator finishes their proposal within the imaginary exhibition space and artworks.
                            Imagination, again, is the most crucial virtue here. Both music score and curatorial
                            proposal are documents that mark a prognostication of an unrealized future. <br />
                            <br />
                            <span style={{ fontWeight: "bold" }}>Conductor???s lesson</span>
                            <br />
                            <br /> "Suppose the composer wants to hear a musical instrument with a half note. If the
                            composer does not understand the nature of the orchestra, they will use the half note as it
                            is. Though to hear the sound of the half note in the actual play, the note should be written
                            a little longer on the score. A composer who has experience conducting can delicately
                            understand the orchestra's characteristics and mind. It helps with easier imagination and
                            performance when orchestrated. Composers should not only deal with sound but also include
                            the mind of the performer in the creation."
                            (https://thestrings.kr/2018/11/18/jaehyuck_choi/: link closed)
                            <br />
                            <br />
                            But a curator???s work is closer to the conductor???s than the composer???s. It is involved in
                            both imagination and reality. The proposal wanders to different agencies related to an
                            exhibition, becoming a foundation for communal discussion. It serves as a criterion setting
                            the overall direction of the exhibition, coordinating each individual???s viewpoint, being
                            modified to meet realistic requirements, or in the process of reflecting different opinions.
                            The proposal becomes a document produced following the exhibition rather than a preliminary
                            document as the proposal is completed. <br />
                            <br /> In this regard, the curatorial proposal is a ???score??? of the exhibition. The proposal
                            is a compass that guides the unknown path, although it hides in the concealed site of the
                            exhibition. Just as a conductor realizes imaginary music using a music score as a compass, a
                            curator realizes an imaginary exhibition using a proposal as a compass. Management,
                            administration, and accounting also take place in this realization process as a work of a
                            conductor and a curator. The feasibility of the proposal depends on this specific position
                            of working in between imagination and reality.
                            <br />
                            <br />
                            Most of the proposals are written based on the realization of the exhibition. Practicability
                            is one of the indexes for evaluating a proposal. A magnificent exhibition in the imagination
                            can be miserable in reality. Even though an exhibition has an interesting topic, it is hard
                            to receive positive feedback when it is irrelevant to the scale of the budget. Budget list,
                            schedule, casting situation, and expectations are factors that mark the feasibility of a
                            proposal in itself regardless of the quality of content. At this point, a work of curator
                            and composer differentiates. A composer can write music that will never be played,
                            disregarding realization. A curator writes down on the premise of completion. A conductor
                            works on accomplishment. Therefore, the title of this invitation is the ???conductor???s???
                            lesson, not the ???composer??? lesson. <br />
                            <br />
                            The invitation I: Conductor's Lesson is an experiment distancing exhibition and a proposal.
                            Beyond accurate and precise sentences, popular topics, skepticism of the feasibility, it
                            emphasizes writing a proposal and experiments with the possibility of the proposal. Six
                            curators wrote their proposal that would or would not be realized using various ways.
                            Audiences will look rather than read proposals, imagining exhibitions. Some parts of these
                            exhibitions can only be visited through imagination as if great composers doodled in a blank
                            margin that the audience would not hear.
                            <br />
                            <br />
                            ???Even for strings, Johann Sebastian Bach liked to write whole and half notes that were
                            linked two strings apart that could be audible only to the eye.??? ??? Pascal Quignard
                        </p>
                    </p>
                </div>
            </div>
            <div
                css={bottomBanner}
                style={{
                    animation: `fadeIn ${delay * 2}s ease-in`,
                }}
            >
                <p>
                    FOLLOW US{" "}
                    <a href="http://www.instagram.com/unfounded.info" target="_blank">
                        @UNFOUNDED.INFO
                    </a>
                </p>
            </div>
            <div css={introContainer} ref={scrollRef}>
                <div css={sliderContainer}>
                    <div
                        css={sliderBGWrapper}
                        style={{
                            transform: `translate3d(${(InvitationOneData.length * 100 - index * 100) * -1}%, 0, 0)`,
                        }}
                    >
                        {InvitationOneData.map(el => {
                            return (
                                <div>
                                    <div
                                        css={sliderContent}
                                        style={
                                            (InvitationOneData.indexOf(el) + 1) % 2 === 1
                                                ? {
                                                      backgroundColor: "#000",
                                                  }
                                                : { backgroundColor: " #ff7e27" }
                                        }
                                    ></div>
                                </div>
                            );
                        })}
                    </div>
                    <div
                        css={sliderWrapper}
                        style={{
                            transform: `translate3d(${-index * 100}%, 0, 0)`,
                        }}
                    >
                        {InvitationOneData.map(el => {
                            return (
                                <div>
                                    <div css={sliderContent}>
                                        <div css={sliderContentWrapper}>
                                            <div css={iframeContainer}>
                                                <Link href={el.iframeSrc}>
                                                    <a target="_blank">
                                                        <img
                                                            css={expansionImg}
                                                            src={expansion}
                                                            alt="expansion_icon"
                                                        ></img>
                                                    </a>
                                                </Link>
                                                {coverIsShow.index === el.index + 1 ? (
                                                    <div css={iframeWrapper}>
                                                        <div>
                                                            <iframe
                                                                width="100%"
                                                                style={{
                                                                    height: "100%",
                                                                    zIndex: 30,
                                                                }}
                                                                src={el.iframeSrc}
                                                                frameBorder="0"
                                                                scrolling="no"
                                                                allowFullScreen
                                                            ></iframe>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div
                                                        css={startImageWrapper}
                                                        onClick={() => {
                                                            setCoverIsShow({
                                                                index: el.index + 1,
                                                            });
                                                        }}
                                                    >
                                                        <div>
                                                            <img src={el.src} />
                                                            <div className="blink">
                                                                <span>CLICK TO START</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div css={sliderArrow}>
                        <div
                            onClick={() => {
                                setCoverIsShow({ index: 0 });
                                if (index === 0) {
                                    setIndex(InvitationOneData.length - 1);
                                } else if (index === 1) {
                                    setIndex(0);
                                } else if (index < InvitationOneData.length - 1) {
                                    setIndex(index - 1);
                                } else {
                                    setIndex(index - 1);
                                }
                            }}
                        >
                            <img src="/static/images/sliderLeft.png" />
                        </div>
                        <div
                            onClick={() => {
                                setCoverIsShow({
                                    index: 0,
                                });

                                if (index < InvitationOneData.length - 1) {
                                    setIndex(index + 1);
                                } else if (index == InvitationOneData.length - 1) setIndex(0);
                                else if (index == 1) setIndex(index + 1);
                            }}
                        >
                            <img src="/static/images/sliderRight.png" />
                        </div>
                    </div>
                </div>
                <div css={bottomBannerContainer}>
                    <div
                        css={bottomBannerWrapper}
                        style={{
                            transform: `translate3d(${-index * 100}%, 0, 0)`,
                        }}
                    >
                        {InvitationOneData.map(el => {
                            return (
                                <div>
                                    <div>
                                        <p>{el.title}</p>
                                        <p>{el.no}</p>
                                        <p>{el.particiEn}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div css={EachTextBox} ref={scrollRef}>
                    <div css={moreContainer} ref={artistInfoBoxRef}>
                        <div css={ArtistInfoBox}>
                            <div
                                css={ArtistInfoText}
                                style={{
                                    transform: `translate3d(${-index * 100}%, 0, 0)`,
                                }}
                            >
                                {InvitationOneData.map(el => {
                                    return (
                                        <div
                                            style={
                                                (InvitationOneData.indexOf(el) + 1) % 2 === 1
                                                    ? {
                                                          color: "#fff",
                                                      }
                                                    : { color: "#000" }
                                            }
                                        >
                                            <div css={ProjectInfoTextContent}>
                                                <div>
                                                    <p css={theme.textKr} style={{ fontWeight: "bold" }}>
                                                        {el.title}
                                                    </p>
                                                    <p css={theme.textKr}>{parse(el.projectInfo)}</p>
                                                </div>
                                            </div>
                                            <div css={ArtistInfoTextContent}>
                                                <div css={mobileDisplay}>
                                                    <div>
                                                        <p css={theme.textKr} style={{ fontWeight: "bold" }}>
                                                            {el.particiKr}
                                                        </p>
                                                        <p css={theme.textKr}>{parse(el.artistInfoKr)}</p>
                                                        <p css={[theme.textEn, mt30]} style={{ fontWeight: "bold" }}>
                                                            {el.particiEn}
                                                        </p>
                                                        <p css={theme.textEn}>{parse(el.artistInfoEn)}</p>
                                                    </div>
                                                </div>
                                                <div css={desktopDisplay}>
                                                    <div>
                                                        <p css={theme.textKr} style={{ fontWeight: "bold" }}>
                                                            {el.particiKr}
                                                        </p>
                                                        <p css={theme.textKr}>{parse(el.artistInfoKr)}</p>
                                                    </div>
                                                    <div>
                                                        <p css={theme.textEn} style={{ fontWeight: "bold" }}>
                                                            {el.particiEn}
                                                        </p>
                                                        <p css={theme.textEn}>{parse(el.artistInfoEn)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div
                            css={sliderBGWrapper}
                            style={{
                                transform: `translate3d(${(InvitationOneData.length * 100 - index * 100) * -1}%, 0, 0)`,
                                height: `${artistInfoBoxHeight}px`,
                            }}
                        >
                            {InvitationOneData.map(el => {
                                return (
                                    <div>
                                        <div
                                            css={sliderContentBg}
                                            style={
                                                (InvitationOneData.indexOf(el) + 1) % 2 === 1
                                                    ? {
                                                          backgroundColor: "#000",
                                                      }
                                                    : { backgroundColor: " #ff7e27" }
                                            }
                                        ></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <Footer bgColor={"#000"} color={"#fff"} isDisplay />
            </div>
        </ThemeProvider>
    );
};

export default InvitationOne;
