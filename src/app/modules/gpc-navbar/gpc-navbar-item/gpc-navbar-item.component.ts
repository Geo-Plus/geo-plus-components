import { Component, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'gpc-navbar-item',
    templateUrl: './gpc-navbar-item.component.html',
    styleUrls: ['./gpc-navbar-item.component.scss']
})
export class GpcNavbarItemComponent {

    @Input() items:any;
    @Input() level:number = 1;

    @ViewChild('cul') el:ElementRef;

    constructor() { }

    hide(el) {
        // to do
    }

}
