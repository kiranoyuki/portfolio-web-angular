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
import {ErrorComponent} from '../error/error.component';
import {ContactComponent} from '../contact/contact.component';
import {AppRouting}     from './app.routes';
import {AppComponent} from "./app.component";
import {TruncatePipe} from "../shared/pipe/trunc.pipe";
import {ProjectCardComponent} from "../shared/project-card/project-card.component";
import {ProjectGroupComponent} from "../shared/group-project/group-project.component";
import {HomeCacheService} from "../shared/services/home-cache.service";
import {ModalService} from "../shared/services/modal.service";
import {ProjectFilter} from "../shared/pipe/ProjectFilter";
import {ScrollToModule} from 'ng2-scroll-to';
import {SafeStylePipe} from "../shared/pipe/SafeStylePipe";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    BrowserAnimationsModule,
    ScrollToModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    ProjectsComponent,
    ContactComponent,
    ErrorComponent,
    ProjectCardComponent,
    ProjectGroupComponent,
    ProjectFilter,
    TruncatePipe,
    SafeStylePipe
  ],
  providers: [
    ModalService,
    HomeCacheService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */