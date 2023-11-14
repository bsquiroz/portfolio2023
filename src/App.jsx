import { About } from "./components/about";
import { Container } from "./components/container";
import { Games } from "./components/games";
import { Header } from "./components/header";
import { HeaderTop } from "./components/headerTop";
import { Hero } from "./components/hero";
import { Jobs } from "./components/jobs";
import { SearchJob } from "./components/searchJob";
import { Social } from "./components/social";
import { useScrollReveal } from "./hooks/useScrollReveal";

export const App = () => {
	useScrollReveal();
	return (
		<>
			<SearchJob />
			<Hero />
			<Container>
				<HeaderTop />
				<Header />
				<Social />
				<About />
				<Games />
				<Jobs />
			</Container>
		</>
	);
};
