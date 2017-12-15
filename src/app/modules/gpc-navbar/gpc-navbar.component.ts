import { Component, OnInit, Input } from '@angular/core';
import { GpcNavbarItemComponent } from './gpc-navbar-item/gpc-navbar-item.component';

@Component({
    selector: 'gpc-navbar',
    templateUrl: './gpc-navbar.component.html',
    styleUrls: ['./gpc-navbar.component.scss']
})
export class GpcNavbarComponent implements OnInit {

    @Input() menu:any[] = [{
            label: "Test1"
        },
        {
            label: "Test2",
            items: [{
                label: "Not very long test3"
            }, {
                label: "test4",
                items: [
                    {
                        label: "Very long test test4.1"
                    },
                    {
                        label: "test4.2",
                        routerLink: "/dict",
                        items: [{
                            label: "test4.2.1"
                        },{
                            label: "test4.2.2"
                        }]
                    }                    
                ]
            }, {
                label: "test5"
            }]
        }
    ];

    constructor() { }

    ngOnInit() {
        console.log(1, this.menu);
    }

}
