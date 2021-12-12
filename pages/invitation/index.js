import PageLayout from "../../components/PageLayout";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import { useRouter } from "next/router";
import TransitionLayout from "../../components/TransitionLayout";

const Invitation = () => {
    const router = useRouter();
    console.log(router);

    return (
        <ThemeProvider theme={theme}>
            <PageLayout>
                <TransitionLayout />
            </PageLayout>
        </ThemeProvider>
    );
};

export default Invitation;
