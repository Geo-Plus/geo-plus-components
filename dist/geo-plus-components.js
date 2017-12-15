import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

class GpcNavbarComponent {
    constructor() {
        this.menu = [{
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
                                    }, {
                                        label: "Item2.2.2.2"
                                    }]
                            }
                        ]
                    }, {
                        label: "Item2.3"
                    }]
            }
        ];
    }
}
GpcNavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'gpc-navbar',
                template: `

      <ul class="main-navigation">
          <li class="gpc-menu-item" *ngFor="let item of menu">
              <a href="#" [routerLink]="item.routerLink">
                  <span class="fa " *ngIf="item.icon" [ngClass]="item.icon"></span>
                  {{ item.label }}
                  <span class="gpc-icon-down fa fa-chevron-down" *ngIf="item.items  && item.items.length"></span>
              </a>
              <gpc-navbar-item [items]="item.items" *ngIf="item.items && item.items.length"></gpc-navbar-item>
          </li>
      </ul>
    `,
                styles: [`
      .fa /deep/ {
        margin-right: 0.5em; }

      ul.main-navigation /deep/ li ul li {
        border-top: 0; }

      ul.main-navigation:before,
      ul.main-navigation:after {
        content: " ";
        /* 1 */
        display: table;
        /* 2 */ }

      li.gpc-menu-item:hover a {
        background: #464a4b;
        color: white; }

      ul.main-navigation:after {
        clear: both; }

      ul.main-navigation /deep/ {
        list-style: none;
        padding: 0;
        margin: 0;
        background: #288bbd; }
        ul.main-navigation /deep/ li {
          display: block;
          position: relative;
          float: left;
          background: #288bbd; }
        ul.main-navigation /deep/ li ul {
          display: none;
          padding-left: 0;
          -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 3px 1px 0px rgba(0, 0, 0, 0.2), 0px 6px 12px 0px rgba(0, 0, 0, 0.15);
                  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 3px 1px 0px rgba(0, 0, 0, 0.2), 0px 6px 12px 0px rgba(0, 0, 0, 0.15); }
        ul.main-navigation /deep/ li a {
          display: block;
          padding: 0.5em 1em;
          text-decoration: none;
          white-space: nowrap;
          color: white;
          font-family: Roboto, Arial, Helvetica, sans-serif; }
        ul.main-navigation /deep/ li a:hover {
          color: white; }
        ul.main-navigation /deep/ li:hover > gpc-navbar-item > ul {
          display: block;
          position: absolute; }
        ul.main-navigation /deep/ li:hover li {
          float: none; }
        ul.main-navigation /deep/ li:hover a {
          background: white;
          color: #222; }
        ul.main-navigation /deep/ li:hover li a:hover {
          background: #2c3e50;
          color: white; }
        ul.main-navigation /deep/ ul ul {
          left: 100%;
          top: 0; }
    `]
            },] },
];
/**
 * @nocollapse
 */
GpcNavbarComponent.ctorParameters = () => [];
GpcNavbarComponent.propDecorators = {
    'menu': [{ type: Input },],
};

class GpcNavbarItemComponent {
    constructor() {
        this.level = 1;
    }
}
GpcNavbarItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'gpc-navbar-item',
                template: `
      <ul class="gpc-menu-drop-item" [ngStyle]="{'z-index':level}">
          <li *ngFor="let item of items">
              <a href="#" [routerLink]="item.routerLink">
                  <span class="fa " *ngIf="item.icon" [ngClass]="item.icon"></span>
                  {{ item.label }}
                  <span class="gpc-icon-right fa fa-chevron-right" *ngIf="item.items"></span></a>
              <gpc-navbar-item [level]="level + 1" [ngClass]="{'-hasSubmenu':true}" [items]="item.items" *ngIf="item.items && item.items.length"></gpc-navbar-item>
          </li>
      </ul>
    `,
                styles: [`
      .gpc-icon-right {
        float: right; }

      .gpc-menu-drop-item {
        min-width: 10em; }
    `]
            },] },
];
/**
 * @nocollapse
 */
GpcNavbarItemComponent.ctorParameters = () => [];
GpcNavbarItemComponent.propDecorators = {
    'items': [{ type: Input },],
    'level': [{ type: Input },],
};

class GpcNavbar {
}
GpcNavbar.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule.forRoot([{ path: '', redirectTo: '/', pathMatch: 'full' }], { useHash: true })
                ],
                declarations: [GpcNavbarComponent, GpcNavbarItemComponent],
                exports: [GpcNavbarComponent]
            },] },
];
/**
 * @nocollapse
 */
GpcNavbar.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { GpcNavbar, GpcNavbarItemComponent as ɵb, GpcNavbarComponent as ɵa };
//# sourceMappingURL=geo-plus-components.js.map
