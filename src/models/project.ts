import diamondWebb from "./../assets/Webbshop1.svg"
import diamondMob from "./../assets/webbshop-mobil.svg"
import zooWebb from "./../assets/Webbshop2.svg"
import zooMob from "./../assets/webbshop-mobil-2.svg"
import movieWebb from "./../assets/Webbshop3.svg"

export interface IProject {
    id: number,
    name: string,
    description: string,
    imgWebb: string,
    imgMob: string,
}

export interface IProjects {
    projects: IProject[];
}

export const projects: IProjects = {
    projects: [{
        id: 1,
        name: "Diamonds for you",
        description: "Grupparbete",
        imgWebb: diamondWebb,
        imgMob: diamondMob
    },
     {
        id: 2,
        name: "Zoo Pawsible",
        description: "React Zoo",
        imgWebb: zooWebb,
        imgMob: zooMob
    },
    {
        id: 3,
        name: "Movies",
        description: "API Movies omdb",
        imgWebb: movieWebb,
        imgMob: zooMob
    }]
}
