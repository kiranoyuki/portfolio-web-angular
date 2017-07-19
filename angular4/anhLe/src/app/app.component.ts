import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {trigger, transition, style, query, group, animate, animateChild} from "@angular/animations";
import {Router, NavigationEnd} from "@angular/router";
import {ModalService} from "../shared/services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations : [
    trigger('routerAnimation', [

      transition('homePage => *', [
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 }), { optional: true }),
        query(':enter', style({ transform: 'translateY(100%)' }), { optional: true }),

        group([
          query(':leave', group([
            animate('10ms ease-out', style({
              opacity: 0
            })),
            animateChild()
          ]), { optional: true }),
          query(':enter', group([
            animate('800ms ease-in-out', style({ transform: 'translateY(0%)' })),
            animateChild()
          ]), { optional: true })
        ])
      ]),

      transition('* => *', [
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 }), { optional: true }),
        query(':enter', style({ transform: 'translateY(100%)' }), { optional: true }),

        group([
          query(':leave', group([
            animate('700ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(-100%)' })), // y: '-100%'
            animateChild()
          ]), { optional: true }),
          query(':enter', group([
            animate('800ms ease-in-out', style({ transform: 'translateY(0%)' })),
            animateChild()
          ]), { optional: true })
        ])
      ])



    ])
  ]
})
export class AppComponent implements OnInit{

  links:any;

  prepRouteState(outlet: any) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }

  constructor(public router: Router, public _modalService: ModalService){
    this.links = this._modalService.getContact();

  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

  }


}
