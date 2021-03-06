(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
	(factory((global['geo-plus-components'] = {}),global.ng.core,global.ng.common,global.ng.router));
}(this, (function (exports,core,common,router) { 'use strict';

var GpcNavbarComponent = (function () {
    function GpcNavbarComponent() {
        this.mobileWidth = 800;
        this.menu = [{
                label: "Item1",
                icon: "fa-navicon"
            },
            {
                label: "Item2",
                icon: "fa-navicon",
                right: true,
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
            },
            {
                label: "ItemA",
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
            },
            { label: "Item3" }, { label: "Item4" }, { label: "Item5" }, { label: "Item6" }, { label: "Item7" }, { label: "Item8" }, { label: "Item9" },
            { label: "Item13" }, { label: "Item14" }, { label: "Item15" }, { label: "Item16" }, { label: "Item17" }, { label: "Item18" }, { label: "Item19" }
        ];
    }
    /**
     * @return {?}
     */
    GpcNavbarComponent.prototype.ngOnInit = function () {
        this.onResize();
    };
    /**
     * @return {?}
     */
    GpcNavbarComponent.prototype.ngAfterViewInit = function () {
        this.onResize();
    };
    /**
     * @return {?}
     */
    GpcNavbarComponent.prototype.onResize = function () {
        this.isSmall = window.innerWidth < this.mobileWidth;
        if (this.mbar && this.mbar.nativeElement.offsetHeight > 34)
            this.isSmall = true;
    };
    /**
     * @return {?}
     */
    GpcNavbarComponent.prototype.onMouse = function () {
        this.isHidden = false;
    };
    return GpcNavbarComponent;
}());
GpcNavbarComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'gpc-navbar',
                template: "\n      <ul #mbar class=\"main-navigation\" [style.visibility]=\"isSmall ? 'hidden' : 'visible'\" (window:resize)=\"onResize()\" (contextmenu)=\"onMouse(); $event.preventDefault()\">\n          <li [ngClass]=\"{'m-right': item.right }\" class=\"gpc-menu-item\" *ngFor=\"let item of menu\" (mouseover)=\"onMouse()\" (contextmenu)=\"onMouse(); $event.preventDefault()\">\n              <a href=\"#\" [routerLink]=\"item.routerLink\">\n                  <span class=\"fa fa-fw\" *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></span>\n                  {{ item.label }}\n                  <span class=\"gpc-icon-down fa fa-fw fa-caret-down\" *ngIf=\"item.items  && item.items.length\"></span>\n              </a>\n              <gpc-navbar-item [items]=\"item.items\" [(hidden)]=\"isHidden\" [right]=\"item.right\" (onSelected)=\"isHidden = true\" *ngIf=\"item.items && item.items.length\"></gpc-navbar-item>\n          </li>\n      </ul>\n      <ul class=\"main-navigation\" *ngIf=\"isSmall\" (window:resize)=\"onResize()\" (mouseover)=\"onMouse()\" (contextmenu)=\"onMouse(); $event.preventDefault()\">\n          <li class=\"gpc-menu-item\" (mouseover)=\"onMouse()\" (contextmenu)=\"onMouse(); $event.preventDefault()\">\n              <a href=\"javascript:void(0)\">\n                  <span class=\"fa fa-navicon\"></span>\n                  <span class=\"gpc-icon-down fa fa-fw fa-caret-down\"></span>\n              </a>\n              <gpc-navbar-item [items]=\"menu\" [(hidden)]=\"isHidden\" (onSelected)=\"isHidden = true\"></gpc-navbar-item>\n          </li>\n      </ul>\n    ",
                styles: ["\n      ul.main-navigation /deep/ li ul li {\n        border-top: 0; }\n\n      ul.main-navigation:before,\n      ul.main-navigation:after {\n        content: \" \";\n        /* 1 */\n        display: table;\n        /* 2 */ }\n\n      li.gpc-menu-item:hover a {\n        background: #464a4b;\n        color: white; }\n\n      ul.main-navigation:after {\n        clear: both; }\n\n      ul.main-navigation /deep/ {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: auto !important;\n        list-style: none;\n        padding: 0;\n        margin: 0;\n        background: #288bbd;\n        overflow: visible !important;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        outline: 0; }\n        ul.main-navigation /deep/ li {\n          display: block;\n          position: relative;\n          float: left;\n          max-height: 34px;\n          background: #288bbd; }\n        ul.main-navigation /deep/ li ul {\n          display: none;\n          padding-left: 0;\n          -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 3px 1px 0px rgba(0, 0, 0, 0.2), 0px 6px 12px 0px rgba(0, 0, 0, 0.15);\n                  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 3px 1px 0px rgba(0, 0, 0, 0.2), 0px 6px 12px 0px rgba(0, 0, 0, 0.15); }\n        ul.main-navigation /deep/ li a {\n          display: block;\n          padding: 0.5em 1em;\n          text-decoration: none;\n          white-space: nowrap;\n          color: white;\n          font-family: Roboto, Arial, Helvetica, sans-serif; }\n        ul.main-navigation /deep/ li a:hover {\n          color: white; }\n        ul.main-navigation /deep/ li:hover > gpc-navbar-item > ul {\n          display: block;\n          position: absolute; }\n        ul.main-navigation /deep/ li.m-right:hover > gpc-navbar-item > ul {\n          right: 0; }\n        ul.main-navigation /deep/ li:hover li {\n          float: none; }\n        ul.main-navigation /deep/ li:hover a {\n          background: white;\n          color: #222; }\n        ul.main-navigation /deep/ li:hover li a:hover {\n          background: #2c3e50;\n          color: white; }\n        ul.main-navigation /deep/ li ul ul {\n          left: 100%;\n          top: 0; }\n        ul.main-navigation /deep/ li.m-right {\n          float: right; }\n        ul.main-navigation /deep/ li.m-right ul ul {\n          left: initial;\n          right: 100%;\n          top: 0; }\n\n      .gpc-menu-item {\n        border-left: 1px solid transparent; }\n    "]
            },] },
];
/**
 * @nocollapse
 */
