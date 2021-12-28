import { useRef, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Footer from "../../../components/Footer";
import InvitationOneData from "../../../data/InvitationOneData";
import parse from "html-react-parser";

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
    height: calc(100vh - 48px);
    overflow: hidden;
    display: flex;
    padding-bottom: 21px;
    position: relative;

    @media (max-width: 781px) {
        width: 100vw;
        height: calc(100vh - 32px);
        overflow: hidden;
        display: flex;
        padding-bottom: 21px;
        position: relative;
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
        height: 100%;
        width: 100vw;
        display: inline-block;
        flex-direction: column;
        overflow: hidden;
    }
`;

const sliderContent = css`
    width: 100vw;
    height: calc(100vh - 48px);
    padding-top: 120px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 781px) {
        width: 100vw;
        height: calc(100vh - 32px);
        padding-top: 45px;
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
    width: 85%;
    height: 90%;
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
    width: calc((100% / 12) * 8);
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
    white-space: pre-wrap;
    word-break: keep-all;

    p {
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
        overflow: hidden;
        height: 40px;
        background-color: #fff;
        display: inline-block;
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
                    width: calc(100% / 3);
                    font-size: 15px;
                    font-family: PP Neue Montreal Regular, sans-serif;
                    letter-spacing: 0.1px;
                    margin-top: 3px;
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
    }
`;

const introductionContainer = css`
    width: 100%;
    height: auto;
    border-top: 1px solid;
    border-bottom: 1px solid;
    overflow: auto;
    word-break: keep-all;

    & > div {
        width: 100%;
        height: auto;

        p {
            overflow: auto;
        }
    }

    @media (max-width: 781px) {
        width: 100%;
        height: 100vh;
        border-top: 1px solid;
        border-bottom: 1px solid;
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
    margin-top: -10px;

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
    border-top: 1px solid #000;
    width: 100%;
    height: auto;
    transition: 3s ease-in;
    display: flex;

    @media (max-width: 781px) {
        height: auto;
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
        height: 100%;

        display: flex;
        flex-direction: column;
        white-space: pre-wrap;
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;

        & > div {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;

            & > p:first-of-type {
                width: 100%;
                max-width: 100%;
                padding-right: 9px;
            }

            & > p:last-of-type {
                width: 100%;
                max-width: 100%;
                oberflow: auto;
                padding-right: 9px;
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

const ProjectInfoTextContent = css`
    width: 100%;
    height: 25vh;
    display: flex;
    white-space: pre-wrap;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid;

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
        padding-left: 20px;
        padding-right: 20px;
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
                oberflow: auto;
                padding-right: 9px;
            }
        }

        & > div:first-of-type {
            margin-right: 0px;
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
    const query = router.query;
    const [index, setIndex] = useState(query.index ? parseInt(query.index) : 0);
    const [coverIsShow, setCoverIsShow] = useState({
        index: 0,
        open: false,
    });

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
                                                {coverIsShow.index === el.index + 1 ? (
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
                                                                index: el.index + 1,
                                                            });
                                                        }}
                                                    >
                                                        <div>
                                                            <img src={el.src} />
                                                            <div css={marquee}>
                                                                <div css={marqueeBox1}>
                                                                    <span>
                                                                        CLICK to START CLICK to START CLICK to START
                                                                        CLICK to START CLICK to START CLICK to START
                                                                        CLICK to START &nbsp; &nbsp;
                                                                    </span>
                                                                </div>
                                                                <div css={marqueeBox2}>
                                                                    <span>
                                                                        CLICK to START CLICK to START CLICK to START
                                                                        CLICK to START CLICK to START CLICK to START
                                                                        CLICK to START &nbsp; &nbsp;
                                                                    </span>
                                                                </div>
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
                                                : { backgroundColor: "#FF9D46" }
                                        }
                                    ></div>
                                </div>
                            );
                        })}
                    </div>
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
                                                <div>
                                                    <p css={theme.textKr} style={{ fontWeight: "bold" }}>
                                                        {el.particiKr}
                                                    </p>
                                                    <p css={theme.textKr}>{el.artistInfoKr}</p>
                                                </div>
                                                <div>
                                                    <p css={theme.textEn} style={{ fontWeight: "bold" }}>
                                                        {el.particiEn}
                                                    </p>
                                                    <p css={theme.textEn}>{el.artistInfoEn}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div
                        css={introductionContainer}
                        style={
                            (index + 1) % 2 === 1
                                ? {
                                      color: "#fff",
                                      backgroundColor: "#000",
                                  }
                                : { color: "#000", backgroundColor: "#FF9D46" }
                        }
                    >
                        <div>
                            <div css={ArtistInfoTextContent} style={{ height: "50vh" }}>
                                <div>
                                    <p css={theme.textKr} style={{ fontWeight: "bold" }}>
                                        초대 I: 지휘 수업 指揮 受業{" "}
                                    </p>
                                    <p css={theme.textKr}>
                                        <span style={{ fontWeight: "bold" }}>Tom and Jerry in the Hollywood Bowl</span>
                                        <br />
                                        <br />
                                        <span style={{ textDecoration: "underline" }}>
                                            <a href="https://www.youtube.com/watch?v=th_ro9CiASc" target="_blank">
                                                『스코어 스코어』의 61쪽에서 언급되는 장면. 살리에리가 모차르트의 악보를
                                                훔쳐 보며 상상 속의 음악을 듣다가 감명을 받아 악보를 떨어트린다.
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
                                        작곡가의 가장 중요한 덕목은 상상력일 것이다. 작곡가가 창작하려는 음악은 오직
                                        그의 머릿속에만 있다. 작곡가는 지휘자도 연주자도 모두 자신인 상상 속
                                        오케스트라와 함께 곡을 완성해 나간다. 전시 기획자가 기획서를 작성하는 과정도
                                        이와 비슷하다. 기획자의 전시는 오직 그의 머릿속에만 있다. 기획자는 상상 속
                                        전시장과 작품으로 전시를 완성해 나간다. 이 과정에서 요구되는 덕목 또한 무엇보다
                                        상상력이다. 악보와 기획서는 아직 실현되지 않은 상상과 미래를 계시처럼 받아 적은
                                        서류다. <br /> <br />
                                        <span style={{ fontWeight: "bold" }}>지휘 수업</span> <br /> <br /> “작곡가가
                                        2분음표를 길이로 어떤 악기 소리를 듣고 싶다고 가정해봐요. 오케스트라의 성질을
                                        이해하지 못하는 작곡가는 2분음표를 그대로 쓰겠죠. 본인의 머릿속에서 듣는 것만
                                        기록할 테니까요. 그렇지만 실제 연주로 2분음표의 음가를 들으려면, 악보에는 조금
                                        더 길게 써야만 그렇게 들려요. 지휘를 경험한 작곡가는 오케스트라의 특성과 심리를
                                        더 세밀하게 파악할 수 있어요. 그래서 오케스트레이션을 할 때도 더 쉽게 상상하고
                                        구현해낼 수 있기도 하죠.” ㅡ 작곡가 겸 지휘자 최재혁 인터뷰 <br />
                                        (https://thestrings.kr/2018/11/18/jaehyuck_choi/ : 링크가 폐쇄됨) <br /> <br />
                                        그러나 기획자의 일은 작곡가의 일보다는 지휘자의 일에 더 가깝다. 상상과 현실 양쪽
                                        모두에 관여하기 때문이다. 기획서는 전시에 참여하는 다른 사람들에게 전달되면서
                                        공통의 논의를 위한 토대가 된다. 기획서는 전시의 전체적인 방향을 이끌며
                                        참여자들의 견해를 조율하는 기준으로 작동하고, 현실적인 조건과 여러 의견을
                                        반영하는 과정에서 수정되기도 한다. 전시 기획서가 완성되어 가면서, 그것은 전시를
                                        위한 예비 서류라기보다 전시에 맞추어 제작된 서류가 된다. 이러한 맥락에서,
                                        기획서는 전시의 스코어(score)라고 할 수 있다. 전시기획서는 전시의 보이지 않는
                                        곳에서 은둔하지만, 그 자신도 가 보지 않은 길을 안내하는 나침반이다. 지휘자가
                                        악보를 나침반 삼아 곡을 실현하는 것처럼, 기획자도 기획서를 나침반 삼아 전시를
                                        실현한다. 이 실현 과정이 수반하는 일들, 경영과 행정, 인사 관리 등도 지휘자와
                                        기획자에게 맡겨진다. 상상과 현실 사이에 위치한다는 이 특성은 기획서의 실현
                                        가능성을 강조한다. <br /> <br />
                                        대부분의 전시 기획서는 실현을 전제로 작성되며, 실현 가능성은 기획서의 우수함을
                                        평가하는 중요 지표 중 하나이다. 상상 속에서는 풍성했던 전시가 현실에서는 초라한
                                        수준에 머물기도 한다. 예산 대비 규모가 지나치게 크거나 작은 전시는 아무리
                                        흥미롭고 필요한 주제여도 좋은 평가를 받기 어렵다. 예산 목록과 일정, 섭외 상황,
                                        기대 효과 등의 기획서 규격 또한 전시의 내용과 무관하게 그 자체로 기획서의 실현
                                        가능성을 가늠하게 하는 요소들이다. 이 지점에서 기획자의 일과 작곡가의 일이
                                        분기한다. 작곡가는 실현을 전혀 염두에 두지 않은, 절대로 연주될 수 없을 것 같은
                                        곡을 쓸 수 있다. 기획자는 실현을 전제로 쓴다. 지휘자 또한 실현을 전제로 일한다.
                                        따라서, 이 초대의 제목은 ‘작곡’ 수업이 아닌 ‘지휘’ 수업이 되었다. <br />
                                        <br />
                                        〈초대 I: 지휘 수업〉은 전시와 기획서 사이의 간극을 실험한다. 나아가 정확하고
                                        명료한 문장, 인기 있을 만한 전시 주제, 실현 가능성에 대한 의심으로부터 벗어나
                                        기획서를 작성하는 과정과 기획서의 외연적 확장 가능성을 탐구하는 데에 무게를
                                        둔다. 여섯 명의 전시 기획자는 실현되거나 실현되지 않을 기획서를 다양한 방식으로
                                        작성하였다. 관객은 기획서를 읽기보다 보게 될 것이고, 기획서를 보며 전시를
                                        상상하게 될 것이다. 이 전시에는 오직 상상으로만 볼 수 있는 부분이 있을 것이다.
                                        많은 위대한 작곡가들이 관객에게 들리지 않을 여백에 그림을 그려 넣었던 것처럼
                                        말이다.
                                        <br />
                                        <br />
                                        “요한 세바스티안 바흐는 눈으로만 들을 수 있는 두 개의 줄로 연결된 온음표와
                                        이분음표를 기보하기를 좋아했다.” ㅡ 파스칼 키냐르
                                    </p>
                                </div>
                                <div>
                                    <p css={theme.textEn} style={{ fontWeight: "bold" }}>
                                        Invitation I: Conductor’s Lesson
                                    </p>
                                    <p css={theme.textEn}>
                                        <span style={{ fontWeight: "bold" }}>Tom and Jerry in the Hollywood Bowl</span>
                                        <br />
                                        <br />
                                        <span style={{ textDecoration: "underline" }}>
                                            <a href="https://www.youtube.com/watch?v=th_ro9CiASc" target="_blank">
                                                The video above is a scene mentioned in Score Score page 61. Salieri
                                                peeps and drops Mozart's score, impressed by imaginary music in his own
                                                head.
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
                                        The most important virtue for a composer would be imagination. The music that
                                        the composer creates only exists in her or his head. The composer finishes
                                        her/his score with the imaginary orchestra, constituted of conductor and
                                        performer all herself/himself. This process is similar to how a curator wrties a
                                        exhibition proposal. The exhibition only exists in her or his head. The curator
                                        finishes her/his proposal with the imaginary exhibition space and artworks.
                                        Imagination, again, is the most crucial virtue here. Both music score and
                                        curatorial proposal are documents that marks a prognostication of an unrealized
                                        future. <br />
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>Conductor’s lesson</span>
                                        <br />
                                        <br /> "Suppose the composer wants to hear a musical instrument with a half
                                        note. If the composer does not understand the nature of the orchestra, she/he
                                        will use the half note as it is. Though to hear the sound of the half note in
                                        the actual play, the note should be written a little longer on the score. A
                                        composer who has experience conducting can delicately understand the orchestra's
                                        characteristics and mind. It helps with easier imagination and performance when
                                        orchestrated. Composers should not only deal with sound but also include the
                                        mind of the performer in the creation."
                                        (https://thestrings.kr/2018/11/18/jaehyuck_choi/: link closed)
                                        <br />
                                        <br />
                                        But a curator’s work is closer to the conductor’s than the composer’s. It is
                                        involved in both imagination and reality. The proposal wanders to different
                                        agencies who are related to an exhibition, becoming a foundation for communal
                                        discussion. It serves as a criterion setting the overall direction of the
                                        exhibition, coordinating each individual’s viewpoint, being modified to meet
                                        realistic requirements or in the process of reflecting different opinions. As
                                        the proposal is completed, it becomes a document produced according to the
                                        exhibition rather than a pre-document for the exhibition. <br />
                                        <br /> In this regard, the curatorial proposal is a ‘score’ of the exhibition.
                                        The proposal is a compass that guides the unknown path, although it hides in the
                                        concealed site of the exhibition. Just as a conductor realizes an imaginary
                                        music using a music score as a compass, a curator realizes an imaginary
                                        exhibition using a proposal as a compass. Management and administration,
                                        accounting take place in this realization process. These are also the work of a
                                        conductor and a curator. This position between imagination and reality
                                        emphasized the feasibility of the proposal. <br />
                                        <br />
                                        Most of the proposal writes down on the premise of realization. The feasibility
                                        is the one of indexes for evaluating the excellence of a proposal. An exhibition
                                        which is nice in her/his brain can be shabby in reality. If an exhibition is too
                                        large or too small compared to the scale of budget, it can’t get a high score no
                                        matter how interesting and necessary it deals with. Likewise, the budget list,
                                        schedule, casting situation, and expected effect are factors that mark the
                                        feasibility of a proposal in itself regardless of the quality of content. At
                                        this point, a work of curator and composer split. A composer sometimes writes
                                        music that can never be played, not focused on realization. A curator writes
                                        down on the premise of realization. A conductor works on the premise of
                                        realization. Therefore, the title of this invitation is the ‘conductor’s’
                                        lesson, not the ‘composer’ lesson. <br />
                                        <br />
                                        The invitation I: Conductor's Lesson is an experiment that puts some distance
                                        between an exhibition and a proposal. Beyond accurate and precise sentences,
                                        popular topics, repeatedly doubting the feasibility, it emphasizes the process
                                        of writing a proposal and external expansion of the proposal. Six curators wrote
                                        their own proposal that would or would not be realized using various ways.
                                        Audiences will look rather than read proposals, imagining exhibitions. Some
                                        parts of these exhibitions can only be visited through imagination, as if great
                                        composers doodled in a blank margin that the audience would not hear.
                                        <br />
                                        <br />
                                        “Even for strings, Johann Sebastian Bach liked to write whole and half notes
                                        that were linked two strings apart that could be audible only to the eye.” ㅡ
                                        Pascal Quignard
                                    </p>
                                </div>
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
