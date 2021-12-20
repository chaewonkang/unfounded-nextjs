import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";

import styled from "styled-components";

const menuContainer = css`
    width: 100vw;
    height: 112px;
    background-color: none;
    position: absolute;
    left: 0;
`;

const StyledBurger = css`
    cursor: pointer;
    width: 98px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 14;
    position: absolute;
    top: 20px;
    right: 20px;

    div {
        width: 100%;
        height: 100%;
        transition: all 0.3s linear;
        transform-origin: 0.8px;
    }

    @media (max-width: 781px) {
        cursor: pointer;
        width: 50px;
        height: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 14;
        position: absolute;
        top: 13px;
        right: 13px;

        div {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: space-between;

            transition: all 0.3s linear;
            transform-origin: 0.8px;
        }
    }
`;

const StyledMenu = css`
    display: inline-block;
    width: 100vw;
    z-index: 15;
    background: #ff9d46;
    height: 100vh;
    max-height: 100vh;
    text-align: center;
    padding-bottom: 0;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;

    padding-top: 25vh;

    & > div > a {
        text-transform: uppercase;
        display: block;
        padding: 0.25em;
        margin-bottom: 0.5em;
        color: #2a6eb1;
        font-size: 19px;

        text-decoration: none;
        transition: color 0.3s linear;
    }

    @media (max-width: 781px) {
        display: inline-block;
        width: 100vw;
        z-index: 1000;
        background: #ff9d46;
        height: 100vh;
        max-height: 100vh;
        text-align: center;
        padding-bottom: 0;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.3s ease-in-out;

        padding-top: 25vh;

        & > div > a {
            text-transform: uppercase;
            display: block;
            padding: 0.25em;
            margin-bottom: 0.5em;
            color: #2a6eb1;
            font-size: 19px;

            text-decoration: none;
            transition: color 0.3s linear;
        }
    }
`;

const openMenuHeader = css`
    width: 100vw;
    height: 112px;
    position: absolute;
    top: 0;
    display: flex;
    padding-left: 21px;
    padding-right: 21px;
    padding-top: 11px;

    & > div:first-of-type {
        cursor: pointer;
        height: 100%;

        & > img {
            height: 100%;
        }
    }

    & > div:last-of-type {
        cursor: pointer;
        height: 100%;
        position: absolute;
        right: 21px;

        & > img {
            height: 76px;
        }
    }

    @media (max-width: 781px) {
        width: 100vw;
        height: 59px;
        position: absolute;
        top: 0;
        display: flex;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 9px;
        padding-bottom: 9px;

        & > div:first-of-type {
            cursor: pointer;
            height: 100%;

            & > img {
                height: 100%;
            }
        }

        & > div:last-of-type {
            cursor: pointer;
            height: 100%;
            position: absolute;
            right: 21px;

            & > img {
                height: 34px;
            }
        }
    }
`;

const menuTitleContainer = css`
    width: 100%;
    height: calc(100vh - 112px);

    & > div:first-of-type {
        width: 100%;
        display: flex;
        flex-direction: column;

        span {
            font-family: GTFAgentur, sans-serif;
            font-size: 60px;
            letter-spacing: -0.2px;
        }
    }

    & > div:last-of-type {
        position: absolute;
        bottom: 21px;
        padding-left: 21px;
        padding-right: 21px;
        text-align: left;

        p {
            font-family: GTFAgentur, sans-serif;
            font-size: 23px;
            letter-spacing: -0.25px;
        }
    }

    @media (max-width: 781px) {
        width: 100%;
        height: calc(100vh - 59px);

        & > div:first-of-type {
            width: 100%;
            display: flex;
            flex-direction: column;

            span {
                font-family: GTFAgentur, sans-serif;
                font-size: 30px;
                letter-spacing: -0.2px;
            }
        }

        & > div:last-of-type {
            position: absolute;
            bottom: 21px;
            padding-left: 21px;
            padding-right: 21px;
            text-align: left;

            p {
                font-family: GTFAgentur, sans-serif;
                font-size: 15px;
                line-height: 21px;
                letter-spacing: -0.25px;
            }
        }
    }
`;

const imgPath = [
    "/static/images/menuStroke.png",
    "/static/images/leftArrow.png",
    "/static/images/rightArrow.png",
    "/static/images/symbolB.png",
    "/static/images/cancelBtn.png",
    "/static/images/symbolW.png",
];

