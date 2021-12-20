import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function TransitionLayout({ children }) {
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState("slideRight");

    useEffect(() => {
        setTransitionStage("slideLeft");
    }, []);

    useEffect(() => {
        if (children !== displayChildren) setTransitionStage("slideRight");
    }, [children, setDisplayChildren, displayChildren]);

    return (
        <div
            onAnimationEnd={() => {
                if (transitionStage === "slideRight") {
                    setDisplayChildren(children);
                    setTransitionStage("slideLeft");
                }
            }}
            className={transitionStage}
        >
            {displayChildren}
        </div>
    );
}
