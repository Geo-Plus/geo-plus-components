import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GpcNavbarItemComponent } from './gpc-navbar-item/gpc-navbar-item.component';

@Component({
    selector: 'gpc-navbar',
    templateUrl: './gpc-navbar.component.html',
    styleUrls: ['./gpc-navbar.component.scss']
})
export class GpcNavbarComponent {

    @Input() mobileWidth:number = 800;
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
        },
        { label: "Item3" },{ label: "Item4" },{ label: "Item5" },{ label: "Item6" },{ label: "Item7" },{ label: "Item8" },{ label: "Item9" },
        { label: "Item13" },{ label: "Item14" },{ label: "Item15" },{ label: "Item16" },{ label: "Item17" },{ label: "Item18" },{ label: "Item19" }
    ];

    @ViewChild('mbar') private mbar: ElementRef;

    isSmall:boolean;
    isHidden:boolean;

    constructor() { }

    ngOnInit() {
        this.onResize();
    }

    ngAfterViewInit() {
        this.onResize();
    }

    onResize() {
        this.isSmall = window.innerWidth < this.mobileWidth;
        if (this.mbar && this.mbar.nativeElement.offsetHeight > 34) this.isSmall = true;
    }

    onMouse() {
        this.isHidden = false;
    }

}
