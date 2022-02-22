import { css } from "@emotion/react";
import { useRef, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useRouter } from "next/router";

const footerContainer = css`
    width: 100vw;
    background-color: #000000;
    padding-top: 25px;
    padding-left: 21px;
    padding-right: 21px;
    padding-bottom: 27px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color: #fff;

    @media (max-width: 781px) {
        display: flex;
        flex-direction: column;
        padding: 15px;
        display: none;
    }
`;

const footerLeftArea = css`
    width: 50%;

    & > div {
        & > span {
            font-family: "GTFAgentur", serif;
            font-size: 38px;
            letter-spacing: -0.5px;
            line-height: 55px;
        }
    }

    & > div:last-of-type {
        font-family: PP Neue Montreal Book, sans-serif;
        font-size: 15px;
        line-height: 23px;

        & > div {
            display: flex;

            div {
                display: flex;
                flex-direction: column;
            }

            div:first-of-type {
                margin-right: 35px;
            }
        }
    }

    @media (max-width: 781px) {
        width: 100%;

        & > div {
            & > span {
                font-family: "GTFAgentur", serif;
                font-size: 34px;
                letter-spacing: -0.5px;
                line-height: 55px;
            }
        }

        & > div:first-of-type {
            padding-bottom: 20px;
            border-bottom: 1px solid #000;
            margin-bottom: 0px;

            & > p:first-of-type {
                font-family: Gothic A1, sans-serif;
                font-weight: 500;
                font-size: 14px;
                letter-spacing: -0.2px;
                line-height: 23px;
                word-break: keep-all;
            }

            & > p:last-of-type {
                font-family: PP Neue Montreal Book, sans-serif;
                font-size: 15px;
                line-height: 23px;
            }
        }
    }
`;

const footerBottomArea = css`
    width: 50%;
    order: 3;
    margin-top: 39px;

    & > div {
        & > span {
            font-family: "GTFAgentur", serif;
            font-size: 38px;
            letter-spacing: -0.5px;
            line-height: 55px;
        }

        div {
            display: flex;
            font-family: PP Neue Montreal Book, sans-serif;
            font-size: 15px;
            line-height: 23px;

            div:first-of-type {
                diplay: flex;
                flex-direction: column;
                margin-right: 0px;
                width: 40%;
                -webkit-text-stroke-width: 0.5px;
            }

            div:last-of-type {
                diplay: flex;
                flex-direction: column;
                width: 60%;
            }
        }
    }

    @media (max-width: 781px) {
        width: 100%;
        border-top: 1px solid #000;

        & > div:last-of-type {
            padding-bottom: 20px;

            margin-bottom: 0px;
            font-family: PP Neue Montreal Book, sans-serif;
            font-size: 15px;

            line-height: 23px;

            & > div {
                display: flex;

                div {
                    display: flex;
                    flex-direction: column;
                }

                div:first-of-type {
                    margin-right: 0px;
                    width: 40%;
                }

                div:last-of-type {
                    width: 60%;
                }
            }
        }
    }
`;

const footerRightArea = css`
    width: 50%;
    padding-left: calc(100vw / 12);

    span {
        font-family: "GTFAgentur", serif;
        font-size: 38px;
        letter-spacing: -0.5px;
        line-height: 55px;
    }

    div {
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    & > div:first-of-type {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        font-family: Gothic A1, sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 23px;

        p:first-of-type {
            width: 40%;
            font-weight: bold;
        }

        p:last-of-type {
            width: 60%;
        }
    }

    & > div:last-of-type {
        display: flex;
        flex-direction: column;
        font-family: PP Neue Montreal Book, sans-serif;

        font-size: 15px;
        line-height: 23px;

        p:first-of-type {
            width: 40%;
            letter-spacing: 0.2px;
            -webkit-text-stroke-width: 0.5px;
        }

        p:last-of-type {
            width: 60%;
        }
    }

    @media (max-width: 781px) {
        width: 100%;
        padding: 0;
        padding-bottom: 20px;

        span {
            font-family: "GTFAgentur", serif;
            font-size: 34px;
            letter-spacing: -0.5px;
        }
    }
`;

