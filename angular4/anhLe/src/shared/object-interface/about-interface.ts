import {Work} from "./work-interface";
import {Expertise} from "./Expertise";

export interface AboutMe {
    introduction : string[],
    experience : {
        expertise : Expertise[],
        skills : {
            languages: string[],
            software: string[],
            knowledge: string[]
        }

    },
    timeline : Work[]

}