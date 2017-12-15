(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
	(factory((global['geo-plus-components'] = {}),global.ng.core,global.ng.common,global.ng.router));
}(this, (function (exports,core,common,router) { 'use strict';

var GpcNavbarComponent = (function () {
    function GpcNavbarComponent() {
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
    return GpcNavbarComponent;
}());
GpcNavbarComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'gpc-navbar',
                template: "\n\n      <ul class=\"main-navigation\">\n          <li class=\"gpc-menu-item\" *ngFor=\"let item of menu\">\n              <a href=\"#\" [routerLink]=\"item.routerLink\">\n                  <span class=\"fa fa-fw\" *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></span>\n                  {{ item.label }}\n                  <span class=\"gpc-icon-down fa fa-fw fa-caret-down\" *ngIf=\"item.items  && item.items.length\"></span>\n              </a>\n              <gpc-navbar-item [items]=\"item.items\" *ngIf=\"item.items && item.items.length\"></gpc-navbar-item>\n          </li>\n      </ul>\n    ",
                styles: ["\n      ul.main-navigation /deep/ li ul li {\n        border-top: 0; }\n\n      ul.main-navigation:before,\n      ul.main-navigation:after {\n        content: \" \";\n        /* 1 */\n        display: table;\n        /* 2 */ }\n\n      li.gpc-menu-item:hover a {\n        background: #464a4b;\n        color: white; }\n\n      ul.main-navigation:after {\n        clear: both; }\n\n      ul.main-navigation /deep/ {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n        background: #288bbd; }\n        ul.main-navigation /deep/ li {\n          display: block;\n          position: relative;\n          float: left;\n          background: #288bbd; }\n        ul.main-navigation /deep/ li ul {\n          display: none;\n          padding-left: 0;\n          -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 3px 1px 0px rgba(0, 0, 0, 0.2), 0px 6px 12px 0px rgba(0, 0, 0, 0.15);\n                  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 3px 1px 0px rgba(0, 0, 0, 0.2), 0px 6px 12px 0px rgba(0, 0, 0, 0.15); }\n        ul.main-navigation /deep/ li a {\n          display: block;\n          padding: 0.5em 1em;\n          text-decoration: none;\n          white-space: nowrap;\n          color: white;\n          font-family: Roboto, Arial, Helvetica, sans-serif; }\n        ul.main-navigation /deep/ li a:hover {\n          color: white; }\n        ul.main-navigation /deep/ li:hover > gpc-navbar-item > ul {\n          display: block;\n          position: absolute; }\n        ul.main-navigation /deep/ li:hover li {\n          float: none; }\n        ul.main-navigation /deep/ li:hover a {\n          background: white;\n          color: #222; }\n        ul.main-navigation /deep/ li:hover li a:hover {\n          background: #2c3e50;\n          color: white; }\n        ul.main-navigation /deep/ ul ul {\n          left: 100%;\n          top: 0; }\n    "]
            },] },
];
/**
 * @nocollapse
 */
GpcNavbarComponent.ctorParameters = function () { return []; };
GpcNavbarComponent.propDecorators = {
    'menu': [{ type: core.Input },],
};
var GpcNavbarItemComponent = (function () {
    function GpcNavbarItemComponent() {
        this.level = 1;
    }
    return GpcNavbarItemComponent;
}());
GpcNavbarItemComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'gpc-navbar-item',
                template: "\n      <ul class=\"gpc-menu-drop-item\" [ngStyle]=\"{'z-index':level}\">\n          <li *ngFor=\"let item of items\">\n              <a href=\"#\" [routerLink]=\"item.routerLink\">\n                  <span class=\"fa fa-fw \" *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></span>\n                  {{ item.label }}\n                  <span class=\"gpc-icon-right fa fa-fw fa-caret-right\" *ngIf=\"item.items\"></span></a>\n              <gpc-navbar-item [level]=\"level + 1\" [ngClass]=\"{'-hasSubmenu':true}\" [items]=\"item.items\" *ngIf=\"item.items && item.items.length\"></gpc-navbar-item>\n          </li>\n      </ul>\n    ",
                styles: ["\n      .gpc-icon-right {\n        float: right; }\n\n      .gpc-menu-drop-item {\n        min-width: 10em; }\n    "]
            },] },
];
/**
 * @nocollapse
 */
GpcNavbarItemComponent.ctorParameters = function () { return []; };
GpcNavbarItemComponent.propDecorators = {
    'items': [{ type: core.Input },],
    'level': [{ type: core.Input },],
};
var GpcNavbar = (function () {
    function GpcNavbar() {
    }
    return GpcNavbar;
}());
GpcNavbar.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    router.RouterModule.forRoot([{ path: '', redirectTo: '/', pathMatch: 'full' }], { useHash: true })
                ],
                declarations: [GpcNavbarComponent, GpcNavbarItemComponent],
                exports: [GpcNavbarComponent]
            },] },
];
/**
 * @nocollapse
 */
GpcNavbar.ctorParameters = function () { return []; };

exports.GpcNavbar = GpcNavbar;
exports.ɵb = GpcNavbarItemComponent;
exports.ɵa = GpcNavbarComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=geo-plus-components.umd.js.map
