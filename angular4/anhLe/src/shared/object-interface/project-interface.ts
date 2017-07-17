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
    description: {
        intro: string,
        problem: string,
        achieve: string;
        platform: string,
        tools: string[]
    },
    thumbnail: Image,
    images : Image[],
    content : any[]

}