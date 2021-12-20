import PageLayout from "../components/PageLayout";
import { useRef, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Footer from "../components/Footer";
import Link from "next/link";
import Menu from "../components/Menu";

const introContainer = css`
    position: relative;
    top: 0;
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
        font-family: PP Neue Montreal Book, sans-serif;
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

    div {
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
            font-family: PP Neue Montreal Book, sans-serif;
            -webkit-text-stroke: 0.5px #fff;
            font-size: 25px;
            line-height: 40px;
            letter-spacing: 0.1px;
            height: 100%;
            overflow: auto;
        }
    }

    @media (max-width: 781px) {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
        display: flex;
        height: calc(100vh - 32px);
        position: relative;

        align-items: center;
        justify-content: center;

        div {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: calc(100% - 94px);
            position: relative;
            top: 35px;
            padding-top: 10px;
            color: #fff;
            padding-bottom: 0px;

            p:first-of-type {
                width: 100%;
                margin-right: 9px;
                font-family: Gothic A1, sans-serif;
                font-size: 18px;
                font-weight: 500;
                line-height: 29px;
                letter-spacing: -0.2px;
                word-break: keep-all;
                padding-top: 10px;
                padding-bottom: 20.5px;
                height: calc(50% - 20.5px);
                overflow: auto;
                border-bottom: 1px solid #fff;
            }

            p:last-of-type {
                width: 100%;
                margin-left: 0px;
                font-family: PP Neue Montreal Book, sans-serif;
                -webkit-text-stroke: 0.5px #fff;
                font-size: 20px;
                line-height: 29px;
                letter-spacing: 0px;
                height: calc(50% - 20.5px);
                margin-top: 20.5px;
                overflow: auto;
            }
        }
    }
`;

const invitationBox = css`
    width: 100vw;
    min-height: 100vh;
    background-color: #ff9d46;
    padding-top: 10px;
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

        background-color: #ff9d46;
        padding-top: 0px;
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

    & > div {
        width: calc(50% - 9px);
    }

    & > div:first-of-type {
        margin-right: 9px;

        div {
            display: flex;
            p:first-of-type {
                width: calc((100% / 6) * 2);
            }

            p:last-of-type {
                width: calc((100% / 6) * 4);
            }
        }
    }

    & > div:last-of-type {
        margin-left: 9px;
        width: calc(50% - 9px);
        position: relative;

        div {
            display: flex;
            justify-content: flex-end;

            span {
                font-family: Union, sans-serif;
                font-weight: 500;
                font-size: 15px;
            }
        }
    }

    @media (max-width: 781px) {
        display: none;
    }
`;

const marqueeBox1 = css`
    display: inline-block;
    animation: marquee 30s linear infinite;
`;

const marqueeBox2 = css`
    display: inline-block;
    animation: marquee2 30s linear infinite;
    animation-delay: 15s;
`;

const moreContainer = css`
    border-top: 1px solid #000;
    width: 100%;
    height: 55vh;
    transition: 3s ease-in;
    padding-left: 21px;
    padding-right: 21px;
    padding-top: 25.3px;
    padding-bottom: 10px;
    display: flex;

    & > div {
        width: calc(50% - 9px);
        display: flex;
    }
`;

const moreTextBox = css`
    width: 100%;
    word-break: keep-all;

    div:first-of-type {
        width: calc((100% / 6) * 2);

        p {
            width: 100%;
            padding-right: 9px;
        }
    }

    div:last-of-type {
        width: calc((100% / 6) * 4);
        overflow: auto;

        p {
            width: 100%;
        }
    }
`;

const sliderWave = css`
    width: calc(100% - 44px);
    margin-left: 21px;
    margin-right: 21px;
    position: absolute;

    & > img {
        mix-blend-mode: difference;
    }

    @media (max-width: 781px) {
        display: none;
    }
`;

const sliderContainer = css`
    width: calc(100% - 41px);
    height: 55vh;
    display: flex;
    margin-left: 21px;
    margin-right: 21px;
    padding-bottom: 21px;

    & > img {
        width: calc(100% - 40px);
        position: absolute;
        mix-blend-mode: difference;
        height: auto;
    }

    div {
        height: calc(100% - 21px);

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    & > div:first-of-type {
        width: calc((100% / 3) - 9px);
        margin-right: 9px;
    }

    & > div:nth-of-type(2) {
        width: calc((100% / 3) - 19px);
        margin-left: 9px;
        margin-right: 9px;
    }

    & > div:last-of-type {
        width: calc((100% / 3) - 9px);
        margin-left: 9px;
    }

    @media (max-width: 781px) {
        display: none;
    }
`;

const slideText = css`
    width: 100%;

    span {
        display: inline-block;
        width: 50%;
    }
`;

const Introduction = () => {
    const router = useRouter();

    const scrollRef = useRef(null);
    const [isMoreOpen, setIsMoreOpen] = useState({
        bool: false,
        index: 0,
    });

    useEffect(() => {}, [isMoreOpen]);

    return (
        <ThemeProvider theme={theme}>
            <div css={introContainer}>
                <div
                    css={[theme.downArrowBox, downArrowBoxStyle]}
                    onClick={() => {
                        scrollRef.current.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                >
                    <img
                        src="../static/images/downArrowW.png"
                        alt="down_arrow"
                    />
                    <img
                        src="../static/images/downArrowW.png"
                        alt="down_arrow"
                    />
                </div>
                <div css={infoText}>
                    <div>
                        <p>
                            언파운디드는 픽션과 큐레토리얼 실천을 함께 탐구하며
                            전시로 실재에 개입하는 방법을 모색한다. 이때, 픽션은
                            문학적 내러티브나 완벽한 허구, 거짓말, 가짜, 가상이
                            아니라 허구가 실재에 관여하고 침투하는 현상을
                            가리킨다. 긴 시간 동안 픽션은 논픽션(non-fiction),
                            다큐멘터리, 진실, 실재에 대립하는 의미로 사용되었다.
                            그러나 최근의 상황은 기존의 픽션으로부터 변별점을
                            가지는 픽션을 요구한다. 이제 픽션은 실재와
                            가상이라는 인위적 경계를 서로 침투 가능한 것으로
                            허물거나 용해하는 작업을 수행하는 일 혹은 과정으로
                            생각되어야 한다. 그것은 실재-가상, 사실-허구,
                            진실-거짓, 물질-이미지 등 우리 사회의 주요 전제들을
                            견인해 온 이항대립의 양쪽을 모두 교란하는 힘을
                            가졌다. 실재와 가상의 관계는 가상이 실재를
                            좇아간다거나 가상이 실재를 흉내 및 재현한다는
                            통상적인 인식처럼 간단하지 않다. 이 둘은 서로 완전히
                            분리된 평행 세계(parallel world)가 아니라, 앞면과
                            뒷면, 우열을 구분할 수 없는 뫼비우스의 띠와 같은
                            모습일 것이다. 예컨대, 우리 은하 바깥의 우주는 어떤
                            모습으로 알려져 있는가? 그 모습은 현재까지 발견된
                            지식들을 토대로 하는 시뮬레이션 시공간 안에서 상상된
                            모습으로 존재하고 있다. 계산에 사용된 숫자 하나가
                            바뀌거나, 새로운 과학적 사실이 발견된다면 그 모습은
                            완전히 바뀌게 된다. 여기서 실재는 시뮬레이션, 즉
                            가상에 의탁하여 성립한다. 보통 객관적 사실과 세계의
                            물리적 패턴과 법칙을 밝혀낸다고 생각되는 과학이 많은
                            부분을 픽션에 의존하고 있는 형세는 픽션을 기존의
                            좁은 의미(허구, 이야기, 가짜)에서 실재를 실재로
                            인식하게 만드는 체계나 시스템을 가리키는 광의적
                            범위로 확장한다. 이처럼 픽션은 항상 이중의 기능을
                            수행하는데, 먼저 픽션은 우리 실재를 구성하고 있는
                            질서와 짜임을 가시화한다. 이를 통해 우리가 무엇을
                            실재로 인식하는지 하는 문제를 건드린다. 둘째로,
                            픽션은 새로운 질서와 새로운 짜임을 만든다. 이를 통해
                            앞으로 무엇이 리얼리티로 간주될지를 예상하고
                            결정한다. 이번 프로젝트는 이처럼 실재와 가상을
                            뒤섞는 일, 둘 사이의 경계를 모호하게 만드는 작업이나
                            과정을 ‘픽션’으로 정의한다. ‘사실’, ‘진실’ 같은
                            개념이 개인의 신념이나 믿음에 의거하게 된 동시대
                            사회에서, 메타버스(metaverse)와 가짜 뉴스, 현실과
                            디지털 세계를 뒤섞는 혼합 현실(mixed reality)
                            매체들의 등장으로 코 앞까지 도달한 무엇이 ‘진짜’
                            실재냐 하는 질문은 역으로 ‘가상이란 무엇이며,
                            픽션이란 무엇이냐’는 질문으로부터 대답될 수 있을지도
                            모른다. 그렇다면 픽션과 전시 기획은 어떤 관련성을
                            가지는가? 앞서 짚은 것처럼 픽션은 이중의 기능을
                            수행한다. 이는 전시 기획이 수행하는 이중의 기능과
                            닮아 있다. 전시를 만드는 일은 기존 예술 작품이 놓여
                            있는 질서와 짜임, 텍스트를 기반으로 하지만 동시에
                            새로운 의미망을 구축하는 작업니다. 큐레이팅과
                            구분되는 의미에서의 큐레토리얼은 많은 경우
                            성좌(constellation)에 비유된다. 예술 작품은 전시가
                            여는 픽션적 시공간 안에서 새로운 의미를 획득하게
                            된다. 새로운 의미를 가지게 된 예술 작품들이 새로운
                            질서와 짜임을 만들고, 곧 하나의 체계로 포섭된다.
                            언파운디드는 이처럼 전시가 생산하는 픽션에 초점을
                            맞추어 이를 리서치, 워크숍, 전시 등 다양한 방법으로
                            연구하고 실천하며 향후 자생적으로 기능할 수 있는
                            담론의 장을 만들어 보고자 한다. 언파운디드는
                            ‘초대’와 ‘탐험’으로 구성된다. ‘초대’는 다양한
                            사람들과 함께 큐레토리얼 실천의 재료를 실험한다.
                            ‘탐험’은 픽션과 큐레토리얼 실천의 관계를 탐침하고 그
                            결과를 글쓰기로 생산한다. 제목인 unfounded는
                            무근無根하다, 헛되다, 이유 없다라는 뜻이며, 이 이름
                            안에서 김얼터와 박유진이 함께 일한다.
                        </p>
                        <p>
                            ‘They are already here. You are next!’ The above
                            line from the last scene of Invasion of the Body
                            Snatcher (1956), a classic sci-fi classic in which
                            extraterrestrial life takes over the body and
                            conquers the Earth, tells us that while we sleep,
                            the fear that a strange alien life will change our
                            civilization. show symbolically. This phrase has
                            been mainly interpreted as an allegory of
                            McCarthyism, which was prevalent until the 1960s,
                            but the fear of the unknown is still a sharp tool
                            that adds discrimination and hierarchy. In 2021,
                            society still calls certain groups ‘alien/species’
                            and defines them in the language of aggression and
                            invasion. Society names and classifies them as
                            beings that shake the foundations, impede commuting,
                            pollute the streets, or waste valuable taxes.
                            Pickets with the phrases of exile and quarantine
                            block the border and divide the land. In 《Arecibo
                            (tentative title)》, which consists of programs such
                            as screening, performance, and workshops, we want to
                            cross the code of closure and disconnection and
                            examine our protocol to respond to the unfamiliar
                            together. When I meet other beings, I ask not to
                            teach the other person in the language of the
                            victor, but to lay the foundation for understanding
                            each other. The time and space that embodies the
                            ‘third language’, not me and you, is the story I
                            want to present in this exhibition. It is not that
                            there have been no attempts in human history to ask
                            strangers to speak to them. Arecibo, built in Puerto
                            Rico in 1963, was the largest radio observatory at
                            the time, and in 1974 the first human message was
                            launched into outer space. Characteristics
                            considered to represent human history were converted
                            into numbers, marked with images, and sent to outer
                            space. It was a contact call of the species that
                            human civilization exists towards the unknown. In
                            2020, 57 years after construction, Arecibo suddenly
                            collapsed. As the remnants of huge wires and spheres
                            fall, the floor that used to be a huge plate is
                            collapsing, and the remnants of the desire for
                            transmission are everywhere. On the other hand,
                            after the corona virus spread around the world in
                            the same year, the fear of infection due to contact
                            increased the size of the poor imagination about
                            “stranger beings” and amplified the hate and
                            discrimination that existed between the gaps. This
                            project connects the two viewpoints and imagines a
                            spherical plate that can stand with otherized beings
                            after the collapse of Arecibo. If Arecibo was closer
                            to an anthropocentric utterance, we point
                            Post-Arecibo into the Earth. Drawing, dismantling,
                            erecting, driving, and programming of the second
                            Arecibo after collapse must be imagined differently
                            than before. In order to create a common language in
                            it, we inevitably try to deviate from our original
                            thinking by carefully comparing each other’s
                            preferences. A musical score with a flexible
                            movement that walks through the middle area by
                            mobilizing all signals such as gestures, voices,
                            colors, scents, and vibrations is a necessary tool
                            for us. I look forward to being able to choose the
                            gestures I need until the day I dream in the
                            language of another being.
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
                                INVITATION I: Conductor’s Lesson INVITATION I:
                                Conductor’s Lesson INVITATION I: Conductor’s
                                Lesson&nbsp;
                            </span>
                        </div>
                        <div css={marqueeBox2}>
                            <span>
                                INVITATION I: Conductor’s Lesson INVITATION I:
                                Conductor’s Lesson INVITATION I: Conductor’s
                                Lesson
                            </span>
                        </div>
                    </div>
                    <div css={invitationTextBox}>
                        <div>
                            <div css={theme.textKr}>
                                <p style={{ fontWeight: "bold" }}>초대 I:</p>
                                <p>손님</p>
                            </div>
                            <div css={theme.textKr}>
                                <p style={{ fontWeight: "bold" }}>지휘 수업</p>
                                <p>유진영, 이미지, 이솜이, 이지우 </p>
                            </div>
                            <div css={theme.textEn}>
                                <p style={{ fontWeight: "bold" }}>
                                    Invitation I:
                                </p>
                                <p>invitee</p>
                            </div>
                            <div css={theme.textEn}>
                                <p style={{ fontWeight: "bold" }}>
                                    Conductor’s Lesson
                                </p>
                                <p>
                                    Jinyoung Yoo, Miji Lee, Somi Lee, Jiwoo Lee
                                </p>
                            </div>
                        </div>
                        <div>
                            <p css={theme.textKr}>
                                미술 전시 기획자 6인이 모여 픽션-전시의 기획서를
                                작성한다. 생산될 전시 기획서의 형식에는 따로
                                제한을 두지 않으며 일반적인 전시 기획서부터
                                이미지 아카이브까지, 각자의 주제에 맞는 형식을
                                채택하기로 한다. 이때, 픽션-전시란 픽션으로만
                                존재할 수 있는 전시, 그 자체로 픽션을 생산하는
                                전시, 픽션을 주제로 차용하는 전시 등 다양할 수
                                있다. 이를 통해 전시의 스코어인 전시 기획서와
                                픽션의 관계를 재고한다.
                            </p>
                            <p css={theme.textEn}>
                                Six art exhibition planners gather to write a
                                fiction-exhibition plan. There are no
                                restrictions on the format of the exhibition
                                plan to be produced, and it is decided to adopt
                                a format suitable for each subject, from general
                                exhibition plans to image archives. At this
                                time, fiction-exhibition can be diverse, such as
                                an exhibition that can exist only as fiction, an
                                exhibition that produces fiction itself, and an
                                exhibition that borrows fiction as a theme.
                                Through this, the relationship between the
                                exhibition plan.
                            </p>
                            <div>
                                <span
                                    onClick={() => {
                                        // el.index
                                        setIsMoreOpen({
                                            bool: !isMoreOpen.bool,
                                            index: 1,
                                        });
                                    }}
                                    style={{ cursor: "pointer" }}
                                >
                                    MORE
                                </span>
                            </div>
                        </div>
                    </div>
                    {isMoreOpen && isMoreOpen.bool === true ? (
                        <div css={moreContainer}>
                            <div css={moreTextBox}>
                                <div>
                                    <p css={theme.textKr}>
                                        초대 I: 지휘 수업指揮 受業을 위한 안내
                                    </p>
                                </div>
                                <div>
                                    <p css={theme.textKr}>
                                        Tom and Jerry in the Hollywood Bowl{" "}
                                        <br />
                                        <br />
                                        LINK: 『스코어 스코어』의 61쪽에서
                                        언급되는 장면. 살리에리가 모차르트의
                                        악보를 훔쳐 보며 상상 속의 음악을 듣다가
                                        감명을 받아 악보를 떨어트린다.
                                        <br />
                                        <br />
                                        작곡가에게 가장 중요한 덕목은 상상력일
                                        것이다. 작곡가가 창작하려는 음악은 오직
                                        그의 머릿속에만 있다. 작곡가가 음표를
                                        그리기 시작하면 지휘자도, 연주자도 모두
                                        작곡가 자신인 상상 속 오케스트라가
                                        연주를 시작한다. 작곡가는 이
                                        오케스트라로 시뮬레이션을 거쳐 악보를
                                        완성한다. 전시 기획자가 기획서를
                                        작성하는 과정도 이와 비슷하다. 기획서는
                                        지금까지 한 번도 실현된 적 없는 미래를
                                        계시처럼 받아 적은 서류다. 전시장도,
                                        전시하려는 작품의 모습도 어느 정도는
                                        실제로부터 마모된 상태로 상상되지만,
                                        기획자는 머릿속에서 이 작품을 여기에, 저
                                        작품을 저기에 놓아 보며 기획서를 완성해
                                        간다. 이 과정에서 요구되는 덕목 또한
                                        무엇보다 상상력이다. 이렇게 작성된
                                        기획서는 전시에 참여하는 다른 많은
                                        사람들, 작가들, 그래픽 디자이너, 공간
                                        설치 담당자, 전시장 디렉터 등에게
                                        전달되면서 공통의 논의를 위한 토대가
                                        된다. 기획서는 현실적인 요건들에 맞추어
                                        수정되기도 하고, 기획서가 유통되며 다른
                                        사람들의 의견이 반영되는 과정에서 변형을
                                        거치기도 한다. 그러나 어느 경우든
                                        기획서는 전시의 전체적인 방향을 설정하고
                                        주제를 바라보는 각자의 견해를 조율하는
                                        기준으로 작동한다. 이런 측면에서
                                        바라보자면 전시기획서는 전시의
                                        스코어(score)라고 할 수 있다. 음악에게
                                        악보樂譜가, 퍼포먼스와 무용에게
                                        무보舞譜가 있다면, 전시에게는 기획서가
                                        있다. 전시기획서는 그 자신도 가 보지
                                        않은 길을 안내하는 나침반이면서 전시의
                                        보이지 않는 곳에서 은둔한다. <br />
                                        <br />
                                        LINK: Tom and Jerry, 52 Episode - Tom
                                        and Jerry in the Hollywood Bowl (1950)
                                        <br />
                                        <br />
                                        그러나 이 워크숍의 제목은 ‘작곡’ 수업이
                                        아닌 ‘지휘’ 수업이다. 기준으로 작동한다.
                                        이런 측면에서 바라보자면 전시기획서는
                                        전시의 스코어(score)라고 할 수 있다.
                                        음악에게 악보樂譜가, 퍼포먼스와 무용에게
                                        무보舞譜가 있다면, 전시에게는 기획서가
                                        있다. 전시기획서는 그 자신도 가 보지
                                        않은 길을 안내하는 나침반이면서 전시의
                                        보이지 않는 곳에서 은둔한다. LINK: Tom
                                        and Jerry, 52 Episode - Tom and Jerry in
                                        the Hollywood Bowl (1950) 그러나 이
                                        워크숍의 제목은 ‘작곡’ 수업이 아닌
                                        ‘지휘’ 수업이다.{" "}
                                    </p>
                                </div>
                            </div>
                            <div css={moreTextBox}>
                                <div>
                                    <p css={theme.textEn}>
                                        Invitation I: A Guide to Conductor’s
                                        Lesson
                                    </p>
                                </div>
                                <div>
                                    <p css={theme.textEn}>
                                        ‘They are already here. You are next!’
                                        The above line from the last scene of
                                        Invasion of the Body Snatcher (1956), a
                                        classic sci-fi classic in which
                                        extraterrestrial life takes over the
                                        body and conquers the Earth, tells us
                                        that while we sleep, the fear that a
                                        strange alien life will change our
                                        civilization. show symbolically. This
                                        phrase has been mainly interpreted as an
                                        allegory of McCarthyism, which was
                                        prevalent until the 1960s, but the fear
                                        of the unknown is still a sharp tool
                                        that adds discrimination and hierarchy.
                                        In 2021, society still calls certain
                                        groups ‘alien/species’ and defines them
                                        in the language of aggression and
                                        invasion. Society names and classifies
                                        them as beings that shake the
                                        foundations, impede commuting, pollute
                                        the streets, or waste valuable taxes.
                                        Pickets with the phrases of exile and
                                        quarantine block the border and divide
                                        the land. In 《Arecibo (tentative
                                        title)》, which consists of programs
                                        such as screening, performance, and
                                        workshops, we want to cross the code of
                                        closure and disconnection and examine
                                        our protocol to respond to the
                                        unfamiliar together. When I meet other
                                        beings, I ask not to teach the other
                                        person in the language of the victor,
                                        but to lay the foundation for
                                        understanding each other. The time and
                                        space that embodies the ‘third
                                        language’, not me and you, is the story
                                        I want to present in this exhibition. It
                                        is not that there have been no attempts
                                        in human history to ask strangers to
                                        speak to them. Arecibo, built in Puerto
                                        Rico in 1963, was the largest radio
                                        observatory at the time, and in 1974 the
                                        first human message was launched into
                                        outer space. Characteristics considered
                                        to represent human history were
                                        converted into numbers, marked with
                                        images, and sent to outer space. It was
                                        a contact call of the species that human
                                        civilization exists towards the unknown.
                                        In 2020, 57 years after construction,
                                        Arecibo suddenly collapsed. As the
                                        remnants of huge wires and spheres fall,
                                        the floor that used to be a huge plate
                                        is collapsing, and the remnants of the
                                        desire for transmission are everywhere.
                                        On the other hand, after the corona
                                        virus spread around the world in the
                                        same year, the fear of infection due to
                                        contact increased the size of the poor
                                        imagination about “stranger beings” and
                                        amplified the hate and discrimination
                                        that existed between the gaps. This
                                        project connects the two viewpoints and
                                        imagines a spherical plate that can
                                        stand with otherized beings after the
                                        collapse of Arecibo. If Arecibo was
                                        closer to an anthropocentric utterance,
                                        we point Post-Arecibo into the Earth.
                                        Drawing, dismantling, erecting, driving,
                                        and programming of the second Arecibo
                                        after collapse must be imagined
                                        differently than before. In order to
                                        create a common language in it, we
                                        inevitably try to deviate from our
                                        original thinking by carefully comparing
                                        each other’s preferences. A musical
                                        score with a flexible movement that
                                        walks through the middle area by
                                        mobilizing all signals such as gestures,
                                        voices, colors, scents, and vibrations
                                        is a necessary tool for us. I look
                                        forward to being able to choose the
                                        gestures I need until the day I dream in
                                        the language of another being.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div css={sliderWave}>
                                <img
                                    src="../static/images/invitation/wavePath.png"
                                    alt="wave_path"
                                />
                            </div>
                            <div css={sliderContainer}>
                                <div>
                                    <img
                                        src={
                                            "../static/images/invitation/img1.png"
                                        }
                                    />
                                    <div css={slideText}>
                                        <span
                                            css={[theme.textKr, theme.textEn]}
                                        >
                                            프로젝트 A Project A
                                        </span>
                                        <span
                                            css={[theme.textKr, theme.textEn]}
                                        >
                                            김얼터 Nahyun Kim
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src={
                                            "../static/images/invitation/img2.png"
                                        }
                                    />
                                    <div css={slideText}>
                                        <span
                                            css={[theme.textKr, theme.textEn]}
                                        >
                                            프로젝트 A Project A
                                        </span>
                                        <span
                                            css={[theme.textKr, theme.textEn]}
                                        >
                                            김얼터 Nahyun Kim
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src={
                                            "../static/images/invitation/img3.png"
                                        }
                                    />
                                    <div css={slideText}>
                                        <span
                                            css={[theme.textKr, theme.textEn]}
                                        >
                                            프로젝트 A Project A
                                        </span>
                                        <span
                                            css={[theme.textKr, theme.textEn]}
                                        >
                                            김얼터 Nahyun Kim
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <Footer bgColor={"#000"} color={"#fff"} />
            </div>
        </ThemeProvider>
    );
};

export default Introduction;
