/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ExtandDialogComponent } from '@his-directive/extand-dialog/dist/extand-dialog';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "primeng/accordion";
import * as i3 from "primeng/api";
import * as i4 from "primeng/tabview";
import * as i5 from "primeng/button";
import * as i6 from "primeng/scrollpanel";
export class InfoSidebarComponent {
    constructor() {
        this.isVisible = false;
    }
    /**
     * 是否彈出dialog視窗
     */
    onExtendedDialog(selectedTemplate) {
        this.isVisible = true;
        this.selectedTemplate = selectedTemplate;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: InfoSidebarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.1", type: InfoSidebarComponent, isStandalone: true, selector: "his-info-sidebar", inputs: { title: "title", systemTemplateI: "systemTemplateI", systemTemplateII: "systemTemplateII", suggestionTemplate: "suggestionTemplate" }, ngImport: i0, template: "<div class=\"sidebar\">\n  <div class=\"card\">\n    <p-accordion >\n      <p-accordionTab class=\"tab1\">\n        <ng-template pTemplate=\"header\">\n          <div\n            class=\"flex align-items-center justify-content-between w-full content\"\n          >\n            <span class=\"p-accordion-header-text vertical-align-middle\">{{\n              title\n            }}</span>\n            <button\n              (click)=\"onExtendedDialog(dialogTemplate)\"\n              pButton\n              pRipple\n              type=\"button\"\n              icon=\"pi pi-window-maximize\"\n              class=\"p-button-rounded p-button-text mr-2\"\n            > </button>\n          </div>\n        </ng-template>\n\n        <ng-template #dialogTemplate pTemplate=\"content\">\n          <div class=\"dialogTemplate\">\n          <p class=\"m-0\">\n            <p-tabView orientation=\"left\" >\n              <p-tabPanel i18n-header header=\"AI\u5224\u65B7\" class=\"line-height-3 m-0\">\n                <p-scrollPanel [style]=\"{ width: '100%', height: '100%' }\">\n                  <ng-container [ngTemplateOutlet]=\"systemTemplateI\">\n                  </ng-container>\n                </p-scrollPanel>\n              </p-tabPanel>\n\n              <p-tabPanel i18n-header header=\"\u8655\u65B9\u5EFA\u8B70\" class=\"line-height-3 m-0\">\n                <p-scrollPanel [style]=\"{ width: '100%', height: '100%' }\">\n                  <ng-container\n                    [ngTemplateOutlet]=\"systemTemplateII\"\n                  ></ng-container>\n                </p-scrollPanel>\n              </p-tabPanel>\n            </p-tabView>\n          </p>\n          </div>\n        </ng-template>\n      </p-accordionTab>\n\n      <p-accordionTab class=\"tab2\">\n        <ng-template pTemplate=\"header\">\n          <div class=\"flex align-items-center justify-content-between w-full\">\n            <span class=\"p-accordion-header-text vertical-align-middle\"\n                  i18n\n              >\u62BD\u5BE9\u63CF\u8FF0</span\n            >\n            <p-button\n              (click)=\"onExtendedDialog(suggestionTemplate)\"\n              type=\"button\"\n              icon=\"pi pi-window-maximize\"\n              styleClass=\"p-button-rounded p-button-text mr-2\"\n            ></p-button>\n          </div>\n        </ng-template>\n\n        <ng-template pTemplate=\"content\">\n          <div class=\"overflow\">\n            <ng-container\n              [ngTemplateOutlet]=\"suggestionTemplate\"\n            ></ng-container>\n            </div>\n        </ng-template>\n      </p-accordionTab>\n    </p-accordion>\n  </div>\n</div>\n\n<his-extand-dialog\n  [inputTemplate]=\"selectedTemplate \"\n  [header]=\"title\"\n  [(visible)]=\"isVisible\"\n>\n</his-extand-dialog>\n\n", styles: [":host ::ng-deep .overflow{max-height:100%;overflow-x:auto}:host ::ng-deep .sidebar{height:100%;width:100%;background:var(--surface-card, #fff)}:host ::ng-deep .sidebar .card{height:calc(100% - 1rem)}:host ::ng-deep .sidebar .card .p-toggleable-content{height:calc(100% - 7rem)}:host ::ng-deep .p-accordion.p-component{display:flex;flex-direction:column}:host ::ng-deep .p-tabview .p-tabview-panels{overflow:auto;max-height:84vh}:host ::ng-deep .p-tabview .p-tabview-nav li .p-tabview-nav-link{border:none;background:#ffffff;padding:11px 12px;transition:none}:host ::ng-deep .p-tabview .p-tabview-nav .p-tabview-ink-bar{height:.1rem;bottom:-.1rem}:host ::ng-deep .p-tabview-title:before{content:\"\";position:absolute;inset:-1vh}:host ::ng-deep .p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link{background-color:var(--primary-800);transition:all .3s;color:var(--primary-color)}:host ::ng-deep .p-element.p-button-rounded.p-button-text{position:absolute;right:3em;width:24px;height:24px}:host ::ng-deep .p-accordion .p-accordion-tab.p-accordion-tab-active{margin-bottom:.4rem}:host ::ng-deep .dialogTemplate{width:100%;height:100%}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: AccordionModule }, { kind: "component", type: i2.Accordion, selector: "p-accordion", inputs: ["multiple", "style", "styleClass", "expandIcon", "collapseIcon", "activeIndex", "selectOnFocus", "headerAriaLevel"], outputs: ["onClose", "onOpen", "activeIndexChange"] }, { kind: "component", type: i2.AccordionTab, selector: "p-accordionTab", inputs: ["id", "header", "headerStyle", "tabStyle", "contentStyle", "tabStyleClass", "headerStyleClass", "contentStyleClass", "disabled", "cache", "transitionOptions", "iconPos", "selected", "headerAriaLevel"], outputs: ["selectedChange"] }, { kind: "directive", type: i3.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "ngmodule", type: TabViewModule }, { kind: "component", type: i4.TabView, selector: "p-tabView", inputs: ["style", "styleClass", "controlClose", "scrollable", "activeIndex", "selectOnFocus", "tabindex"], outputs: ["onChange", "onClose", "activeIndexChange"] }, { kind: "component", type: i4.TabPanel, selector: "p-tabPanel", inputs: ["closable", "headerStyle", "headerStyleClass", "cache", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "selected", "disabled", "header", "leftIcon", "rightIcon"] }, { kind: "ngmodule", type: DialogModule }, { kind: "ngmodule", type: ButtonModule }, { kind: "directive", type: i5.ButtonDirective, selector: "[pButton]", inputs: ["iconPos", "loadingIcon", "label", "icon", "loading"] }, { kind: "component", type: i5.Button, selector: "p-button", inputs: ["type", "iconPos", "icon", "badge", "label", "disabled", "loading", "loadingIcon", "style", "styleClass", "badgeClass", "ariaLabel"], outputs: ["onClick", "onFocus", "onBlur"] }, { kind: "ngmodule", type: CardModule }, { kind: "ngmodule", type: DividerModule }, { kind: "component", type: ExtandDialogComponent, selector: "his-extand-dialog", inputs: ["inputTemplate", "header", "visible", "height", "width"], outputs: ["visibleChange"] }, { kind: "ngmodule", type: ScrollPanelModule }, { kind: "component", type: i6.ScrollPanel, selector: "p-scrollPanel", inputs: ["style", "styleClass", "step"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: InfoSidebarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'his-info-sidebar', standalone: true, imports: [
                        CommonModule,
                        AccordionModule,
                        TabViewModule,
                        DialogModule,
                        ButtonModule,
                        CardModule,
                        DividerModule,
                        ExtandDialogComponent,
                        ScrollPanelModule,
                    ], template: "<div class=\"sidebar\">\n  <div class=\"card\">\n    <p-accordion >\n      <p-accordionTab class=\"tab1\">\n        <ng-template pTemplate=\"header\">\n          <div\n            class=\"flex align-items-center justify-content-between w-full content\"\n          >\n            <span class=\"p-accordion-header-text vertical-align-middle\">{{\n              title\n            }}</span>\n            <button\n              (click)=\"onExtendedDialog(dialogTemplate)\"\n              pButton\n              pRipple\n              type=\"button\"\n              icon=\"pi pi-window-maximize\"\n              class=\"p-button-rounded p-button-text mr-2\"\n            > </button>\n          </div>\n        </ng-template>\n\n        <ng-template #dialogTemplate pTemplate=\"content\">\n          <div class=\"dialogTemplate\">\n          <p class=\"m-0\">\n            <p-tabView orientation=\"left\" >\n              <p-tabPanel i18n-header header=\"AI\u5224\u65B7\" class=\"line-height-3 m-0\">\n                <p-scrollPanel [style]=\"{ width: '100%', height: '100%' }\">\n                  <ng-container [ngTemplateOutlet]=\"systemTemplateI\">\n                  </ng-container>\n                </p-scrollPanel>\n              </p-tabPanel>\n\n              <p-tabPanel i18n-header header=\"\u8655\u65B9\u5EFA\u8B70\" class=\"line-height-3 m-0\">\n                <p-scrollPanel [style]=\"{ width: '100%', height: '100%' }\">\n                  <ng-container\n                    [ngTemplateOutlet]=\"systemTemplateII\"\n                  ></ng-container>\n                </p-scrollPanel>\n              </p-tabPanel>\n            </p-tabView>\n          </p>\n          </div>\n        </ng-template>\n      </p-accordionTab>\n\n      <p-accordionTab class=\"tab2\">\n        <ng-template pTemplate=\"header\">\n          <div class=\"flex align-items-center justify-content-between w-full\">\n            <span class=\"p-accordion-header-text vertical-align-middle\"\n                  i18n\n              >\u62BD\u5BE9\u63CF\u8FF0</span\n            >\n            <p-button\n              (click)=\"onExtendedDialog(suggestionTemplate)\"\n              type=\"button\"\n              icon=\"pi pi-window-maximize\"\n              styleClass=\"p-button-rounded p-button-text mr-2\"\n            ></p-button>\n          </div>\n        </ng-template>\n\n        <ng-template pTemplate=\"content\">\n          <div class=\"overflow\">\n            <ng-container\n              [ngTemplateOutlet]=\"suggestionTemplate\"\n            ></ng-container>\n            </div>\n        </ng-template>\n      </p-accordionTab>\n    </p-accordion>\n  </div>\n</div>\n\n<his-extand-dialog\n  [inputTemplate]=\"selectedTemplate \"\n  [header]=\"title\"\n  [(visible)]=\"isVisible\"\n>\n</his-extand-dialog>\n\n", styles: [":host ::ng-deep .overflow{max-height:100%;overflow-x:auto}:host ::ng-deep .sidebar{height:100%;width:100%;background:var(--surface-card, #fff)}:host ::ng-deep .sidebar .card{height:calc(100% - 1rem)}:host ::ng-deep .sidebar .card .p-toggleable-content{height:calc(100% - 7rem)}:host ::ng-deep .p-accordion.p-component{display:flex;flex-direction:column}:host ::ng-deep .p-tabview .p-tabview-panels{overflow:auto;max-height:84vh}:host ::ng-deep .p-tabview .p-tabview-nav li .p-tabview-nav-link{border:none;background:#ffffff;padding:11px 12px;transition:none}:host ::ng-deep .p-tabview .p-tabview-nav .p-tabview-ink-bar{height:.1rem;bottom:-.1rem}:host ::ng-deep .p-tabview-title:before{content:\"\";position:absolute;inset:-1vh}:host ::ng-deep .p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link{background-color:var(--primary-800);transition:all .3s;color:var(--primary-color)}:host ::ng-deep .p-element.p-button-rounded.p-button-text{position:absolute;right:3em;width:24px;height:24px}:host ::ng-deep .p-accordion .p-accordion-tab.p-accordion-tab-active{margin-bottom:.4rem}:host ::ng-deep .dialogTemplate{width:100%;height:100%}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], systemTemplateI: [{
                type: Input
            }], systemTemplateII: [{
                type: Input
            }], suggestionTemplate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2luZm8tc2lkZWJhci9zcmMvbGliL2luZm8tc2lkZWJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9pbmZvLXNpZGViYXIvc3JjL2xpYi9pbmZvLXNpZGViYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBQ3ZELDJEQUEyRDtBQUMzRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7OztBQWtCeEQsTUFBTSxPQUFPLG9CQUFvQjtJQWpCakM7UUFrQkUsY0FBUyxHQUFZLEtBQUssQ0FBQztLQThCNUI7SUFQQzs7T0FFRztJQUNILGdCQUFnQixDQUFDLGdCQUFrQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFDM0MsQ0FBQzs4R0E5QlUsb0JBQW9CO2tHQUFwQixvQkFBb0IsNE5DN0JqQyxzdkZBaUZBLDRzQ0RqRUksWUFBWSxxTUFDWixlQUFlLHNyQkFDZixhQUFhLDBnQkFDYixZQUFZLDhCQUNaLFlBQVksOFpBQ1osVUFBVSw4QkFDVixhQUFhLCtCQUNiLHFCQUFxQiw0SkFDckIsaUJBQWlCOzsyRkFLUixvQkFBb0I7a0JBakJoQyxTQUFTOytCQUNFLGtCQUFrQixjQUNoQixJQUFJLFdBQ1A7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFVBQVU7d0JBQ1YsYUFBYTt3QkFDYixxQkFBcUI7d0JBQ3JCLGlCQUFpQjtxQkFDbEI7OEJBV1EsS0FBSztzQkFBYixLQUFLO2dCQUtHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBS0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUtHLGtCQUFrQjtzQkFBMUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3IgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1pbmZlcnJhYmxlLXR5cGVzICovXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFjY29yZGlvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYWNjb3JkaW9uJztcbmltcG9ydCB7IFRhYlZpZXdNb2R1bGUgfSBmcm9tICdwcmltZW5nL3RhYnZpZXcnO1xuaW1wb3J0IHsgRGlhbG9nTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9kaWFsb2cnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvY2FyZCc7XG5pbXBvcnQgeyBEaXZpZGVyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9kaXZpZGVyJztcbmltcG9ydCB7IEV4dGFuZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJ0BoaXMtZGlyZWN0aXZlL2V4dGFuZC1kaWFsb2cvZGlzdC9leHRhbmQtZGlhbG9nJztcbmltcG9ydCB7IFNjcm9sbFBhbmVsTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9zY3JvbGxwYW5lbCc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoaXMtaW5mby1zaWRlYmFyJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBBY2NvcmRpb25Nb2R1bGUsXG4gICAgVGFiVmlld01vZHVsZSxcbiAgICBEaWFsb2dNb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgRGl2aWRlck1vZHVsZSxcbiAgICBFeHRhbmREaWFsb2dDb21wb25lbnQsXG4gICAgU2Nyb2xsUGFuZWxNb2R1bGUsXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9pbmZvLXNpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbmZvLXNpZGViYXIuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5mb1NpZGViYXJDb21wb25lbnQge1xuICBpc1Zpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2VsZWN0ZWRUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIOaOpeaUtuassuWRiOePvueahOizh+aWmVxuICAgKi9cbiAgQElucHV0KCkgdGl0bGUhOiBhbnk7XG5cbiAgLyoqXG4gICAqIOaOpeaUtuassuWRiOePvueahOaooeadv1xuICAgKi9cbiAgQElucHV0KCkgc3lzdGVtVGVtcGxhdGVJITogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICog5o6l5pS25qyy5ZGI54++55qE5qih5p2/XG4gICAqL1xuICBASW5wdXQoKSBzeXN0ZW1UZW1wbGF0ZUlJITogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICog5o6l5pS25qyy5ZGI54++55qE5qih5p2/XG4gICAqL1xuICBASW5wdXQoKSBzdWdnZXN0aW9uVGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiDmmK/lkKblvYjlh7pkaWFsb2foppbnqpdcbiAgICovXG4gIG9uRXh0ZW5kZWREaWFsb2coc2VsZWN0ZWRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGVjdGVkVGVtcGxhdGUgPSBzZWxlY3RlZFRlbXBsYXRlO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwic2lkZWJhclwiPlxuICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgIDxwLWFjY29yZGlvbiA+XG4gICAgICA8cC1hY2NvcmRpb25UYWIgY2xhc3M9XCJ0YWIxXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctZnVsbCBjb250ZW50XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtYWNjb3JkaW9uLWhlYWRlci10ZXh0IHZlcnRpY2FsLWFsaWduLW1pZGRsZVwiPnt7XG4gICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRXh0ZW5kZWREaWFsb2coZGlhbG9nVGVtcGxhdGUpXCJcbiAgICAgICAgICAgICAgcEJ1dHRvblxuICAgICAgICAgICAgICBwUmlwcGxlXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBpY29uPVwicGkgcGktd2luZG93LW1heGltaXplXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJwLWJ1dHRvbi1yb3VuZGVkIHAtYnV0dG9uLXRleHQgbXItMlwiXG4gICAgICAgICAgICA+IDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZGlhbG9nVGVtcGxhdGUgcFRlbXBsYXRlPVwiY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2dUZW1wbGF0ZVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibS0wXCI+XG4gICAgICAgICAgICA8cC10YWJWaWV3IG9yaWVudGF0aW9uPVwibGVmdFwiID5cbiAgICAgICAgICAgICAgPHAtdGFiUGFuZWwgaTE4bi1oZWFkZXIgaGVhZGVyPVwiQUnliKTmlrdcIiBjbGFzcz1cImxpbmUtaGVpZ2h0LTMgbS0wXCI+XG4gICAgICAgICAgICAgICAgPHAtc2Nyb2xsUGFuZWwgW3N0eWxlXT1cInsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfVwiPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJzeXN0ZW1UZW1wbGF0ZUlcIj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvcC1zY3JvbGxQYW5lbD5cbiAgICAgICAgICAgICAgPC9wLXRhYlBhbmVsPlxuXG4gICAgICAgICAgICAgIDxwLXRhYlBhbmVsIGkxOG4taGVhZGVyIGhlYWRlcj1cIuiZleaWueW7uuitsFwiIGNsYXNzPVwibGluZS1oZWlnaHQtMyBtLTBcIj5cbiAgICAgICAgICAgICAgICA8cC1zY3JvbGxQYW5lbCBbc3R5bGVdPVwieyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9XCI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInN5c3RlbVRlbXBsYXRlSUlcIlxuICAgICAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvcC1zY3JvbGxQYW5lbD5cbiAgICAgICAgICAgICAgPC9wLXRhYlBhbmVsPlxuICAgICAgICAgICAgPC9wLXRhYlZpZXc+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9wLWFjY29yZGlvblRhYj5cblxuICAgICAgPHAtYWNjb3JkaW9uVGFiIGNsYXNzPVwidGFiMlwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctZnVsbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLWFjY29yZGlvbi1oZWFkZXItdGV4dCB2ZXJ0aWNhbC1hbGlnbi1taWRkbGVcIlxuICAgICAgICAgICAgICAgICAgaTE4blxuICAgICAgICAgICAgICA+5oq95a+p5o+P6L+wPC9zcGFuXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8cC1idXR0b25cbiAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRXh0ZW5kZWREaWFsb2coc3VnZ2VzdGlvblRlbXBsYXRlKVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBpY29uPVwicGkgcGktd2luZG93LW1heGltaXplXCJcbiAgICAgICAgICAgICAgc3R5bGVDbGFzcz1cInAtYnV0dG9uLXJvdW5kZWQgcC1idXR0b24tdGV4dCBtci0yXCJcbiAgICAgICAgICAgID48L3AtYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJmbG93XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInN1Z2dlc3Rpb25UZW1wbGF0ZVwiXG4gICAgICAgICAgICA+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvcC1hY2NvcmRpb25UYWI+XG4gICAgPC9wLWFjY29yZGlvbj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPGhpcy1leHRhbmQtZGlhbG9nXG4gIFtpbnB1dFRlbXBsYXRlXT1cInNlbGVjdGVkVGVtcGxhdGUgXCJcbiAgW2hlYWRlcl09XCJ0aXRsZVwiXG4gIFsodmlzaWJsZSldPVwiaXNWaXNpYmxlXCJcbj5cbjwvaGlzLWV4dGFuZC1kaWFsb2c+XG5cbiJdfQ==