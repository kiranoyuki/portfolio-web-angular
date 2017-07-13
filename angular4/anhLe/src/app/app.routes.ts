/**
 * Created by anhle on 7/9/17.
 */
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {DetailComponent} from '../detail/detail.component';
import {ProjectsComponent} from '../projects/projects.component';
import {ErrorComponent} from '../error/error.component';
import {ContactComponent} from '../contact/contact.component';
import {NgModule} from "@angular/core";


const routes : Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent,
        data : {
        animation: { value: 'homePage'}
    }},
    { path: 'detail/:id', component: DetailComponent,
        data : {
            animation: { value: 'detailPage'}
    }},
    { path: 'projects', component: ProjectsComponent,
        data: {
            animation: { value: 'projectsPage'}
    }},

    { path: 'contact', component: ContactComponent,
        data: {
            animation: { value: 'contactPage'}
    }},
    { path : '*', component: ErrorComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})

export class AppRouting {}
