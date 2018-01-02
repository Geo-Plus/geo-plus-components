import { EventEmitter } from '@angular/core';
export declare class GpcNavbarItemComponent {
    items: any;
    level: number;
    onSelected: EventEmitter<any>;
    constructor();
    onClick(item: any): void;
}
