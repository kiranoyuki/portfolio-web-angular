import {Component, Input} from '@angular/core';
import {Project} from '../object-interface/project-interface';


@Component({
    selector: 'group-project',
    templateUrl : './group-project.html',
    styleUrls: ['./group-project.css']
})

export class ProjectGroupComponent {
    @Input('projects') projects: Project[];


    constructor(){

    }
}