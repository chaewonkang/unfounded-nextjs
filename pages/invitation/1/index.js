import { useRef, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Footer from "../../../components/Footer";
import InvitationOneData from "../../../data/InvitationOneData";

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

const sliderContainer = css`
    width: 100vw;
    height: calc(100vh - 48px);
    overflow: hidden;
    display: flex;
    padding-bottom: 21px;
    position: relative;

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
    height: calc(100vh - 48px);
    padding-top: 169px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const sliderContentWrapper = css`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const iframeContainer = css`
    width: calc((100% / 12) * 8);
    height: 90%;
    position: relative;
`;

const iframeWrapper = css`
    width: 100%;
    height: 100%;
    transition: ease 1000ms;
`;

const startImageWrapper = css`
    width: 100%;
    height: 100%;

    & > div:first-of-type {
        width: 100%;
        height: 100%;

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

const bottomBannerContainer = css`
    width: 100%;
    position: relative;
    bottom: 0;
    height: 48px;
    background-color: #fff;
    display: inline-block;
    overflow: hidden;
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
                font-family: PP Neue Montreal Book, sans-serif;
                letter-spacing: 0.1px;
                margin-top: 3px;
            }

            p:nth-of-type(2) {
                text-align: center;
            }

            p:last-of-type {
                text-align: right;
            }
        }
    }

    @media (max-width: 781px) {
        height: 32px;
        p {
            font-size: 15px;
        }
    }
`;

const EachTextBox = css`
    width: 100vw;
    height: 100vh;
    background-color: #ff9d46;
    margin-top: -10px;

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
    height: auto;
    transition: 3s ease-in;
    display: flex;
`;

const ArtistInfoBox = css`
    width: 100%;
    height: 100%;
    word-break: keep-all;
    display: inline-block;
`;

const ArtistInfoText = css`
    width: 100%;
    height: 100%;
    display: inline-block;
    transition: ease 1000ms;
    white-space: nowrap;

    & > div {
        width: 100%;
        display: inline-block;
    }
