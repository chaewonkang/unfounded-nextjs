import PageLayout from "../components/PageLayout";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useRouter } from "next/router";

const Invitation = () => {
    const router = useRouter();
    console.log(router);

    return (
        <ThemeProvider theme={theme}>
            <PageLayout>Invitation.js</PageLayout>
        </ThemeProvider>
    );
};

export default Invitation;
