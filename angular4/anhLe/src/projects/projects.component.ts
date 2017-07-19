/**
 * Created by anhle on 6/23/17.
 */
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../shared/services/modal.service';
import { Project } from '../shared/object-interface/project-interface';
import {  Router }    from '@angular/router';
import { TruncatePipe } from '../shared/pipe/trunc.pipe';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
    templateUrl: './projects.html',
    styleUrls: ['./projects.css']
})

export class ProjectsComponent implements OnInit {

    all = 'All';
    projects: Project[];
    menu: string[] = [this.all];
    activeMenu:string;
    display:any[];
    links:any;

    constructor ( public _modalService: ModalService, public router: Router ) {}

    chooseProject(project){
        this.router.navigate(['detail', project.id]);
    }

    ngOnInit() {
        this.activeMenu = this.menu[0];
        this.projects = this._modalService.getProjects();
        let tag = this._modalService.getTags();
        tag.forEach((item) => {
            this.menu.push(item);
        });
        this.display = this.projects;
        this.links = this._modalService.getContact();
    }

    setActiveTab(menuItem) {
        this.activeMenu = menuItem;
        this.display = null;
        this.filterProject(menuItem);

    }

    filterProject(menuItem) {
        if(!this.projects || menuItem === this.all) {
            this.display = this.projects;
            return;
        }
        this.display = this.projects.filter((item) => {
            let tags =item.tags;
            return (tags.indexOf(menuItem) > -1);
        });

    }

}