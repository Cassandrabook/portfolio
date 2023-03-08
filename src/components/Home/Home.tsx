import { About } from "../About/About";
import { Hero } from "../Hero/Hero";
import { ShowProjects } from "../Projects/ShowProjects";

export const Home = () => {

    return(
        <>
            <Hero />
            <About />
            <ShowProjects />
        </>
    );
}