const menuArr = [
    {
        title: "Introduction",
        route: "/introduction",
    },
    {
        title: "Invitation I",
        route: "/invitation/1",
    },
    {
        title: "Invitation II",
        route: "/invitation/2",
    },
    {
        title: "Invitation III",
        route: "/invitation/3",
    },
    {
        title: "Exploration",
        route: "/exploration",
    },
];

const Menu = ({ transX }) => {
    const [open, setOpen] = useState(false);
    const [curRoute, setCurRoute] = useState("");
    const router = useRouter();

    useEffect(() => {
        menuArr
            .filter(el => {
                if (el.route === router.pathname) return el;
            })
            .map(e => setCurRoute(menuArr.indexOf(e) + 1));

        console.log(curRoute);
    }, [curRoute, router]);

    return (
        <ThemeProvider theme={theme}>
            <div css={menuContainer}>
                <div css={theme.headerContainer}>
                    <div onClick={() => router.push({ pathname: "/" })}>
                        <img src={imgPath[5]} alt="symbol_white" />
                    </div>
                    <div
                        css={StyledBurger}
                        open={open}
                        onClick={() => setOpen(!open)}
                    >
                        <div>
                            <div>
                                <img src={imgPath[0]} alt="menu_stroke" />
                            </div>
                            <div>
                                <img src={imgPath[0]} alt="menu_stroke" />
                            </div>
                            <div>
                                <img src={imgPath[0]} alt="menu_stroke" />
                            </div>
                        </div>
                    </div>
                    <div css={theme.menuWheel}>
                        <img
                            style={{ zIndex: 10 }}
                            src={imgPath[1]}
                            alt="left_arrow"
                            onClick={() => {
                                if (curRoute === 1)
                                    router.push({
                                        pathname:
                                            menuArr[menuArr.length - 1].route,
                                    });
                                else
                                    router.push({
                                        pathname: menuArr[curRoute - 2].route,
                                    });
                            }}
                        ></img>
                        <div css={theme.menuWheelWrapper}>
                            {curRoute && (
                                <div>
                                    <div>
                                        <span>
                                            {curRoute === 1
                                                ? menuArr[menuArr.length - 1]
                                                      .title
                                                : menuArr[curRoute - 2].title}
                                        </span>
                                    </div>
                                    <div css={theme.flexCenter}>
                                        <span>
                                            {menuArr[curRoute - 1].title}
                                        </span>
                                    </div>
                                    <div css={theme.flexEnd}>
                                        <span>
                                            {curRoute === 5
                                                ? menuArr[0].title
                                                : menuArr[curRoute].title}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <img
                            style={{ zIndex: 10 }}
                            src={imgPath[2]}
                            alt="right_arrow"
                            onClick={() => {
                                if (curRoute === 5)
                                    router.push({
                                        pathname: menuArr[0].route,
                                    });
                                else
                                    router.push({
                                        pathname: menuArr[curRoute].route,
                                    });
                            }}
                        ></img>
                    </div>
                </div>

                <nav
                    css={StyledMenu}
                    open={open}
                    style={
                        open
                            ? {
                                  transform: "translateX(0)",
                              }
                            : { transform: "translateX(-100%)" }
                    }
                >
                    <div css={openMenuHeader}>
                        <div>
                            <img src={imgPath[3]} alt="symbol_white" />
                        </div>
                        <div onClick={() => setOpen(!open)}>
                            <img src={imgPath[4]} alt="symbol_white" />
                        </div>
                    </div>
                    <div css={menuTitleContainer}>
                        <div>
                            <span>Introduction</span>
                            <br />
                            <br />
                            <span>Invitation 1</span>
                            <span>Invitation 2</span>
                            <span>Invitation 3</span>
                            <br />
                            <br />
                            <span>Exploration</span>
                        </div>
                        <div>
                            <p>
                                The website Unfounded is a space for researching
                                fiction-related practices and uploading
                                Founders’ projects, online exhibitions, and
                                games related to Founders’ fiction. It is
                                expected that the website will provide a
                                discursive foundation for fiction and expand
                                curatorial practice by seeking ways to consider
                                fiction in various ways.
                            </p>
                        </div>
                    </div>
                </nav>
            </div>
        </ThemeProvider>
    );
};
export default Menu;
