import { useRef, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Footer from "../../../components/Footer";
import InvitationTwoData from "../../../data/InvitationTwoData";
import parse from "html-react-parser";
import expansion from "../../../static/images/expansion.png";
import Link from "next/link";

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
                    font-size: 12px;
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

    @media (max-width: 781px) {
        width: 40px;
        height: 40px;
    }
`;

const InvitationTwo = () => {
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
                            초대 II: 바벨
                        </p>
                        <p css={theme.textKr}>
                            바벨&sup1;은 트와인(Twine)으로 내러티브의 새로운 형식을 실험한다.&sup2; 트와인&sup3;은
                            하이퍼링크로 비선형적 내러티브를 제작할 수 있는 오픈 소스 툴이다. 다중 선택과 이동이라는
                            기능은 시간성을 선형적 내러티브와는 다른 방식으로 조직하는데, 이는 전시가 리얼리티의 시간을
                            다르게 배치하는 과정과 유사하다. 이를 통해 전시와 내러티브, 시간의 관계를 고찰한다.&#8308;
                            손님은 기획자, 비평가, 창작자를 포함하는 6인, 큰 손님에는 룹앤테일의 김영주가
                            초대되었다.&#8309;
                            <br /> <br />
                            <br />
                            &sup1; 나이가 지긋한 사서가 보낸 편지는 젊은 사서의 손과 발을 묶기에 충분했다. 젊은 사서는
                            진리가 적힌 책을 찾으러 분주히 돌아다니고 있던 와중에 책장과 책장의 틈 사이로 편지를
                            발견하였다. ‘이 편지를 발견한 누군가에게’라는 익명의 화자를 수신인으로 설정한 낡은 편지에는
                            다음과 같은 내용이 적혀져 있었다. 본인 또한 평생 도서관의 원리를 축약한 개론서를 찾으려고
                            노력했으나, 단일한 진리의 서는 존재하지 않는다는 것이다. ‘주변을 둘러보시오. 도서관의 구조가
                            그것을 허락하지 않는다오.’ 반듯하고 예의 바른 필체가 담담한 투로 문장을 마무리하였다.
                            그렇다고 발신인은 무작정 회의와 비관으로 빠지지 않았다. 그는 진리를 찾는 대신 다른 방식을
                            택하였다. 자신만의 변칙을 실험하는 한눈팔기를 주요 일과로 삼으며, 그 지혜를 나누기 위해 이
                            편지를 적었다고 밝혔다. <br />
                            젊은 사서는 고민에 빠졌다. 그는 지난 몇 년간 미술관 텍스트에 대한 진리의 서를 찾고 있던
                            중이었다. 그가 늙은 사서의 말에 흔들린 것은 여정의 종착지로 향하는 실마리가 보이지 않았기
                            때문이다. 그는 자신이 찾는 문장에 가까워지고 있는지 확신이 없었다. 『전시 서문
                            모음집』(2567), 『고대 무덤 벽화 주술문』(1230), 『포스트 인터넷 자막론』(2022),
                            『관객참여예술과 글쓰기』(1980), 『심사위원이 거절하지 못하는 기획서 작성하는 법』(2010),
                            『예술가/기획자 선언문』(3029), 『금서』(590), 『텍스트 복구 개론서』(2048) 등은 시작에
                            불과했다. 599번째 방의 한 벽면, 책장 두 번째 줄에서 발견한 『월텍스트』(2021)의 첫 장을
                            펼치자마자 몰려오는 피로감에 눈을 잠시 돌렸을 때 익명의 사서가 쓴 편지를 발견하였다.
                            <br />
                            전시에서 텍스트란 무엇인가? 임무를 시작한 후 젊은 사서가 스스로에게 던진 첫 물음이었다.
                            사서는 전시장의 입구에 적힌 제목이나 서문이 출력된 종이가 전시를 온전히 전달하는 매개체라고
                            믿었다. 사서에게 텍스트는 도면이자 안내문으로, 전시를 실체화하고 작품의 의미를 결정했다.
                            그러나 현 시점에서 자신이 제기한 질문이 여전히 유효한지 본인도 더는 알 수 없었다. 더군다나
                            ‘방법론적 글쓰기’를 권유하는 나이 든 사서의 말은 지혜롭게 들렸다. <br />
                            <br />
                            &sup2; 내러티브의 새로운 형식을 실험하기 위해서는 제4의 벽을 손으로 만지는 것부터 시작해야
                            한다. 보르헤스의 『바벨의 도서관 The Library of Babel』(1941)에서는 단일한 내러티브로부터
                            한눈팔기의 전략을 제안한다. 한눈팔기의 전략이란 텍스트가 진리를 대변한다는 믿음을 폐기하고,
                            텍스트를 다면체로 인식하는 행위를 의미한다. 텍스트는 그 자체로 도서관이기 때문에 단일한
                            독해는 불가능하다. 한눈팔기는 텍스트와 독자 사이에 존재하는 틈을 벌리며, 그 틈의 낯선 공간을
                            떠돌아다니는 방문자를 환영하는 행위이다. 쓰기와 읽기의 선후 관계가 불분명해지면서 폭넓은
                            정의의 ‘관객’은 사라지고 ‘독자'는 기획자, 작가, 번역가, 사서 등 다중의 지위를 획득한다.
                            독자의 곁눈질은 다른 텍스트로 이어지는 출구를 더듬는다.
                            <br />
                            <br />
                            &sup3; 트와인은 웹을 기반으로 인터랙티브 픽션(interactive fiction)을 제작하는 오픈 소스
                            프로그램으로, 누구든지 쉽게 트와인을 이용하여 소설, 시, 편지, 에세이 등 다양한 방식의
                            스토리텔링을 실험할 수 있다. 언파운디드는 전시의 안팎에서 관계를 맺는 이들과 이 프로그램의
                            작동법을 공유하기로 했다.
                            <br />
                            <br />
                            &#8308; 초대 ‘손님’들에게 일차적으로 제안한 재료는 언파운디드 로고이다. 언파운디드는 현실과
                            가상이 서로 붙어있어서 완전히 분리되지도, 중첩되지도 않는 그 중간 상태인 픽션에 대해
                            탐구하고자 하며 무한성을 시각화한 뫼비우스 고리를 전면에 배치하였다. 뫼비우스의 날개에 따라
                            손님에게는 다음과 같은 질문이 주어졌다. 안과 밖이 한꺼번에 존재하는 이 세계를 우리는 어떻게
                            걸을 수 있을까? 이 세계는 시간이 어떻게 흐르는가? 그 안을 걷는 인물은 어떠한 풍경을 목격할
                            것인가? 풍경은 끊겨져 있는가, 이어져 있는가? 무너진 바벨탑의 잔해 속 텍스트를 쥐고 거꾸로
                            뒤집힌 세상 속에서 글을 쓰는 법은 무엇인가? 그 글은 어디에서 읽힐 것인가?
                            <br />
                            <br />
                            &#8309; 본 웹사이트에서 공개된 결과물은 세상의 다른 구멍으로 향하는 입구이다. 강세가
                            변화하는 초대장, 시간이 제한된 메일 쓰기, 폐허가 된 플랫폼, 프리모리예로 향하는 기차, 실종된
                            관객을 찾는 미술관, 불가사의한 목록이 발견되는 소장품 시스템 등 이동을 유도하는 푸른 선의
                            입구를 지금 여기에서 만날 수 있다.
                        </p>
                    </p>
                    <div css={borderMobile}></div>
                    <p>
                        <p css={theme.textEn} style={{ fontWeight: "bold" }}>
                            Invitation I: Babel
                        </p>
                        <p css={theme.textEn}>
                            In Babel&#8310;, we experiment with a new form of narratives through Twine&#8311;. A
                            twine&#8312; is an open-source tool that can produce nonlinear narratives using a hyperlink.
                            Multi-selection and redirection organize time distinctively with the linear narrative,
                            similar to how the exhibition reassigns reality time. The activity examines the relationship
                            between exhibition, narrative, and time through the invitation.&#8313; Six guests, including
                            curator, critic, practitioner, were invited, and for ‘lead guest,’ Youngju Kim from
                            Loopntale was invited.&sup1;&#8304;
                            <br /> <br />
                            <br />
                            &#8310; A letter from an old librarian was so captivating that a young librarian barely
                            moved by staring at it. While the young librarian was rushing around to find a book of
                            truth, a letter stuck in between bookshelves caught the attention. ‘To someone who found
                            this letter,’ the worn-out letter said the following to an anonymous reader. The letter’s
                            writer stated that he too searched the library all his life for an abridged introduction
                            that contained the principles of library, except that there wasn’t one with a single truth
                            in it. ‘Look around, the structure of this library doesn’t allow you to do so.’ The letter
                            ended with a neat and courteous handwriting. The writer, however, didn’t blindly fall into
                            skepticism and pessimism. Instead of finding the truth, the writer chose to look the other
                            way. The writer revealed that he now spent his day experimenting with his own anomalies
                            through intended distractions and wrote the letter to share his wisdom. <br />
                            The young librarian was in a dilemma. For the last couple of years, he was searching for the
                            book of truth on texts in a museum. The reason that the young librarian got disturbed by the
                            letter's remarks was that there seemed to be no progress made in his journey, not to mention
                            its destination. The young librarian was not confident whether he was getting close to the
                            sentence that he was looking for. Exhibition Preface Collection(2567), Ancient Tomb Mural
                            Painting Spells(1230), Post-Internet Subtitle Theory(2022), Participatory Art and
                            Writing(1980), How to Write Project Proposals that Judges Can’t Refuse(2010), Manifesto of
                            Artists/Curators(3029), A Forbidden Book(590), Introduction to Text Restoration(2048) were
                            all just the beginning. Wall Text(2021) was located in the second row of the bookshelf at
                            599th Room, and the young librarian couldn’t resist the fatigue he felt when he opened up
                            the first page. When the young librarian looked the other way momentarily, he found the
                            letter written by an anonymous <br /> What does writing mean in an exhibition? That was the
                            first question that the young librarian asked himself when he embarked on his very first
                            mission. He believed that the title at the entrance of an exhibition hall or a paper printed
                            with a preface were true mediums of transmission of the exhibition itself. For the young
                            librarian, texts were both a floor plan and a brochure that substantiated an exhibition and
                            determined the meaning of artworks. At this point, however, the young librarian wasn’t even
                            sure whether the question that he raised was still valid. Moreover, the old librarian’s
                            letter that suggested ‘methodological writing’ sounded wise enough.
                            <br />
                            <br />
                            &#8311; To experiment with new formats of a narrative, one should start by touching the 4th
                            wall with one’s hands. In The Library of Babel(1941) written by Jorge Luis Borges, the
                            writer suggests a strategy of distraction from a single narrative. A strategy of distraction
                            refers to the act of discarding the belief that text represents the truth and recognizing
                            the text as a polyhedron. Since the text itself is a library, a single interpretation is
                            inherently impossible. The strategy opens a space between text and readers and welcomes
                            visitors who have been wandering in the unfamiliar space. As the sequence of writing and
                            reading becomes unclear, the broader definition of ‘audience’ disappears while ‘readers’
                            assume multiple positions including curators, writers, translators, and librarians. Readers’
                            distraction lead readers to fumbles around the exit leading to other texts.
                            <br />
                            <br />
                            &#8312; Twine is a web-based open-source program for making interactive fiction. With Twine,
                            anyone can easily experiment with a wide array of storytelling formats such as novels,
                            poems, letters, and essays. Unfounded decided to share how Twine works with practitioners
                            that came across in and out of exhibitions.
                            <br />
                            <br />
                            &#8313; An initial ingredient proposed to ‘guests’ is the logo of Unfounded. Unfounded seeks
                            to explore fiction in which reality and virtuality are adjoined and yet leaves up an
                            intermediary state where they aren’t either completely separated or overlapped. In this
                            regard, Unfounded places a Möbius strip at front that visualizes the infinity. Moving along
                            the Möbius strip, the following question is brought to the client. ‘How can we walk in this
                            world where inside and outside exist at once? How does time flow in this world? What kind of
                            scenery will the person walking in it witness? Are sceneries disconnected or not? How does
                            one write in the world upside down gripping the texts in the wreckage of collapsed Tower of
                            Babel? Where would the texts be read?’
                            <br />
                            <br />
                            &sup1;&#8304; The guests’ results revealed on this website serve as an entrance to another
                            hole in the world. This is the place where one can find the blue line’s entrance that
                            induces the movement of an invitation letter with a changing emphasis, time-limited mail
                            writing, a derelict platform, trains heading to Primorye, museum searching for missing
                            audiences, and a collection system where mysterious lists are found.
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
                            transform: `translate3d(${(InvitationTwoData.length * 100 - index * 100) * -1}%, 0, 0)`,
                        }}
                    >
                        {InvitationTwoData.map(el => {
                            return (
                                <div>
                                    <div
                                        css={sliderContent}
                                        style={
                                            (InvitationTwoData.indexOf(el) + 1) % 2 === 1
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
                        {InvitationTwoData.map(el => {
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
                                    setIndex(InvitationTwoData.length - 1);
                                } else if (index === 1) {
                                    setIndex(0);
                                } else if (index < InvitationTwoData.length - 1) {
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

                                if (index < InvitationTwoData.length - 1) {
                                    setIndex(index + 1);
                                } else if (index == InvitationTwoData.length - 1) setIndex(0);
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
                        {InvitationTwoData.map(el => {
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
                                {InvitationTwoData.map(el => {
                                    return (
                                        <div
                                            style={
                                                (InvitationTwoData.indexOf(el) + 1) % 2 === 1
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
                                transform: `translate3d(${(InvitationTwoData.length * 100 - index * 100) * -1}%, 0, 0)`,
                                height: `${artistInfoBoxHeight}px`,
                            }}
                        >
                            {InvitationTwoData.map(el => {
                                return (
                                    <div>
                                        <div
                                            css={sliderContentBg}
                                            style={
                                                (InvitationTwoData.indexOf(el) + 1) % 2 === 1
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

export default InvitationTwo;
