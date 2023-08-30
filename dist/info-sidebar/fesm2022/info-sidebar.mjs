import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from 'primeng/accordion';
import { AccordionModule } from 'primeng/accordion';
import * as i4 from 'primeng/tabview';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import * as i5 from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ExtandDialogComponent } from '@his-component/extand-dialog/dist/extand-dialog';
import * as i6 from 'primeng/scrollpanel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import * as i3 from 'primeng/api';

/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-inferrable-types */
class InfoSidebarComponent {
    constructor() {
        this.isVisible = false;
    }
    /**
     * 是否彈出dialog視窗
     */
    onExtendedDialog() {
        this.isVisible = !this.isVisible;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: InfoSidebarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.1", type: InfoSidebarComponent, isStandalone: true, selector: "his-infoSidebar", inputs: { title: "title", systemTemplateI: "systemTemplateI", systemTemplateII: "systemTemplateII", suggestionTemplate: "suggestionTemplate" }, ngImport: i0, template: "<div class=\"sidebar\">\n  <div class=\"card\">\n    <p-accordion >\n      <p-accordionTab class=\"tab1\">\n        <ng-template pTemplate=\"header\">\n          <div\n            class=\"flex align-items-center justify-content-between w-full content\"\n          >\n            <span class=\"p-accordion-header-text vertical-align-middle\">{{\n              title\n            }}</span>\n            <button\n              (click)=\"onExtendedDialog()\"\n              pButton\n              pRipple\n              type=\"button\"\n              icon=\"pi pi-window-maximize\"\n              class=\"p-button-rounded p-button-text mr-2\"\n            > </button>\n          </div>\n        </ng-template>\n\n        <ng-template #dialogTemplate pTemplate=\"content\">\n          <div class=\"dialogTemplate\">\n          <p class=\"m-0\">\n            <p-tabView orientation=\"left\" >\n              <p-tabPanel header=\"AI\u5224\u65B7\" class=\"line-height-3 m-0\">\n                <p-scrollPanel [style]=\"{ width: '100%', height: '100%' }\">\n                  <ng-container [ngTemplateOutlet]=\"systemTemplateI\">\n                  </ng-container>\n                </p-scrollPanel>\n              </p-tabPanel>\n\n              <p-tabPanel header=\"\u8655\u65B9\u5EFA\u8B70\" class=\"line-height-3 m-0\">\n                <p-scrollPanel [style]=\"{ width: '100%', height: '100%' }\">\n                  <ng-container\n                    [ngTemplateOutlet]=\"systemTemplateII\"\n                  ></ng-container>\n                </p-scrollPanel>\n              </p-tabPanel>\n            </p-tabView>\n          </p>\n          </div>\n        </ng-template>\n      </p-accordionTab>\n\n      <p-accordionTab class=\"tab2\">\n        <ng-template pTemplate=\"header\">\n          <div class=\"flex align-items-center justify-content-between w-full\">\n            <span class=\"p-accordion-header-text vertical-align-middle\"\n              >\u62BD\u5BE9\u63CF\u8FF0</span\n            >\n            <p-button\n              (click)=\"onExtendedDialog()\"\n              type=\"button\"\n              icon=\"pi pi-window-maximize\"\n              styleClass=\"p-button-rounded p-button-text mr-2\"\n            ></p-button>\n          </div>\n        </ng-template>\n\n        <ng-template pTemplate=\"content\">\n          <div class=\"overflow\">\n            <ng-container\n              [ngTemplateOutlet]=\"suggestionTemplate\"\n            ></ng-container>\n            </div>\n        </ng-template>\n      </p-accordionTab>\n    </p-accordion>\n  </div>\n</div>\n\n<his-extand-dialog\n  [inputTemplate]=\"dialogTemplate\"\n  [header]=\"title\"\n  [visible]=\"isVisible\"\n>\n</his-extand-dialog>\n", styles: [":host ::ng-deep .overflow{max-height:100vh;overflow-x:auto}:host ::ng-deep .sidebar{height:100vh;width:100vw;background:var(--surface-card, #fff)}:host ::ng-deep .sidebar .card{height:calc(100% - 1rem)}:host ::ng-deep .sidebar .card .p-toggleable-content{height:calc(100% - 7rem)}:host ::ng-deep .p-accordion.p-component{display:flex;flex-direction:column}:host ::ng-deep .p-tabview .p-tabview-panels{overflow:auto;max-height:84vh}:host ::ng-deep .p-tabview .p-tabview-nav li .p-tabview-nav-link{border:none;background:#ffffff;padding:11px 12px;transition:none}:host ::ng-deep .p-tabview .p-tabview-nav .p-tabview-ink-bar{height:.1rem;bottom:-.1rem}:host ::ng-deep .p-tabview-title:before{content:\"\";position:absolute;inset:-1vh}:host ::ng-deep .p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link{background-color:var(--primary-800);transition:all .3s;color:var(--primary-color)}:host ::ng-deep .p-element.p-button-rounded.p-button-text{position:absolute;right:3em;width:24px;height:24px}:host ::ng-deep .p-accordion .p-accordion-tab.p-accordion-tab-active{margin-bottom:.4rem}:host ::ng-deep .dialogTemplate{width:100%;height:100%}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: AccordionModule }, { kind: "component", type: i2.Accordion, selector: "p-accordion", inputs: ["multiple", "style", "styleClass", "expandIcon", "collapseIcon", "activeIndex", "selectOnFocus", "headerAriaLevel"], outputs: ["onClose", "onOpen", "activeIndexChange"] }, { kind: "component", type: i2.AccordionTab, selector: "p-accordionTab", inputs: ["id", "header", "headerStyle", "tabStyle", "contentStyle", "tabStyleClass", "headerStyleClass", "contentStyleClass", "disabled", "cache", "transitionOptions", "iconPos", "selected", "headerAriaLevel"], outputs: ["selectedChange"] }, { kind: "directive", type: i3.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "ngmodule", type: TabViewModule }, { kind: "component", type: i4.TabView, selector: "p-tabView", inputs: ["style", "styleClass", "controlClose", "scrollable", "activeIndex", "selectOnFocus", "tabindex"], outputs: ["onChange", "onClose", "activeIndexChange"] }, { kind: "component", type: i4.TabPanel, selector: "p-tabPanel", inputs: ["closable", "headerStyle", "headerStyleClass", "cache", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "selected", "disabled", "header", "leftIcon", "rightIcon"] }, { kind: "ngmodule", type: DialogModule }, { kind: "ngmodule", type: ButtonModule }, { kind: "directive", type: i5.ButtonDirective, selector: "[pButton]", inputs: ["iconPos", "loadingIcon", "label", "icon", "loading"] }, { kind: "component", type: i5.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "style", "styleClass", "badgeClass", "ariaLabel"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: CardModule }, { kind: "ngmodule", type: DividerModule }, { kind: "component", type: ExtandDialogComponent, selector: "his-extand-dialog", inputs: ["inputTemplate", "header", "visible", "height", "width"], outputs: ["visibleChange"] }, { kind: "ngmodule", type: ScrollPanelModule }, { kind: "component", type: i6.ScrollPanel, selector: "p-scrollPanel", inputs: ["style", "styleClass", "step"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: InfoSidebarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'his-infoSidebar', standalone: true, imports: [
                        CommonModule,
                        AccordionModule,
                        TabViewModule,
                        DialogModule,
                        ButtonModule,
                        CardModule,
                        DividerModule,
                        ExtandDialogComponent,
                        ScrollPanelModule,
                    ], template: "<div class=\"sidebar\">\n  <div class=\"card\">\n    <p-accordion >\n      <p-accordionTab class=\"tab1\">\n        <ng-template pTemplate=\"header\">\n          <div\n            class=\"flex align-items-center justify-content-between w-full content\"\n          >\n            <span class=\"p-accordion-header-text vertical-align-middle\">{{\n              title\n            }}</span>\n            <button\n              (click)=\"onExtendedDialog()\"\n              pButton\n              pRipple\n              type=\"button\"\n              icon=\"pi pi-window-maximize\"\n              class=\"p-button-rounded p-button-text mr-2\"\n            > </button>\n          </div>\n        </ng-template>\n\n        <ng-template #dialogTemplate pTemplate=\"content\">\n          <div class=\"dialogTemplate\">\n          <p class=\"m-0\">\n            <p-tabView orientation=\"left\" >\n              <p-tabPanel header=\"AI\u5224\u65B7\" class=\"line-height-3 m-0\">\n                <p-scrollPanel [style]=\"{ width: '100%', height: '100%' }\">\n                  <ng-container [ngTemplateOutlet]=\"systemTemplateI\">\n                  </ng-container>\n                </p-scrollPanel>\n              </p-tabPanel>\n\n              <p-tabPanel header=\"\u8655\u65B9\u5EFA\u8B70\" class=\"line-height-3 m-0\">\n                <p-scrollPanel [style]=\"{ width: '100%', height: '100%' }\">\n                  <ng-container\n                    [ngTemplateOutlet]=\"systemTemplateII\"\n                  ></ng-container>\n                </p-scrollPanel>\n              </p-tabPanel>\n            </p-tabView>\n          </p>\n          </div>\n        </ng-template>\n      </p-accordionTab>\n\n      <p-accordionTab class=\"tab2\">\n        <ng-template pTemplate=\"header\">\n          <div class=\"flex align-items-center justify-content-between w-full\">\n            <span class=\"p-accordion-header-text vertical-align-middle\"\n              >\u62BD\u5BE9\u63CF\u8FF0</span\n            >\n            <p-button\n              (click)=\"onExtendedDialog()\"\n              type=\"button\"\n              icon=\"pi pi-window-maximize\"\n              styleClass=\"p-button-rounded p-button-text mr-2\"\n            ></p-button>\n          </div>\n        </ng-template>\n\n        <ng-template pTemplate=\"content\">\n          <div class=\"overflow\">\n            <ng-container\n              [ngTemplateOutlet]=\"suggestionTemplate\"\n            ></ng-container>\n            </div>\n        </ng-template>\n      </p-accordionTab>\n    </p-accordion>\n  </div>\n</div>\n\n<his-extand-dialog\n  [inputTemplate]=\"dialogTemplate\"\n  [header]=\"title\"\n  [visible]=\"isVisible\"\n>\n</his-extand-dialog>\n", styles: [":host ::ng-deep .overflow{max-height:100vh;overflow-x:auto}:host ::ng-deep .sidebar{height:100vh;width:100vw;background:var(--surface-card, #fff)}:host ::ng-deep .sidebar .card{height:calc(100% - 1rem)}:host ::ng-deep .sidebar .card .p-toggleable-content{height:calc(100% - 7rem)}:host ::ng-deep .p-accordion.p-component{display:flex;flex-direction:column}:host ::ng-deep .p-tabview .p-tabview-panels{overflow:auto;max-height:84vh}:host ::ng-deep .p-tabview .p-tabview-nav li .p-tabview-nav-link{border:none;background:#ffffff;padding:11px 12px;transition:none}:host ::ng-deep .p-tabview .p-tabview-nav .p-tabview-ink-bar{height:.1rem;bottom:-.1rem}:host ::ng-deep .p-tabview-title:before{content:\"\";position:absolute;inset:-1vh}:host ::ng-deep .p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link{background-color:var(--primary-800);transition:all .3s;color:var(--primary-color)}:host ::ng-deep .p-element.p-button-rounded.p-button-text{position:absolute;right:3em;width:24px;height:24px}:host ::ng-deep .p-accordion .p-accordion-tab.p-accordion-tab-active{margin-bottom:.4rem}:host ::ng-deep .dialogTemplate{width:100%;height:100%}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], systemTemplateI: [{
                type: Input
            }], systemTemplateII: [{
                type: Input
            }], suggestionTemplate: [{
                type: Input
            }] } });

/*
 * Public API Surface of info-sidebar
 */

/**
 * Generated bundle index. Do not edit.
 */

export { InfoSidebarComponent };
//# sourceMappingURL=info-sidebar.mjs.map