`;

const ArtistInfoTextContent = css`
    width: 100%;
    display: flex;
    white-space: pre-wrap;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;

    & > div {
        width: 50%;
        display: flex;

        & > p:first-of-type {
            width: calc((100% / 6) * 2);
            max-width: calc((100% / 6) * 2);
            padding-right: 9px;
        }

        & > p:last-of-type {
            width: calc((100% / 6) * 4);
            max-width: calc((100% / 6) * 4);

            padding-right: 9px;
        }
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

const marquee = css`
    position: absolute;
    width: 100%;

    top: calc(50% - 43px);
    overflow: hidden;
    padding-top: 10px;
    white-space: nowrap;
    font-family: "GTFAgentur", serif;
    font-size: 86px;
    color: #ff9d46;
`;

const marqueeBox1 = css`
    display: inline-block;
    animation: marquee 20s linear infinite;
`;

const marqueeBox2 = css`
    display: inline-block;
    animation: marquee2 20s linear infinite;
    animation-delay: 10s;
`;

const InvitationOne = () => {
    const router = useRouter();
    const [index, setIndex] = useState(0);
    const [coverIsShow, setCoverIsShow] = useState({
        index: 0,
        open: false,
    });

    const scrollRef = useRef(null);
    const [isMoreOpen, setIsMoreOpen] = useState({
        bool: false,
        index: 0,
    });

    useEffect(() => {}, [isMoreOpen, coverIsShow]);

    return (
        <ThemeProvider theme={theme}>
            <div css={introContainer}>
                <div css={sliderContainer}>
                    <div css={sliderArrow}>
                        <div
                            onClick={() => {
                                setCoverIsShow({ index: 0 });
                                if (index === 0) {
                                    setIndex(InvitationOneData.length - 1);
                                } else if (index === 1) {
                                    setIndex(0);
                                } else if (
                                    index <
                                    InvitationOneData.length - 1
                                ) {
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
                                } else if (
                                    index ==
                                    InvitationOneData.length - 1
                                )
                                    setIndex(0);
                                else if (index == 1) setIndex(index + 1);
                            }}
                        >
                            <img src="/static/images/sliderRight.png" />
                        </div>
                    </div>
                    <div
                        css={sliderBGWrapper}
                        style={{
                            transform: `translate3d(${
                                (InvitationOneData.length * 100 - index * 100) *
                                -1
                            }%, 0, 0)`,
                            backgroundColor: "red",
                        }}
                    >
                        {InvitationOneData.map(el => {
                            return (
                                <div>
                                    <div
                                        css={sliderContent}
                                        style={
                                            (InvitationOneData.indexOf(el) +
                                                2) %
                                                2 ===
                                            1
                                                ? {
                                                      backgroundColor: "#000",
                                                  }
                                                : { backgroundColor: "#FF9D46" }
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
                                                {coverIsShow.index ===
                                                el.index + 1 ? (
                                                    <div css={iframeWrapper}>
                                                        <iframe
                                                            width="100%"
                                                            style={{
                                                                height: "56vh",
                                                                zIndex: 30,
                                                            }}
                                                            src={el.iframeSrc}
                                                            frameBorder="0"
                                                            scrolling="no"
                                                            allowFullScreen
                                                        ></iframe>
                                                    </div>
                                                ) : (
                                                    <div
                                                        css={startImageWrapper}
                                                        onClick={() => {
                                                            setCoverIsShow({
                                                                index:
                                                                    el.index +
                                                                    1,
                                                            });
                                                        }}
                                                    >
                                                        <div>
                                                            <img src={el.src} />
                                                            <div css={marquee}>
                                                                <div
                                                                    css={
                                                                        marqueeBox1
                                                                    }
                                                                >
                                                                    <span>
                                                                        CLICK to
                                                                        START
                                                                        CLICK to
                                                                        START
                                                                        CLICK to
                                                                        START
                                                                        CLICK to
                                                                        START
                                                                        CLICK to
                                                                        START
                                                                        CLICK to
                                                                        START
                                                                        CLICK to
                                                                        START
                                                                        &nbsp;
                                                                        &nbsp;
                                                                    </span>
                                                                </div>
                                                                <div
                                                                    css={
                                                                        marqueeBox2
                                                                    }
                                                                >
                                                                    <span>
                                                                        CLICK to
                                                                        START
                                                                        CLICK to
                                                                        START
                                                                        CLICK to
                                                                        START
                                                                        CLICK to
                                                                        START
                                                                        CLICK to
                                                                        START
                                                                        CLICK to
                                                                        START
                                                                        CLICK to
                                                                        START
                                                                        &nbsp;
                                                                        &nbsp;
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>{" "}
                                                    </div>
                                                )}
                                            </div>
                                            <div css={slideText}>
                                                <p css={[theme.textKr]}>
                                                    {el.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
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
                    <div css={moreContainer}>
                        <div css={ArtistInfoBox}>
                            <div
                                css={ArtistInfoText}
                                style={{
                                    transform: `translate3d(${
                                        -index * 100
                                    }%, 0, 0)`,
                                }}
                            >
                                {InvitationOneData.map(el => {
                                    return (
                                        <div>
                                            <div css={ArtistInfoTextContent}>
                                                <div>
                                                    <p css={theme.textKr}>
                                                        {el.particiKr}
                                                    </p>
                                                    <p css={theme.textKr}>
                                                        {el.artistInfoKr}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p css={theme.textKr}>
                                                        {el.particiEn}
                                                    </p>
                                                    <p css={theme.textKr}>
                                                        {el.artistInfoEn}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}{" "}
                            </div>
                        </div>
                    </div>
                    <div css={moreContainer}>
                        <div css={moreTextBox}>
                            <div>
                                <p css={theme.textKr}>
                                    초대 I: 지휘 수업指揮 受業을 위한 안내
                                </p>
                            </div>
                            <div>
                                <p css={theme.textKr}>Text</p>
                            </div>
                        </div>
                        <div css={moreTextBox}>
                            <div>
                                <p css={theme.textEn}>
                                    Invitation I: A Guide to Conductor’s Lesson
                                </p>
                            </div>
                            <div>
                                <p css={theme.textEn}>Text</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer bgColor={"#000"} color={"#fff"} />
            </div>
        </ThemeProvider>
    );
};

export default InvitationOne;
