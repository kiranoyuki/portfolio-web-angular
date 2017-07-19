
import {Component, OnInit} from '@angular/core';
import {ModalService} from "../shared/services/modal.service";

@Component({
    templateUrl: './contact.html',
    styleUrls: ['./contact.css'],
})
export class ContactComponent implements OnInit{
    contact:any;

    constructor(public _modalService: ModalService){}

    ngOnInit() {
        this.contact = this._modalService.getContact();
    }
}