import { Component, Input } from '@angular/core';

@Component({
    selector: 'gpc-navbar-item',
    templateUrl: './gpc-navbar-item.component.html',
    styleUrls: ['./gpc-navbar-item.component.scss']
})
export class GpcNavbarItemComponent {

    @Input() items:any;
    @Input() level:number = 1;

    constructor() { }

}
