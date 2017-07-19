/**
 * Created by anhle on 7/13/17.
 */
import {Injectable} from '@angular/core';
import {ourProjects} from '../infos/projects';
import {aboutMe} from "../infos/about-me";
import {AboutMe} from "../object-interface/about-interface";
import {Tags} from "../infos/constant";
import {contact} from "../infos/contact";

@Injectable()
export class ModalService {

    getProjects(){
        return ourProjects;
    }

    getOneProject(id: number | string){
        return ourProjects.find(project => project.id === +id)
    }

    getImagesFromProject(project){
        return project.images;
    }

    getAboutMe() {
        return aboutMe;
    }

    getIntroduction(aboutMe:AboutMe){
        return aboutMe.introduction;
    }

    getExperience(aboutMe:AboutMe){
        return aboutMe.experience;
    }

    getExpertise(aboutMe:AboutMe) {
        return aboutMe.experience.expertise;
    }

    getSkills(aboutMe:AboutMe) {
        return aboutMe.experience.skills;
    }

    getTimeline(aboutMe:AboutMe){
        return aboutMe.timeline;
    }

    getTags() {
        return Tags;
    }

    getContact() {
        return contact;
    }
}