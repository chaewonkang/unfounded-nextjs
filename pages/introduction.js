import PageLayout from "../components/PageLayout";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useRouter } from "next/router";

const Introduction = () => {
    const router = useRouter();
    console.log(router);

    return (
        <ThemeProvider theme={theme}>
            <PageLayout>Introduction.js</PageLayout>
        </ThemeProvider>
    );
};

export default Introduction;
