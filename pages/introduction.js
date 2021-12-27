import { useRef, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Footer from "../components/Footer";
import InvitationOneData from "../data/InvitationOneData";
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

    & > div {
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
                font-family: PP Neue Montreal Book, sans-serif;
                -webkit-text-stroke: 0.5px #fff;
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
        width: 100vw;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

const invitationBox = css`
    width: 100vw;
    height: calc(100vh - 158px);
    background-color: #ff9d46;
    padding-top: 10px;
    overflow: hidden;

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
        height: calc(100vh - (59px + 46px));
        background-color: #ff9d46;
        padding-top: 0px;
        overflow: hidden;

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
    height: 30%;

    @media (max-width: 781px) {
        display: flex;
        flex-direction: column;
        padding-left: 15px;
        padding-right: 15px;
        word-break: keep-all;
        position: relative;
        margin-bottom: 15px;
        height: auto;
    }
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

const invitationText1 = css`
    width: calc(50% - 9px);
    height: 100%;
    margin-right: 9px;
    height: 100%;

    div {
        display: flex;
        p:first-of-type {
            width: calc((100vw / 6) * 2);
            height: 100%;
        }

        p:last-of-type {
            width: calc((100vw / 6) * 4);
            height: 100%;
        }
    }

    @media (max-width: 781px) {
        width: 100%;
        height: 100%;
        margin-right: 9px;
        height: 100%;

        div {
            display: flex;
            p:first-of-type {
                width: calc((100vw / 6) * 2);
                height: 100%;
            }

            p:last-of-type {
                width: calc((100vw / 6) * 4);
                height: 100%;
            }
        }
    }
`;

const invitationText2 = css`
    margin-left: 9px;
    width: calc(50% - 9px);

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
    height: calc(70vh - 250px);
    background-color: #ff9d46;
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

    @media (max-width: 781px) {
        border-top: 1px solid #000;
        width: 100%;
        height: calc(100vh - (82px + 138px + 105px));
        background-color: #ff9d46;
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
    top: calc(35vh - 164.5px);
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
    top: calc(35vh - 164.5px);
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
    height: calc(70% - 129px);
    overflow: hidden;
    display: flex;
    margin-left: 21px;
    margin-right: 21px;
    padding-bottom: 21px;
    position: relative;

    @media (max-width: 781px) {
        width: 100%;
        height: calc(100vh - (82px + 138px + 105px));
        overflow: hidden;
        display: flex;
        margin-left: 0px;
        margin-right: 15px;
        padding-bottom: 21px;
        position: relative;
    }
`;

const sliderWrapper = css`
    width: 100vw;
    height: 100%;
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
    background-color: #ff9d46;

    :hover {
        & > img {
            mix-blend-mode: difference;
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
        background-color: #ff9d46;

        :hover {
            & > img {
                mix-blend-mode: difference;
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
        padding-left: 20px;
        padding-right: 20px;
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
    const timeoutRef = useRef(null);
    const scrollRef = useRef(null);
    const outerDivRef = useRef();
    const DIVIDER_HEIGHT = 5;
    const textBoxRef1 = useRef();
    const [sliderBoxHeight, setSliderBoxHeight] = useState(0);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [perSlide, setPerSlide] = useState(0);

    const [isArrowO, setIsArrowO] = useState(false);
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
        setSliderBoxHeight(textBoxRef1.current.offsetHeight);
        if (window.innerWidth < 782) {
            setHeaderHeight(105);
            setPerSlide(1);
        } else {
            setHeaderHeight(158);
            setPerSlide(3);
        }
    }, [sliderBoxHeight, headerHeight, perSlide]);

    useEffect(() => {}, [isMoreOpen, isMoreOpen2]);

    useEffect(() => {}, [isArrowO]);

    return (
        <ThemeProvider theme={theme}>
            <div css={introContainer}>
                <div css={outer} ref={outerDivRef}>
                    <div
                        css={[theme.downArrowBox, downArrowBoxStyle]}
                        onClick={() => {
                            window.scrollTo({
                                top: scrollRef.current.offsetTop - headerHeight,
                                behavior: "smooth",
                            });
                        }}
                    >
                        <img src="../static/images/downArrowW.png" alt="down_arrow" />
                        <img src="../static/images/downArrowW.png" alt="down_arrow" />
                    </div>
                    <div css={infoText}>
                        <div>
                            <p>
                                ‘언파운디드’는 21세기 초입에 발견된 어떤 문서들의 총칭이다. ‘unfounded’는 무근無根하다,
                                헛되다, 이유 없다라는 뜻이며, 이름과 같이 의미를 짐작할 수 없는 내용으로 가득 차 있으나
                                누군가 공들여 적었다는 것만큼은 확실하다. 문서가 발견된 지는 벌써 이백 년에 가까운
                                시간이 지났지만, 말장난을 이용한 수수께끼와 이해할 수 없는 다이어그램으로 구성된 이
                                문서에서 밝혀진 부분은 극히 적다. 여기에 그 일부를 적으며 누군가 이 문서의 해독을
                                이어나가 주기를 바란다.
                                <br />
                                <br /> “... ... 현실과 가상이, 사실과 허구가, 진실과 거짓이, 물질과 이미지가 (불에 탄
                                자국)다. … …” (종이 문서: 32번 문서: 16쪽) <br /> “실재는 … … 설탕이 물에 녹듯 … …
                                용해되고 있다.” (107 번째 석판: 2번째 줄) <br /> “유령은 과거가 아니다. 유령은 곧 도래할
                                미래의 모습이다.” (카세트 테이프: 233번 문서: 1쪽 3번 메모) <br /> “시간이 완전히 엉켜
                                버렸다. 우리는 쓸 수 없게 된 시간을 버리고 새로운 시간을 구축하자고 약속했다. 과거로
                                가고 있다고 생각했지만 금세 미래였다. 미래로 흐르고 있다고 생각했지만 역시, 현재였다.
                                악독한 뫼비우스.” (일기들 [검은색 가죽]: 64번 문서: 577쪽) <br /> “미안해, 네가 이번
                                리얼리티를 위해 만든 규칙들, 다 알아서 시시해져 버렸어.” (편지들: 584번 문서: 2쪽){" "}
                                <br />
                                “발굴 현장에서 얻은 결과에 따르면 … … 발견자의 유해가 폐허의 가장 안쪽에 안치되어
                                있었다.” (보고서: 20번 문서: 92쪽) <br /> “이 사진은 실화를 바탕으로 한다.(촬영 장소
                                불확실?)” (포토에세이: 388번 문서: 12쪽 뒷면) <br /> “예언이 본 사건을 촉발시킨 것으로
                                알려져 있다.” (신문: 998번 문서: 1쪽 헤드라인) <br /> <br /> 언파운디드 문서가 흥미로운
                                것은 그것에 어떤 순서도 없기 때문이다. 이 문서는 어디로도 나아가지 않는다. 대신 멈춰
                                있다. 적어도 멈춰 있는 것처럼 보인다. 그러나 자세히 살피면 모든 방향에서 그것을 당기는
                                중력이 작동하기 때문에 멈춰 있는 것처럼 보일 따름이지, 그것은 일 초에도 수천 번을
                                진동한다. 우리가 언파운디드 문서를 발견한 곳은 이천 년 전에 혹은 만 년 뒤에 미술관이
                                되는 곳이었다. <br /> <br /> 우리는 언파운디드 문서 중 일부를 함께 해독할 사람 몇 명을
                                수소문하여 ‘초대’했다. 그들은 미술관의 생리에 대해 잘 알고 있거나 잘 모르고 있는 전시
                                기획자, 비평가, 예술가, 관객, 행인 중 용기와 믿음을 점쳐 우선 선발되었다. 우리는 이들과
                                함께 언파운디드 문서의 일부를 실행해 보면서 무엇이 나타나는지 관찰하고자 했다. 수천 번의
                                진동을 잠시라도 목격했다면 운이 좋은 날이었다. 여전히 해독할 수 없는 문서가 많이 남아
                                있기에, 우리는 ‘탐험’으로 지도 혹은 내비게이션 역할을 할 수 있는 또 다른 문서를
                                만들었다. 가려지거나 숨겨진 입구와 출구를 포착하고, 이 문서의 다른 부분을 탐침하는 데에
                                도움이 되길 바라는 마음으로. 그러나 어쩐지, 그것은 또 다른 수수께끼를 불러 오기만 하는
                                것 같기도 하다.
                            </p>
                            <div css={borderMobile}></div>
                            <p>
                                Unfounded is a name for a pile of documents discovered at the beginning of the 21st
                                century. Likewise, the meaning rootless, vain, and nonsense, Unfounded is full of
                                confounding and indecipherable content, only ensuring it was written with great care. It
                                has been nearly two hundred years since its discovery, yet few parts are revealed from
                                these riddles of pun and incomprehensible diagrams. Some parts of the document are
                                written down below, hoping someone to continue decrypting the document. <br />
                                <br /> “... … real and virtual, fact and fiction, truth and lie, material and image are
                                (burnt spots) … …” (papers: number 32: page 16) <br /> “Reality is … … melting down … …
                                like sugar in water.” (stone tablets number 107: line 2) <br />
                                “Ghosts are not the past. They are the future that will soon arrive.” (cassette tapes:
                                number 233: memo number 3 from page 1) <br /> “The time is entirely tangled. We promised
                                to get rid of the useless time and construct a new time. We thought we were moving to
                                the past but soon arrived at the future. We thought we were moving to the future, but we
                                arrived at the present again. Vicious Möbius strip. (diaries [in black leather]: number
                                64: page 577) <br />
                                “Sorry. Your rules to make this reality, I found it and it became boring.” (letters:
                                number 584: page 2) <br /> “According to the report of the excavation site… … remains of
                                the discoverer were placed in the innermost part of the ruins. (reports: number 20: page
                                92) <br /> “This photo is based on true story.(site unknown?)” (photo essays: number
                                288: page 12) <br /> “The prophecy precipitated the event.” (newspaper: number 998:
                                headline from page 1) <br /> <br /> What makes the Unfounded document interesting is
                                that it does not have any order. The document has stopped moving to nowhere. At least,
                                it seems as if it is still. It gives the impression of being motionless; however, it
                                vibrates thousands of times a second by the gravity that pulls the document in all
                                directions. We found the Unfounded document where it was a museum two thousand years ago
                                or where it will be a museum ten thousand years later. <br /> <br /> We have ‘invited’ a
                                few people who would decipher the part of the Unfounded document together. People were
                                selected among the curator, critic, artist, audience, a passerby who knows or does not
                                know the system of the museum, prioritizing the courage and faith they have. We have
                                executed some parts of the Unfounded document and examined what emerges. On some lucky
                                days, thousands of vibrations were witnessed. Inexplicable documents have led us to
                                create another document that can serve as a map or navigation as an ‘exploration,’
                                wishing to capture the hidden entrance and exit and help to probe other parts of the
                                document. Nevertheless, somehow, it seems only to bring another mystery.
                            </p>
                        </div>
                    </div>
                    <div css={bottomBanner}>
                        <p>FOLLOW US ON INSTAGRAM AT @UNFOUNDED</p>
                    </div>
                    <div css={invitationBox} ref={scrollRef}>
                        <div css={theme.marquee}>
                            <div css={marqueeBox1}>
                                <span>
                                    INVITATION I: Conductor’s Lesson INVITATION I: Conductor’s Lesson INVITATION I:
                                    Conductor’s Lesson&nbsp;
                                </span>
                            </div>
                            <div css={marqueeBox2}>
                                <span>
                                    &nbsp;&nbsp;INVITATION I: Conductor’s Lesson INVITATION I: Conductor’s Lesson
                                    INVITATION I: Conductor’s Lesson
                                </span>
                            </div>
                        </div>
                        <div css={invitationTextBox}>
                            <div css={invitationText1}>
                                <div css={theme.textKr}>
                                    <p style={{ fontWeight: "bold" }}>초대 I:</p>
                                    <p>손님</p>
                                </div>
                                <div css={theme.textKr}>
                                    <p style={{ fontWeight: "bold" }}>지휘 수업</p>
                                    <p>유진영, 이미지, 이솜이, 이지우 </p>
                                </div>
                                <div css={theme.textEn}>
                                    <p style={{ fontWeight: "bold" }}>Invitation I:</p>
                                    <p>invitee</p>
                                </div>
                                <div css={theme.textEn}>
                                    <p style={{ fontWeight: "bold" }}>Conductor’s Lesson</p>
                                    <p>Jinyoung Yoo, Miji Lee, Somi Lee, Jiwoo Lee</p>
                                </div>
                            </div>
                            <div css={invitationText2} ref={textBoxRef1}>
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
                                        score of an exhibition.The guest list consists of six people who are curators.
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
                        {isMoreOpen && isMoreOpen.bool === true && (
                            <div css={moreContainer}>
                                <div>
                                    <div css={ArtistInfoTextContent}>
                                        <div>
                                            <p css={theme.textKr} style={{ fontWeight: "bold" }}>
                                                초대 I: 지휘 수업 指揮 受業{" "}
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
                                                        모차르트의 악보를 훔쳐 보며 상상 속의 음악을 듣다가 감명을 받아
                                                        악보를 떨어트린다.
                                                    </a>
                                                </span>
                                                <br />
                                                <br />
                                                “요한 세바스티안 바흐는 눈으로만 들을 수 있는 두 개의 줄로 연결된
                                                온음표와 이분음표를 기보하기를 좋아했다.” (파스칼 키냐르) <br /> <br />{" "}
                                                작곡가에게 가장 중요한 덕목은 상상력일 것이다. 작곡가가 창작하려는
                                                음악은 오직 그의 머릿속에만 있다. 작곡가가 음표를 그리기 시작하면
                                                지휘자도, 연주자도 모두 작곡가 자신인 상상 속 오케스트라가 연주를
                                                시작한다. 작곡가는 이 오케스트라로 시뮬레이션을 거쳐 악보를 완성한다.
                                                전시 기획자가 기획서를 작성하는 과정도 이와 비슷하다. 기획서는 지금까지
                                                한 번도 실현된 적 없는 미래를 계시처럼 받아 적은 서류다. 전시장도,
                                                전시하려는 작품의 모습도 어느 정도는 실제로부터 마모된 상태로
                                                상상되지만, 기획자는 머릿속에서 이 작품을 여기에, 저 작품을 저기에 놓아
                                                보며 기획서를 완성해 간다. 이 과정에서 요구되는 덕목 또한 무엇보다
                                                상상력이다. <br />
                                                <br /> 이렇게 작성된 기획서는 전시에 참여하는 다른 많은 사람들, 작가들,
                                                그래픽 디자이너, 공간 설치 담당자, 전시장 디렉터 등에게 전달되면서
                                                공통의 논의를 위한 토대가 된다. 기획서는 현실적인 요건들에 맞추어
                                                수정되기도 하고, 기획서가 유통되며 다른 사람들의 의견이 반영되는
                                                과정에서 변형을 거치기도 한다. 그러나 어느 경우든 기획서는 전시의
                                                전체적인 방향을 설정하고 주제를 바라보는 각자의 견해를 조율하는 기준으로
                                                작동한다. 이런 측면에서 바라보자면 전시기획서는 전시의 스코어(score)라고
                                                할 수 있다. 음악에게 악보樂譜가, 퍼포먼스와 무용에게 무보舞譜가 있다면,
                                                전시에게는 기획서가 있다. 전시기획서는 그 자신도 가 보지 않은 길을
                                                안내하는 나침반이면서 전시의 보이지 않는 곳에서 은둔한다. <br /> <br />
                                                <span style={{ textDecoration: "underline" }}>
                                                    <a
                                                        href="https://www.youtube.com/watch?v=aRMzrZ8qm4A"
                                                        target="_blank"
                                                    >
                                                        Tom and Jerry, 52 Episode - Tom and Jerry in the Hollywood Bowl
                                                        (1950)
                                                    </a>
                                                </span>
                                                <br /> <br />
                                                그러나 이 초대의 제목은 ‘작곡’ 수업이 아닌 ‘지휘’ 수업이다. <br />{" "}
                                                <br />
                                                <span style={{ fontWeight: "bold" }}>지휘 수업</span> <br /> <br />{" "}
                                                “작곡가가 2분음표를 길이로 어떤 악기 소리를 듣고 싶다고 가정해봐요.
                                                오케스트라의 성질을 이해하지 못하는 작곡가는 2분음표를 그대로 쓰겠죠.
                                                본인의 머릿속에서 듣는 것만 기록할 테니까요. 그렇지만 실제 연주로
                                                2분음표의 음가를 들으려면, 악보에는 조금 더 길게 써야만 그렇게 들려요.
                                                지휘를 경험한 작곡가는 오케스트라의 특성과 심리를 더 세밀하게 파악할 수
                                                있어요. 그래서 오케스트레이션을 할 때도 더 쉽게 상상하고 구현해낼 수
                                                있기도 하죠. 작곡가는 그저 소리만 다루는 것이 아니라 연주자의 심리까지도
                                                창작 과정에 포함을 시켜야 해요.”
                                                (https://thestrings.kr/2018/11/18/jaehyuck_choi/ : 링크가 폐쇄됨) <br />{" "}
                                                <br />
                                                이는 기획자의 일이 그냥 생산보다는 재구성이나 재생산에 더 가깝기 때문일
                                                것이다. 지휘자가 악단의 경영과 행정에 관계하는 경우가 있는 것처럼
                                                기획자는 전시 기획뿐만 아니라 전시 경영과 행정에도 시간을 할애한다.
                                                나아가 지휘자가 실연을 목적으로 곡 연구를 진행하는 것처럼 기획자도
                                                전시를 구현하는 것을 목적으로 기획서를 작성한다. 이때부터는 상상력보다
                                                상상한 것을 현실로 소환하는 과정에서 발생하는 사건들을 극복하는 끈기가
                                                더 중요해지기도 한다. <br /> <br /> 〈초대 I: 지휘 수업〉은 실현하고자
                                                하는 혹은 실현에 구애 받지 않는 전시기획서를 쓰는 워크숍이다. 그러나
                                                실현 가능성을 염두에 두기보다는 기획서를 작성하는 과정과 작성된 기획서의
                                                확장 가능성을 탐구하는 데에 조금 더 무게를 둔다. 특히 심사를 염두에 둔
                                                기획서 작성을 위한 정확하고 명료한 문장, 깔끔하기만 한 정보 배치, 실현
                                                가능성에 대한 의심에 익숙해지다 보면 머릿속에서 흥미롭고 재미있었던
                                                전시도 어쩐지 따분해진 것 같은 기분을 떨칠 수 없어진다. 이 규격을 벗어나
                                                기 위해 〈지휘 수업〉을 마련하였다. 여러분은 이 기획서를 읽기보다 보게
                                                될 것이다. 이때 각 기획서는 전시를 위한 예비 서류라기보다는 독립적으로
                                                기능할지도 모른다. 〈지휘 수업〉의 기획서들이 구상하는 전시에는 머리로만
                                                볼 수 있는 부분이 있다. 많은 위대한 작곡가들이 관객에게 들리지 않을
                                                여백에 그림을 그려 넣었던 것처럼 말이다.
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
                                                        The video above is a scene mentioned in Score Score page 61.
                                                        Salieri peeps and drops Mozart's score, impressed by imaginary
                                                        music in his own head.
                                                    </a>
                                                </span>
                                                <br />
                                                <br />
                                                “Even for strings, Johann Sebastian Bach liked to write whole and half
                                                notes that were linked two strings apart that could be audible only to
                                                the eye.” (Pascal Quignard) <br />
                                                <br /> The most important virtue for a composer would be imagination.
                                                The music that the composer creates only exists in her or his head. When
                                                the composer begins to draw notes, an imaginative orchestra, constituted
                                                of conductor and performer all herself/himself, starts the music. The
                                                composer finishes her/his score through the simulation of the orchestra.
                                                This process is similar to how an exhibition curator writes a proposal.
                                                A curatorial proposal is a document that marks a prognostication of an
                                                unrealized future. The curator depends on imagination where his or her
                                                exhibition space and artwork are not specific as reality, and finishes
                                                the proposal by placing artworks here and there. Imagination, again, is
                                                the most crucial virtue here. <br />
                                                <br />
                                                Then the proposal wanders to different agencies, artists, a graphic
                                                designer, an installation team, an exhibition space director, becoming a
                                                foundation for communal discussion. The proposal is modified to meet
                                                realistic requirements or transformed in the distribution process of
                                                reflecting different opinions. However, in either case, the proposal
                                                serves as a criterion setting the overall direction of the exhibition,
                                                coordinating each individual’s viewpoint. In this regard, the curatorial
                                                proposal is a ‘score’ of the exhibition. A proposal stands for an
                                                exhibition when there is a score for music, labanotation for
                                                performance, and dance. The proposal is a compass that guides the
                                                unknown path and hides in the concealed site of the exhibition. <br />
                                                <br />
                                                <span style={{ textDecoration: "underline" }}>
                                                    <a
                                                        href="https://www.youtube.com/watch?v=aRMzrZ8qm4A"
                                                        target="_blank"
                                                    >
                                                        Tom and Jerry, 52 Episode - Tom and Jerry in the Hollywood Bowl
                                                        (1950)
                                                    </a>
                                                </span>
                                                <br />
                                                <br />
                                                Nevertheless, the invitation is called the ‘conductor’s’ lesson, not the
                                                ‘composer’ lesson.
                                                <br />
                                                <br /> <span style={{ fontWeight: "bold" }}>Conductor’s lesson</span>
                                                <br />
                                                <br /> "Suppose the composer wants to hear a musical instrument with a
                                                half note. If the composer does not understand the nature of the
                                                orchestra, she/he will use the half note as it is. Though to hear the
                                                sound of the half note in the actual play, the note should be written a
                                                little longer on the score. A composer who has experience conducting can
                                                delicately understand the orchestra's characteristics and mind. It helps
                                                with easier imagination and performance when orchestrated. Composers
                                                should not only deal with sound but also include the mind of the
                                                performer in the creation."
                                                (https://thestrings.kr/2018/11/18/jaehyuck_choi/: link closed) <br />
                                                <br /> Curator's practice is closer to reconstruction or reproduction
                                                than mere production. Similar to where the conductor involves the
                                                orchestra's management and administration, the curator also spends their
                                                time managing and administrating exhibitions besides exhibition
                                                curation. Moreover, in the same manner, as the conductor researches
                                                music to perform, the curator also drafts the proposal for realizing the
                                                exhibition. On some occasions, persistence in solving incidents amidst
                                                recalling the imagination into reality becomes more vital than
                                                imagination. <br />
                                                <br /> The invitation I: Conductor's Lesson is a workshop writing an
                                                exhibition proposal independent from the realization. The workshop
                                                emphasizes the process of writing down the proposal and the expansion of
                                                contemplating the finished proposal rather than the feasibility.
                                                Throughout developing a proposal for application with accurate and
                                                precise sentences, well-organized information, repeatedly doubting the
                                                feasibility, it is difficult to shake off the boredom of the exhibition
                                                that was initially intriguing in mind. The Conductor's Lesson was
                                                prepared to avoid these standards. Audiences will look rather than read
                                                proposals. Each proposal may separately exist rather than a preliminary
                                                document of the exhibition. Among proposals in Conductor's Lesson, some
                                                parts can only be visited through imagination, as if great composers
                                                doodled in a blank margin that the audience would not hear.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div css={sliderContainer}>
                            <div
                                css={sliderArrowL}
                                onMouseOver={() => {
                                    setIsArrowO(true);
                                }}
                                onMouseLeave={() => {
                                    setIsArrowO(false);
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
                                    {isArrowO ? (
                                        <img src="/static/images/sliderLeftO.png" />
                                    ) : (
                                        <img src="/static/images/sliderLeft.png" />
                                    )}
                                </div>
                            </div>
                            <div
                                css={sliderArrowR}
                                onMouseOver={() => {
                                    setIsArrowO(true);
                                }}
                                onMouseLeave={() => {
                                    setIsArrowO(false);
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
                                    {isArrowO ? (
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
                                                    {el.title} {el.titleKr}
                                                </span>
                                                <span css={[theme.textKr, theme.textEn]}>
                                                    {el.particiEn} {el.particiKr}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <Footer bgColor={"#000"} color={"#fff"} />
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Introduction;
