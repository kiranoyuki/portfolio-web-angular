/**
 * Created by anhle on 7/7/17.
 */
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HomeComponent} from '../home/home.component';
import {DetailComponent} from '../detail/detail.component';
import {ProjectsComponent} from '../projects/projects.component';
import {AboutComponent} from '../about/about.component';
import {ErrorComponent} from '../error/error.component';
import {ContactComponent} from '../contact/contact.component';
import {CarouselComponent} from '../shared/carousel/carousel.component';
import {FaderComponent} from '../shared/fader/fader.component';
import {AppRouting}     from './app.routes';
import {ImageService} from "../shared/image.service";
import {ProjectService} from "../shared/project.service";
import {AppComponent} from "./app.component";
import {TruncatePipe} from "../shared/trunc.pipe";
import {ProjectCardComponent} from "../shared/project-card/project-card.component";
import {ProjectGroupComponent} from "../shared/group-project/group-project.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    CarouselComponent,
    TruncatePipe,
    FaderComponent,
    ProjectCardComponent,
    ProjectGroupComponent
  ],
  providers: [ ImageService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */