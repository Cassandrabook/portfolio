import diamondWebb from "./../assets/Webbshop1.svg";
import diamondMob from "./../assets/webbshop-mobil.svg";
import diamondWebb2 from "./../assets/diamonds-webb.svg";
import diamondMob2 from "./../assets/diamond-mob.svg";
import zooWebb from "./../assets/zoo-web.svg";
import zooMob from "./../assets/webbshop-mobil-2.svg";
import zooMob2 from "./../assets/zoo-mob.svg";
import zooWebb2 from "./../assets/zoo-webb.svg";
import movieWebb from "./../assets/Webbshop3.svg";
import movieWebb2 from "./../assets/movie-web2.svg";
import movieMob from "./../assets/movie-mob.svg";
import movieMob2 from "./../assets/movie-mob2.svg";
import doneDesignMob from "./../assets/webbshop-mobil-5.svg";
import doneDesignWebb from "./../assets/Webbshop5.svg";
import doneDesignWebb2 from "./../assets/given-design-webb.svg";
import doneDesignMob2 from "./../assets/given-design.svg";
import restaurantMob from "./../assets/restaurant-mobil.svg";
import restaurantWebb from "./../assets/restaurant.svg";
import restaurantWebb2 from "./../assets/restaurant3.svg";
import restaurantMob2 from "./../assets/restaurant-mob2.svg";
import woocommerceWeb from "./../assets/woocommerce.svg";
import woocommerceWeb2 from "./../assets/woocommerce-mob.svg";
import woocommerceMob from "./../assets/woocommerce-shop.svg";
import woocommerceMob2 from "./../assets/woocommerce-mob-shop.svg";

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
        "A group assignment of three people. The purpose of the project was to create a restaurant and get the restaurant id through an API. The weight of the project was to create a booking functionality, where customers can book a table at the restaurant at a specific date, time and select number of guests. We also had to create an admin page to manage, change and delete bookings.",
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
        "A group assignment of three people, where the project was to create a fully functional webbshop. We where also suposed to work in an agile project as a development team, where the teacher acted as the project owner. We worked with sprints, a backlog, and a list of requirements.",
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
        "A home assignment where we created a zoo by retrieving all animals and information about them from an API, and present them on the start page. The challenge with the task was to be able to feed the animals every three hours through a button, that’s suposed to be disabled when the animal has been feed. Another challenge was to be able to see if the animals was hungry och full on the start page.",
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
        "This is a project I have been working with on the side of my school assignments. To retrieve all the movies I have done an API call to get all movies, with imagUrl, title, description, price m.m. I have created a movie webshop where you can buy a selection of movies.",
      imgWebb: movieWebb,
      imgMob: movieMob,
      imgWebb2: movieWebb2,
      imgMob2: movieMob2,
      repo: "https://github.com/Cassandrabook/movie-webbshop",
    },
    {
      id: 5,
      name: "Given Design",
      description:
        "This was our first home assignment in the course Frontend development. We had to recreate a given design, where we only had photos and videos for help. The tasks purpose was to show our skills in only HTML and CSS.",
      imgWebb: doneDesignWebb,
      imgMob: doneDesignMob,
      imgWebb2: doneDesignWebb2,
      imgMob2: doneDesignMob2,
      repo: "https://github.com/Cassandrabook/done-design",
    },
    {
      id: 6,
      name: "URBANCHICWEAR",
      description:
        "A group assignment where we were to create a fully functioning e-commerce site using WooCommerce with PHP. We were to implement plugins for payment solutions and search functions, and make the website work like a real webshop.",
      imgWebb: woocommerceWeb,
      imgMob: woocommerceWeb2,
      imgWebb2: woocommerceMob,
      imgMob2: woocommerceMob2,
      repo: "https://github.com/Cassandrabook/woocommerce",
    },
  ],
};
