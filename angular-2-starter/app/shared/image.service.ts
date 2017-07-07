/**
 * Created by anhle on 7/5/17.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class ImageService {

    getImagesFromProject(project){
        return Promise.resolve(project)
            .then((project) => project.images);
    }

}