import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Menu from "../components/Menu";
import TransitionLayout from "../components/TransitionLayout";
import "../styles/base.css";
import "../styles/fonts.css";
import "../styles/animation.css";

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    const excludePage = ["/"];

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="../static/images/fav.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Urbanist:wght@500;600&display=swap"
                    rel="stylesheet"
                ></link>
                <title>Unfounded 2021</title>
                <script defer src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"></script>
            </Head>

            <TransitionLayout>
                {!excludePage.includes(router.asPath) ? <Menu /> : null}
                <Component {...pageProps} />
                {/* <a href="https://unofficialeuryung.neocities.org/app/thepupilofnathanael/index.html " target="_blank">
                    <div className="commonPopUp">
                        <span>Pop Up</span>
                        <div>
                            <span>나타나엘의 눈동자</span>
                            <br />
                            <span>The Pupil of Nathanael</span>
                            <br />
                            <span>2022.02.28-03.07</span>
                        </div>
                    </div>
                </a> */}
            </TransitionLayout>
        </>
    );
}

export default MyApp;
