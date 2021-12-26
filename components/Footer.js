import { useRouter } from "next/router";
import { css } from "@emotion/react";

const footerContainer = css`
    width: 100vw;
    background-color: #000000;
    padding-top: 25px;
    padding-left: 21px;
    padding-right: 21px;
    padding-bottom: 27px;
    display: flex;
    flex-direction: row;
    color: #fff;

    @media (max-width: 781px) {
        width: 100vw;
        padding-top: 25px;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 27px;
        display: flex;
        flex-direction: column;
        color: #fff;
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

    & > div:first-of-type {
        margin-bottom: 64px;

        & > p:first-of-type {
            margin-bottom: 30px;

            font-family: Gothic A1, sans-serif;
            font-weight: 500;
            font-size: 14px;
            letter-spacing: -0.2px;
            line-height: 23px;
            word-break: keep-all;
        }

        & > p:last-of-type {
            font-family: PP Neue Montreal Book, sans-serif;
            -webkit-text-stroke: 0.5px;
            font-size: 15px;
            line-height: 23px;
        }
    }

    & > div:last-of-type {
        font-family: PP Neue Montreal Book, sans-serif;
        font-size: 15px;
        -webkit-text-stroke: 0.5px;
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
                -webkit-text-stroke: 0.5px;
                font-size: 15px;
                line-height: 23px;
            }
        }

        & > div:last-of-type {
            padding-bottom: 20px;
            border-bottom: 1px solid #000;
            margin-bottom: 0px;
            font-family: PP Neue Montreal Book, sans-serif;
            font-size: 15px;
            -webkit-text-stroke: 0.5px;
            line-height: 23px;

            & > div {
                display: flex;

                div {
                    display: flex;
                    flex-direction: column;
                }

                div:first-of-type {
                    margin-right: 0px;
                    width: calc(100% / 4);
                }

                div:last-of-type {
                    padding-left: 15px;
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
            width: calc(100% / 4);
        }

        p:last-of-type {
            width: calc((100% / 4) * 3);
            padding-left: 15px;
        }
    }

    & > div:last-of-type {
        display: flex;
        flex-direction: column;
        font-family: PP Neue Montreal Book, sans-serif;
        -webkit-text-stroke: 0.5px;
        font-size: 15px;
        line-height: 23px;

        p:first-of-type {
            width: calc(100% / 4);
        }

        p:last-of-type {
            width: calc((100% / 4) * 3);
            padding-left: 15px;
        }
    }

    @media (max-width: 781px) {
        width: 100%;
        padding: 0;

        span {
            font-family: "GTFAgentur", serif;
            font-size: 34px;
            letter-spacing: -0.5px;
        }
    }
`;

const Footer = ({ bgColor, color, children }) => {
    return (
        <div css={footerContainer} style={bgColor ? { backgroundColor: bgColor, color: color } : null}>
            <div css={footerLeftArea}>
                <div>
                    <span>Unfounded</span>
                    <p>
                        언파운디드는 큐레토리얼 실천이 생산한 가상이 현실에 개입하는 현상을 탐구한다. 가상은 오랫동안
                        문학적 내러티브나 허구, 거짓말, 가짜, 속임수, 환상처럼 물질적 현실 세계로부터 분리된 대상을
                        지칭해 왔다. 그러나 가상과 현실의 관계는 이중 나선 구조와 같다. 큐레토리얼 실천은 이 이중 나선
                        구조를 풀고 감는 일이다. 이 이중 나선 구조가 회전할 때, 우리는 그 현상을 픽션이라고 부른다.
                        언파운디드는 ‘초대’와 ‘탐험’으로 구성된다. ‘초대’는 다양한 사람들과 함께 큐레토리얼 실천의
                        재료와 도구들을 분석하고 실험한다. ‘탐험’은 큐레토리얼 실천이 이중 나선 구조를 풀고 감는 형세를
                        탐침하고 그 결과를 글쓰기로 생산한다. 제목인 unfounded는 무근無根하다, 헛되다, 이유 없다라는
                        뜻이며, 이 이름 안에서 김얼터와 박유진이 함께 일한다.
                    </p>
                    <p>
                        Unfounded speculates the phenomenon in which the virtual produced by curatorial practice
                        intervenes into the real. The virtual has been considered as a literary narrative or
                        fabrication, falsehood, lie, fake, deception, fantasy separated from the real. However, the
                        relationship between virtual and real is like a double helix. Curatorial practice is winding and
                        rewinding this double helix. Fiction is the rotation of this double helix. The project has two
                        parts: “Invitation” and "Exploration." "Invitation" invites diverse practitioners to experiment
                        with ingredients and tools of curatorial practices. "Exploration" probes the topography of how
                        the curatorial practices twist and untwist the double helix and produces writing as an outcome.
                        Alter Kim and Eugene Hannah Park practice around the title unfounded, which stands for rootless,
                        vain, nonsense.
                    </p>
                </div>
                <div>
                    <span>Contact</span>
                    <div>
                        <div>
                            <span>E-Mail</span>
                            <span>Instagram</span>
                        </div>
                        <div>
                            <span>unfounded.info@gmail.com</span>
                            <span>@unfounded</span>
                        </div>
                    </div>
                </div>
            </div>
            <div css={footerRightArea}>
                <span>Credit</span>
                <div>
                    <div>
                        <p>기획</p>
                        <p>박유진 김얼터</p>
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
                        <p>후원</p>
                        <p>서울문화재단</p>
                    </div>
                    <div>
                        <p>참여자</p>
                        <p></p>
                    </div>
                    <div>
                        <p>● 초대 I</p>
                        <p>유진영, 이미지, 이솜이, 이지우</p>
                    </div>
                    {/* <div>
                        <p>● 초대 II</p>
                        <p>이영주(룹앤테일) | 박선호, 박이선, 정여름, 황재민</p>
                    </div>
                    <div>
                        <p>● 초대 III</p>
                        <p>Meltmirror(ISVN) | 박지성, 홍명보, 안정환, 김남길</p>
                    </div> */}
                </div>
                <div>
                    <div>
                        <p>Directed by</p>
                        <p>Yoojin Park, Nahyun Kim</p>
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
                        <p>Funding</p>
                        <p>SFAC</p>
                    </div>
                    <div>
                        <p>Participants</p>
                        <p></p>
                    </div>
                    <div>
                        <p>● Invitation I</p>
                        <p>Jinyoung Yoo, Miji Lee, Somi Lee, Jiwoo Lee</p>
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
    );
};

export default Footer;
