<div css={invitationBox} style={{ backgroundColor: "#000", color: "#fff" }}>
    <div css={theme.marquee}>
        <div css={marqueeBox1}>
            <span style={{ color: "#fff" }}>
                INVITATION II: Text Babel INVITATION II: Text Babel INVITATION II: Text Babel&nbsp;
            </span>
        </div>
        <div css={marqueeBox2}>
            <span style={{ color: "#fff" }}>
                &nbsp;&nbsp; INVITATION II: Text Babel INVITATION II: Text Babel INVITATION II: Text Babel
            </span>
        </div>
    </div>
    <div css={invitationTextBox}>
        <div css={invitationText1}>
            <div css={theme.textKr}>
                <p style={{ fontWeight: "bold" }}>초대 I:</p>
                <p>손님</p>
            </div>
            <div css={theme.textKr}>
                <p style={{ fontWeight: "bold" }}>지휘 수업</p>
                <p>유진영, 이미지, 이솜이, 이지우 </p>
            </div>
            <div css={theme.textEn}>
                <p style={{ fontWeight: "bold" }}>Invitation I:</p>
                <p>invitee</p>
            </div>
            <div css={theme.textEn}>
                <p style={{ fontWeight: "bold" }}>Conductor’s Lesson</p>
                <p>Jinyoung Yoo, Miji Lee, Somi Lee, Jiwoo Lee</p>
            </div>
        </div>
        <div css={invitationText2}>
            <div>
                <p css={theme.textKr}>
                    미술 전시 기획자 6인이 모여 픽션-전시의 기획서를 작성한다. 생산될 전시 기획서의 형식에는 따로 제한을
                    두지 않으며 일반적인 전시 기획서부터 이미지 아카이브까지, 각자의 주제에 맞는 형식을 채택하기로 한다.
                    이때, 픽션-전시란 픽션으로만 존재할 수 있는 전시, 그 자체로 픽션을 생산하는 전시, 픽션을 주제로
                    차용하는 전시 등 다양할 수 있다. 이를 통해 전시의 스코어인 전시 기획서와 픽션의 관계를 재고한다.
                </p>
                <p css={theme.textEn}>
                    Six art exhibition planners gather to write a fiction-exhibition plan. There are no restrictions on
                    the format of the exhibition plan to be produced, and it is decided to adopt a format suitable for
                    each subject, from general exhibition plans to image archives. At this time, fiction-exhibition can
                    be diverse, such as an exhibition that can exist only as fiction, an exhibition that produces
                    fiction itself, and an exhibition that borrows fiction as a theme. Through this, the relationship
                    between the exhibition plan.
                </p>
            </div>
            <div>
                <span
                    onClick={() => {
                        // el.index
                        setIsMoreOpen2({
                            bool: !isMoreOpen2.bool,
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
    {isMoreOpen2 && isMoreOpen2.bool === true && (
        <div
            css={moreContainer}
            style={{
                backgroundColor: "#000",
                color: "#fff",
            }}
        >
            <div css={moreTextBox}>
                <div>
                    <p css={theme.textKr}>초대 I: 지휘 수업指揮 受業을 위한 안내</p>
                </div>
                <div>
                    <p css={theme.textKr}>
                        Tom and Jerry in the Hollywood Bowl
                        <br />
                        <br />
                        LINK: 『스코어 스코어』의 61쪽에서 언급되는 장면. 살리에리가 모차르트의 악보를 훔쳐 보며 상상
                        속의 음악을 듣다가 감명을 받아 악보를 떨어트린다.
                        <br />
                        <br />
                        작곡가에게 가장 중요한 덕목은 상상력일 것이다. 작곡가가 창작하려는 음악은 오직 그의 머릿속에만
                        있다. 작곡가가 음표를 그리기 시작하면 지휘자도, 연주자도 모두 작곡가 자신인 상상 속 오케스트라가
                        연주를 시작한다. 작곡가는 이 오케스트라로 시뮬레이션을 거쳐 악보를 완성한다. 전시 기획자가
                        기획서를 작성하는 과정도 이와 비슷하다. 기획서는 지금까지 한 번도 실현된 적 없는 미래를 계시처럼
                        받아 적은 서류다. 전시장도, 전시하려는 작품의 모습도 어느 정도는 실제로부터 마모된 상태로
                        상상되지만, 기획자는 머릿속에서 이 작품을 여기에, 저 작품을 저기에 놓아 보며 기획서를 완성해
                        간다. 이 과정에서 요구되는 덕목 또한 무엇보다 상상력이다. 이렇게 작성된 기획서는 전시에 참여하는
                        다른 많은 사람들, 작가들, 그래픽 디자이너, 공간 설치 담당자, 전시장 디렉터 등에게 전달되면서
                        공통의 논의를 위한 토대가 된다. 기획서는 현실적인 요건들에 맞추어 수정되기도 하고, 기획서가
                        유통되며 다른 사람들의 의견이 반영되는 과정에서 변형을 거치기도 한다. 그러나 어느 경우든
                        기획서는 전시의 전체적인 방향을 설정하고 주제를 바라보는 각자의 견해를 조율하는 기준으로
                        작동한다. 이런 측면에서 바라보자면 전시기획서는 전시의 스코어(score)라고 할 수 있다. 음악에게
                        악보樂譜가, 퍼포먼스와 무용에게 무보舞譜가 있다면, 전시에게는 기획서가 있다. 전시기획서는 그
                        자신도 가 보지 않은 길을 안내하는 나침반이면서 전시의 보이지 않는 곳에서 은둔한다. <br />
                        <br />
                        LINK: Tom and Jerry, 52 Episode - Tom and Jerry in the Hollywood Bowl (1950)
                        <br />
                        <br />
                        그러나 이 워크숍의 제목은 ‘작곡’ 수업이 아닌 ‘지휘’ 수업이다. 기준으로 작동한다. 이런 측면에서
                        바라보자면 전시기획서는 전시의 스코어(score)라고 할 수 있다. 음악에게 악보樂譜가, 퍼포먼스와
                        무용에게 무보舞譜가 있다면, 전시에게는 기획서가 있다. 전시기획서는 그 자신도 가 보지 않은 길을
                        안내하는 나침반이면서 전시의 보이지 않는 곳에서 은둔한다. LINK: Tom and Jerry, 52 Episode - Tom
                        and Jerry in the Hollywood Bowl (1950) 그러나 이 워크숍의 제목은 ‘작곡’ 수업이 아닌 ‘지휘’
                        수업이다.{" "}
                    </p>
                </div>
            </div>
            <div css={moreTextBox}>
                <div>
                    <p css={theme.textEn}>Invitation I: A Guide to Conductor’s Lesson</p>
                </div>
                <div>
                    <p css={theme.textEn}>
                        ‘They are already here. You are next!’ The above line from the last scene of Invasion of the
                        Body Snatcher (1956), a classic sci-fi classic in which extraterrestrial life takes over the
                        body and conquers the Earth, tells us that while we sleep, the fear that a strange alien life
                        will change our civilization. show symbolically. This phrase has been mainly interpreted as an
                        allegory of McCarthyism, which was prevalent until the 1960s, but the fear of the unknown is
                        still a sharp tool that adds discrimination and hierarchy. In 2021, society still calls certain
                        groups ‘alien/species’ and defines them in the language of aggression and invasion. Society
                        names and classifies them as beings that shake the foundations, impede commuting, pollute the
                        streets, or waste valuable taxes. Pickets with the phrases of exile and quarantine block the
                        border and divide the land. In 《Arecibo (tentative title)》, which consists of programs such as
                        screening, performance, and workshops, we want to cross the code of closure and disconnection
                        and examine our protocol to respond to the unfamiliar together. When I meet other beings, I ask
                        not to teach the other person in the language of the victor, but to lay the foundation for
                        understanding each other. The time and space that embodies the ‘third language’, not me and you,
                        is the story I want to present in this exhibition. It is not that there have been no attempts in
                        human history to ask strangers to speak to them. Arecibo, built in Puerto Rico in 1963, was the
                        largest radio observatory at the time, and in 1974 the first human message was launched into
                        outer space. Characteristics considered to represent human history were converted into numbers,
                        marked with images, and sent to outer space. It was a contact call of the species that human
                        civilization exists towards the unknown. In 2020, 57 years after construction, Arecibo suddenly
                        collapsed. As the remnants of huge wires and spheres fall, the floor that used to be a huge
                        plate is collapsing, and the remnants of the desire for transmission are everywhere. On the
                        other hand, after the corona virus spread around the world in the same year, the fear of
                        infection due to contact increased the size of the poor imagination about “stranger beings” and
                        amplified the hate and discrimination that existed between the gaps. This project connects the
                        two viewpoints and imagines a spherical plate that can stand with otherized beings after the
                        collapse of Arecibo. If Arecibo was closer to an anthropocentric utterance, we point
                        Post-Arecibo into the Earth. Drawing, dismantling, erecting, driving, and programming of the
                        second Arecibo after collapse must be imagined differently than before. In order to create a
                        common language in it, we inevitably try to deviate from our original thinking by carefully
                        comparing each other’s preferences. A musical score with a flexible movement that walks through
                        the middle area by mobilizing all signals such as gestures, voices, colors, scents, and
                        vibrations is a necessary tool for us. I look forward to being able to choose the gestures I
                        need until the day I dream in the language of another being.
                    </p>
                </div>
            </div>
        </div>
    )}
    <div css={sliderContainer}>
        <div css={sliderArrow}>
            <div
                onClick={() => {
                    if (index === 0) {
                        setIndex2(1);
                    } else if (index === 1) {
                        setIndex2(0);
                    } else if (index2 < invitation2.length / 3 - 1) {
                        setIndex2(index2 - 1);
                    }
                }}
            >
                <img src="/static/images/sliderLeft.png" />
            </div>
            <div
                onClick={() => {
                    if (index2 < invitation2.length / 3 - 1) {
                        setIndex2(index2 + 1);
                    } else if (index2 == invitation2.length / 3 - 1) setIndex2(0);
                    else if (index2 == 1) setIndex2(0);
                }}
            >
                <img src="/static/images/sliderRight.png" />
            </div>
        </div>
        <div
            css={sliderWrapper}
            style={{
                transform: `translate3d(${-index2 * 100}%, 0, 0)`,
            }}
        >
            {invitation2.map(el => {
                return (
                    <div>
                        <img src={el.src} />
                        <div css={slideText}>
                            <span css={[theme.textKr, theme.textEn]}>{el.title}</span>
                            <span css={[theme.textKr, theme.textEn]}>{el.partici}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
</div>;
