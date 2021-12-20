import { useRef, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Footer from "../../../components/Footer";

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
    padding-left: 21px;
    padding-right: 21px;
    display: flex;
    align-items: center;
    justify-content: space-between;

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
    height: 100vh;
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

const InvitationOne = () => {
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
                <div css={infoText}>
                    <div>
                        <p style={{ color: "#fff" }}>Invitation 1</p>
                    </div>
                </div>
                <div css={bottomBanner}>
                    <p>PROJECT A</p>
                    <p>01</p>
                    <p>NAHYUN KIM</p>
                </div>
                <div css={invitationBox} ref={scrollRef}>
                    <div css={moreContainer}>
                        <div css={moreTextBox}>
                            <div>
                                <p css={theme.textKr}>
                                    초대 I: 지휘 수업指揮 受業을 위한 안내
                                </p>
                            </div>
                            <div>
                                <p css={theme.textKr}>
                                    Tom and Jerry in the Hollywood Bowl <br />
                                    <br />
                                    LINK: 『스코어 스코어』의 61쪽에서 언급되는
                                    장면. 살리에리가 모차르트의 악보를 훔쳐 보며
                                    상상 속의 음악을 듣다가 감명을 받아 악보를
                                    떨어트린다.
                                    <br />
                                    <br />
                                    작곡가에게 가장 중요한 덕목은 상상력일
                                    것이다. 작곡가가 창작하려는 음악은 오직 그의
                                    머릿속에만 있다. 작곡가가 음표를 그리기
                                    시작하면 지휘자도, 연주자도 모두 작곡가
                                    자신인 상상 속 오케스트라가 연주를 시작한다.
                                    작곡가는 이 오케스트라로 시뮬레이션을 거쳐
                                    악보를 완성한다. 전시 기획자가 기획서를
                                    작성하는 과정도 이와 비슷하다. 기획서는
                                    지금까지 한 번도 실현된 적 없는 미래를
                                    계시처럼 받아 적은 서류다. 전시장도,
                                    전시하려는 작품의 모습도 어느 정도는
                                    실제로부터 마모된 상태로 상상되지만,
                                    기획자는 머릿속에서 이 작품을 여기에, 저
                                    작품을 저기에 놓아 보며 기획서를 완성해
                                    간다. 이 과정에서 요구되는 덕목 또한
                                    무엇보다 상상력이다. 이렇게 작성된 기획서는
                                    전시에 참여하는 다른 많은 사람들, 작가들,
                                    그래픽 디자이너, 공간 설치 담당자, 전시장
                                    디렉터 등에게 전달되면서 공통의 논의를 위한
                                    토대가 된다. 기획서는 현실적인 요건들에
                                    맞추어 수정되기도 하고, 기획서가 유통되며
                                    다른 사람들의 의견이 반영되는 과정에서
                                    변형을 거치기도 한다. 그러나 어느 경우든
                                    기획서는 전시의 전체적인 방향을 설정하고
                                    주제를 바라보는 각자의 견해를 조율하는
                                    기준으로 작동한다. 이런 측면에서 바라보자면
                                    전시기획서는 전시의 스코어(score)라고 할 수
                                    있다. 음악에게 악보樂譜가, 퍼포먼스와
                                    무용에게 무보舞譜가 있다면, 전시에게는
                                    기획서가 있다. 전시기획서는 그 자신도 가
                                    보지 않은 길을 안내하는 나침반이면서 전시의
                                    보이지 않는 곳에서 은둔한다. <br />
                                    <br />
                                    LINK: Tom and Jerry, 52 Episode - Tom and
                                    Jerry in the Hollywood Bowl (1950)
                                    <br />
                                    <br />
                                    그러나 이 워크숍의 제목은 ‘작곡’ 수업이 아닌
                                    ‘지휘’ 수업이다. 기준으로 작동한다. 이런
                                    측면에서 바라보자면 전시기획서는 전시의
                                    스코어(score)라고 할 수 있다. 음악에게
                                    악보樂譜가, 퍼포먼스와 무용에게 무보舞譜가
                                    있다면, 전시에게는 기획서가 있다.
                                    전시기획서는 그 자신도 가 보지 않은 길을
                                    안내하는 나침반이면서 전시의 보이지 않는
                                    곳에서 은둔한다. LINK: Tom and Jerry, 52
                                    Episode - Tom and Jerry in the Hollywood
                                    Bowl (1950) 그러나 이 워크숍의 제목은 ‘작곡’
                                    수업이 아닌 ‘지휘’ 수업이다.{" "}
                                </p>
                            </div>
                        </div>
                        <div css={moreTextBox}>
                            <div>
                                <p css={theme.textEn}>
                                    Invitation I: A Guide to Conductor’s Lesson
                                </p>
                            </div>
                            <div>
                                <p css={theme.textEn}>
                                    ‘They are already here. You are next!’ The
                                    above line from the last scene of Invasion
                                    of the Body Snatcher (1956), a classic
                                    sci-fi classic in which extraterrestrial
                                    life takes over the body and conquers the
                                    Earth, tells us that while we sleep, the
                                    fear that a strange alien life will change
                                    our civilization. show symbolically. This
                                    phrase has been mainly interpreted as an
                                    allegory of McCarthyism, which was prevalent
                                    until the 1960s, but the fear of the unknown
                                    is still a sharp tool that adds
                                    discrimination and hierarchy. In 2021,
                                    society still calls certain groups
                                    ‘alien/species’ and defines them in the
                                    language of aggression and invasion. Society
                                    names and classifies them as beings that
                                    shake the foundations, impede commuting,
                                    pollute the streets, or waste valuable
                                    taxes. Pickets with the phrases of exile and
                                    quarantine block the border and divide the
                                    land. In 《Arecibo (tentative title)》,
                                    which consists of programs such as
                                    screening, performance, and workshops, we
                                    want to cross the code of closure and
                                    disconnection and examine our protocol to
                                    respond to the unfamiliar together. When I
                                    meet other beings, I ask not to teach the
                                    other person in the language of the victor,
                                    but to lay the foundation for understanding
                                    each other. The time and space that embodies
                                    the ‘third language’, not me and you, is the
                                    story I want to present in this exhibition.
                                    It is not that there have been no attempts
                                    in human history to ask strangers to speak
                                    to them. Arecibo, built in Puerto Rico in
                                    1963, was the largest radio observatory at
                                    the time, and in 1974 the first human
                                    message was launched into outer space.
                                    Characteristics considered to represent
                                    human history were converted into numbers,
                                    marked with images, and sent to outer space.
                                    It was a contact call of the species that
                                    human civilization exists towards the
                                    unknown. In 2020, 57 years after
                                    construction, Arecibo suddenly collapsed. As
                                    the remnants of huge wires and spheres fall,
                                    the floor that used to be a huge plate is
                                    collapsing, and the remnants of the desire
                                    for transmission are everywhere. On the
                                    other hand, after the corona virus spread
                                    around the world in the same year, the fear
                                    of infection due to contact increased the
                                    size of the poor imagination about “stranger
                                    beings” and amplified the hate and
                                    discrimination that existed between the
                                    gaps. This project connects the two
                                    viewpoints and imagines a spherical plate
                                    that can stand with otherized beings after
                                    the collapse of Arecibo. If Arecibo was
                                    closer to an anthropocentric utterance, we
                                    point Post-Arecibo into the Earth. Drawing,
                                    dismantling, erecting, driving, and
                                    programming of the second Arecibo after
                                    collapse must be imagined differently than
                                    before. In order to create a common language
                                    in it, we inevitably try to deviate from our
                                    original thinking by carefully comparing
                                    each other’s preferences. A musical score
                                    with a flexible movement that walks through
                                    the middle area by mobilizing all signals
                                    such as gestures, voices, colors, scents,
                                    and vibrations is a necessary tool for us. I
                                    look forward to being able to choose the
                                    gestures I need until the day I dream in the
                                    language of another being.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div css={moreContainer}>
                        <div css={moreTextBox}>
                            <div>
                                <p css={theme.textKr}>
                                    초대 I: 지휘 수업指揮 受業을 위한 안내
                                </p>
                            </div>
                            <div>
                                <p css={theme.textKr}>
                                    Tom and Jerry in the Hollywood Bowl <br />
                                    <br />
                                    LINK: 『스코어 스코어』의 61쪽에서 언급되는
                                    장면. 살리에리가 모차르트의 악보를 훔쳐 보며
                                    상상 속의 음악을 듣다가 감명을 받아 악보를
                                    떨어트린다.
                                    <br />
                                    <br />
                                    작곡가에게 가장 중요한 덕목은 상상력일
                                    것이다. 작곡가가 창작하려는 음악은 오직 그의
                                    머릿속에만 있다. 작곡가가 음표를 그리기
                                    시작하면 지휘자도, 연주자도 모두 작곡가
                                    자신인 상상 속 오케스트라가 연주를 시작한다.
                                    작곡가는 이 오케스트라로 시뮬레이션을 거쳐
                                    악보를 완성한다. 전시 기획자가 기획서를
                                    작성하는 과정도 이와 비슷하다. 기획서는
                                    지금까지 한 번도 실현된 적 없는 미래를
                                    계시처럼 받아 적은 서류다. 전시장도,
                                    전시하려는 작품의 모습도 어느 정도는
                                    실제로부터 마모된 상태로 상상되지만,
                                    기획자는 머릿속에서 이 작품을 여기에, 저
                                    작품을 저기에 놓아 보며 기획서를 완성해
                                    간다. 이 과정에서 요구되는 덕목 또한
                                    무엇보다 상상력이다. 이렇게 작성된 기획서는
                                    전시에 참여하는 다른 많은 사람들, 작가들,
                                    그래픽 디자이너, 공간 설치 담당자, 전시장
                                    디렉터 등에게 전달되면서 공통의 논의를 위한
                                    토대가 된다. 기획서는 현실적인 요건들에
                                    맞추어 수정되기도 하고, 기획서가 유통되며
                                    다른 사람들의 의견이 반영되는 과정에서
                                    변형을 거치기도 한다. 그러나 어느 경우든
                                    기획서는 전시의 전체적인 방향을 설정하고
                                    주제를 바라보는 각자의 견해를 조율하는
                                    기준으로 작동한다. 이런 측면에서 바라보자면
                                    전시기획서는 전시의 스코어(score)라고 할 수
                                    있다. 음악에게 악보樂譜가, 퍼포먼스와
                                    무용에게 무보舞譜가 있다면, 전시에게는
                                    기획서가 있다. 전시기획서는 그 자신도 가
                                    보지 않은 길을 안내하는 나침반이면서 전시의
                                    보이지 않는 곳에서 은둔한다. <br />
                                    <br />
                                    LINK: Tom and Jerry, 52 Episode - Tom and
                                    Jerry in the Hollywood Bowl (1950)
                                    <br />
                                    <br />
                                    그러나 이 워크숍의 제목은 ‘작곡’ 수업이 아닌
                                    ‘지휘’ 수업이다. 기준으로 작동한다. 이런
                                    측면에서 바라보자면 전시기획서는 전시의
                                    스코어(score)라고 할 수 있다. 음악에게
                                    악보樂譜가, 퍼포먼스와 무용에게 무보舞譜가
                                    있다면, 전시에게는 기획서가 있다.
                                    전시기획서는 그 자신도 가 보지 않은 길을
                                    안내하는 나침반이면서 전시의 보이지 않는
                                    곳에서 은둔한다. LINK: Tom and Jerry, 52
                                    Episode - Tom and Jerry in the Hollywood
                                    Bowl (1950) 그러나 이 워크숍의 제목은 ‘작곡’
                                    수업이 아닌 ‘지휘’ 수업이다.{" "}
                                </p>
                            </div>
                        </div>
                        <div css={moreTextBox}>
                            <div>
                                <p css={theme.textEn}>
                                    Invitation I: A Guide to Conductor’s Lesson
                                </p>
                            </div>
                            <div>
                                <p css={theme.textEn}>
                                    ‘They are already here. You are next!’ The
                                    above line from the last scene of Invasion
                                    of the Body Snatcher (1956), a classic
                                    sci-fi classic in which extraterrestrial
                                    life takes over the body and conquers the
                                    Earth, tells us that while we sleep, the
                                    fear that a strange alien life will change
                                    our civilization. show symbolically. This
                                    phrase has been mainly interpreted as an
                                    allegory of McCarthyism, which was prevalent
                                    until the 1960s, but the fear of the unknown
                                    is still a sharp tool that adds
                                    discrimination and hierarchy. In 2021,
                                    society still calls certain groups
                                    ‘alien/species’ and defines them in the
                                    language of aggression and invasion. Society
                                    names and classifies them as beings that
                                    shake the foundations, impede commuting,
                                    pollute the streets, or waste valuable
                                    taxes. Pickets with the phrases of exile and
                                    quarantine block the border and divide the
                                    land. In 《Arecibo (tentative title)》,
                                    which consists of programs such as
                                    screening, performance, and workshops, we
                                    want to cross the code of closure and
                                    disconnection and examine our protocol to
                                    respond to the unfamiliar together. When I
                                    meet other beings, I ask not to teach the
                                    other person in the language of the victor,
                                    but to lay the foundation for understanding
                                    each other. The time and space that embodies
                                    the ‘third language’, not me and you, is the
                                    story I want to present in this exhibition.
                                    It is not that there have been no attempts
                                    in human history to ask strangers to speak
                                    to them. Arecibo, built in Puerto Rico in
                                    1963, was the largest radio observatory at
                                    the time, and in 1974 the first human
                                    message was launched into outer space.
                                    Characteristics considered to represent
                                    human history were converted into numbers,
                                    marked with images, and sent to outer space.
                                    It was a contact call of the species that
                                    human civilization exists towards the
                                    unknown. In 2020, 57 years after
                                    construction, Arecibo suddenly collapsed. As
                                    the remnants of huge wires and spheres fall,
                                    the floor that used to be a huge plate is
                                    collapsing, and the remnants of the desire
                                    for transmission are everywhere. On the
                                    other hand, after the corona virus spread
                                    around the world in the same year, the fear
                                    of infection due to contact increased the
                                    size of the poor imagination about “stranger
                                    beings” and amplified the hate and
                                    discrimination that existed between the
                                    gaps. This project connects the two
                                    viewpoints and imagines a spherical plate
                                    that can stand with otherized beings after
                                    the collapse of Arecibo. If Arecibo was
                                    closer to an anthropocentric utterance, we
                                    point Post-Arecibo into the Earth. Drawing,
                                    dismantling, erecting, driving, and
                                    programming of the second Arecibo after
                                    collapse must be imagined differently than
                                    before. In order to create a common language
                                    in it, we inevitably try to deviate from our
                                    original thinking by carefully comparing
                                    each other’s preferences. A musical score
                                    with a flexible movement that walks through
                                    the middle area by mobilizing all signals
                                    such as gestures, voices, colors, scents,
                                    and vibrations is a necessary tool for us. I
                                    look forward to being able to choose the
                                    gestures I need until the day I dream in the
                                    language of another being.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer bgColor={"#000"} color={"#fff"} />
            </div>
        </ThemeProvider>
    );
};

export default InvitationOne;
