/**
 * Created by anhle on 7/10/17.
 */
/**
 * Created by anhle on 7/5/17.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class HomeCacheService {

    homeLoaded: boolean = false;

    homeLoadedToggle(){
        this.homeLoaded = true;
    }

    isLoaded(){
        return this.homeLoaded;
    }

}