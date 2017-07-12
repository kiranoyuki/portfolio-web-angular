import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {trigger, transition, style, query, group, animate, stagger, animateChild} from "@angular/animations";
import {Router, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations : [
    trigger('routerAnimation', [

      transition('* => *', [
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 }), { optional: true }),
        query(':enter', style({ transform: 'translateY(100%)' }), { optional: true }),

        group([
          query(':leave', group([
            animate('1000ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(-100%)' })), // y: '-100%'
            animateChild()
          ]), { optional: true }),
          query(':enter', group([
            animate('1000ms ease-in-out', style({ transform: 'translateY(0%)' })),
            animateChild()
          ]), { optional: true })
        ])
      ])

    ])
  ]
})
export class AppComponent implements OnInit{

  prepRouteState(outlet: any) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }

  constructor(public router: Router){

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