GpcNavbarComponent.ctorParameters = function () { return []; };
GpcNavbarComponent.propDecorators = {
    'mobileWidth': [{ type: core.Input },],
    'menu': [{ type: core.Input },],
    'mbar': [{ type: core.ViewChild, args: ['mbar',] },],
};
var GpcNavbarItemComponent = (function () {
    function GpcNavbarItemComponent() {
        this.level = 1;
        this.onSelected = new core.EventEmitter;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    GpcNavbarItemComponent.prototype.onClick = function (item) {
        if (item && item.items && item.items.length)
            return;
        this.onSelected.emit();
    };
    return GpcNavbarItemComponent;
}());
GpcNavbarItemComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'gpc-navbar-item',
                template: "\n      <ul #cul class=\"gpc-menu-drop-item\" [ngStyle]=\"{'z-index':level+10000}\" (contextmenu)=\"$event.preventDefault()\">\n          <li class=\"gpc-submenu-item\" *ngFor=\"let item of items\" (contextmenu)=\"$event.preventDefault()\">\n              <a href=\"#\" [routerLink]=\"item.routerLink\" (click)=\"onClick(item)\" (contextmenu)=\"onClick(item); $event.preventDefault()\">\n                  <span class=\"fa fa-fw \" *ngIf=\"item.icon\" [ngClass]=\"item.icon\"></span>\n                  {{ item.label }}\n                  <span class=\"gpc-icon-right fa fa-fw fa-caret-right\" *ngIf=\"item.items && !right\"></span>\n                  <span class=\"gpc-icon-right fa fa-fw fa-caret-left\" *ngIf=\"item.items && right\"></span>\n              </a>\n              <gpc-navbar-item [level]=\"level + 1\" [right]=\"right\" (onSelected)=\"onClick()\" [ngClass]=\"{'-hasSubmenu':true}\" [items]=\"item.items\" *ngIf=\"item.items && item.items.length\"></gpc-navbar-item>\n          </li>\n      </ul>\n    ",
                styles: ["\n      .gpc-icon-right {\n        position: absolute;\n        right: 0.25em; }\n\n      .gpc-menu-drop-item {\n        min-width: 10em; }\n\n      .gpc-submenu-item a {\n        padding-right: 2em; }\n\n      .gpc-selected {\n        display: none !important; }\n    "]
            },] },
];
/**
 * @nocollapse
 */
GpcNavbarItemComponent.ctorParameters = function () { return []; };
GpcNavbarItemComponent.propDecorators = {
    'items': [{ type: core.Input },],
    'level': [{ type: core.Input },],
    'right': [{ type: core.Input },],
    'onSelected': [{ type: core.Output },],
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
