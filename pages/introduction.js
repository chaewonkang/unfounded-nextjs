import PageLayout from "../components/PageLayout";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useRouter } from "next/router";
import { css } from "@emotion/react";

const menuWheel = css`
    width: 100%;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;

    & > div {
        span {
            font-family: "GTFAgentur", serif;
            font-size: 38px;
            letter-spacing: -0.2px;
            line-height: 35px;
        }
    }
`;

const Introduction = () => {
    const router = useRouter();
    console.log(router);

    return (
        <ThemeProvider theme={theme}>
            <PageLayout>
                <div css={menuWheel}>
                    <div>
                        <div></div>
                        <span>Exploration</span>
                    </div>
                    <div>
                        <span>Introduction</span>
                    </div>
                    <div>
                        <div></div>
                        <span>Exploration</span>
                    </div>
                </div>
            </PageLayout>
        </ThemeProvider>
    );
};

export default Introduction;
