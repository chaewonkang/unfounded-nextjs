import { useRef, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useRouter } from "next/router";
import { css, keyframes } from "@emotion/react";
import Footer from "../components/Footer";
import InvitationOneData from "../data/InvitationOneData";
import InvitationTwoData from "../data/InvitationTwoData";
import { route } from "next/dist/next-server/server/router";

const introContainer = css`
    position: relative;
    top: 0;
    width: 100vw;
    height: 100vh;
`;

const outer = css`
    width: 100vw;
    height: 100vh;
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

    & > div {
        display: flex;
        width: calc((100% / 12) * 8);
        height: 100%;
        padding-top: 120px;
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

            p:first-of-type {
                width: 100%;
                padding-top: 20px;
                padding-left: 15px;
                padding-right: 15px;
                margin-right: 0px;
                font-family: Gothic A1, sans-serif;
                font-size: 18px;
                font-weight: 500;
                line-height: 29px;
                letter-spacing: -0.2px;
                word-break: keep-all;
                height: 100%;
                overflow: auto;
            }

            p:last-of-type {
                padding-left: 15px;
                padding-right: 15px;
                width: 100%;
                margin-left: 0px;
                font-family: PP Neue Montreal Regular, sans-serif;
                font-size: 20px;
                line-height: 29px;
                letter-spacing: 0.1px;
                height: 100%;
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

const invitationBoxTwo = css`
    background-color: #000 !important;
    color: #fff !important;
