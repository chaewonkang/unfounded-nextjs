import PageLayout from "../components/PageLayout";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useRouter } from "next/router";

const Exploration = () => {
    const router = useRouter();
    console.log(router);

    return (
        <ThemeProvider theme={theme}>
            <PageLayout>Exploration.js</PageLayout>
        </ThemeProvider>
    );
};

export default Exploration;
