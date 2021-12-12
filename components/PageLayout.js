import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Footer from "./Footer";
import Header from "./Header";

const layoutStyle = css`
    margin-left: 21px;
    margin-right: 21px;
`;

const PageLayout = ({ children }) => {
    const router = useRouter();
    const transparentPage = "/";
    const includePage = [];

    return (
        <div css={layoutStyle}>
            {transparentPage === router.asPath ? (
                <Header isTransparent />
            ) : (
                <Header isTransparent={false} />
            )}
            <div>{children}</div>
            {includePage.includes(router.asPath) && <Footer />}
        </div>
    );
};

export default PageLayout;
