import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GpcNavbarComponent } from './gpc-navbar.component';
import { GpcNavbarItemComponent } from './gpc-navbar-item/gpc-navbar-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot([{ path: '', redirectTo: '/', pathMatch: 'full' }], { useHash: true })
    ],
    declarations: [GpcNavbarComponent, GpcNavbarItemComponent],
    exports: [GpcNavbarComponent]
})
export class GpcNavbar { }
