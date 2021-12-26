import { useRef, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";
import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Footer from "../../../components/Footer";
import InvitationOneData from "../../../data/InvitationOneData";

const sliderArrow = css`
    position: absolute;
    width: 100vw;
    height: 70px;
    top: calc(50vh - 35px);
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;

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

const sliderContainer = css`
    width: 100vw;
    height: calc(100vh - 48px);
    overflow: hidden;
    display: flex;
    padding-bottom: 21px;
    position: relative;

    @media (max-width: 781px) {
        display: none;
    }
`;

const sliderWrapper = css`
    width: 100vw;
    height: 100%;
    display: inline-block;
    position: absolute;
    z-index: 2;
    white-space: nowrap;
    transition: ease 1000ms;

    & > div {
        height: 100vh;
        width: 100vw;
        display: inline-block;
    }
`;

const sliderBGWrapper = css`
    width: 100vw;
    height: 100%;
    display: inline-block;
    position: absolute;
    z-index: 1;
    white-space: nowrap;

    transition: ease 1000ms;

    & > div {
        height: 100vh;
        width: 100vw;

        display: inline-block;
        flex-direction: column;
    }
`;

const sliderContent = css`
    width: 100vw;
    height: calc(100vh - 48px);
    padding-top: 169px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const sliderContentWrapper = css`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const iframeContainer = css`
    width: calc((100% / 12) * 8);
    height: 90%;
    position: relative;
`;

const iframeWrapper = css`
    width: 100%;
    height: 100%;
    transition: ease 1000ms;
`;

const startImageWrapper = css`
    width: 100%;
    height: 100%;

    & > div:first-of-type {
        width: 100%;
        height: 100%;

        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

const slideText = css`
    width: calc((100% / 12) * 8);
    display: flex;
    white-space: pre-wrap;
    word-break: keep-all;

    p {
        width: 100%;
        margin-top: 27px;
        text-align: center;
    }
`;

const introContainer = css`
    position: relative;
    top: 0;
    width: 100vw;
    height: 100vh;
`;

const bottomBannerContainer = css`
    width: 100%;
    position: relative;
    bottom: 0;
    overflow: hidden;
    height: 48px;
    background-color: #fff;
    display: inline-block;
`;

const bottomBannerWrapper = css`
    width: 100%;
    height: 100%;
    display: inline-block;
    white-space: nowrap;

    transition: ease 1000ms;

    & > div {
        margin-left: 21px;
        margin-right: 21px;
        width: calc(100% - 42px);
        height: 100%;
        display: inline-block;

        div {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            position: relative;

            p {
                width: calc(100% / 3);
                font-size: 32px;
                font-family: PP Neue Montreal Book, sans-serif;
                letter-spacing: 0.1px;
                margin-top: 3px;
                text-transform: uppercase;
            }

            p:nth-of-type(2) {
                text-align: center;
            }

            p:last-of-type {
                text-align: right;
                text-transform: uppercase;
            }
        }
    }

    @media (max-width: 781px) {
        height: 32px;
        p {
            font-size: 15px;
        }
    }
`;

const EachTextBox = css`
    width: 100vw;
    height: auto;
    background-color: #ff9d46;
    margin-top: -10px;

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

const moreContainer = css`
    border-top: 1px solid #000;
    width: 100%;
    height: auto;
    transition: 3s ease-in;
    display: flex;
`;

const ArtistInfoBox = css`
    width: 100%;
    height: 100%;
    word-break: keep-all;
    display: inline-block;
    overflow: hidden;
`;

const ArtistInfoText = css`
    width: 100%;
    height: 100%;
    display: inline-block;
    transition: ease 1000ms;
    white-space: nowrap;

    & > div {
        width: 100%;
        display: inline-block;
    }
`;

const ArtistInfoTextContent = css`
    width: 100%;
    display: flex;
    white-space: pre-wrap;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;

    & > div {
        width: calc(50% - 9px);
        display: flex;

        & > p:first-of-type {
            width: calc((100% / 6) * 2);
            max-width: calc((100% / 6) * 2);
            padding-right: 9px;
        }

        & > p:last-of-type {
            width: calc((100% / 6) * 4);
            max-width: calc((100% / 6) * 4);
            oberflow: auto;
            padding-right: 9px;
        }
    }

    & > div:first-of-type {
        margin-right: 9px;
    }

    & > div:last-of-type {
        margin-left: 9px;
    }
`;

const marquee = css`
    position: absolute;
    width: 100%;

    top: calc(50% - 43px);
    overflow: hidden;
    padding-top: 10px;
    white-space: nowrap;
    font-family: "GTFAgentur", serif;
    font-size: 86px;
    color: #ff9d46;
`;

const marqueeBox1 = css`
    display: inline-block;
    animation: marquee 20s linear infinite;
`;

const marqueeBox2 = css`
    display: inline-block;
    animation: marquee2 20s linear infinite;
    animation-delay: 10s;
`;

const introductionContainer = css`
    width: 100%;
    height: auto;
    border-top: 1px solid #000;
    overflow: auto;
    word-break: keep-all;

    & > div {
        width: 100%;
        height: 100%;

        p {
            overflow: auto;
        }
    }
`;

const InvitationOne = () => {
    const router = useRouter();
    const [index, setIndex] = useState(0);
    const [coverIsShow, setCoverIsShow] = useState({
        index: 0,
        open: false,
    });

    const scrollRef = useRef(null);
    const [isMoreOpen, setIsMoreOpen] = useState({
        bool: false,
        index: 0,
    });

    useEffect(() => {}, [isMoreOpen, coverIsShow]);

    return (
        <ThemeProvider theme={theme}>
            <div css={introContainer}>
                <div css={sliderContainer}>
                    <div css={sliderArrow}>
                        <div
                            onClick={() => {
                                setCoverIsShow({ index: 0 });
                                if (index === 0) {
                                    setIndex(InvitationOneData.length - 1);
                                } else if (index === 1) {
                                    setIndex(0);
                                } else if (index < InvitationOneData.length - 1) {
                                    setIndex(index - 1);
                                } else {
                                    setIndex(index - 1);
                                }
                            }}
                        >
                            <img src="/static/images/sliderLeft.png" />
                        </div>
                        <div
                            onClick={() => {
                                setCoverIsShow({
                                    index: 0,
                                });

                                if (index < InvitationOneData.length - 1) {
                                    setIndex(index + 1);
                                } else if (index == InvitationOneData.length - 1) setIndex(0);
                                else if (index == 1) setIndex(index + 1);
                            }}
                        >
                            <img src="/static/images/sliderRight.png" />
                        </div>
                    </div>
                    <div
                        css={sliderBGWrapper}
                        style={{
                            transform: `translate3d(${(InvitationOneData.length * 100 - index * 100) * -1}%, 0, 0)`,
                            backgroundColor: "red",
                        }}
                    >
                        {InvitationOneData.map(el => {
                            return (
                                <div>
                                    <div
                                        css={sliderContent}
                                        style={
                                            (InvitationOneData.indexOf(el) + 1) % 2 === 1
                                                ? {
                                                      backgroundColor: "#000",
                                                  }
                                                : { backgroundColor: "#FF9D46" }
                                        }
                                    ></div>
                                </div>
                            );
                        })}
                    </div>
                    <div
                        css={sliderWrapper}
                        style={{
                            transform: `translate3d(${-index * 100}%, 0, 0)`,
                        }}
                    >
                        {InvitationOneData.map(el => {
                            return (
                                <div>
                                    <div css={sliderContent}>
                                        <div css={sliderContentWrapper}>
                                            <div css={iframeContainer}>
                                                {coverIsShow.index === el.index + 1 ? (
                                                    <div css={iframeWrapper}>
                                                        <iframe
                                                            width="100%"
                                                            style={{
                                                                height: "56vh",
                                                                zIndex: 30,
                                                            }}
                                                            src={el.iframeSrc}
                                                            frameBorder="0"
                                                            scrolling="no"
                                                            allowFullScreen
                                                        ></iframe>
                                                    </div>
                                                ) : (
                                                    <div
                                                        css={startImageWrapper}
                                                        onClick={() => {
                                                            setCoverIsShow({
                                                                index: el.index + 1,
                                                            });
                                                        }}
                                                    >
                                                        <div>
                                                            <img src={el.src} />
                                                            <div css={marquee}>
                                                                <div css={marqueeBox1}>
                                                                    <span>
                                                                        CLICK to START CLICK to START CLICK to START
                                                                        CLICK to START CLICK to START CLICK to START
                                                                        CLICK to START &nbsp; &nbsp;
                                                                    </span>
                                                                </div>
                                                                <div css={marqueeBox2}>
                                                                    <span>
                                                                        CLICK to START CLICK to START CLICK to START
                                                                        CLICK to START CLICK to START CLICK to START
                                                                        CLICK to START &nbsp; &nbsp;
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>{" "}
                                                    </div>
                                                )}
                                            </div>
                                            <div css={slideText}>
                                                <p css={[theme.textKr]}>
                                                    {el.artistInfoKr.slice(0, el.artistInfoKr.indexOf("."))}.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div css={bottomBannerContainer}>
                    <div
                        css={bottomBannerWrapper}
                        style={{
                            transform: `translate3d(${-index * 100}%, 0, 0)`,
                        }}
                    >
                        {InvitationOneData.map(el => {
                            return (
                                <div>
                                    <div>
                                        <p>{el.title}</p>
                                        <p>{el.no}</p>
                                        <p>{el.particiEn}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div css={EachTextBox} ref={scrollRef}>
                    <div css={moreContainer}>
                        <div css={ArtistInfoBox}>
                            <div
                                css={ArtistInfoText}
                                style={{
                                    transform: `translate3d(${-index * 100}%, 0, 0)`,
                                }}
                            >
                                {InvitationOneData.map(el => {
                                    return (
                                        <div>
                                            <div css={ArtistInfoTextContent}>
                                                <div>
                                                    <p css={theme.textKr} style={{ fontWeight: "bold" }}>
                                                        {el.particiKr}
                                                    </p>
                                                    <p css={theme.textKr}>{el.artistInfoKr}</p>
                                                </div>
                                                <div>
                                                    <p css={theme.textEn} style={{ fontWeight: "bold" }}>
                                                        {el.particiEn}
                                                    </p>
                                                    <p css={theme.textEn}>{el.artistInfoEn}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}{" "}
                            </div>
                        </div>
                    </div>
                    <div css={introductionContainer}>
                        <div>
                            <div css={ArtistInfoTextContent}>
                                <div>
                                    <p css={theme.textKr} style={{ fontWeight: "bold" }}>
                                        초대 I: 지휘 수업 指揮 受業{" "}
                                    </p>
                                    <p css={theme.textKr}>
                                        <span style={{ fontWeight: "bold" }}>Tom and Jerry in the Hollywood Bowl</span>
                                        <br />
                                        <br />
                                        <span style={{ textDecoration: "underline" }}>
                                            <a href="https://www.youtube.com/watch?v=th_ro9CiASc" target="_blank">
                                                『스코어 스코어』의 61쪽에서 언급되는 장면. 살리에리가 모차르트의 악보를
                                                훔쳐 보며 상상 속의 음악을 듣다가 감명을 받아 악보를 떨어트린다.
                                            </a>
                                        </span>
                                        <br />
                                        <br />
                                        “요한 세바스티안 바흐는 눈으로만 들을 수 있는 두 개의 줄로 연결된 온음표와
                                        이분음표를 기보하기를 좋아했다.” (파스칼 키냐르) <br /> <br /> 작곡가에게 가장
                                        중요한 덕목은 상상력일 것이다. 작곡가가 창작하려는 음악은 오직 그의 머릿속에만
                                        있다. 작곡가가 음표를 그리기 시작하면 지휘자도, 연주자도 모두 작곡가 자신인 상상
                                        속 오케스트라가 연주를 시작한다. 작곡가는 이 오케스트라로 시뮬레이션을 거쳐
                                        악보를 완성한다. 전시 기획자가 기획서를 작성하는 과정도 이와 비슷하다. 기획서는
                                        지금까지 한 번도 실현된 적 없는 미래를 계시처럼 받아 적은 서류다. 전시장도,
                                        전시하려는 작품의 모습도 어느 정도는 실제로부터 마모된 상태로 상상되지만,
                                        기획자는 머릿속에서 이 작품을 여기에, 저 작품을 저기에 놓아 보며 기획서를 완성해
                                        간다. 이 과정에서 요구되는 덕목 또한 무엇보다 상상력이다. <br />
                                        <br /> 이렇게 작성된 기획서는 전시에 참여하는 다른 많은 사람들, 작가들, 그래픽
                                        디자이너, 공간 설치 담당자, 전시장 디렉터 등에게 전달되면서 공통의 논의를 위한
                                        토대가 된다. 기획서는 현실적인 요건들에 맞추어 수정되기도 하고, 기획서가
                                        유통되며 다른 사람들의 의견이 반영되는 과정에서 변형을 거치기도 한다. 그러나
                                        어느 경우든 기획서는 전시의 전체적인 방향을 설정하고 주제를 바라보는 각자의
                                        견해를 조율하는 기준으로 작동한다. 이런 측면에서 바라보자면 전시기획서는 전시의
                                        스코어(score)라고 할 수 있다. 음악에게 악보樂譜가, 퍼포먼스와 무용에게
                                        무보舞譜가 있다면, 전시에게는 기획서가 있다. 전시기획서는 그 자신도 가 보지 않은
                                        길을 안내하는 나침반이면서 전시의 보이지 않는 곳에서 은둔한다. <br /> <br />
                                        <span style={{ textDecoration: "underline" }}>
                                            <a href="https://www.youtube.com/watch?v=aRMzrZ8qm4A" target="_blank">
                                                Tom and Jerry, 52 Episode - Tom and Jerry in the Hollywood Bowl (1950)
                                            </a>
                                        </span>
                                        <br /> <br />
                                        그러나 이 초대의 제목은 ‘작곡’ 수업이 아닌 ‘지휘’ 수업이다. <br /> <br />
                                        <span style={{ fontWeight: "bold" }}>지휘 수업</span> <br /> <br /> “작곡가가
                                        2분음표를 길이로 어떤 악기 소리를 듣고 싶다고 가정해봐요. 오케스트라의 성질을
                                        이해하지 못하는 작곡가는 2분음표를 그대로 쓰겠죠. 본인의 머릿속에서 듣는 것만
                                        기록할 테니까요. 그렇지만 실제 연주로 2분음표의 음가를 들으려면, 악보에는 조금
                                        더 길게 써야만 그렇게 들려요. 지휘를 경험한 작곡가는 오케스트라의 특성과 심리를
                                        더 세밀하게 파악할 수 있어요. 그래서 오케스트레이션을 할 때도 더 쉽게 상상하고
                                        구현해낼 수 있기도 하죠. 작곡가는 그저 소리만 다루는 것이 아니라 연주자의
                                        심리까지도 창작 과정에 포함을 시켜야 해요.”
                                        (https://thestrings.kr/2018/11/18/jaehyuck_choi/ : 링크가 폐쇄됨) <br /> <br />
                                        이는 기획자의 일이 그냥 생산보다는 재구성이나 재생산에 더 가깝기 때문일 것이다.
                                        지휘자가 악단의 경영과 행정에 관계하는 경우가 있는 것처럼 기획자는 전시 기획뿐만
                                        아니라 전시 경영과 행정에도 시간을 할애한다. 나아가 지휘자가 실연을 목적으로 곡
                                        연구를 진행하는 것처럼 기획자도 전시를 구현하는 것을 목적으로 기획서를 작성한다.
                                        이때부터는 상상력보다 상상한 것을 현실로 소환하는 과정에서 발생하는 사건들을
                                        극복하는 끈기가 더 중요해지기도 한다. <br /> <br /> 〈초대 I: 지휘 수업〉은
                                        실현하고자 하는 혹은 실현에 구애 받지 않는 전시기획서를 쓰는 워크숍이다. 그러나
                                        실현 가능성을 염두에 두기보다는 기획서를 작성하는 과정과 작성된 기획서의 확장
                                        가능성을 탐구하는 데에 조금 더 무게를 둔다. 특히 심사를 염두에 둔 기획서 작성을
                                        위한 정확하고 명료한 문장, 깔끔하기만 한 정보 배치, 실현 가능성에 대한 의심에
                                        익숙해지다 보면 머릿속에서 흥미롭고 재미있었던 전시도 어쩐지 따분해진 것 같은
                                        기분을 떨칠 수 없어진다. 이 규격을 벗어나 기 위해 〈지휘 수업〉을 마련하였다.
                                        여러분은 이 기획서를 읽기보다 보게 될 것이다. 이때 각 기획서는 전시를 위한 예비
                                        서류라기보다는 독립적으로 기능할지도 모른다. 〈지휘 수업〉의 기획서들이 구상하는
                                        전시에는 머리로만 볼 수 있는 부분이 있다. 많은 위대한 작곡가들이 관객에게 들리지
                                        않을 여백에 그림을 그려 넣었던 것처럼 말이다.
                                    </p>
                                </div>
                                <div>
                                    <p css={theme.textEn} style={{ fontWeight: "bold" }}>
                                        Invitation I: Conductor’s Lesson
                                    </p>
                                    <p css={theme.textEn}>
                                        <span style={{ fontWeight: "bold" }}>Tom and Jerry in the Hollywood Bowl</span>
                                        <br />
                                        <br />
                                        <span style={{ textDecoration: "underline" }}>
                                            <a href="https://www.youtube.com/watch?v=th_ro9CiASc" target="_blank">
                                                The video above is a scene mentioned in Score Score page 61. Salieri
                                                peeps and drops Mozart's score, impressed by imaginary music in his own
                                                head.
                                            </a>
                                        </span>
                                        <br />
                                        <br />
                                        “Even for strings, Johann Sebastian Bach liked to write whole and half notes
                                        that were linked two strings apart that could be audible only to the eye.”
                                        (Pascal Quignard) <br />
                                        <br /> The most important virtue for a composer would be imagination. The music
                                        that the composer creates only exists in her or his head. When the composer
                                        begins to draw notes, an imaginative orchestra, constituted of conductor and
                                        performer all herself/himself, starts the music. The composer finishes her/his
                                        score through the simulation of the orchestra. This process is similar to how an
                                        exhibition curator writes a proposal. A curatorial proposal is a document that
                                        marks a prognostication of an unrealized future. The curator depends on
                                        imagination where his or her exhibition space and artwork are not specific as
                                        reality, and finishes the proposal by placing artworks here and there.
                                        Imagination, again, is the most crucial virtue here. <br />
                                        <br />
                                        Then the proposal wanders to different agencies, artists, a graphic designer, an
                                        installation team, an exhibition space director, becoming a foundation for
                                        communal discussion. The proposal is modified to meet realistic requirements or
                                        transformed in the distribution process of reflecting different opinions.
                                        However, in either case, the proposal serves as a criterion setting the overall
                                        direction of the exhibition, coordinating each individual’s viewpoint. In this
                                        regard, the curatorial proposal is a ‘score’ of the exhibition. A proposal
                                        stands for an exhibition when there is a score for music, labanotation for
                                        performance, and dance. The proposal is a compass that guides the unknown path
                                        and hides in the concealed site of the exhibition. <br />
                                        <br />
                                        <span style={{ textDecoration: "underline" }}>
                                            <a href="https://www.youtube.com/watch?v=aRMzrZ8qm4A" target="_blank">
                                                Tom and Jerry, 52 Episode - Tom and Jerry in the Hollywood Bowl (1950)
                                            </a>
                                        </span>
                                        <br />
                                        <br />
                                        Nevertheless, the invitation is called the ‘conductor’s’ lesson, not the
                                        ‘composer’ lesson.
                                        <br />
                                        <br /> <span style={{ fontWeight: "bold" }}>Conductor’s lesson</span>
                                        <br />
                                        <br /> "Suppose the composer wants to hear a musical instrument with a half
                                        note. If the composer does not understand the nature of the orchestra, she/he
                                        will use the half note as it is. Though to hear the sound of the half note in
                                        the actual play, the note should be written a little longer on the score. A
                                        composer who has experience conducting can delicately understand the orchestra's
                                        characteristics and mind. It helps with easier imagination and performance when
                                        orchestrated. Composers should not only deal with sound but also include the
                                        mind of the performer in the creation."
                                        (https://thestrings.kr/2018/11/18/jaehyuck_choi/: link closed) <br />
                                        <br /> Curator's practice is closer to reconstruction or reproduction than mere
                                        production. Similar to where the conductor involves the orchestra's management
                                        and administration, the curator also spends their time managing and
                                        administrating exhibitions besides exhibition curation. Moreover, in the same
                                        manner, as the conductor researches music to perform, the curator also drafts
                                        the proposal for realizing the exhibition. On some occasions, persistence in
                                        solving incidents amidst recalling the imagination into reality becomes more
                                        vital than imagination. <br />
                                        <br /> The invitation I: Conductor's Lesson is a workshop writing an exhibition
                                        proposal independent from the realization. The workshop emphasizes the process
                                        of writing down the proposal and the expansion of contemplating the finished
                                        proposal rather than the feasibility. Throughout developing a proposal for
                                        application with accurate and precise sentences, well-organized information,
                                        repeatedly doubting the feasibility, it is difficult to shake off the boredom of
                                        the exhibition that was initially intriguing in mind. The Conductor's Lesson was
                                        prepared to avoid these standards. Audiences will look rather than read
                                        proposals. Each proposal may separately exist rather than a preliminary document
                                        of the exhibition. Among proposals in Conductor's Lesson, some parts can only be
                                        visited through imagination, as if great composers doodled in a blank margin
                                        that the audience would not hear.
                                    </p>
                                </div>
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
