/**
 * Created by anhle on 6/20/17.
 */
import {Injectable} from '@angular/core';
import {ourProjects} from './projects';

@Injectable()
export class ProjectService {
    projectPromise = Promise.resolve(ourProjects);

    getProjects(){
        return this.projectPromise;
    }

    getOneProject(id: number | string){
        return this.projectPromise
            .then(project => project.find(project => project.id === +id));
    }
}