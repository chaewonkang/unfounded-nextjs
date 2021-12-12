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
    const includePage = ["/introduction"];

    return (
        <>
            {transparentPage === router.asPath ? null : (
                <Header isTransparent={false} />
            )}
            <div css={layoutStyle}>
                <div>{children}</div>
            </div>
            {includePage.includes(router.asPath) && <Footer />}
        </>
    );
};

export default PageLayout;
