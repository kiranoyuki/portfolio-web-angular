/**
 * Created by anhle on 6/23/17.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../shared/project.service';
import { Project } from '../shared/project-interface';
import { CarouselComponent } from '../shared/carousel/carousel.component';
import { ImageService} from '../shared/image.service';
import { Image } from '../shared/image-interface';

@Component({
    templateUrl : './detail.html',
    styleUrls: ['./detail.css'],
})

export class DetailComponent implements OnInit {
    project: Project;
    images: Image[];

    constructor( private route: ActivatedRoute, private router: Router, private _projectService: ProjectService, private _imageService: ImageService) {}

    ngOnInit() {
        let id = +this.route.snapshot.params['id'];
        this._projectService.getOneProject(id).then(project => {
            this.project = project;
            console.log(this.project);
            this.images = this._imageService.getImagesFromProject(this.project);
        });

    }
}