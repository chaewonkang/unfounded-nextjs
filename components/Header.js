import React from "react";
import { css } from "@emotion/react";
import Link from "next/link";

const headerContainer = css`
    width: 100vw;
    height: 112px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    padding-left: 21px;
    padding-right: 21px;
    padding-top: 11px;
    padding-bottom: 12px;

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
        width: 98px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & > div {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            div {
                height: calc(100% / 3);
                display: flex;
                flex-direction: column;
                justify-content: center;

                img {
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
`;

const Header = () => {
    return (
        <div css={headerContainer}>
            <Link href="/">
                <div>
                    <img
                        src="../static/images/symbolW.png"
                        alt="symbol_white"
                    />
                </div>
            </Link>
            <div>
                <div>
                    <div>
                        <img
                            src="../static/images/menuStroke.png"
                            alt="menu_stroke"
                        />
                    </div>
                    <div>
                        <img
                            src="../static/images/menuStroke.png"
                            alt="menu_stroke"
                        />
                    </div>
                    <div>
                        <img
                            src="../static/images/menuStroke.png"
                            alt="menu_stroke"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
