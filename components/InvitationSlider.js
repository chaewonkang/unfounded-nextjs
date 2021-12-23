import React, { useEffect, useRef, useState } from "react";
import rightArrow from "../static/images/sliderRight.png";
import leftArrow from "../static/images/sliderLeft.png";
import { css } from "@emotion/react";

const sliderArrow = css`
    position: absolute;
    width: calc(100vw);
    height: 70px;
    top: 50vh;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;

    & > div {
        width: 70px;
        height: 70px;
        :hover {
            cursor: pointer;
        }

        & > img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
`;

const sliderWrapper = css`
    width: 100vw;
    height: 100%;
    display: inline-block;

    white-space: nowrap;
    transition: ease 1000ms;

    & > div {
        height: calc(100% - 21px);
        width: calc(((100vw - 42px) / 3));
        display: inline-block;
        flex-direction: column;

        :hover {
            cursor: pointer;

            & > img {
                mix-blend-mode: difference;
            }
        }

        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;

            :hover {
                mix-blend-mode: difference;
            }
        }
    }

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
`;

// 배경 전환

const slideBackgroundContainer = css`
    width: 100vw;
    height: 100vh;
`;

const slideBackgroundWhole = css`
    width: 500vw;
    height: 100vh;
`;

// 컨텐츠

const slideContentContainer = css`
    width: 100vw;
    height: 100vh;
`;

const slideContentWhole = css`
    width: 500vw;
    height: 100vh;
`;

const slideContentWrapper = css`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const slideContent = css`
    width: 80vw;
    height: 80vh;
`;

// 윈도우

const slideWindow = css`
    width: 100vw;
    height: 100vh;
`;

const delay = 3000;

function InvitationSlider({ imgArr }) {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex(prevIndex =>
                    prevIndex === imgArr.length - 1 ? 0 : prevIndex + 1,
                ),
            delay,
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <>
            <div css={slideWindow}>
                <div css={sliderArrow}>
                    <div
                        onClick={() => {
                            if (index === 0) {
                                setIndex(1);
                            } else if (index === 1) {
                                setIndex(0);
                            } else if (index < invitation1.length - 1) {
                                setIndex(index - 1);
                            }
                        }}
                    >
                        <img src={leftArrow} />
                    </div>
                    <div
                        onClick={() => {
                            if (index < invitation1.length - 1) {
                                setIndex(index + 1);
                            } else if (index == invitation1.length - 1)
                                setIndex(0);
                            else if (index == 1) setIndex(0);
                        }}
                    >
                        <img src={rightArrow} />
                    </div>
                </div>
                <div
                    css={sliderWrapper}
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {imgArr.map((image, index) => (
                        <div className="slide" key={index}>
                            <img src={image.src}></img>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default InvitationSlider;
