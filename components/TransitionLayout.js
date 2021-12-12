import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function TransitionLayout({ children }) {
    const router = useRouter();
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState("slideDown");
    const excludePage = ["/"];

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
                    window.scrollTo({
                        left: 0,
                        top: 0,
                        behavior: "smooth",
                    });
                }
            }}
            className={transitionStage}
        >
            {displayChildren}
        </div>
    );
}