const footerContainerMobile = css`
    width: 100%;
    display: none;
    color: #fff;

    @media (max-width: 781px) {
        width: 100%;
        display: block;
        position: relative;

        & > div {
            border-top: 1px solid #fff;
            padding-left: 15px;
            padding-right: 15px;
            padding-top: 15px;
            padding-bottom: 15px;

            & > div:first-of-type {
                position: relative;
                width: 100%;

                span {
                    font-family: "GTFAgentur", serif;
                    font-size: 34px;
                    letter-spacing: -0.5px;
                }
            }
        }

        & > div:first-of-type {
            border-top: none;
        }
    }
`;

const collapsibleContainer = css`
    width: 100%;
    background-color: #000;
`;

const collapsible = css`
    display: flex;
    flex-direction: column;
    transition: 3s ease-in;
    animation: slideUp 1s;
    background-color: #000;
    margin-top: 8px;
`;

const creditBox = css`
    width: 100%;

    & > div {
        width: 100%;
        display: flex;
        flex-direction: column;

        div {
            display: flex;
            flex-direction: row;

            p:first-of-type {
                width: 40%;
            }

            p:last-of-type {
                width: 60%;
            }
        }
    }
`;

const contactBox = css`
    width: 100%;
    display: flex;
    flex-direction: row;

    & > div:first-of-type {
        width: 40%;
        display: flex;
        flex-direction: column;
    }

    & > div:last-of-type {
        width: 60%;
        display: flex;
        flex-direction: column;
    }
`;

