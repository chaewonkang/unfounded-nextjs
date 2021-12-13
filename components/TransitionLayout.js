import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function TransitionLayout({ children }) {
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState("slideDown");

    useEffect(() => {
        setTransitionStage("slideUp");
    }, []);

    useEffect(() => {
        if (children !== displayChildren) setTransitionStage("slideDown");
    }, [children, setDisplayChildren, displayChildren]);

    return (
        <div
            onAnimationEnd={() => {
                if (transitionStage === "slideDown") {
                    setDisplayChildren(children);
                    setTransitionStage("slideUp");
                }
            }}
            className={transitionStage}
        >
            {displayChildren}
        </div>
    );
}
