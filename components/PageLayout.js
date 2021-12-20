import { useRouter } from "next/router";
import { css } from "@emotion/react";
import Footer from "./Footer";
import Menu from "./Menu";

const PageLayout = ({ children }) => {
    const router = useRouter();

    const excludePage = ["/introduction"];

    return (
        <>
            <div>
                <div>{children}</div>
            </div>
            {excludePage.includes(router.asPath) && <Footer />}
        </>
    );
};

export default PageLayout;
