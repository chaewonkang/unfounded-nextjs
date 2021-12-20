import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Menu from "../components/Menu";
import TransitionLayout from "../components/TransitionLayout";
import "../styles/base.css";
import "../styles/fonts.css";
import "../styles/animation.css";

const childrenNameArr = [
    "Introduction",
    "ItroductionOne",
    "IntroductionTwo",
    "IntroductionThree",
    "Exploration",
];

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    const excludePage = ["/"];

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="../static/images/fav.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Urbanist:wght@500;600&display=swap"
                    rel="stylesheet"
                ></link>
                <title>Unfounded 2021</title>
            </Head>
            {!excludePage.includes(router.asPath) ? <Menu /> : null}
            <TransitionLayout>
                <Component {...pageProps} />
            </TransitionLayout>
        </>
    );
}

export default MyApp;
