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
            font-family: PP Neue Montreal Regular, sans-serif;
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
                                                        모차르트의 악보를 훔쳐 보며 상상 속의 음악을 듣다가 감명을 받아
                                                        악보를 떨어트린다.
                                                    </a>
                                                </span>
                                                <br />
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
                                                작곡가의 가장 중요한 덕목은 상상력일 것이다. 작곡가가 창작하려는 음악은
                                                오직 그의 머릿속에만 있다. 작곡가는 지휘자도 연주자도 모두 자신인 상상
                                                속 오케스트라와 함께 곡을 완성해 나간다. 전시 기획자가 기획서를 작성하는
                                                과정도 이와 비슷하다. 기획자의 전시는 오직 그의 머릿속에만 있다.
                                                기획자는 상상 속 전시장과 작품으로 전시를 완성해 나간다. 이 과정에서
                                                요구되는 덕목 또한 무엇보다 상상력이다. 악보와 기획서는 아직 실현되지
                                                않은 상상과 미래를 계시처럼 받아 적은 서류다. <br /> <br />
                                                <span style={{ fontWeight: "bold" }}>지휘 수업</span> <br /> <br />{" "}
                                                “작곡가가 2분음표를 길이로 어떤 악기 소리를 듣고 싶다고 가정해봐요.
                                                오케스트라의 성질을 이해하지 못하는 작곡가는 2분음표를 그대로 쓰겠죠.
                                                본인의 머릿속에서 듣는 것만 기록할 테니까요. 그렇지만 실제 연주로
                                                2분음표의 음가를 들으려면, 악보에는 조금 더 길게 써야만 그렇게 들려요.
                                                지휘를 경험한 작곡가는 오케스트라의 특성과 심리를 더 세밀하게 파악할 수
                                                있어요. 그래서 오케스트레이션을 할 때도 더 쉽게 상상하고 구현해낼 수
                                                있기도 하죠.” ㅡ 작곡가 겸 지휘자 최재혁 인터뷰 <br />
                                                (https://thestrings.kr/2018/11/18/jaehyuck_choi/ : 링크가 폐쇄됨) <br />{" "}
                                                <br />
                                                그러나 기획자의 일은 작곡가의 일보다는 지휘자의 일에 더 가깝다. 상상과
                                                현실 양쪽 모두에 관여하기 때문이다. 기획서는 전시에 참여하는 다른
                                                사람들에게 전달되면서 공통의 논의를 위한 토대가 된다. 기획서는 전시의
                                                전체적인 방향을 이끌며 참여자들의 견해를 조율하는 기준으로 작동하고,
                                                현실적인 조건과 여러 의견을 반영하는 과정에서 수정되기도 한다. 전시
                                                기획서가 완성되어 가면서, 그것은 전시를 위한 예비 서류라기보다 전시에
                                                맞추어 제작된 서류가 된다. 이러한 맥락에서, 기획서는 전시의
                                                스코어(score)라고 할 수 있다. 전시기획서는 전시의 보이지 않는 곳에서
                                                은둔하지만, 그 자신도 가 보지 않은 길을 안내하는 나침반이다. 지휘자가
                                                악보를 나침반 삼아 곡을 실현하는 것처럼, 기획자도 기획서를 나침반 삼아
                                                전시를 실현한다. 이 실현 과정이 수반하는 일들, 경영과 행정, 인사 관리
                                                등도 지휘자와 기획자에게 맡겨진다. 상상과 현실 사이에 위치한다는 이
                                                특성은 기획서의 실현 가능성을 강조한다. <br /> <br />
                                                대부분의 전시 기획서는 실현을 전제로 작성되며, 실현 가능성은 기획서의
                                                우수함을 평가하는 중요 지표 중 하나이다. 상상 속에서는 풍성했던 전시가
                                                현실에서는 초라한 수준에 머물기도 한다. 예산 대비 규모가 지나치게 크거나
                                                작은 전시는 아무리 흥미롭고 필요한 주제여도 좋은 평가를 받기 어렵다.
                                                예산 목록과 일정, 섭외 상황, 기대 효과 등의 기획서 규격 또한 전시의
                                                내용과 무관하게 그 자체로 기획서의 실현 가능성을 가늠하게 하는
                                                요소들이다. 이 지점에서 기획자의 일과 작곡가의 일이 분기한다. 작곡가는
                                                실현을 전혀 염두에 두지 않은, 절대로 연주될 수 없을 것 같은 곡을 쓸 수
                                                있다. 기획자는 실현을 전제로 쓴다. 지휘자 또한 실현을 전제로 일한다.
                                                따라서, 이 초대의 제목은 ‘작곡’ 수업이 아닌 ‘지휘’ 수업이 되었다. <br />
                                                <br />
                                                〈초대 I: 지휘 수업〉은 전시와 기획서 사이의 간극을 실험한다. 나아가
                                                정확하고 명료한 문장, 인기 있을 만한 전시 주제, 실현 가능성에 대한
                                                의심으로부터 벗어나 기획서를 작성하는 과정과 기획서의 외연적 확장
                                                가능성을 탐구하는 데에 무게를 둔다. 여섯 명의 전시 기획자는 실현되거나
                                                실현되지 않을 기획서를 다양한 방식으로 작성하였다. 관객은 기획서를
                                                읽기보다 보게 될 것이고, 기획서를 보며 전시를 상상하게 될 것이다. 이
                                                전시에는 오직 상상으로만 볼 수 있는 부분이 있을 것이다. 많은 위대한
                                                작곡가들이 관객에게 들리지 않을 여백에 그림을 그려 넣었던 것처럼 말이다.
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
                                                        The video above is a scene mentioned in Score Score page 61.
                                                        Salieri peeps and drops Mozart's score, impressed by imaginary
                                                        music in his own head.
                                                    </a>
                                                </span>
                                                <br />
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
                                                The most important virtue for a composer would be imagination. The music
                                                that the composer creates only exists in her or his head. The composer
                                                finishes her/his score with the imaginary orchestra, constituted of
                                                conductor and performer all herself/himself. This process is similar to
                                                how a curator wrties a exhibition proposal. The exhibition only exists
                                                in her or his head. The curator finishes her/his proposal with the
                                                imaginary exhibition space and artworks. Imagination, again, is the most
                                                crucial virtue here. Both music score and curatorial proposal are
                                                documents that marks a prognostication of an unrealized future. <br />
                                                <br />
                                                <span style={{ fontWeight: "bold" }}>Conductor’s lesson</span>
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
                                                (https://thestrings.kr/2018/11/18/jaehyuck_choi/: link closed)
                                                <br />
                                                <br />
                                                But a curator’s work is closer to the conductor’s than the composer’s.
                                                It is involved in both imagination and reality. The proposal wanders to
                                                different agencies who are related to an exhibition, becoming a
                                                foundation for communal discussion. It serves as a criterion setting the
                                                overall direction of the exhibition, coordinating each individual’s
                                                viewpoint, being modified to meet realistic requirements or in the
                                                process of reflecting different opinions. As the proposal is completed,
                                                it becomes a document produced according to the exhibition rather than a
                                                pre-document for the exhibition. <br />
                                                <br /> In this regard, the curatorial proposal is a ‘score’ of the
                                                exhibition. The proposal is a compass that guides the unknown path,
                                                although it hides in the concealed site of the exhibition. Just as a
                                                conductor realizes an imaginary music using a music score as a compass,
                                                a curator realizes an imaginary exhibition using a proposal as a
                                                compass. Management and administration, accounting take place in this
                                                realization process. These are also the work of a conductor and a
                                                curator. This position between imagination and reality emphasized the
                                                feasibility of the proposal. <br />
                                                <br />
                                                Most of the proposal writes down on the premise of realization. The
                                                feasibility is the one of indexes for evaluating the excellence of a
                                                proposal. An exhibition which is nice in her/his brain can be shabby in
                                                reality. If an exhibition is too large or too small compared to the
                                                scale of budget, it can’t get a high score no matter how interesting and
                                                necessary it deals with. Likewise, the budget list, schedule, casting
                                                situation, and expected effect are factors that mark the feasibility of
                                                a proposal in itself regardless of the quality of content. At this
                                                point, a work of curator and composer split. A composer sometimes writes
                                                music that can never be played, not focused on realization. A curator
                                                writes down on the premise of realization. A conductor works on the
                                                premise of realization. Therefore, the title of this invitation is the
                                                ‘conductor’s’ lesson, not the ‘composer’ lesson. <br />
                                                <br />
                                                The invitation I: Conductor's Lesson is an experiment that puts some
                                                distance between an exhibition and a proposal. Beyond accurate and
                                                precise sentences, popular topics, repeatedly doubting the feasibility,
                                                it emphasizes the process of writing a proposal and external expansion
                                                of the proposal. Six curators wrote their own proposal that would or
                                                would not be realized using various ways. Audiences will look rather
                                                than read proposals, imagining exhibitions. Some parts of these
                                                exhibitions can only be visited through imagination, as if great
                                                composers doodled in a blank margin that the audience would not hear.
                                                <br />
                                                <br />
                                                “Even for strings, Johann Sebastian Bach liked to write whole and half
                                                notes that were linked two strings apart that could be audible only to
                                                the eye.” ㅡ Pascal Quignard
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
