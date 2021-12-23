import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const menuArr = [
    "/introduction",
    "/invitation/1",
    "/invitation/2",
    "/invitation/3",
    "/exploration",
];

export default function TransitionLayout({ children }) {
    const [displayChildren, setDisplayChildren] = useState(children);
    const router = useRouter();
    const [prevRouter, setPrevRouter] = useState("");
    const storage = globalThis?.sessionStorage;

    const [transitionStage, setTransitionStage] = useState("slideUp");

    useEffect(() => storePathValues(storage), [router.asPath]);

    function storePathValues(storage) {
        if (!storage) return;
        // Set the previous path as the value of the current path.
        const prevPath = storage.getItem("currentPath");
        storage.setItem("prevPath", prevPath);
        // Set the current path value by looking at the browser's location object.
        storage.setItem("currentPath", globalThis.location.pathname);

        console.log("---------------------");
        console.log(
            `currPath: ${menuArr.indexOf(storage.getItem("currentPath"))}`,
        );
        console.log(
            `prevPath: ${menuArr.indexOf(storage.getItem("prevPath"))}`,
        );
        console.log("---------------------");
    }

    useEffect(() => {
        setTransitionStage("slideUp");
        console.log(transitionStage);
    }, []);

    useEffect(() => {
        if (children !== displayChildren) {
            setTransitionStage("slideDown");
        }
    }, [children, setDisplayChildren, displayChildren]);

    return (
        <div
            onAnimationEnd={() => {
                setDisplayChildren(children);
                setTransitionStage("slideUp");
            }}
            className={transitionStage}
        >
            {displayChildren}
        </div>
    );
}

// export default function TransitionLayout({ children }) {
//     const [displayChildren, setDisplayChildren] = useState(children);
//     const router = useRouter();
//     const [prevRouter, setPrevRouter] = useState("");
//     const storage = globalThis?.sessionStorage;

//     const [transitionStage, setTransitionStage] = useState("slideUp");

//     useEffect(() => storePathValues(storage), [router.asPath]);

//     function storePathValues(storage) {
//         if (!storage) return;
//         // Set the previous path as the value of the current path.
//         const prevPath = storage.getItem("currentPath");
//         storage.setItem("prevPath", prevPath);
//         // Set the current path value by looking at the browser's location object.
//         storage.setItem("currentPath", globalThis.location.pathname);

//         console.log("---------------------");
//         console.log(
//             `currPath: ${menuArr.indexOf(storage.getItem("currentPath"))}`,
//         );
//         console.log(
//             `prevPath: ${menuArr.indexOf(storage.getItem("prevPath"))}`,
//         );
//         console.log("---------------------");
//     }

//     useEffect(() => {
//         if (router.pathname === "/") setTransitionStage("");
//         else setTransitionStage("slideLeft");
//         console.log(transitionStage);
//     }, []);

//     useEffect(() => {
//         if (children !== displayChildren) {
//             if (router.pathname === "/" || router.pathname === "/introduction")
//                 setTransitionStage("slideDown");
//             else setTransitionStage("slideRight");
//         }
//     }, [children, setDisplayChildren, displayChildren]);

//     return (
//         <div
//             onAnimationEnd={() => {
//                 if (
//                     transitionStage === "slideRight" ||
//                     transitionStage === "slideDown"
//                 ) {
//                     setDisplayChildren(children);
//                     if (
//                         router.pathname === "/introduction" ||
//                         router.pathname === "/"
//                     )
//                         setTransitionStage("slideUp");
//                     else setTransitionStage("slideLeft");
//                 }
//             }}
//             className={transitionStage}
//         >
//             {displayChildren}
//         </div>
//     );
// }
