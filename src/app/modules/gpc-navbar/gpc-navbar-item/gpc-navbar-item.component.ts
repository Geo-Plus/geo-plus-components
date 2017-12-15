import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'gpc-navbar-item',
    templateUrl: './gpc-navbar-item.component.html',
    styleUrls: ['./gpc-navbar-item.component.scss']
})
export class GpcNavbarItemComponent implements OnInit {

    @Input() items:any;
    @Input() level:number = 1;

    constructor() { }

    ngOnInit() {
        
    }

}
