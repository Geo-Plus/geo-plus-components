import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'gpc-navbar-item',
    templateUrl: './gpc-navbar-item.component.html',
    styleUrls: ['./gpc-navbar-item.component.scss']
})
export class GpcNavbarItemComponent {

    @Input() items:any;
    @Input() level:number = 1;
    @Input() set hidden(value) {
        this._hidden = value;
    }
    @Output() hiddenChange:EventEmitter<any> = new EventEmitter;

    //@ViewChild('cul') el:ElementRef;

    _hidden:boolean;

    constructor() { }

    onClick() {
        this._hidden = true;
        this.hiddenChange.emit(this._hidden);
    }

}
