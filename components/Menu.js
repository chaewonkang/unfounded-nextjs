import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useState, useEffect } from "react";
import { css } from "@emotion/react";

import { useRouter } from "next/router";

const menuContainer = css`
    width: 100vw;
    height: 80px;
    background-color: #000;
    position: fixed;
    left: 0;
    z-index: 100;
`;

const StyledBurger = css`
    cursor: pointer;
    width: 65px;
    height: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 14;
    position: absolute;
    top: 5px;
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
        height: 55px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 14;
        position: absolute;
        top: 5px;
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
    background-color: #ff7e27;
    height: 100vh;
    max-height: 100vh;
    text-align: center;
    padding-bottom: 0;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    padding-top: 25vh;

    & > div:first-of-type {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: -1;
        background-color: #ff7e27;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            mix-blend-mode: multiply;
        }
    }

    @media (max-width: 781px) {
        display: inline-block;
        width: 100vw;
        z-index: 1000;
        background: #ff7e27;
        height: 100vh;
        max-height: 100vh;
        text-align: center;
        padding-bottom: 0;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.3s ease-in-out;
        padding-top: 25vh;

        & > div:first-of-type {
            width: 100%;
            height: 100%;
            position: absolute;
            bottom: 0;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            z-index: -1;
            background-color: #ff7e27;

            img {
                width: 100%;
                height: auto;
                object-fit: contain;
                mix-blend-mode: multiply;
            }
        }
    }
`;

const openMenuSymbol = css`
    height: 88px;
    position: absolute;
    top: 0;
    left: 0;

    & > img {
        height: 100%;
    }
`;

const openMenuHeader = css`
    width: 100vw;
    height: 80px;
    position: absolute;
    top: 0;
    display: flex;
    padding-left: 21px;
    padding-right: 21px;
    padding-top: 11px;
    padding-bottom: 12px;
    justify-content: space-between;

    & > div:first-of-type {
        cursor: pointer;
        height: 100%;
        padding-left: 21px;
        padding-right: 21px;
        padding-top: 11px;
        padding-bottom: 12px;

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
            height: 60px;
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
            padding-top: 11px;
            padding-left: 15px;

            & > img {
                height: 34px;
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
            cursor: pointer;

            :hover {
                color: #fff;
            }
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
            display: none;
        }
    }
`;

const imgPath = [
    "/static/images/menuStroke.png",
    "/static/images/leftArrow.png",
    "/static/images/rightArrow.png",
    "/static/images/symbolB.png",
    "/static/images/cancelButton.png",
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
    const [menuBg, setMenuBg] = useState(0);

    useEffect(() => {
        menuArr
            .filter(el => {
                if (el.route === router.pathname) return el;
            })
            .map(e => setCurRoute(menuArr.indexOf(e) + 1));
    }, [curRoute, router]);

    useEffect(() => {}, [menuBg, open]);

    return (
        <ThemeProvider theme={theme}>
            <div css={menuContainer}>
                <div css={theme.headerContainer}>
                    <div onClick={() => router.push({ pathname: "/" })}>
                        <img src={imgPath[5]} alt="cancel_button" />
                    </div>
                    <div css={StyledBurger} open={open} onClick={() => setOpen(!open)}>
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
                                        pathname: menuArr[menuArr.length - 1].route,
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
                                                ? menuArr[menuArr.length - 1].title
                                                : menuArr[curRoute - 2].title}
                                        </span>
                                    </div>
                                    <div css={theme.flexCenter}>
                                        <span>{menuArr[curRoute - 1].title}</span>
                                    </div>
                                    <div css={theme.flexEnd}>
                                        <span>{curRoute === 5 ? menuArr[0].title : menuArr[curRoute].title}</span>
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
                    <div>
                        <img src={`../static/images/menuBg${menuBg + 1}.png`} alt="menu_background" />
                    </div>

                    <div css={openMenuHeader}>
                        <div css={openMenuSymbol}>
                            <img src={imgPath[3]} alt="symbol_black" />
                        </div>
                        <div onClick={() => setOpen(!open)}>
                            <img src={imgPath[4]} alt="symbol_white" />
                        </div>
                    </div>
                    <div css={menuTitleContainer}>
                        <div>
                            <span
                                onMouseOver={() => setMenuBg(0)}
                                onClick={() => {
                                    setOpen(!open);
                                    router.push({
                                        pathname: "/introduction",
                                    });
                                }}
                            >
                                Introduction
                            </span>
                            <br />
                            <br />
                            <span
                                onMouseOver={() => setMenuBg(1)}
                                onClick={() => {
                                    setOpen(!open);
                                    router.push({
                                        pathname: "/invitation/1",
                                    });
                                }}
                            >
                                Invitation 1
                            </span>
                            <span
                                onMouseOver={() => setMenuBg(2)}
                                onClick={() => {
                                    setOpen(!open);
                                    router.push({
                                        pathname: "/invitation/2",
                                    });
                                }}
                            >
                                Invitation 2
                            </span>
                            <span
                                onMouseOver={() => setMenuBg(3)}
                                onClick={() => {
                                    setOpen(!open);
                                    router.push({
                                        pathname: "/invitation/3",
                                    });
                                }}
                            >
                                Invitation 3
                            </span>
                            <br />
                            <br />
                            <span
                                onMouseOver={() => setMenuBg(4)}
                                onClick={() => {
                                    setOpen(!open);
                                    router.push({
                                        pathname: "/exploration",
                                    });
                                }}
                            >
                                Exploration
                            </span>
                        </div>
                        <div>
                            <p>
                                The website Unfounded is a space for researching fiction-related practices and uploading
                                Founders’ projects, online exhibitions, and games related to Founders’ fiction. It is
                                expected that the website will provide a discursive foundation for fiction and expand
                                curatorial practice by seeking ways to consider fiction in various ways.
                            </p>
                        </div>
                    </div>
                </nav>
            </div>
        </ThemeProvider>
    );
};
export default Menu;
