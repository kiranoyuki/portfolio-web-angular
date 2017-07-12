/**
 * Created by anhle on 6/23/17.
 */
import {Component, OnInit, HostListener} from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project-interface';
import { Router } from '@angular/router';
import {HomeCacheService} from "../shared/home-cache.service";
import {window} from "rxjs/operator/window";

@Component({
    templateUrl : './home.html',
    styleUrls: ['./home.css']
})

export class HomeComponent implements OnInit {

    INTRO = [
        "Hi",
        "I'm Anh Le,",
        "and I design the experience!",
        "I love designing simple and consistent user interfaces. I implement my own designs using many tools and" +
        "frameworks to make the interaction more fun and easy to use."
    ];
    projects : Project[];
    iSpeed = 100;
    iIndex = 0;
    iScrollAt = 20;
    iTextPos = 0;
    displayText = [
        "","","",""
    ];

    isLoaded:boolean;

    constructor (public _projectService: ProjectService, public router: Router,
                 public _homeCache: HomeCacheService) {
    }

    chooseProject(project){
        this.router.navigate(['/detail', project.id]);

    }

    seeProject(){
        this.router.navigate(['/projects']);
    }


    typewriter(text:string, display, key:number, speed: number):Promise<any>{
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
    }


    ngOnInit() {
        this.isLoaded = this._homeCache.isLoaded();

        if(!this.isLoaded){
            this._homeCache.homeLoadedToggle();

            this.typewriter(this.INTRO[0], this.displayText, 0, 50).then(()=>{
                this.typewriter(this.INTRO[1], this.displayText, 1, 50).then(res=>{
                    this.typewriter(this.INTRO[2], this.displayText, 2, 50).then(res=>{
                        this.typewriter(this.INTRO[3], this.displayText, 3, 20).then(res => {
                            this.isLoaded = true;
                            setTimeout(() => {
                                this.getProject();
                            }, 200);
                        });
                    });
                });
            });
        } else {
            for(var i in this.INTRO){
                this.displayText[i] = this.INTRO[i];
            }
            this.getProject();

        }

    }

    /*@HostListener("window:scroll", [])
    onWindowScroll(){
        this.getProject();
    }*/

    getProject(){
        this._projectService.getProjects()
            .then(projects => projects.slice(-3))
            .then(projects => this.projects = projects);
    }

    /*detectMobile() {
        if(window.innerWidth)
    }*/

}