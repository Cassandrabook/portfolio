import diamondWebb from "./../assets/Webbshop1.svg";
import diamondMob from "./../assets/webbshop-mobil.svg";
import diamondWebb2 from "./../assets/diamonds-webb.svg";
import diamondMob2 from "./../assets/diamond-mob.svg";
import zooWebb from "./../assets/Webbshop2.svg";
import zooMob from "./../assets/webbshop-mobil-2.svg";
import zooMob2 from "./../assets/zoo-mob.svg";
import zooWebb2 from "./../assets/zoo-webb.svg";
import movieWebb from "./../assets/Webbshop3.svg";
import doneDesignMob from "./../assets/webbshop-mobil-5.svg";
import doneDesignWebb from "./../assets/Webbshop5.svg";
import doneDesignWebb2 from "./../assets/given-design-webb.svg";
import doneDesignMob2 from "./../assets/given-design.svg";
import restaurantMob from "./../assets/restaurant-mobil.svg";
import restaurantWebb from "./../assets/restaurant.svg";
import restaurantWebb2 from "./../assets/restaurant3.svg";
import restaurantMob2 from "./../assets/restaurant-mob2.svg";

export interface IProject {
  id: number;
  name: string;
  description: string;
  imgWebb: string;
  imgMob: string;
  imgWebb2: string;
  imgMob2: string;
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
      description:
        "En grupparbete på tre personer. Syftet med projektet var att skapa en restaurang via ett API. Tyngden på uppgiften var att skapa en bokningsfunktionalitet för att kunna boka bord på restaurangen, samt en admin sida för att kunna hantera, ändra och ta bort bokningar.",
      imgWebb: restaurantWebb,
      imgMob: restaurantMob,
      imgWebb2: restaurantWebb2,
      imgMob2: restaurantMob2,
      repo: "https://github.com/idadanielsson/Restaurant",
    },
    {
      id: 2,
      name: "Diamonds for you",
      description:
        "Ett grupparbete på tre personer, där vi skapade en helt fungerande webbshop. Projektet gick också ut på att vi skulle arbeta agilt och agera som ett utvecklingsteam, där läraren agerade projektägare. Vi arbetade med sprintar och backlog, samt en lista på krav.",
      imgWebb: diamondWebb,
      imgMob: diamondMob,
      imgWebb2: diamondWebb2,
      imgMob2: diamondMob2,
      repo: "https://github.com/Cassandrabook/Diamonds-for-you",
    },
    {
      id: 3,
      name: "Zoo Pawsible",
      description:
        "En inlämningsuppgift där vi skulle skapa ett zoo genom att hämta djuren och information om dem från ett API, samt presentera djuren i webbläsaren. Utmaningen med uppgiften var att kunna mata djuren var tredje timme, samt att matknappen inte längre ska gå att klicka på. En till utmaning var att man skulle se ifall djuret var mätt eller hungrig.",
      imgWebb: zooWebb,
      imgMob: zooMob,
      imgWebb2: zooWebb2,
      imgMob2: zooMob2,
      repo: "https://github.com/Cassandrabook/My-zoo",
    },
    {
      id: 4,
      name: "Movies",
      description:
        "Detta projekt var från början en övningsuppgift vi fick i skolan för att göra ett API anrop och presentera resultatet i webbläsaren. Jag jobbade vidare på uppgiften och skapade en webbshop för filmer som man kan köpa.",
      imgWebb: movieWebb,
      imgMob: zooMob,
      imgWebb2: "",
      imgMob2: "",
      repo: "https://github.com/Cassandrabook/movie-webbshop",
    },
    {
      id: 5,
      name: "Given Design",
      description:
        "Detta var vår första inlämningsuppgift i Frontendutvecklingskursen, där vi  skulle återskapa och likna en färdig design utifrån endast bilder och videos. Uppgiften gick ut på att visa våra kunskaper i HTML och CSS.",
      imgWebb: doneDesignWebb,
      imgMob: doneDesignMob,
      imgWebb2: doneDesignWebb2,
      imgMob2: doneDesignMob2,
      repo: "https://github.com/Cassandrabook/done-design",
    },
  ],
};
