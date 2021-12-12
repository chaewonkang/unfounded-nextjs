import React from "react";
import Head from "next/head";
import TransitionLayout from "../components/TransitionLayout";
import "../styles/base.css";
import "../styles/fonts.css";
import "../styles/animation.css";

function MyApp({ Component, pageProps }) {
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
            <TransitionLayout>
                <Component {...pageProps} />
            </TransitionLayout>
        </>
    );
}

export default MyApp;
