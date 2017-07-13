"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by anhle on 6/23/17.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var project_service_1 = require('../shared/services/project.service.ts');
var image_service_1 = require('../shared/services/image.service.ts');
var DetailComponent = (function () {
    function DetailComponent(route, router, _projectService, _imageService) {
        this.route = route;
        this.router = router;
        this._projectService = _projectService;
        this._imageService = _imageService;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params['id'];
        this._projectService.getOneProject(id).then(function (project) {
            _this.project = project;
            console.log(_this.project);
            _this._imageService.getImagesFromProject(_this.project).then(function (image) { return _this.images = image; });
        });
    };
    DetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/detail/detail.html',
            styleUrls: ['app/detail/detail.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, project_service_1.ProjectService, image_service_1.ImageService])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map