/**
 * Created by anhle on 6/23/17.
 */
import {Component, OnInit, HostListener} from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project-interface';
import { Router } from '@angular/router';

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
    displayText = {
        text1:"",
        text2: "",
        text3: "",
        text4: "",
    };

    textDisplayDone: boolean = false;

    constructor (public _projectService: ProjectService, public router: Router) {
    }

    chooseProject(project){
        this.router.navigate(['/detail', project.id]);
    }

    seeProject(){
        this.router.navigate(['/projects']);
    }


    typewriter(text:string, display, key:string, speed: number):Promise<any>{
        return(new Promise((resolve,reject)=>{
            let c = setInterval(function(){
                if(text.length>0){
                    display[key] = display[key] + text[0];
                    text = text.substr(1);
                    //console.log(display);
                }else{
                    this.clearInterval(c);
                    resolve();
                }
            }, speed);
        }));
    }


    ngOnInit() {


        this.typewriter(this.INTRO[0], this.displayText, "text1", 50).then(()=>{
            this.typewriter(this.INTRO[1], this.displayText, "text2", 50).then(res=>{
                this.typewriter(this.INTRO[2], this.displayText, "text3", 50).then(res=>{
                    this.typewriter(this.INTRO[3], this.displayText, "text4", 20).then(res => {
                        this.textDisplayDone = true;
                    });
                });
            });
        });
    }

    @HostListener("window:scroll", [])
    onWindowScroll(){
        this.getProject();
    }

    getProject(){
        this._projectService.getProjects()
            .then(projects => projects.slice(-3))
            .then(projects => this.projects = projects);
    }

}