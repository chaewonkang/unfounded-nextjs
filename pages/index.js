import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Footer from "../components/Footer";
import Link from "next/link";

const mobileBottomMargin = css`
    display: none;
    background-color: #ff9d46;

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
    background-color: #ff9d46;

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
        background-color: #ff9d46;

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
    background-color: #ff9d46;
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
                        The website Unfounded is a space for researching fiction-related practices and uploading
                        Founders’ projects, online exhibitions, and games related to Founders’ fiction.
                        <br />
                        <br />
                        It is expected that the website will provide a discursive foundation for fiction and expand
                        curatorial practice by seeking ways to consider fiction in various ways.
                    </p>
                </div>
            </div>
            <Footer
                bgColor={"#FF9D46"}
                color={"#000"}
                style={{
                    animation: `fadeIn ${delay * 2}s ease-in`,
                }}
            />
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
