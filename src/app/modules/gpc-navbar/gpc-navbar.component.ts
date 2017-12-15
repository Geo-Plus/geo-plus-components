import { Component, Input } from '@angular/core';
import { GpcNavbarItemComponent } from './gpc-navbar-item/gpc-navbar-item.component';

@Component({
    selector: 'gpc-navbar',
    templateUrl: './gpc-navbar.component.html',
    styleUrls: ['./gpc-navbar.component.scss']
})
export class GpcNavbarComponent {

    @Input() menu:any[] = [{
            label: "Item1"
        },
        {
            label: "Item2",
            items: [{
                label: "Item2.1"
            }, {
                label: "Item2.2",
                items: [
                    {
                        label: "Item2.2.1"
                    },
                    {
                        label: "Item2.2.2",
                        items: [{
                            label: "Item2.2.2.1"
                        },{
                            label: "Item2.2.2.2"
                        }]
                    }                    
                ]
            }, {
                label: "Item2.3"
            }]
        }
    ];

    constructor() { }

}
