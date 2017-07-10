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
var project_service_1 = require('../shared/project.service');
var router_1 = require('@angular/router');
var HomeComponent = (function () {
    function HomeComponent(_projectService, router) {
        this._projectService = _projectService;
        this.router = router;
        this.INTRO = [
            "Hi",
            "I'm Anh Le,",
            "and I design the experience!",
            "I love designing simple and consistent user interfaces. I implement my own designs using many tools and" +
                "frameworks to make the interaction more fun and easy to use."
        ];
        this.iSpeed = 100;
        this.iIndex = 0;
        this.iScrollAt = 20;
        this.iTextPos = 0;
        this.displayText = {
            text1: "",
            text2: "",
            text3: "",
            text4: "",
        };
        this.displayButtons = false;
    }
    HomeComponent.prototype.chooseProject = function (project) {
        this.router.navigate(['detail', project.id]);
    };
    HomeComponent.prototype.seeProject = function () {
        this.router.navigate(['projects']);
    };
    HomeComponent.prototype.typewriter = function (text, display, key, speed) {
        return (new Promise(function (resolve, reject) {
            var c = setInterval(function () {
                if (text.length > 0) {
                    display[key] = display[key] + text[0];
                    text = text.substr(1);
                }
                else {
                    this.clearInterval(c);
                    resolve();
                }
            }, speed);
        }));
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._projectService.getProjects()
            .then(function (projects) { return projects.slice(-3); })
            .then(function (projects) { return _this.projects = projects; });
        this.typewriter(this.INTRO[0], this.displayText, "text1", 50).then(function () {
            _this.typewriter(_this.INTRO[1], _this.displayText, "text2", 50).then(function (res) {
                _this.typewriter(_this.INTRO[2], _this.displayText, "text3", 50).then(function (res) {
                    _this.typewriter(_this.INTRO[3], _this.displayText, "text4", 20).then(function (res) {
                        _this.displayButtons = true;
                    });
                });
            });
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/home/home.html',
            styleUrls: ['app/home/home.css']
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map