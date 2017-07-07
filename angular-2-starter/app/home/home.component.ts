/**
 * Created by anhle on 6/23/17.
 */
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project-interface';
import { Router } from '@angular/router';

@Component({
    templateUrl : 'app/home/home.html',
    styleUrls: ['app/home/home.css']
})

export class HomeComponent implements OnInit {
    projects : Project[];

    constructor (public _projectService: ProjectService, public router: Router) {}

    chooseProject(project){
        this.router.navigate(['detail', project.id]);
    }

    seeProject(){
        this.router.navigate(['projects']);
    }


    ngOnInit() {
        this._projectService.getProjects()
            .then(projects => projects.slice(-3))
            .then(projects => this.projects = projects);
    }
}