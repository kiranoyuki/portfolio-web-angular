/**
 * Created by anhle on 7/10/17.
 */
import {Component, Input} from '@angular/core';
import {Project} from '../object-interface/project-interface';
import {Router} from "@angular/router";


@Component({
    selector: 'project-card',
    templateUrl : './project-card.html',
    styleUrls: ['./project-card.css']
})

export class ProjectCardComponent {
    @Input('project') project: Project;


    constructor(public router: Router){

    }

    chooseProject(project){
        this.router.navigate(['/detail', project.id]);
    }
}