import { About } from "../About/About";
import { ShowProjects } from "../ProjectCarousel/ShowProjects";
import "./Hero.scss";

export function Hero() {
  return (
    <>
      <section className="portfolio">
        <h1 className="portfolio__name slide-right">Cassandra Book</h1>
        <div className="portfolio__picture"></div>
        <p className="portfolio__webb slide-right">Webb developer student</p>
      </section>
      <About />
      <ShowProjects />
    </>
  );
}
