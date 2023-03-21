import diamondWebb from "./../assets/Webbshop1.svg";
import diamondMob from "./../assets/webbshop-mobil.svg";
import zooWebb from "./../assets/Webbshop2.svg";
import zooMob from "./../assets/webbshop-mobil-2.svg";
import movieWebb from "./../assets/Webbshop3.svg";
import doneDesignMob from "./../assets/webbshop-mobil-5.svg";
import doneDesignWebb from "./../assets/Webbshop5.svg";
import restaurantMob from "./../assets/restaurant-mobil.svg";
import restaurantWebb from "./../assets/restaurant.svg";

export interface IProject {
  id: number;
  name: string;
  description: string;
  imgWebb: string;
  imgMob: string;
  repo: string;
}

export interface IProjects {
  projects: IProject[];
}

export const projects: IProjects = {
  projects: [
    {
      id: 1,
      name: "76 Gastronome",
      description: "API Movies omdb",
      imgWebb: restaurantWebb,
      imgMob: restaurantMob,
      repo: "https://github.com/idadanielsson/Restaurant",
    },
    {
      id: 2,
      name: "Diamonds for you",
      description:
        "Ett grupparbete på tre personer, där vi skapade en helt fungerande webbshop. Projektet gick också ut på att vi skulle arbeta agilt och agera som ett utvecklingsteam, där läraren agerade projektägare. Vi arbetade med sprintar och backlog, samt en lista på krav.",
      imgWebb: diamondWebb,
      imgMob: diamondMob,
      repo: "https://github.com/Cassandrabook/Diamonds-for-you",
    },
    {
      id: 3,
      name: "Zoo Pawsible",
      description: "React Zoo",
      imgWebb: zooWebb,
      imgMob: zooMob,
      repo: "https://github.com/Cassandrabook/My-zoo",
    },
    {
      id: 4,
      name: "Movies",
      description:
        "Detta projekt var från början en övningsuppgift vi fick i skolan för att göra ett API anrop och presentera resultatet i webbläsaren. Jag jobbade vidare på uppgiften och skapade en webbshop för filmer som man kan köpa.",
      imgWebb: movieWebb,
      imgMob: zooMob,
      repo: "https://github.com/Cassandrabook/movie-webbshop",
    },
    {
      id: 5,
      name: "Given Design",
      description:
        "Detta var vår första inlämningsuppgift i Frontendutvecklingskursen, där vi  skulle återskapa och likna en färdig design utifrån endast bilder. Uppgiften gick ut på att visa våra kunskaper i HTML och CSS.",
      imgWebb: doneDesignWebb,
      imgMob: doneDesignMob,
      repo: "https://github.com/Cassandrabook/done-design",
    },
  ],
};
