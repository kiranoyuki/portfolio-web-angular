/**
 * Created by anhle on 6/23/17.
 */
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Project } from '../shared/object-interface/project-interface';
import { ModalService} from '../shared/services/modal.service';
import { Image } from '../shared/object-interface/image-interface';
import { NgZone } from '@angular/core';
import {query, stagger, animate, style, transition, trigger, animateChild, group} from '@angular/animations';


@Component({
    templateUrl : './detail.html',
    styleUrls: ['./detail.css'],
})

export class DetailComponent implements OnInit {
    project: Project;
    images: Image[];
    moreProjects: Project[];
    lastScrollTop: number = 0;
    scrollUp: boolean = false;
    links:any;

    constructor( private route: ActivatedRoute, private router:Router, private _modalService: ModalService, private lc: NgZone) {
        window.onscroll = () => {
            let st = window.pageYOffset;
            if (st >= this.lastScrollTop) {
                this.scrollUp = false;
            } else {
                this.scrollUp = true;
            }
            this.lastScrollTop = st;

        };
    }

    ngOnInit() {

        this.route.params.subscribe(params=>{
            this.project = this._modalService.getOneProject(params.id);
            this.images = this._modalService.getImagesFromProject(this.project);
            this.moreProjects = this._modalService.getProjects().filter(project => project !== this.project);

        });
        this.links = this._modalService.getContact();

    }

    chooseNextProject() {
        let id = Number(this.project.id);
        let nextId = id > this.moreProjects.length? 1 : id+1;
        this.router.navigate(['/detail', nextId.toString()]);


    }

}