import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GpcNavbarComponent } from './gpc-navbar.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [GpcNavbarComponent],
    exports: [GpcNavbarComponent]
})
export class GpcNavbar { }