`;

const invitationBox = css`
    width: 100vw;
    height: calc(100vh - 120px);
    background-color: #ff7e27;
    overflow: hidden;

    & > div:first-of-type {
        span {
            font-family: GTFAgentur, serif;
            font-size: 65px;
            letter-spacing: -0.2px;
            color: #000;
        }
    }

    @media (max-width: 781px) {
        width: 100vw;
        height: calc(100vh - (59px + 46px));
        background-color: #ff7e27;
        padding-top: 0px;
        overflow: hidden;
        display: flex;
        flex-direction: column;

        & > div:first-of-type {
            height: 72px;
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
    height: auto;
    min-height: 200px;

    @media (max-width: 781px) {
        display: flex;
        flex-direction: column;
        padding-left: 15px;
        padding-right: 15px;
        word-break: keep-all;
        position: relative;
        margin-bottom: 15px;
        height: auto;
        min-height: 0;
    }
`;

const invitationText1 = css`
    width: calc((100% / 3) - 9px);
    height: 100%;
    margin-right: 9px;
    height: auto;
    display: flex;
    flex-direction: column;
    position: relative;

    & > div {
        width: calc(((100vw - 41px) / 6) * 2);
        display: flex;
        flex-direction: column;
    }

    & > div:last-of-type {
        position: absolute;
        bottom: 20px;
    }

    @media (max-width: 781px) {
        width: 100%;
        height: 100%;
        margin-right: 0px;
        height: auto;
        display: flex;
        flex-direction: column;
        position: relative;

        & > div {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        & > div:last-of-type {
            position: relative;
            bottom: unset;
        }
    }
`;

const invitationText2 = css`
    margin-left: 9px;
    width: calc(((100% / 3) * 2)- 9px);

    div:first-of-type {
        width: 100%;

        display: flex;
        flex-direction: column;

        p {
            width: 100%;
            height: 50%;
            max-width: 100%;
        }
    }

    div:last-of-type {
        display: flex;
        justify-content: flex-end;

        span {
            font-family: Union, sans-serif;
            font-weight: 500;
            font-size: 15px;
            border-bottom: 1px solid #000;
            cursor: pointer;

            :hover {
                color: #fff;
                border-bottom: 1px solid #fff;
            }
        }
    }

    @media (max-width: 781px) {
        margin-left: 0px;
        width: 100%;

        div:first-of-type {
            display: none;
        }

        div:last-of-type {
            display: flex;
            justify-content: flex-end;

            span {
                font-family: Union, sans-serif;
                font-weight: 500;
                font-size: 15px;
                border-bottom: 1px solid #000;
                cursor: pointer;

                :hover {
                    color: #fff;
                    border-bottom: 1px solid #fff;
                }
            }
        }
    }
`;

const moreContainer = css`
    border-top: 1px solid #000;
    width: 100%;
    background-color: #ff7e27;
    position: absolute;
    transition: 3s ease-in;
    display: flex;
    animation: slideUp 1s;
    z-index: 3;

    & > div {
        width: 100%;
        height: 100%;
        display: flex;
    }

    @media (max-width: 781px) {
        border-top: 1px solid #000;
        width: 100%;
        height: calc(100vh - (82px + 138px + 105px));
        background-color: #ff7e27;
        position: absolute;
        transition: 3s ease-in;
        padding-bottom: 10px;
        display: flex;
        animation: slideUp 1s;
        z-index: 3;

        & > div {
            width: 100%;
            display: flex;
        }
    }
`;

const sliderArrowL = css`
    position: absolute;
    width: 70px;
    height: 70px;
    top: calc(50% - 105px);
    left: 21px;
    display: flex;

    align-items: center;
    z-index: 2;

    & > div {
        width: 100%;
        height: 100%;
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
        width: 40px;
        height: 40px;
        top: calc(((100vh - (82px + 138px + 105px)) / 2) - 40px);
        left: 21px;
        display: flex;

        align-items: center;
        z-index: 2;

        & > div {
            width: 100%;
            height: 100%;
            :hover {
                cursor: pointer;
            }

            & > img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
`;

const sliderArrowR = css`
    position: absolute;
    width: 70px;
    height: 70px;
    top: calc(50% - 105px);
    right: 21px;

    display: flex;

    align-items: center;
    z-index: 2;

    & > div {
        width: 100%;
        height: 100%;
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
        width: 40px;
        height: 40px;
        top: calc(((100vh - (82px + 138px + 105px)) / 2) - 40px);
        right: 21px;

        display: flex;
        align-items: center;
        z-index: 2;

        & > div {
            width: 100%;
            height: 100%;
            :hover {
                cursor: pointer;
            }

            & > img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
`;

const sliderContainer = css`
    width: calc(100vw - 42px);
    overflow: hidden;
    display: flex;
    margin-left: 21px;
    margin-right: 21px;
    position: relative;

    @media (max-width: 781px) {
        width: 100%;
        height: calc(100vh - 400px) !important;
        overflow: hidden;
        display: flex;
        margin-left: 0px;
        margin-right: 15px;
        position: relative;
    }
`;

const sliderWrapper = css`
    width: 100vw;
    height: calc(100% - 110px);
    display: inline-block;
    white-space: nowrap;
    transition: ease 1000ms;

    & > div:nth-of-type(3n + 1) {
        padding-right: 9px;
    }

    & > div:nth-of-type(3n + 2) {
        padding-left: 9px;
        padding-right: 9px;
    }

    & > div:nth-of-type(3n + 3) {
        padding-left: 9px;
    }

    & > div:nth-of-type(4n) {
        margin-left: 42px;
    }

    @media (max-width: 781px) {
        width: 100vw;
        height: calc(100% - 20px);
        display: inline-block;
        white-space: nowrap;
        transition: ease 1000ms;

        & > div:nth-of-type(3n + 1) {
            padding-right: 0px;
        }

        & > div:nth-of-type(3n + 2) {
            padding-left: 0px;
            padding-right: 0px;
        }

        & > div:nth-of-type(3n + 3) {
            padding-left: 0px;
        }

        & > div:nth-of-type(4n) {
            margin-left: 15px;
        }
    }
`;

const eachSlide = css`
    height: calc(100% - 21px);
    width: calc(((100vw - 42px) / 3));
    display: inline-block;
    flex-direction: column;
    background-color: #ff7e27;

    :hover {
        & > img {
            filter: invert(100%);
        }
    }

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
    }

    @media (max-width: 781px) {
        height: calc(100% - 21px);
        width: calc(100% - 30px);
        margin-right: 15px;
        margin-left: 15px;
        display: inline-block;
        flex-direction: column;
        background-color: #ff7e27;

        :hover {
            & > img {
                // mix-blend-mode: overlay;
            }
        }

        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            cursor: pointer;
        }
    }
`;

const slideText = css`
    width: 100%;

    span {
        display: inline-block;
        width: 50%;
    }

    span:first-of-type {
        -webkit-text-stroke-width: 0.5px;
    }

    span:last-of-type {
        text-align: right;
    }

    @media (max-width: 781px) {
        width: 100%;

        span {
            display: inline-block;
            width: auto;
        }

        span:last-of-type {
            margin-left: 10px;
        }
    }
`;

const ArtistInfoTextContent = css`
    width: 100%;
    display: flex;
    white-space: pre-wrap;
    padding-top: 20px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 20px;

    & > div {
        width: calc(50% - 9px);
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
            overflow: auto;
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
        overflow: auto;
        display: flex;
        flex-direction: column;
        white-space: pre-wrap;
        padding-top: 20px;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 20px;

        & > div {
            width: 100%;
            display: flex;
            flex-direction: column;

            & > p:first-of-type {
                width: 100%;
                max-width: 100%;
                padding-right: 0;
            }

            & > p:last-of-type {
                width: 100%;
                max-width: 100%;
                padding-right: 0px;
                overflow: auto;
            }
        }

        & > div:first-of-type {
            margin-right: 0px;
        }

        & > div:last-of-type {
            padding-top: 20px;
            margin-left: 0px;
        }
    }
`;

const Introduction = () => {
    const router = useRouter();
    const [index, setIndex] = useState(0);
    const [index2, setIndex2] = useState(0);
    const timeoutRef = useRef();
    const scrollRef = useRef();
    const scrollRefTwo = useRef();
    const outerDivRef = useRef();
    const [headerHeight, setHeaderHeight] = useState(0);
    const [perSlide, setPerSlide] = useState(0);
    const moreBoxRef = useRef();
    const InvitationTextBoxRef = useRef();
    const [sliderHeight, setSliderHeight] = useState(0);
    const [delay, setDelay] = useState(1);
    const [mobileFooterDisplay, setMobileFooterDisplay] = useState(false);
    const [desktopFooterDisplay, setDesktopFooterDisplay] = useState(false);
    const [isArrow, setIsArrow] = useState(false);
    const [isArrow2, setIsArrow2] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState({
        bool: false,
        index: 0,
    });
    const [isMoreOpen2, setIsMoreOpen2] = useState({
        bool: false,
        index: 0,
    });

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();

        return () => {
            resetTimeout();
        };
    }, []);

    useEffect(() => {
        setSliderHeight(InvitationTextBoxRef.current.offsetHeight + headerHeight + 40);

        if (window.innerWidth < 782) {
            setHeaderHeight(105);
            setPerSlide(1);
        } else {
            setHeaderHeight(120);
            setPerSlide(3);
            setDesktopFooterDisplay(true);
        }
    }, [sliderHeight, headerHeight, perSlide, moreBoxRef, scrollRef, desktopFooterDisplay]);

    useEffect(() => {}, [isMoreOpen, isMoreOpen2]);

    useEffect(() => {}, [isArrow]);

    useEffect(() => {
        setTimeout(() => {
            setMobileFooterDisplay(true);
        }, 2500);
    }, [mobileFooterDisplay]);

    return (
        <ThemeProvider theme={theme}>
            <div css={introContainer}>
                <div css={outer} ref={outerDivRef}>
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
                                ‘언파운디드’는 21세기 초입에 발견된 어떤 문서들의 총칭이다. ‘unfounded’는 무근無根하다,
                                헛되다, 이유 없다라는 뜻이며, 이름과 같이 의미를 짐작할 수 없는 내용으로 가득 차 있으나
                                누군가 공들여 적었다는 것만큼은 확실하다. 문서가 발견된 지는 벌써 이백 년에 가까운
                                시간이 지났지만, 말장난을 이용한 수수께끼와 이해할 수 없는 다이어그램으로 구성된 이
                                문서에서 밝혀진 부분은 극히 적다. 여기에 그 일부를 적으며 누군가 이 문서의 해독을
                                이어나가 주기를 바란다.
                                <br />
                                <br />{" "}
                                <span
                                    style={{
                                        fontSize: "17px",
                                        lineHeight: "31px",
                                        display: "block",
                                        fontStyle: "italic",
                                        width: "100%",
                                        height: "fit-content",
                                        margin: "0",
                                    }}
                                >
                                    “... ... 현실과 가상이, 사실과 허구가, 진실과 거짓이, 물질과 이미지가 (불에 탄
                                    자국)다. … …” (종이 문서: 32번 문서: 16쪽) <br /> “실재는 … … 설탕이 물에 녹듯 … …
                                    용해되고 있다.” (107 번째 석판: 2번째 줄) <br /> “유령은 과거가 아니다. 유령은 곧
                                    도래할 미래의 모습이다.” (카세트 테이프: 233번 문서: 1쪽 3번 메모) <br /> “시간이
                                    완전히 엉켜 버렸다. 우리는 쓸 수 없게 된 시간을 버리고 새로운 시간을 구축하자고
                                    약속했다. 과거로 가고 있다고 생각했지만 금세 미래였다. 미래로 흐르고 있다고
                                    생각했지만 역시, 현재였다. 악독한 뫼비우스.” (일기들 [검은색 가죽]: 64번 문서:
                                    577쪽) <br /> “미안해, 네가 이번 리얼리티를 위해 만든 규칙들, 다 알아서 시시해져
                                    버렸어.” (편지들: 584번 문서: 2쪽) <br />
                                    “발굴 현장에서 얻은 결과에 따르면 … … 발견자의 유해가 폐허의 가장 안쪽에 안치되어
                                    있었다.” (보고서: 20번 문서: 92쪽) <br /> “이 사진은 실화를 바탕으로 한다.(촬영 장소
                                    불확실?)” (포토에세이: 388번 문서: 12쪽 뒷면) <br /> “예언이 본 사건을 촉발시킨
                                    것으로 알려져 있다.” (신문: 998번 문서: 1쪽 헤드라인) <br /> <br />
                                </span>
                                언파운디드 문서가 흥미로운 것은 그것에 어떤 순서도 없기 때문이다. 이 문서는 어디로도
                                나아가지 않는다. 대신 멈춰 있다. 적어도 멈춰 있는 것처럼 보인다. 그러나 자세히 살피면
                                모든 방향에서 그것을 당기는 중력이 작동하기 때문에 멈춰 있는 것처럼 보일 따름이지,
                                그것은 일 초에도 수천 번을 진동한다. 우리가 언파운디드 문서를 발견한 곳은 이천 년 전에
                                혹은 만 년 뒤에 미술관이 되는 곳이었다. <br /> <br /> 우리는 언파운디드 문서 중 일부를
                                함께 해독할 사람 몇 명을 수소문하여 ‘초대’했다. 그들은 미술관의 생리에 대해 잘 알고
                                있거나 잘 모르고 있는 전시 기획자, 비평가, 예술가, 관객, 행인 중 용기와 믿음을 점쳐 우선
                                선발되었다. 우리는 이들과 함께 언파운디드 문서의 일부를 실행해 보면서 무엇이 나타나는지
                                관찰하고자 했다. 수천 번의 진동을 잠시라도 목격했다면 운이 좋은 날이었다. 여전히 해독할
                                수 없는 문서가 많이 남아 있기에, 우리는 ‘탐험’으로 지도 혹은 내비게이션 역할을 할 수
                                있는 또 다른 문서를 만들었다. 가려지거나 숨겨진 입구와 출구를 포착하고, 이 문서의 다른
                                부분을 탐침하는 데에 도움이 되길 바라는 마음으로. 그러나 어쩐지, 그것은 또 다른
                                수수께끼를 불러 오기만 하는 것 같기도 하다.
                            </p>
                            <div css={borderMobile}></div>
                            <p>
                                <span style={{ fontStyle: "italic" }}>Unfounded </span> &nbsp;is a name for a pile of
                                documents discovered at the beginning of the 21st century. Likewise, the meaning
                                rootless, vain, and nonsense, &nbsp;
                                <span style={{ fontStyle: "italic" }}>Unfounded</span> &nbsp;is full of confounding and
                                indecipherable content, only ensuring it was written with great care. It has been nearly
                                two hundred years since its discovery, yet few parts are revealed from these riddles of
                                pun and incomprehensible diagrams. Some parts of the document are written down below,
                                hoping someone to continue decrypting the document. <br />
                                <br />
                                <span
                                    style={{
                                        fontSize: "18px",
                                        lineHeight: "29px",
                                        fontStyle: "italic",
                                        display: "block",
                                        width: "100%",
                                        height: "fit-content",
                                        margin: "0",
                                    }}
                                >
                                    “... … real and virtual, fact and fiction, truth and lie, material and image are
                                    (burnt spots) … …” (papers: number 32: page 16) <br /> “Reality is … … melting down
                                    … … like sugar in water.” (stone tablets number 107: line 2) <br />
                                    “Ghosts are not the past. They are the future that will soon arrive.” (cassette
                                    tapes: number 233: memo number 3 from page 1) <br /> “The time is entirely tangled.
                                    We promised to get rid of the useless time and construct a new time. We thought we
                                    were moving to the past but soon arrived at the future. We thought we were moving to
                                    the future, but we arrived at the present again. Vicious Möbius strip. (diaries [in
                                    black leather]: number 64: page 577) <br />
                                    “Sorry. Your rules to make this reality, I found it and it became boring.” (letters:
                                    number 584: page 2) <br /> “According to the report of the excavation site… …
                                    remains of the discoverer were placed in the innermost part of the ruins. (reports:
                                    number 20: page 92) <br /> “This photo is based on true story.(site unknown?)”
                                    (photo essays: number 288: page 12) <br /> “The prophecy precipitated the event.”
                                    (newspaper: number 998: headline from page 1)
                                </span>{" "}
                                <br /> <br /> What makes the &nbsp;
                                <span style={{ fontStyle: "italic" }}>Unfounded</span>&nbsp; document interesting is
                                that it does not have any order. The document has stopped moving to nowhere. At least,
                                it seems as if it is still. It gives the impression of being motionless; however, it
                                vibrates thousands of times a second by the gravity that pulls the document in all
                                directions. We found the &nbsp;<span style={{ fontStyle: "italic" }}>Unfounded </span>
                                &nbsp; document where it was a museum two thousand years ago or where it will be a
                                museum ten thousand years later. <br /> <br /> We have sent an ‘invitation’ to a few
                                people who would decipher the part of the &nbsp;
                                <span style={{ fontStyle: "italic" }}>Unfounded </span>&nbsp; document together. People
                                were selected among the curator, critic, artist, audience, a passerby who knows or does
                                not know the system of the museum, prioritizing the courage and faith they have. We have
                                executed some parts of the Unfounded document and examined what emerges. On some lucky
                                days, thousands of vibrations were witnessed. Inexplicable documents have led us to
                                create another document that can serve as a map or navigation as an ‘exploration,’
                                wishing to capture the hidden entrance and exit and help to probe other parts of the
                                document. Nevertheless, somehow, it seems only to bring another mystery.
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
                    <div
                        css={invitationBox}
                        ref={scrollRef}
                        style={{
                            animation: `fadeIn ${delay * 3}s ease-in`,
                        }}
                    >
                        <div className="marquee">
                            <div className="marquee__inner" aria-hidden="true">
                                <span> INVITATION I: Conductor’s Lesson </span>
                                <span> INVITATION I: Conductor’s Lesson </span>
                                <span> INVITATION I: Conductor’s Lesson </span>
                                <span> INVITATION I: Conductor’s Lesson </span>
                                <span> INVITATION I: Conductor’s Lesson </span>
                                <span> INVITATION I: Conductor’s Lesson </span>
                                <span> INVITATION I: Conductor’s Lesson </span>
                                <span> INVITATION I: Conductor’s Lesson </span>
                                <span> INVITATION I: Conductor’s Lesson </span>
                                <span> INVITATION I: Conductor’s Lesson </span>
                                <span> INVITATION I: Conductor’s Lesson </span>
                            </div>
                        </div>
                        <div css={invitationTextBox}>
                            <div css={invitationText1}>
                                <div css={theme.textKr}>
                                    <p style={{ fontWeight: "bold" }}>초대 I: 지휘 수업</p>
                                    <p style={{ fontWeight: "bold" }}>Invitation I: Conductor’s Lesson</p>
                                </div>
                                <div>
                                    <div css={theme.textKr}>
                                        <p>손님</p>
                                        <p>유진영, 이미지, 이솜이, 이지우 </p>
                                    </div>
                                    <div css={theme.textEn}>
                                        <p>Guests</p>
                                        <p>Jinyoung Yoo, Miji Lee, Somi Lee, Jiwoo Lee</p>
                                    </div>
                                </div>
                            </div>
                            <div css={invitationText2}>
                                <div>
                                    <p css={theme.textKr}>
                                        {"<"}지휘 수업{">"}은 픽션-전시의 기획서를 작성한다. 이때, 픽션-전시의 의미는
                                        픽션으로만 존재할 수 있는 전시, 내러티브를 생산하는 전시, 픽션을 주제로 하는
                                        전시 등 다양할 수 있다. 전시 기획서의 형식에는 따로 제한을 두지 않으며 일반적인
                                        전시 기획서부터 도면과 다이어그램 등 각자의 전시 주제에 맞는 형식을 채택하기로
                                        한다. 이를 통해 전시의 스코어라 할 수 있는 전시 기획서와 전시 사이를 자세히
                                        살펴본다. 손님 목록은 미술 전시 기획자 6인으로 구성되었다.
                                    </p>
                                    <p css={theme.textEn}>
                                        In <span style={{ fontStyle: "italic" }}>Invitation I: Conductor’s Lesson</span>
                                        , we make a proposal for a fiction-exhibition. The meaning of fiction-exhibition
                                        varies, such as an exhibition that only exists in fiction, an exhibition
                                        producing narrative, an exhibition talking about fiction, and moreover. There is
                                        no limitation in the form of the proposal. From a typical one to a formal one, a
                                        floorplan, and a diagram, guests choose the form which suits each. Doing so, we
                                        look into the relationship between an exhibition and a proposal assumed as a
                                        score of an exhibition. The guest list consists of six people who are curators.
                                    </p>
                                </div>
                                <div>
                                    <span
                                        onClick={() => {
                                            // el.index
                                            setIsMoreOpen({
                                                bool: !isMoreOpen.bool,
                                                index: 1,
                                            });
                                        }}
                                        style={
                                            isMoreOpen.bool
                                                ? {
                                                      color: "#fff",
                                                      borderBottom: "1px solid #fff",
                                                  }
                                                : null
                                        }
                                    >
                                        MORE
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div css={sliderContainer} style={{ height: `calc(100vh - ${sliderHeight}px)` }}>
                            <div
                                css={sliderArrowL}
                                onMouseOver={() => {
                                    setIsArrow(true);
                                }}
                                onMouseLeave={() => {
                                    setIsArrow(false);
                                }}
                            >
                                <div
                                    onClick={() => {
                                        if (index === 0) {
                                            setIndex(InvitationOneData.length / perSlide - 1);
                                        } else if (index === 1) {
                                            setIndex(0);
                                        } else if (index < InvitationOneData.length / perSlide - 1) {
                                            setIndex(index - 1);
                                        } else if (index === InvitationOneData.length / perSlide - 1) {
                                            setIndex(index - 1);
                                        }
                                    }}
                                >
                                    {isArrow ? (
                                        <img src="/static/images/sliderLeftO.png" />
                                    ) : (
                                        <img src="/static/images/sliderLeft.png" />
                                    )}
                                </div>
                            </div>
                            <div
                                css={sliderArrowR}
                                onMouseOver={() => {
                                    setIsArrow(true);
                                }}
                                onMouseLeave={() => {
                                    setIsArrow(false);
                                }}
                            >
                                <div
                                    onClick={() => {
                                        if (index < InvitationOneData.length / perSlide - 1) {
                                            setIndex(index + 1);
                                        } else if (index == InvitationOneData.length / perSlide - 1) setIndex(0);
                                        else if (index == 1) setIndex(0);
                                    }}
                                >
                                    {isArrow ? (
                                        <img src="/static/images/sliderRightO.png" />
                                    ) : (
                                        <img src="/static/images/sliderRight.png" />
                                    )}
                                </div>
                            </div>
                            <div
                                css={sliderWrapper}
                                style={{
                                    transform: `translate3d(${-index * 100}%, 0, 0)`,
                                }}
                            >
                                {InvitationOneData.map(el => {
                                    return (
                                        <div
                                            key={el.titleEn}
                                            css={eachSlide}
                                            onClick={() => {
                                                router.push({
                                                    pathname: "/invitation/1",
                                                    query: {
                                                        index: el.index,
                                                    },
                                                });
                                            }}
                                        >
                                            <img src={el.src} />
                                            <div css={slideText}>
                                                <span css={[theme.textKr, theme.textEn]}>
                                                    {el.title.length > 20 ? `${el.title.slice(0, 20)}...` : el.title}
                                                </span>
                                                <span css={[theme.textKr, theme.textEn]}>
                                                    {el.particiKr} {el.particiEn}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {isMoreOpen && isMoreOpen.bool === true && (
                                <div
                                    css={moreContainer}
                                    ref={moreBoxRef}
                                    style={{
                                        height: `calc(100vh - ${sliderHeight}px - 40px)`,
                                        borderTop: "1px solid #000",
                                    }}
                                >
                                    <div>
                                        <div css={ArtistInfoTextContent}>
                                            <div>
                                                <p css={theme.textKr} style={{ fontWeight: "bold" }}>
                                                    초대 I: 지휘 수업 指揮 受業
                                                </p>
                                                <p css={theme.textKr}>
                                                    <span style={{ fontWeight: "bold" }}>
                                                        Tom and Jerry in the Hollywood Bowl
                                                    </span>
                                                    <br />
                                                    <br />
                                                    <span style={{ textDecoration: "underline" }}>
                                                        <a
                                                            href="https://www.youtube.com/watch?v=th_ro9CiASc"
                                                            target="_blank"
                                                        >
                                                            『스코어 스코어』의 61쪽에서 언급되는 장면. 살리에리가
                                                            모차르트의 악보를 훔쳐 보며 상상 속의 음악을 듣다가 감명을
                                                            받아 악보를 떨어트린다.
                                                        </a>
                                                    </span>
                                                    <br />
                                                    <br />
                                                    <span style={{ textDecoration: "underline" }}>
                                                        <a
                                                            href="https://www.youtube.com/watch?v=aRMzrZ8qm4A"
                                                            target="_blank"
                                                        >
                                                            Tom and Jerry, 52 Episode - Tom and Jerry in the Hollywood
                                                            Bowl (1950)
                                                        </a>
                                                    </span>
                                                    <br />
                                                    <br />
                                                    작곡가의 가장 중요한 덕목은 상상력일 것이다. 작곡가가 창작하려는
                                                    음악은 오직 그의 머릿속에만 있다. 작곡가는 지휘자도 연주자도 모두
                                                    자신인 상상 속 오케스트라와 함께 곡을 완성해 나간다. 전시 기획자가
                                                    기획서를 작성하는 과정도 이와 비슷하다. 기획자의 전시는 오직 그의
                                                    머릿속에만 있다. 기획자는 상상 속 전시장과 작품으로 전시를 완성해
                                                    나간다. 이 과정에서 요구되는 덕목 또한 무엇보다 상상력이다. 악보와
                                                    기획서는 아직 실현되지 않은 상상과 미래를 계시처럼 받아 적은 서류다.{" "}
                                                    <br /> <br />
                                                    <span style={{ fontWeight: "bold" }}>지휘 수업</span> <br /> <br />{" "}
                                                    “작곡가가 2분음표를 길이로 어떤 악기 소리를 듣고 싶다고 가정해봐요.
                                                    오케스트라의 성질을 이해하지 못하는 작곡가는 2분음표를 그대로
                                                    쓰겠죠. 본인의 머릿속에서 듣는 것만 기록할 테니까요. 그렇지만 실제
                                                    연주로 2분음표의 음가를 들으려면, 악보에는 조금 더 길게 써야만
                                                    그렇게 들려요. 지휘를 경험한 작곡가는 오케스트라의 특성과 심리를 더
                                                    세밀하게 파악할 수 있어요. 그래서 오케스트레이션을 할 때도 더 쉽게
                                                    상상하고 구현해낼 수 있기도 하죠.” ㅡ 작곡가 겸 지휘자 최재혁 인터뷰{" "}
                                                    <br />
                                                    (https://thestrings.kr/2018/11/18/jaehyuck_choi/ : 링크가 폐쇄됨){" "}
                                                    <br /> <br />
                                                    그러나 기획자의 일은 작곡가의 일보다는 지휘자의 일에 더 가깝다.
                                                    상상과 현실 양쪽 모두에 관여하기 때문이다. 기획서는 전시에 참여하는
                                                    다른 사람들에게 전달되면서 공통의 논의를 위한 토대가 된다. 기획서는
                                                    전시의 전체적인 방향을 이끌며 참여자들의 견해를 조율하는 기준으로
                                                    작동하고, 현실적인 조건과 여러 의견을 반영하는 과정에서 수정되기도
                                                    한다. 전시 기획서가 완성되어 가면서, 그것은 전시를 위한 예비
                                                    서류라기보다 전시에 맞추어 제작된 서류가 된다. 이러한 맥락에서,
                                                    기획서는 전시의 스코어(score)라고 할 수 있다. 전시기획서는 전시의
                                                    보이지 않는 곳에서 은둔하지만, 그 자신도 가 보지 않은 길을 안내하는
                                                    나침반이다. 지휘자가 악보를 나침반 삼아 곡을 실현하는 것처럼,
                                                    기획자도 기획서를 나침반 삼아 전시를 실현한다. 이 실현 과정이
                                                    수반하는 일들, 경영과 행정, 인사 관리 등도 지휘자와 기획자에게
                                                    맡겨진다. 상상과 현실 사이에 위치한다는 이 특성은 기획서의 실현
                                                    가능성을 강조한다. <br /> <br />
                                                    대부분의 전시 기획서는 실현을 전제로 작성되며, 실현 가능성은
                                                    기획서의 우수함을 평가하는 중요 지표 중 하나이다. 상상 속에서는
                                                    풍성했던 전시가 현실에서는 초라한 수준에 머물기도 한다. 예산 대비
                                                    규모가 지나치게 크거나 작은 전시는 아무리 흥미롭고 필요한 주제여도
                                                    좋은 평가를 받기 어렵다. 예산 목록과 일정, 섭외 상황, 기대 효과 등의
                                                    기획서 규격 또한 전시의 내용과 무관하게 그 자체로 기획서의 실현
                                                    가능성을 가늠하게 하는 요소들이다. 이 지점에서 기획자의 일과
                                                    작곡가의 일이 분기한다. 작곡가는 실현을 전혀 염두에 두지 않은,
                                                    절대로 연주될 수 없을 것 같은 곡을 쓸 수 있다. 기획자는 실현을
                                                    전제로 쓴다. 지휘자 또한 실현을 전제로 일한다. 따라서, 이 초대의
                                                    제목은 ‘작곡’ 수업이 아닌 ‘지휘’ 수업이 되었다. <br />
                                                    <br />
                                                    〈초대 I: 지휘 수업〉은 전시와 기획서 사이의 간극을 실험한다. 나아가
                                                    정확하고 명료한 문장, 인기 있을 만한 전시 주제, 실현 가능성에 대한
                                                    의심으로부터 벗어나 기획서를 작성하는 과정과 기획서의 외연적 확장
                                                    가능성을 탐구하는 데에 무게를 둔다. 여섯 명의 전시 기획자는
                                                    실현되거나 실현되지 않을 기획서를 다양한 방식으로 작성하였다. 관객은
                                                    기획서를 읽기보다 보게 될 것이고, 기획서를 보며 전시를 상상하게 될
                                                    것이다. 이 전시에는 오직 상상으로만 볼 수 있는 부분이 있을 것이다.
                                                    많은 위대한 작곡가들이 관객에게 들리지 않을 여백에 그림을 그려
                                                    넣었던 것처럼 말이다.
                                                    <br />
                                                    <br />
                                                    “요한 세바스티안 바흐는 눈으로만 들을 수 있는 두 개의 줄로 연결된
                                                    온음표와 이분음표를 기보하기를 좋아했다.” ㅡ 파스칼 키냐르
                                                </p>
                                            </div>
                                            <div>
                                                <p css={theme.textEn} style={{ fontWeight: "bold" }}>
                                                    Invitation I: Conductor’s Lesson
                                                </p>
                                                <p css={theme.textEn}>
                                                    <span style={{ fontWeight: "bold" }}>
                                                        Tom and Jerry in the Hollywood Bowl
                                                    </span>
                                                    <br />
                                                    <br />
                                                    <span style={{ textDecoration: "underline" }}>
                                                        <a
                                                            href="https://www.youtube.com/watch?v=th_ro9CiASc"
                                                            target="_blank"
                                                        >
                                                            A scene mentioned in Score Score page 61. Salieri peeps
                                                            Mozart's score. Impressed by imaginary music in his own
                                                            head, he drops it.
                                                        </a>
                                                    </span>
                                                    <br />
                                                    <br />
                                                    <span style={{ textDecoration: "underline" }}>
                                                        <a
                                                            href="https://www.youtube.com/watch?v=aRMzrZ8qm4A"
                                                            target="_blank"
                                                        >
                                                            Tom and Jerry, 52 Episode - Tom and Jerry in the Hollywood
                                                            Bowl (1950)
                                                        </a>
                                                    </span>
                                                    <br />
                                                    <br />
                                                    The most important virtue for a composer would be imagination. The
                                                    music that the composer creates only exists in their head. The
                                                    composer finishes their score with the imaginary orchestra,
                                                    consisting of conductor and performer all themselves. This process
                                                    is similar to how a curator writes an exhibition proposal. The
                                                    exhibition only exists in their head. The curator finishes their
                                                    proposal within the imaginary exhibition space and artworks.
                                                    Imagination, again, is the most crucial virtue here. Both music
                                                    score and curatorial proposal are documents that mark a
                                                    prognostication of an unrealized future. <br />
                                                    <br />
                                                    <span style={{ fontWeight: "bold" }}>Conductor’s lesson</span>
                                                    <br />
                                                    <br /> "Suppose the composer wants to hear a musical instrument with
                                                    a half note. If the composer does not understand the nature of the
                                                    orchestra, they will use the half note as it is. Though to hear the
                                                    sound of the half note in the actual play, the note should be
                                                    written a little longer on the score. A composer who has experience
                                                    conducting can delicately understand the orchestra's characteristics
                                                    and mind. It helps with easier imagination and performance when
                                                    orchestrated. Composers should not only deal with sound but also
                                                    include the mind of the performer in the creation."
                                                    (https://thestrings.kr/2018/11/18/jaehyuck_choi/: link closed)
                                                    <br />
                                                    <br />
                                                    But a curator’s work is closer to the conductor’s than the
                                                    composer’s. It is involved in both imagination and reality. The
                                                    proposal wanders to different agencies related to an exhibition,
                                                    becoming a foundation for communal discussion. It serves as a
                                                    criterion setting the overall direction of the exhibition,
                                                    coordinating each individual’s viewpoint, being modified to meet
                                                    realistic requirements, or in the process of reflecting different
                                                    opinions. The proposal becomes a document produced following the
                                                    exhibition rather than a preliminary document as the proposal is
                                                    completed. <br />
                                                    <br /> In this regard, the curatorial proposal is a ‘score’ of the
                                                    exhibition. The proposal is a compass that guides the unknown path,
                                                    although it hides in the concealed site of the exhibition. Just as a
                                                    conductor realizes imaginary music using a music score as a compass,
                                                    a curator realizes an imaginary exhibition using a proposal as a
                                                    compass. Management, administration, and accounting also take place
                                                    in this realization process as a work of a conductor and a curator.
                                                    The feasibility of the proposal depends on this specific position of
                                                    working in between imagination and reality.
                                                    <br />
                                                    <br />
                                                    Most of the proposals are written based on the realization of the
                                                    exhibition. Practicability is one of the indexes for evaluating a
                                                    proposal. A magnificent exhibition in the imagination can be
                                                    miserable in reality. Even though an exhibition has an interesting
                                                    topic, it is hard to receive positive feedback when it is irrelevant
                                                    to the scale of the budget. Budget list, schedule, casting
                                                    situation, and expectations are factors that mark the feasibility of
                                                    a proposal in itself regardless of the quality of content. At this
                                                    point, a work of curator and composer differentiates. A composer can
                                                    write music that will never be played, disregarding realization. A
                                                    curator writes down on the premise of completion. A conductor works
                                                    on accomplishment. Therefore, the title of this invitation is the
                                                    ‘conductor’s’ lesson, not the ‘composer’ lesson. <br />
                                                    <br />
                                                    The invitation I: Conductor's Lesson is an experiment distancing
                                                    exhibition and a proposal. Beyond accurate and precise sentences,
                                                    popular topics, skepticism of the feasibility, it emphasizes writing
                                                    a proposal and experiments with the possibility of the proposal. Six
                                                    curators wrote their proposal that would or would not be realized
                                                    using various ways. Audiences will look rather than read proposals,
                                                    imagining exhibitions. Some parts of these exhibitions can only be
                                                    visited through imagination as if great composers doodled in a blank
                                                    margin that the audience would not hear.
                                                    <br />
                                                    <br />
                                                    “Even for strings, Johann Sebastian Bach liked to write whole and
                                                    half notes that were linked two strings apart that could be audible
                                                    only to the eye.” ㅡ Pascal Quignard
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        css={[invitationBox, invitationBoxTwo]}
                        ref={scrollRefTwo}
                        style={{
                            animation: `fadeIn ${delay * 3}s ease-in`,
                            borderBottom: "1px solid #fff",
                        }}
                    >
                        <div className="marquee">
                            <div className="marquee__inner white" aria-hidden="true">
                                <span style={{ color: "#fff !important" }}> INVITATION II: Babel </span>
                                <span style={{ color: "#fff !important" }}> INVITATION II: Babel </span>
                                <span style={{ color: "#fff !important" }}> INVITATION II: Babel </span>
                                <span style={{ color: "#fff !important" }}> INVITATION II: Babel </span>
                                <span style={{ color: "#fff !important" }}> INVITATION II: Babel </span>
                                <span style={{ color: "#fff !important" }}> INVITATION II: Babel </span>
                                <span style={{ color: "#fff !important" }}> INVITATION II: Babel </span>
                                <span style={{ color: "#fff !important" }}> INVITATION II: Babel </span>
                                <span style={{ color: "#fff !important" }}> INVITATION II: Babel </span>
                                <span style={{ color: "#fff !important" }}> INVITATION II: Babel </span>
                                <span style={{ color: "#fff !important" }}> INVITATION II: Babel </span>
                                <span style={{ color: "#fff !important" }}> INVITATION II: Babel </span>
                                <span style={{ color: "#fff !important" }}> INVITATION II: Babel </span>
                                <span style={{ color: "#fff !important" }}> INVITATION II: Babel </span>
                                <span style={{ color: "#fff !important" }}> INVITATION II: Babel </span>
                                <span style={{ color: "#fff !important" }}> INVITATION II: Babel </span>
                            </div>
                        </div>
                        <div css={invitationTextBox} ref={InvitationTextBoxRef}>
                            <div css={invitationText1}>
                                <div css={theme.textKr}>
                                    <p style={{ fontWeight: "bold" }}>초대 II: 바벨</p>
                                    <p style={{ fontWeight: "bold" }}>Invitation II: Babel</p>
                                </div>
                                <div>
                                    <div css={theme.textKr}>
                                        <p>큰 손님 | 손님</p>
                                        <p>김영주(룹앤테일) | 김얼터, 박유진, 정여름, 황재민, 박선호, 박이선</p>
                                    </div>
                                    <div css={theme.textEn}>
                                        <p>Guests</p>
                                        <p>Youngju Kim(Loopntale) | Jinyoung Yoo, Miji Lee, Somi Lee, Jiwoo Lee</p>
                                    </div>
                                </div>
                            </div>
                            <div css={invitationText2}>
                                <div>
                                    <p css={theme.textKr}>
                                        {"<"}바벨{">"}은 트와인(Twine)으로 내러티브의 새로운 형식을 실험한다. 트와인은
                                        하이퍼링크로 비선형적 내러티브를 제작할 수 있는 오픈 소스 툴이다. 다중 선택과
                                        이동이라는 기능은 시간성을 선형적 내러티브와는 다른 방식으로 조직하는데, 이는
                                        전시가 리얼리티의 시간을 다르게 배치하는 과정과 유사하다. 이를 통해 전시와
                                        내러티브, 시간의 관계를 고찰한다. 손님은 기획자, 비평가, 창작자를 포함하는 6인,
                                        큰 손님에는 룹앤테일의 김영주가 초대되었다.
                                    </p>
                                    <p css={theme.textEn}>
                                        In <span style={{ fontStyle: "italic" }}>Babel</span>, we experiment with a new
                                        form of narratives through Twine. A twine is an open-source tool that can
                                        produce nonlinear narratives using a hyperlink. Multi-selection and redirection
                                        organize time distinctively with the linear narrative, similar to how the
                                        exhibition reassigns reality time. The activity examines the relationship
                                        between exhibition, narrative, and time through the invitation. Six guests,
                                        including curator, critic, practitioner, were invited, and for ‘lead guest,’
                                        Youngju Kim from Loopntale was invited.
                                    </p>
                                </div>
                                <div>
                                    <span
                                        onClick={() => {
                                            setIsMoreOpen2({
                                                bool: !isMoreOpen2.bool,
                                                index: 1,
                                            });
                                        }}
                                        style={
                                            isMoreOpen2.bool
                                                ? {
                                                      color: "#fff",
                                                      borderBottom: "1px solid #fff",
                                                  }
                                                : null
                                        }
                                    >
                                        MORE
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            css={[sliderContainer, invitationBoxTwo]}
                            style={{ height: `calc(100vh - ${sliderHeight}px)` }}
                        >
                            <div
                                css={sliderArrowL}
                                onMouseOver={() => {
                                    setIsArrow2(true);
                                }}
                                onMouseLeave={() => {
                                    setIsArrow2(false);
                                }}
                            >
                                <div
                                    onClick={() => {
                                        if (index2 === 0) {
                                            setIndex2(InvitationTwoData.length / perSlide - 1);
                                        } else if (index2 === 1) {
                                            setIndex2(0);
                                        } else if (index2 < InvitationTwoData.length / perSlide - 1) {
                                            setIndex2(index2 - 1);
                                        } else if (index2 === InvitationTwoData.length / perSlide - 1) {
                                            setIndex2(index2 - 1);
                                        }
                                    }}
                                >
                                    {isArrow2 ? (
                                        <img src="/static/images/sliderLeftO.png" />
                                    ) : (
                                        <img src="/static/images/sliderLeft.png" />
                                    )}
                                </div>
                            </div>
                            <div
                                css={sliderArrowR}
                                onMouseOver={() => {
                                    setIsArrow2(true);
                                }}
                                onMouseLeave={() => {
                                    setIsArrow2(false);
                                }}
                            >
                                <div
                                    onClick={() => {
                                        if (index2 < InvitationTwoData.length / perSlide - 1) {
                                            setIndex2(index2 + 1);
                                        } else if (index2 == InvitationTwoData.length / perSlide - 1) setIndex2(0);
                                        else if (index2 == 1) setIndex2(0);
                                    }}
                                >
                                    {isArrow2 ? (
                                        <img src="/static/images/sliderRightO.png" />
                                    ) : (
                                        <img src="/static/images/sliderRight.png" />
                                    )}
                                </div>
                            </div>
                            <div
                                css={sliderWrapper}
                                style={{
                                    transform: `translate3d(${-index2 * 100}%, 0, 0)`,
                                }}
                            >
                                {InvitationTwoData.map(el => {
                                    return (
                                        <div
                                            key={el.titleEn}
                                            css={[eachSlide, invitationBoxTwo]}
                                            onClick={() => {
                                                router.push({
                                                    pathname: "/invitation/2",
                                                    query: {
                                                        index: el.index,
                                                    },
                                                });
                                            }}
                                        >
                                            <img src={el.src} />
                                            <div css={slideText}>
                                                <span css={[theme.textKr, theme.textEn]}>
                                                    {el.title.length > 20 ? `${el.title.slice(0, 20)}...` : el.title}
                                                </span>
                                                <span css={[theme.textKr, theme.textEn]}>
                                                    {el.particiKr} {el.particiEn}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {isMoreOpen2 && isMoreOpen2.bool === true && (
                                <div
                                    css={[moreContainer, invitationBoxTwo]}
                                    ref={moreBoxRef}
                                    style={{
                                        height: `calc(100vh - ${sliderHeight}px - 40px)`,
                                        borderTop: "1px solid #fff",
                                    }}
                                >
                                    <div>
                                        <div css={ArtistInfoTextContent}>
                                            <div>
                                                <p css={theme.textKr} style={{ fontWeight: "bold" }}>
                                                    초대 II: 바벨
                                                </p>
                                                <p css={theme.textKr}>
                                                    김영주
                                                    <br /> <br />
                                                    김영주 (룹앤테일/게임디자이너). 비디오게임, 인터랙티브 시뮬레이션,
                                                    SNS를 활용한 실시간 공동창작, 관객참여극 등 다양한 플랫폼과 장르에서
                                                    게임 메커닉의 실험을 기반으로 작업을 하고 있다. 룹앤테일의 일원으로
                                                    활동 중이며, 대안적인 게임 제작을 위한 워크숍을 통해 새로운 표현
                                                    매체로서의 게임을 탐구하고 있다.
                                                    <br /> <br />
                                                    <hr />
                                                    바벨&sup1;은 트와인(Twine)으로 내러티브의 새로운 형식을
                                                    실험한다.&sup2; 트와인&sup3;은 하이퍼링크로 비선형적 내러티브를
                                                    제작할 수 있는 오픈 소스 툴이다. 다중 선택과 이동이라는 기능은
                                                    시간성을 선형적 내러티브와는 다른 방식으로 조직하는데, 이는 전시가
                                                    리얼리티의 시간을 다르게 배치하는 과정과 유사하다. 이를 통해 전시와
                                                    내러티브, 시간의 관계를 고찰한다.&#8308; 손님은 기획자, 비평가,
                                                    창작자를 포함하는 6인, 큰 손님에는 룹앤테일의 김영주가
                                                    초대되었다.&#8309;
                                                    <br /> <br />
                                                    &sup1; 나이가 지긋한 사서가 보낸 편지는 젊은 사서의 손과 발을 묶기에
                                                    충분했다. 젊은 사서는 진리가 적힌 책을 찾으러 분주히 돌아다니고 있던
                                                    와중에 책장과 책장의 틈 사이로 편지를 발견하였다. ‘이 편지를 발견한
                                                    누군가에게’라는 익명의 화자를 수신인으로 설정한 낡은 편지에는 다음과
                                                    같은 내용이 적혀져 있었다. 본인 또한 평생 도서관의 원리를 축약한
                                                    개론서를 찾으려고 노력했으나, 단일한 진리의 서는 존재하지 않는다는
                                                    것이다. ‘주변을 둘러보시오. 도서관의 구조가 그것을 허락하지
                                                    않는다오.’ 반듯하고 예의 바른 필체가 담담한 투로 문장을
                                                    마무리하였다. 그렇다고 발신인은 무작정 회의와 비관으로 빠지지
                                                    않았다. 그는 진리를 찾는 대신 다른 방식을 택하였다. 자신만의 변칙을
                                                    실험하는 한눈팔기를 주요 일과로 삼으며, 그 지혜를 나누기 위해 이
                                                    편지를 적었다고 밝혔다. <br />
                                                    젊은 사서는 고민에 빠졌다. 그는 지난 몇 년간 미술관 텍스트에 대한
                                                    진리의 서를 찾고 있던 중이었다. 그가 늙은 사서의 말에 흔들린 것은
                                                    여정의 종착지로 향하는 실마리가 보이지 않았기 때문이다. 그는 자신이
                                                    찾는 문장에 가까워지고 있는지 확신이 없었다. 『전시 서문
                                                    모음집』(2567), 『고대 무덤 벽화 주술문』(1230), 『포스트 인터넷
                                                    자막론』(2022), 『관객참여예술과 글쓰기』(1980), 『심사위원이
                                                    거절하지 못하는 기획서 작성하는 법』(2010), 『예술가/기획자
                                                    선언문』(3029), 『금서』(590), 『텍스트 복구 개론서』(2048) 등은
                                                    시작에 불과했다. 599번째 방의 한 벽면, 책장 두 번째 줄에서 발견한
                                                    『월텍스트』(2021)의 첫 장을 펼치자마자 몰려오는 피로감에 눈을 잠시
                                                    돌렸을 때 익명의 사서가 쓴 편지를 발견하였다.
                                                    <br />
                                                    전시에서 텍스트란 무엇인가? 임무를 시작한 후 젊은 사서가 스스로에게
                                                    던진 첫 물음이었다. 사서는 전시장의 입구에 적힌 제목이나 서문이
                                                    출력된 종이가 전시를 온전히 전달하는 매개체라고 믿었다. 사서에게
                                                    텍스트는 도면이자 안내문으로, 전시를 실체화하고 작품의 의미를
                                                    결정했다. 그러나 현 시점에서 자신이 제기한 질문이 여전히 유효한지
                                                    본인도 더는 알 수 없었다. 더군다나 ‘방법론적 글쓰기’를 권유하는 나이
                                                    든 사서의 말은 지혜롭게 들렸다. <br />
                                                    <br />
                                                    &sup2; 내러티브의 새로운 형식을 실험하기 위해서는 제4의 벽을 손으로
                                                    만지는 것부터 시작해야 한다. 보르헤스의 『바벨의 도서관 The Library
                                                    of Babel』(1941)에서는 단일한 내러티브로부터 한눈팔기의 전략을
                                                    제안한다. 한눈팔기의 전략이란 텍스트가 진리를 대변한다는 믿음을
                                                    폐기하고, 텍스트를 다면체로 인식하는 행위를 의미한다. 텍스트는 그
                                                    자체로 도서관이기 때문에 단일한 독해는 불가능하다. 한눈팔기는
                                                    텍스트와 독자 사이에 존재하는 틈을 벌리며, 그 틈의 낯선 공간을
                                                    떠돌아다니는 방문자를 환영하는 행위이다. 쓰기와 읽기의 선후 관계가
                                                    불분명해지면서 폭넓은 정의의 ‘관객’은 사라지고 ‘독자'는 기획자,
                                                    작가, 번역가, 사서 등 다중의 지위를 획득한다. 독자의 곁눈질은 다른
                                                    텍스트로 이어지는 출구를 더듬는다.
                                                    <br />
                                                    <br />
                                                    &sup3; 트와인은 웹을 기반으로 인터랙티브 픽션(interactive fiction)을
                                                    제작하는 오픈 소스 프로그램으로, 누구든지 쉽게 트와인을 이용하여
                                                    소설, 시, 편지, 에세이 등 다양한 방식의 스토리텔링을 실험할 수 있다.
                                                    언파운디드는 전시의 안팎에서 관계를 맺는 이들과 이 프로그램의
                                                    작동법을 공유하기로 했다.
                                                    <br />
                                                    <br />
                                                    &#8308; 초대 ‘손님’들에게 일차적으로 제안한 재료는 언파운디드
                                                    로고이다. 언파운디드는 현실과 가상이 서로 붙어있어서 완전히
                                                    분리되지도, 중첩되지도 않는 그 중간 상태인 픽션에 대해 탐구하고자
                                                    하며 무한성을 시각화한 뫼비우스 고리를 전면에 배치하였다. 뫼비우스의
                                                    날개에 따라 손님에게는 다음과 같은 질문이 주어졌다. 안과 밖이
                                                    한꺼번에 존재하는 이 세계를 우리는 어떻게 걸을 수 있을까? 이 세계는
                                                    시간이 어떻게 흐르는가? 그 안을 걷는 인물은 어떠한 풍경을 목격할
                                                    것인가? 풍경은 끊겨져 있는가, 이어져 있는가? 무너진 바벨탑의 잔해 속
                                                    텍스트를 쥐고 거꾸로 뒤집힌 세상 속에서 글을 쓰는 법은 무엇인가? 그
                                                    글은 어디에서 읽힐 것인가?
                                                    <br />
                                                    <br />
                                                    &#8309; 본 웹사이트에서 공개된 결과물은 세상의 다른 구멍으로 향하는
                                                    입구이다. 강세가 변화하는 초대장, 시간이 제한된 메일 쓰기, 폐허가 된
                                                    플랫폼, 프리모리예로 향하는 기차, 실종된 관객을 찾는 미술관,
                                                    불가사의한 목록이 발견되는 소장품 시스템 등 이동을 유도하는 푸른
                                                    선의 입구를 지금 여기에서 만날 수 있다.
                                                </p>
                                            </div>
                                            <div>
                                                <p css={theme.textEn} style={{ fontWeight: "bold" }}>
                                                    Invitation I: Babel
                                                </p>
                                                <p css={theme.textEn}>
                                                    Youngju Kim
                                                    <br />
                                                    <br />
                                                    Youngju Kim is a game designer whose works are grounded on
                                                    experimenting with game mechanics such as video games, interactive
                                                    simulations, real-time collaborative storytelling utilizing social
                                                    media, and participatory performances. As a member of Loopntale, her
                                                    research on games as a medium of artistic expression continues
                                                    through alternative game design workshops.
                                                    <br /> <hr />
                                                    In Babel&#8310;, we experiment with a new form of narratives through
                                                    Twine&#8311;. A twine&#8312; is an open-source tool that can produce
                                                    nonlinear narratives using a hyperlink. Multi-selection and
                                                    redirection organize time distinctively with the linear narrative,
                                                    similar to how the exhibition reassigns reality time. The activity
                                                    examines the relationship between exhibition, narrative, and time
                                                    through the invitation.&#8313; Six guests, including curator,
                                                    critic, practitioner, were invited, and for ‘lead guest,’ Youngju
                                                    Kim from Loopntale was invited.&sup1;&#8304;
                                                    <br /> <br />
                                                    <br />
                                                    &#8310; A letter from an old librarian was so captivating that a
                                                    young librarian barely moved by staring at it. While the young
                                                    librarian was rushing around to find a book of truth, a letter stuck
                                                    in between bookshelves caught the attention. ‘To someone who found
                                                    this letter,’ the worn-out letter said the following to an anonymous
                                                    reader. The letter’s writer stated that he too searched the library
                                                    all his life for an abridged introduction that contained the
                                                    principles of library, except that there wasn’t one with a single
                                                    truth in it. ‘Look around, the structure of this library doesn’t
                                                    allow you to do so.’ The letter ended with a neat and courteous
                                                    handwriting. The writer, however, didn’t blindly fall into
                                                    skepticism and pessimism. Instead of finding the truth, the writer
                                                    chose to look the other way. The writer revealed that he now spent
                                                    his day experimenting with his own anomalies through intended
                                                    distractions and wrote the letter to share his wisdom. <br />
                                                    The young librarian was in a dilemma. For the last couple of years,
                                                    he was searching for the book of truth on texts in a museum. The
                                                    reason that the young librarian got disturbed by the letter's
                                                    remarks was that there seemed to be no progress made in his journey,
                                                    not to mention its destination. The young librarian was not
                                                    confident whether he was getting close to the sentence that he was
                                                    looking for. Exhibition Preface Collection(2567), Ancient Tomb Mural
                                                    Painting Spells(1230), Post-Internet Subtitle Theory(2022),
                                                    Participatory Art and Writing(1980), How to Write Project Proposals
                                                    that Judges Can’t Refuse(2010), Manifesto of Artists/Curators(3029),
                                                    A Forbidden Book(590), Introduction to Text Restoration(2048) were
                                                    all just the beginning. Wall Text(2021) was located in the second
                                                    row of the bookshelf at 599th Room, and the young librarian couldn’t
                                                    resist the fatigue he felt when he opened up the first page. When
                                                    the young librarian looked the other way momentarily, he found the
                                                    letter written by an anonymous <br /> What does writing mean in an
                                                    exhibition? That was the first question that the young librarian
                                                    asked himself when he embarked on his very first mission. He
                                                    believed that the title at the entrance of an exhibition hall or a
                                                    paper printed with a preface were true mediums of transmission of
                                                    the exhibition itself. For the young librarian, texts were both a
                                                    floor plan and a brochure that substantiated an exhibition and
                                                    determined the meaning of artworks. At this point, however, the
                                                    young librarian wasn’t even sure whether the question that he raised
                                                    was still valid. Moreover, the old librarian’s letter that suggested
                                                    ‘methodological writing’ sounded wise enough.
                                                    <br />
                                                    <br />
                                                    &#8311; To experiment with new formats of a narrative, one should
                                                    start by touching the 4th wall with one’s hands. In The Library of
                                                    Babel(1941) written by Jorge Luis Borges, the writer suggests a
                                                    strategy of distraction from a single narrative. A strategy of
                                                    distraction refers to the act of discarding the belief that text
                                                    represents the truth and recognizing the text as a polyhedron. Since
                                                    the text itself is a library, a single interpretation is inherently
                                                    impossible. The strategy opens a space between text and readers and
                                                    welcomes visitors who have been wandering in the unfamiliar space.
                                                    As the sequence of writing and reading becomes unclear, the broader
                                                    definition of ‘audience’ disappears while ‘readers’ assume multiple
                                                    positions including curators, writers, translators, and librarians.
                                                    Readers’ distraction lead readers to fumbles around the exit leading
                                                    to other texts.
                                                    <br />
                                                    <br />
                                                    &#8312; Twine is a web-based open-source program for making
                                                    interactive fiction. With Twine, anyone can easily experiment with a
                                                    wide array of storytelling formats such as novels, poems, letters,
                                                    and essays. Unfounded decided to share how Twine works with
                                                    practitioners that came across in and out of exhibitions.
                                                    <br />
                                                    <br />
                                                    &#8313; An initial ingredient proposed to ‘guests’ is the logo of
                                                    Unfounded. Unfounded seeks to explore fiction in which reality and
                                                    virtuality are adjoined and yet leaves up an intermediary state
                                                    where they aren’t either completely separated or overlapped. In this
                                                    regard, Unfounded places a Möbius strip at front that visualizes the
                                                    infinity. Moving along the Möbius strip, the following question is
                                                    brought to the client. ‘How can we walk in this world where inside
                                                    and outside exist at once? How does time flow in this world? What
                                                    kind of scenery will the person walking in it witness? Are sceneries
                                                    disconnected or not? How does one write in the world upside down
                                                    gripping the texts in the wreckage of collapsed Tower of Babel?
                                                    Where would the texts be read?’
                                                    <br />
                                                    <br />
                                                    &sup1;&#8304; The guests’ results revealed on this website serve as
                                                    an entrance to another hole in the world. This is the place where
                                                    one can find the blue line’s entrance that induces the movement of
                                                    an invitation letter with a changing emphasis, time-limited mail
                                                    writing, a derelict platform, trains heading to Primorye, museum
                                                    searching for missing audiences, and a collection system where
                                                    mysterious lists are found.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <Footer
                        bgColor={"#000"}
                        color={"#fff"}
                        isDisplay={mobileFooterDisplay}
                        mainFooterIsDisplay={desktopFooterDisplay}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Introduction;
