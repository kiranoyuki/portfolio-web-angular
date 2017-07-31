/**
 * Created by anhle on 6/23/17.
 */
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../shared/services/modal.service';
import { Project } from '../shared/object-interface/project-interface';
import {  Router }    from '@angular/router';
import {trigger, transition, style, query, group, animate, keyframes, animateChild, stagger} from "@angular/animations";

@Component({
    templateUrl: './projects.html',
    styleUrls: ['./projects.css'],
    /*animations : [
        trigger('changeFilter', [

            transition('void => *', [
                query('*', [
                    animate(300, keyframes([
                        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
                        style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
                        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
                    ]))
                ], {optional: true})

            ]),
            transition('* => void', [
                query('*', [
                    animate(300, keyframes([
                        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
                        style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
                        style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
                    ]))
                ], {optional: true})

            ])
        ])

    ]*/
})

export class ProjectsComponent implements OnInit {

    all = 'All';
    projects: Project[];
    menu: string[] = [this.all];
    activeMenu:string;
    display:any[];
    links:any;
    change:string = 'leave';

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
        this.change = (this.change === 'leave' ? 'enter' : 'leave');
        console.log(this.change);

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