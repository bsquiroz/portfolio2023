import { About } from "./components/about";
import { ChangeTheme } from "./components/changeTheme";
import { Container } from "./components/container";
import { Games } from "./components/games";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Jobs } from "./components/jobs";
import { Social } from "./components/social";
import { useScrollReveal } from "./hooks/useScrollReveal";

export const App = () => {
    useScrollReveal();
    return (
        <>
            <Hero />
            <Container>
                <ChangeTheme />
                <Header />
                <Social />
                <About />
                <Games />
                <Jobs />
            </Container>
        </>
    );
};