const Footer = ({ bgColor, color, isDisplay, isDisplayNone }) => {
    const [isCreditOpen, setIsCreditOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {}, [isCreditOpen]);

    return (
        <ThemeProvider theme={theme}>
            <div
                css={footerContainer}
                style={{ backgroundColor: bgColor, color: color, display: router.pathname === "/" ? "flex" : null }}
            >
                <div css={footerLeftArea}>
                    <div>
                        <span>Unfounded</span>
                        <p>
                            언파운디드는 가상이 현실에 개입하는 현상을 탐구한다. 이때 가상은 큐레토리얼 실천으로 생산된
                            것이다. 가상은 오랫동안 문학적 내러티브나 허구, 거짓말, 가짜, 속임수, 환상처럼 물질적 현실
                            세계로부터 분리된 대상을 지칭해 왔다. 그러나 가상과 현실의 관계는 이중 나선 구조와 같다.
                            큐레토리얼 실천은 이 이중 나선 구조를 풀고 감으며 새로운 배열을 형성하는 일이다.
                            <br />
                            언파운디드는 ‘초대’와 ‘탐험’으로 구성된다. ‘초대’는 다양한 사람들과 함께 큐레토리얼 실천의
                            재료와 도구들을 분석하고 실험한다. ‘탐험’은 이중 나선 구조의 다양한 매듭법을 공부하고 그
                            결과를 글쓰기로 생산한다. 제목인 unfounded는 무근無根하다, 헛되다, 이유 없다라는 뜻이며, 이
                            이름 안에서 김얼터와 박유진이 함께 일한다
                            <br /> <br />
                        </p>
                        <p>
                            Unfounded speculates the phenomenon in which the virtual produced by curatorial practice
                            intervenes into the real. The virtual has been considered as a literary narrative or
                            fabrication, falsehood, lie, fake, deception, fantasy separated from the real. However, the
                            relationship between virtual and real is like a double helix. Curatorial practice is winding
                            and rewinding this double helix with new order. <br />
                            The project has two parts: “Invitation” and "Exploration." "Invitation" invites diverse
                            practitioners to experiment with ingredients and tools of curatorial practices.
                            “Exploration” investigates the various types of knots of this double helix and produces
                            writing as an outcome. Alter Kim and Eugene Hannah Park practice around the title unfounded,
                            which stands for rootless, vain, nonsense.
                        </p>
                    </div>
                </div>
                <div css={footerBottomArea}>
                    <div>
                        <span>Contact</span>
                        <div>
                            <div>
                                <p>E-Mail</p>
                                <p>Instagram</p>
                            </div>
                            <div>
                                <p>unfounded.info@gmail.com</p>
                                <p>
                                    <a href="http://www.instagram.com/unfounded.info" target="_blank">
                                        @unfounded.info
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div css={footerRightArea}>
                    <span>Credit</span>
                    <div>
                        <div>
                            <p>기획</p>
                            <p>김얼터, 박유진</p>
                        </div>
                        <div>
                            <p>웹 개발</p>
                            <p>강채원</p>
                        </div>
                        <div>
                            <p>그래픽 디자인</p>
                            <p>염조흔</p>
                        </div>

                        <div>
                            <p>손님 목록</p>
                            <p></p>
                        </div>
                        <div>
                            <p>● 초대 I</p>
                            <p>유진영, 이미지, 이솜이, 이지우</p>
                        </div>
                        <div>
                            <p>● 초대 II</p>
                            <p>김영주(룹앤테일) | 박선호, 박이선, 정여름, 황재민</p>
                        </div>
                        <div>
                            <p>주최·주관</p>
                            <p>김얼터, 박유진(언파운디드)</p>
                        </div>
                        <div>
                            <p>후원</p>
                            <p>서울특별시, 서울문화재단</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p>Directed by</p>
                            <p>Alter Kim, Eugene Hannah Park</p>
                        </div>
                        <div>
                            <p>Web Development</p>
                            <p>Chaewon Kang</p>
                        </div>
                        <div>
                            <p>Graphic Design</p>
                            <p>Joheun Yeom</p>
                        </div>

                        <div>
                            <p>Participants</p>
                            <p></p>
                        </div>
                        <div>
                            <p>● Invitation I</p>
                            <p>Jinyoung You, Miji Lee, Somi Lee, Jiwoo Lee</p>
                        </div>
                        <div>
                            <p>● Invitation II</p>
                            <p>Youngju Kim(Loopntale) | Sunho Park, Leesun Park, Yeoreum Jeong, Jaemin Hwang</p>
                        </div>
                        <div>
                            <p>Supported by</p>
                            <p>Seoul Metropolitan Government, Seoul Foundation for Arts and Culture </p>
                        </div>
                        <div
                            style={{
                                marginTop: "5px",
                                marginBottom: "10px",
                                marginLeft: "40%",
                                width: "60%",
                            }}
                        >
                            <img
                                style={{
                                    height: "20px",
                                    display: "block",
                                }}
                                src={
                                    router.pathname === "/"
                                        ? "/static/images/sponsorLogoColor.png"
                                        : "/static/images/sponsorLogo.png"
                                }
                                alt="sponsor"
                            />
                        </div>
                        {/* <div>
                        <p>● Invitation II</p>
                        <p>Youngju Lee(Loopntale) | Sunho Park, Leesun Park, Yeoreum Jeong, Jaemin Hwang</p>
                    </div>
                    <div>
                        <p>● Invitation III</p>
                        <p>Meltmirror(ISVN) | Jisung Park, Myungbo Hong, Jeonghwan Ahn, Namgil Kim</p>
                    </div> */}
                    </div>
                </div>
            </div>

            {isDisplay && (
                <div css={footerContainerMobile}>
                    <div onClick={() => setIsAboutOpen(!isAboutOpen)}>
                        <div>
                            <span>Unfounded</span>
                        </div>
                        <div css={collapsibleContainer}>
                            {isAboutOpen ? (
                                <div css={collapsible}>
                                    <p css={[theme.mTextKr]}>
                                        언파운디드는 가상이 현실에 개입하는 현상을 탐구한다. 이때 가상은 큐레토리얼
                                        실천으로 생산된 것이다. 가상은 오랫동안 문학적 내러티브나 허구, 거짓말, 가짜,
                                        속임수, 환상처럼 물질적 현실 세계로부터 분리된 대상을 지칭해 왔다. 그러나 가상과
                                        현실의 관계는 이중 나선 구조와 같다. 큐레토리얼 실천은 이 이중 나선 구조를 풀고
                                        감으며 새로운 배열을 형성하는 일이다. <br />
                                        언파운디드는 ‘초대’와 ‘탐험’으로 구성된다. ‘초대’는 다양한 사람들과 함께
                                        큐레토리얼 실천의 재료와 도구들을 분석하고 실험한다. ‘탐험’은 이중 나선 구조의
                                        다양한 매듭법을 공부하고 그 결과를 글쓰기로 생산한다. 제목인 unfounded는
                                        무근無根하다, 헛되다, 이유 없다라는 뜻이며, 이 이름 안에서 김얼터와 박유진이
                                        함께 일한다
                                        <br />
                                        <br />
                                    </p>
                                    <p css={[theme.mTextEn]} style={{ marginTop: "30px" }}>
                                        Unfounded speculates the phenomenon in which the virtual produced by curatorial
                                        practice intervenes into the real. The virtual has been considered as a literary
                                        narrative or fabrication, falsehood, lie, fake, deception, fantasy separated
                                        from the real. However, the relationship between virtual and real is like a
                                        double helix. Curatorial practice is winding and rewinding this double helix
                                        with new order. <br />
                                        The project has two parts: “Invitation” and "Exploration." "Invitation" invites
                                        diverse practitioners to experiment with ingredients and tools of curatorial
                                        practices. “Exploration” investigates the various types of knots of this double
                                        helix and produces writing as an outcome. Alter Kim and Eugene Hannah Park
                                        practice around the title unfounded, which stands for rootless, vain, nonsense.
                                    </p>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div onClick={() => setIsCreditOpen(!isCreditOpen)}>
                        <div>
                            <span>Credit</span>
                        </div>
                        <div css={collapsibleContainer}>
                            {isCreditOpen ? (
                                <div css={[collapsible, creditBox]}>
                                    <div css={theme.mTextKr}>
                                        <div>
                                            <p>기획</p>
                                            <p>김얼터, 박유진</p>
                                        </div>
                                        <div>
                                            <p>웹 개발</p>
                                            <p>강채원</p>
                                        </div>
                                        <div>
                                            <p>그래픽 디자인</p>
                                            <p>염조흔</p>
                                        </div>
                                        <div>
                                            <p>손님 목록</p>
                                            <p></p>
                                        </div>
                                        <div>
                                            <p>● 초대 I</p>
                                            <p>유진영, 이미지, 이솜이, 이지우</p>
                                        </div>
                                        <div>
                                            <p>● 초대 II</p>
                                            <p>김영주(룹앤테일) | 박선호, 박이선, 정여름, 황재민</p>
                                        </div>
                                        <div>
                                            <p>주최·주관</p>
                                            <p>김얼터, 박유진(언파운디드)</p>
                                        </div>
                                        <div>
                                            <p>후원</p>
                                            <p>서울문화재단, 서울특별시</p>
                                        </div>
                                    </div>
                                    <div css={theme.mTextEn} style={{ marginTop: "30px" }}>
                                        <div>
                                            <p>Directed by</p>
                                            <p>Alter Kim, Eugene Hannah Park</p>
                                        </div>
                                        <div>
                                            <p>Web Development</p>
                                            <p>Chaewon Kang</p>
                                        </div>
                                        <div>
                                            <p>Graphic Design</p>
                                            <p>Joheun Yeom</p>
                                        </div>

                                        <div>
                                            <p>Participants</p>
                                            <p></p>
                                        </div>
                                        <div>
                                            <p>● Invitation I</p>
                                            <p>Jinyoung You, Miji Lee, Somi Lee, Jiwoo Lee</p>
                                        </div>
                                        <div>
                                            <p>● Invitation II</p>
                                            <p>
                                                Youngju Kim(Loopntale) | Sunho Park, Leesun Park, Yeoreum Jeong, Jaemin
                                                Hwang
                                            </p>
                                        </div>
                                        <div>
                                            <p>Funding</p>
                                            <p>Seoul Metropolitan Government, Seoul Foundation for Arts and Culture </p>
                                        </div>
                                        <div
                                            style={{
                                                marginTop: "10px",
                                                marginBottom: "10px",
                                                marginLeft: "40%",
                                                width: "60%",
                                            }}
                                        >
                                            <img
                                                style={{
                                                    height: "20px",
                                                    display: "block",
                                                }}
                                                src={
                                                    router.pathname === "/"
                                                        ? "/static/images/sponsorLogoColor.png"
                                                        : "/static/images/sponsorLogo.png"
                                                }
                                                alt="sponsor"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div onClick={() => setIsContactOpen(!isContactOpen)}>
                        <div>
                            <span>Contact</span>
                        </div>
                        <div css={collapsibleContainer}>
                            {isContactOpen ? (
                                <div css={[collapsible, theme.mTextEn, contactBox]}>
                                    <div>
                                        <span>E-Mail</span>
                                        <span>Instagram</span>
                                    </div>
                                    <div>
                                        <span>unfounded.info@gmail.com</span>
                                        <span>
                                            <a href="http://www.instagram.com/unfounded.info" target="_blank">
                                                @unfounded.info
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            )}
        </ThemeProvider>
    );
};

export default Footer;
