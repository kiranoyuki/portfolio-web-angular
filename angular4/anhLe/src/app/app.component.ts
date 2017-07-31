import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {trigger, transition, style, query, group, animate, animateChild, stagger} from "@angular/animations";
import {Router, NavigationEnd} from "@angular/router";
import {ModalService} from "../shared/services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations : [
    trigger('routerAnimation', [

      transition('* => *', [
        query(':leave', style({ opacity: 1}), { optional: true }),

        group([
          query(':enter', [
              query('*', [
                style({ transform: 'translateY(20px)', opacity: 0 }),
                stagger(20, [
                  animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style('*'))
                ]),
                animateChild()
              ])
          ], { optional: true }),
          query(':leave', [
              query('*', [
                animate('2s', style({ opacity: 0 })),
                animateChild()
              ])
          ], { optional: true })
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
