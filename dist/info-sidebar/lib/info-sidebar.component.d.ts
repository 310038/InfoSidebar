import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class InfoSidebarComponent {
    isVisible: boolean;
    selectedTemplate: TemplateRef<any>;
    /**
     * 接收欲呈現的資料
     */
    title: any;
    /**
     * 接收欲呈現的模板
     */
    systemTemplateI: TemplateRef<any>;
    /**
     * 接收欲呈現的模板
     */
    systemTemplateII: TemplateRef<any>;
    /**
     * 接收欲呈現的模板
     */
    suggestionTemplate: TemplateRef<any>;
    /**
     * 是否彈出dialog視窗
     */
    onExtendedDialog(selectedTemplate: TemplateRef<any>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InfoSidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InfoSidebarComponent, "his-info-sidebar", never, { "title": { "alias": "title"; "required": false; }; "systemTemplateI": { "alias": "systemTemplateI"; "required": false; }; "systemTemplateII": { "alias": "systemTemplateII"; "required": false; }; "suggestionTemplate": { "alias": "suggestionTemplate"; "required": false; }; }, {}, never, never, true, never>;
}
