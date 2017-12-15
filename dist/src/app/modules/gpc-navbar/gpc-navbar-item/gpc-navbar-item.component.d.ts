import { EventEmitter } from '@angular/core';
export declare class GpcNavbarItemComponent {
    items: any;
    level: number;
    hidden: any;
    hiddenChange: EventEmitter<any>;
    _hidden: boolean;
    constructor();
    onClick(): void;
}
