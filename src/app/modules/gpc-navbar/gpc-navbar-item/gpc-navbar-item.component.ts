import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'gpc-navbar-item',
    templateUrl: './gpc-navbar-item.component.html',
    styleUrls: ['./gpc-navbar-item.component.scss']
})
export class GpcNavbarItemComponent {

    @Input() items:any;
    @Input() level:number = 1;
    @Input() right:boolean;
    @Output() onSelected:EventEmitter<any> = new EventEmitter;

    constructor() { }

    onClick(item) {
        if (item && item.items && item.items.length) return;
        this.onSelected.emit();
    }
   
}
