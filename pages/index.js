import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Footer from "../components/Footer";
import Link from "next/link";

const mainContainer = css`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: #ff9d46;

    & > div {
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

    img:last-of-type {
        position: absolute;
        top: 38px;
        width: calc(100vw - 57px);
        margin-left: 28.5px;
        margin-right: 28.5px;
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
`;

const downArrowBox = css`
    cursor: pointer;
    background-color: #ff9d46;
    width: 100vw;
    height: 126px;
    display: flex;
    flex-direction: row;
    padding-left: 21px;
    padding-right: 21px;
    padding-bottom: 27px;
    display: flex;
    justify-content: space-between;

    &:hover {
        img {
            transform: rotate(360deg);
            transition: 1s;
        }
    }

    img {
        width: 4%;
        height: 126px;
        object-fit: contain;
    }
`;

const Index = () => {
    const router = useRouter();
    const [delay, setDelay] = useState(1);

    return (
        <ThemeProvider theme={theme}>
            <div
                css={mainContainer}
                style={{
                    animation: `fadeIn ${delay}s ease-in`,
                }}
            >
                <div>
                    <img src="../static/images/main.gif" alt="mainImage" />
                </div>
                <img src="../static/images/textLogo.png" alt="mainTextLogo" />
                <p>
                    The website Unfounded is a space for researching
                    fiction-related practices and uploading Founders’ projects,
                    online exhibitions, and games related to Founders’ fiction.
                    It is expected that the website will provide a discursive
                    foundation for fiction and expand curatorial practice by
                    seeking ways to consider fiction in various ways.
                </p>
            </div>
            <Footer
                bgColor={"#FF9D46"}
                style={{
                    animation: `fadeIn ${delay * 2}s ease-in`,
                }}
            />
            <Link href="/introduction">
                <div css={downArrowBox}>
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
                </div>
            </Link>
        </ThemeProvider>
    );
};

export default Index;
