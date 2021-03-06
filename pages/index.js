import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Footer from "../components/Footer";
import Link from "next/link";

const footerContainer = css`
    width: 100vw;
    background-color: #ff7e27;
    padding-top: 25px;
    padding-left: 21px;
    padding-right: 21px;
    padding-bottom: 27px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color: #000;

    @media (max-width: 781px) {
        display: flex;
        flex-direction: column;
        padding: 15px;
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

const mobileBottomMargin = css`
    display: none;
    background-color: #ff7e27;

    @media (max-width: 781px) {
        display: block;
        height: 300px;
        z-index: -1;
        width: 100%;
    }
`;

const mainContainer = css`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: #ff7e27;

    & > div:first-of-type {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        img:first-of-type {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    & > div:nth-of-type(2) {
        img:last-of-type {
            position: absolute;
            top: 38px;
            width: calc(100vw - 57px);
            margin-left: 28.5px;
            margin-right: 28.5px;
        }
    }

    & > div:last-of-type {
        br {
            display: none;
        }
        p {
            font-family: "GTFAgentur", serif;
            font-size: 23px;
            letter-spacing: -0.25px;
            line-height: 28px;
            width: calc(100vw - 36px);
            margin-left: 21px;
            margin-right: 25px;
            position: absolute;
            bottom: 35px;
        }
    }

    @media (max-width: 781px) {
        width: 100vw;
        height: 100vh;
        position: relative;
        background-color: #ff7e27;

        & > div:first-of-type {
            width: 100%;
            height: auto;
            position: fixed;
            bottom: 0;
            top: unset;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            overflow: hidden;

            img:first-of-type {
                z-index: -1;
                width: 100%;
                height: auto;
                object-fit: contain;
                object-position: bottom;
            }
        }

        & > div:nth-of-type(2) {
            z-index: 10;
            img:last-of-type {
                position: absolute;
                top: 19.4px;
                width: calc(100vw - 30px);
                margin-left: 15px;
                margin-right: 15px;
            }
        }

        & > div:last-of-type {
            z-index: 10;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            p {
                br {
                    display: block;
                }
                font-family: "GTFAgentur", serif;
                font-size: 20px;
                letter-spacing: -0.25px;
                line-height: 25px;
                width: calc(100vw - 30px);
                margin-left: 15px;
                margin-right: 15px;
                position: relative;
                bottom: unset;
                text-align: center;
            }
        }
    }
`;

const downArrowBoxStyle = css`
    background-color: #ff7e27;
`;

const Index = () => {
    const router = useRouter();
    const [delay, setDelay] = useState(1);
    const [isArrowWhite, setIsArrowWhite] = useState(false);

    useEffect(() => {}, [isArrowWhite]);

    return (
        <ThemeProvider theme={theme}>
            <div
                css={mainContainer}
                style={{
                    animation: `fadeIn ${delay}s ease-in`,
                    borderBottom: "1px solid #000",
                }}
            >
                <div>
                    <img src="../static/images/main.gif" alt="mainImage" />
                </div>
                <div>
                    <img src="../static/images/textLogo.png" alt="mainTextLogo" />
                </div>
                <div>
                    <p>
                        Unfounded is a name for a pile of documents discovered at the beginning of the 21st century.
                        Likewise, the meaning rootless, vain, and nonsense, Unfounded is full of confounding and
                        indecipherable content, only ensuring it was written with great care. It has been nearly two
                        hundred years since its discovery, yet few parts are revealed from these riddles of pun and
                        incomprehensible diagrams. Some parts of the document are written down below, hoping someone to
                        continue decrypting the document.
                    </p>
                </div>
            </div>
            <div css={footerContainer}>
                <div css={footerLeftArea}>
                    <div>
                        <span>Unfounded</span>
                        <p>
                            ?????????????????? ????????? ????????? ???????????? ????????? ????????????. ?????? ????????? ??????????????? ???????????? ?????????
                            ?????????. ????????? ???????????? ????????? ??????????????? ??????, ?????????, ??????, ?????????, ???????????? ????????? ??????
                            ??????????????? ????????? ????????? ????????? ??????. ????????? ????????? ????????? ????????? ?????? ?????? ????????? ??????.
                            ??????????????? ????????? ??? ?????? ?????? ????????? ?????? ????????? ????????? ????????? ???????????? ?????????. <br />
                            ?????????????????? ??????????????? ?????????????????? ????????????. ??????????????? ????????? ???????????? ?????? ??????????????? ?????????
                            ????????? ???????????? ???????????? ????????????. ??????????????? ?????? ?????? ????????? ????????? ???????????? ???????????? ???
                            ????????? ???????????? ????????????. ????????? unfounded??? ??????????????????, ?????????, ?????? ???????????? ?????????, ???
                            ?????? ????????? ???????????? ???????????? ?????? ?????????
                            <br /> <br />
                        </p>
                        <p>
                            Unfounded speculates the phenomenon in which the virtual produced by curatorial practice
                            intervenes into the real. The virtual has been considered as a literary narrative or
                            fabrication, falsehood, lie, fake, deception, fantasy separated from the real. However, the
                            relationship between virtual and real is like a double helix. Curatorial practice is winding
                            and rewinding this double helix with new order.
                            <br />
                            The project has two parts: ???Invitation??? and "Exploration." "Invitation" invites diverse
                            practitioners to experiment with ingredients and tools of curatorial practices.
                            ???Exploration??? investigates the various types of knots of this double helix and produces
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
                            <p>??????</p>
                            <p>?????????, ?????????</p>
                        </div>
                        <div>
                            <p>??? ??????</p>
                            <p>?????????</p>
                        </div>
                        <div>
                            <p>????????? ?????????</p>
                            <p>?????????</p>
                        </div>

                        <div>
                            <p>?????? ??????</p>
                            <p></p>
                        </div>
                        <div>
                            <p>??? ?????? I</p>
                            <p>?????????, ?????????, ?????????, ?????????</p>
                        </div>
                        <div>
                            <p>??? ?????? II</p>
                            <p>?????????(????????????) | ?????????, ?????????, ?????????, ?????????</p>
                        </div>
                        <div>
                            <p>??????????????</p>
                            <p>?????????, ?????????(???????????????)</p>
                        </div>
                        <div>
                            <p>??????</p>
                            <p>???????????????, ??????????????????</p>
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
                            <p>??? Invitation I</p>
                            <p>Jinyoung You, Miji Lee, Somi Lee, Jiwoo Lee</p>
                        </div>
                        <div>
                            <p>??? Invitation II</p>
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
                    </div>
                </div>
            </div>
            <Link href="/introduction">
                <div
                    css={[theme.downArrowBox, downArrowBoxStyle]}
                    onMouseOver={() => {
                        setIsArrowWhite(true);
                    }}
                    onMouseLeave={() => {
                        setIsArrowWhite(false);
                    }}
                >
                    {isArrowWhite ? (
                        <>
                            <img
                                src="../static/images/downArrowW.png"
                                alt="down_arrow"
                                style={{
                                    animation: `fadeIn ${delay * 3}s ease-in`,
                                }}
                            />
                            <img
                                src="../static/images/downArrowW.png"
                                alt="down_arrow"
                                style={{
                                    animation: `fadeIn ${delay * 3}s ease-in`,
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <img
                                src="../static/images/downArrow.png"
                                alt="down_arrow"
                                style={{
                                    animation: `fadeIn ${delay * 3}s ease-in`,
                                }}
                            />
                            <img
                                src="../static/images/downArrow.png"
                                alt="down_arrow"
                                style={{
                                    animation: `fadeIn ${delay * 3}s ease-in`,
                                }}
                            />
                        </>
                    )}
                </div>
            </Link>
            <div css={mobileBottomMargin}></div>
        </ThemeProvider>
    );
};

export default Index;
