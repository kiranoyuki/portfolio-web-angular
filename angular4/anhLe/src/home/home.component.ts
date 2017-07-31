/**
 * Created by anhle on 6/23/17.
 */
import {Component, OnInit, HostListener, Directive} from '@angular/core';
import { ModalService } from '../shared/services/modal.service';
import { Project } from '../shared/object-interface/project-interface';
import { Router } from '@angular/router';
import {HomeCacheService} from "../shared/services/home-cache.service";
import {window} from "rxjs/operator/window";
import {Work} from "../shared/object-interface/work-interface";

@Component({
    templateUrl : './home.html',
    styleUrls: ['./home.css']
})


export class HomeComponent implements OnInit {

    content: any;
    intro :string[];
    projects : Project[];
    displayText:string[] = [];
    isLoaded:boolean;
    expertise: any;
    skills: any;
    timeline: Work[];
    resume:any;
    links:any;

    constructor (public _modalService: ModalService, public router: Router,
                 public _homeCache: HomeCacheService) {

    }

    chooseProject(project){
        this.router.navigate(['/detail', project.id]);

    }

    seeProject(){
        this.router.navigate(['/projects']);
    }


    /*typewriter(text:string, display, key:number, speed: number):Promise<any>{

        return(new Promise((resolve,reject)=>{
            let c = setInterval(function(){
                if(text.length>0){
                    display[key] = display[key] + text[0];
                    text = text.substr(1);
                }else{
                    this.clearInterval(c);
                    resolve();
                }
            }, speed);
        }));
    }*/


    ngOnInit() {
        this.content = this._modalService.getAboutMe();

        this.intro = this._modalService.getIntroduction(this.content);
        this.isLoaded = this._homeCache.isLoaded();
        this.resume = this._modalService.getResume();
        this.links = this._modalService.getContact();

        this.getExpertise();
        this.getSkills();
        this.getTimeline();
        this.getProject();

    }

    /*@HostListener("window:scroll", [])
    onWindowScroll(){
       // this.getExpertise();
        //this.getProject();
    }*/

    getProject(){
        this.projects = this._modalService.getProjects().slice(0,3);
    }

    getExpertise() {
        this.expertise = this._modalService.getExpertise(this.content);
    }

    getSkills(){
        this.skills = this._modalService.getSkills(this.content);
    }

    getTimeline(){
        this.timeline = this._modalService.getTimeline(this.content);
    }


}