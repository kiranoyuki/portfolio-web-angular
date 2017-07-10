/**
 * Created by anhle on 6/23/17.
 */
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project-interface';
import {  Router }    from '@angular/router';
import { TruncatePipe } from '../shared/trunc.pipe';

@Component({
    templateUrl: './projects.html',
    styleUrls: ['./projects.css']
})

export class ProjectsComponent implements OnInit {

    projects: Project[];

    constructor ( public _projectService: ProjectService, public router: Router ) {}

    chooseProject(project){
        this.router.navigate(['detail', project.id]);
    }

    ngOnInit() {
        this._projectService.getProjects().then(projects => this.projects = projects);
    }

}