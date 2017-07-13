/**
 * Created by anhle on 6/23/17.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../shared/object-interface/project-interface';
import { CarouselComponent } from '../shared/carousel/carousel.component';
import { ModalService} from '../shared/services/modal.service';
import { Image } from '../shared/object-interface/image-interface';

@Component({
    templateUrl : './detail.html',
    styleUrls: ['./detail.css'],
})

export class DetailComponent implements OnInit {
    project: Project;
    images: Image[];

    constructor( private route: ActivatedRoute, private router: Router, private _modalService: ModalService) {}

    ngOnInit() {
        let id = +this.route.snapshot.params['id'];
        this.project = this._modalService.getOneProject(id);
        this.images = this._modalService.getImagesFromProject(this.project);

    }
}