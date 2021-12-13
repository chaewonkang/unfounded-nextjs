import PageLayout from "../components/PageLayout";
import { ThemeProvider } from "styled-components";
import theme, { downArrowBox } from "../styles/theme";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Footer from "../components/Footer";
import Link from "next/link";

const introContainer = css`
    position: relative;
    top: 0;
    width: 100%;
    height: calc(100vh - 20px);
    margin-top: 20px;
    padding-left: 21px;
    padding-right: 21px;
    // background-color: #f0f;
`;

const bottomBanner = css`
    width: 100vw;
    position: relative;
    left: -21px;
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
`;

const downArrowBoxStyle = css`
    position: absolute;
    width: calc(100% - 42px);
    z-index: 1;
    bottom: 42px;
    padding-left: 0;
    padding-right: 0;
`;

const infoText = css`
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        width: calc((100% / 12) * 8);
        height: calc(100vh - 230px);
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
`;

const Introduction = () => {
    const router = useRouter();
    console.log(router);

    return (
        <ThemeProvider theme={theme}>
            <div css={introContainer}>
                <div css={theme.headerContainer}>
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
                <div css={theme.menuWheel}>
                    <img
                        src="../static/images/leftArrow.png"
                        alt="left_arrow"
                    ></img>
                    <div>
                        <div>
                            <span>Exploration</span>
                        </div>
                        <div>
                            <span>Introduction</span>
                        </div>
                        <div>
                            <div></div>
                            <span>Exploration</span>
                        </div>
                    </div>
                    <img
                        src="../static/images/rightArrow.png"
                        alt="right_arrow"
                    ></img>
                </div>
                <div css={[theme.downArrowBox, downArrowBoxStyle]}>
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
                <Footer bgColor={"#000"} color={"#fff"} />
            </div>
        </ThemeProvider>
    );
};

export default Introduction;
