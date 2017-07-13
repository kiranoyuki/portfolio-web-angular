/**
 * Created by anhle on 6/23/17.
 */
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../shared/services/modal.service';
import { Project } from '../shared/object-interface/project-interface';
import {  Router }    from '@angular/router';
import { TruncatePipe } from '../shared/trunc.pipe';

@Component({
    templateUrl: './projects.html',
    styleUrls: ['./projects.css']
})

export class ProjectsComponent implements OnInit {

    projects: Project[];

    constructor ( public _modalService: ModalService, public router: Router ) {}

    chooseProject(project){
        this.router.navigate(['detail', project.id]);
    }

    ngOnInit() {
        this.projects = this._modalService.getProjects();
    }

}