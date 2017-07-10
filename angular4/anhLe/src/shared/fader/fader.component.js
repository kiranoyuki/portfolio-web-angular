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
 * Created by anhle on 7/9/17.
 */
var core_1 = require('@angular/core');
var FaderComponent = (function () {
    function FaderComponent() {
        this.isVisible = true;
        this.visibility = 'enter';
    }
    FaderComponent.prototype.ngOnChanges = function () {
        this.visibility = this.isVisible ? 'enter' : 'leave';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], FaderComponent.prototype, "isVisible", void 0);
    FaderComponent = __decorate([
        core_1.Component({
            selector: 'my-fader',
            template: "\n    <div [@visibilityChanged]=\"visibility\" >\n      <ng-content></ng-content>    \n    </div>\n  ",
            animations: [
                core_1.trigger('visibilityChanged', [
                    core_1.state('leave', core_1.style({ opacity: 0 })),
                    core_1.transition('leave => enter', [
                        core_1.style({ opacity: 1, transform: 'translateY(25px)' }),
                        core_1.animate('500ms cubic-bezier(.35,0,.25,1)', core_1.style({ transform: 'translateY(0%)' }))
                    ]),
                    core_1.transition('enter => leave', [
                        core_1.style({ transform: 'translateY(0%)' }),
                        core_1.animate('500ms cubic-bezier(.35,0,.25,1)', core_1.style({ transform: 'translateY(-25px)' }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], FaderComponent);
    return FaderComponent;
}());
exports.FaderComponent = FaderComponent;
//# sourceMappingURL=fader.component.js.map