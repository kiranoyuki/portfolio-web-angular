
import {Component, OnInit} from '@angular/core';
import {ModalService} from "../shared/services/modal.service";

@Component({
    templateUrl: './contact.html',
    styleUrls: ['./contact.css'],
})
export class ContactComponent implements OnInit{
    resume:any;
    links:any;

    constructor(public _modalService: ModalService){}

    ngOnInit() {
        this.resume = this._modalService.getResume();
        this.links = this._modalService.getContact();
    }
}