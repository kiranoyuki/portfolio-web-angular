import {Image} from "./image-interface";
/**
 * Created by anhle on 6/20/17.
 */
export interface Project {
    id: number;
    name: string;
    place: string,
    position: string,
    tags: string[],
    description: string,
    thumbnail: Image,
    images : Image[],
    content : {
        tools : string[],
        goal: string,
        challenge : string,
        process: string
    }
}