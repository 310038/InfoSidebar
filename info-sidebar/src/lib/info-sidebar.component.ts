/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ExtandDialogComponent } from '@his-directive/extand-dialog/dist/extand-dialog';
import { ScrollPanelModule } from 'primeng/scrollpanel';
@Component({
  selector: 'his-info-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    AccordionModule,
    TabViewModule,
    DialogModule,
    ButtonModule,
    CardModule,
    DividerModule,
    ExtandDialogComponent,
    ScrollPanelModule,
  ],
  templateUrl: './info-sidebar.component.html',
  styleUrls: ['./info-sidebar.component.scss'],
})
export class InfoSidebarComponent {
  isVisible: boolean = false;
  selectedTemplate!: TemplateRef<any>;

  /**
   * 接收欲呈現的資料
   */
  @Input() title!: any;

  /**
   * 接收欲呈現的dialog的高
   */
  @Input() height!: any;

  /**
   * 接收欲呈現的dialog的寬
   */
  @Input() width!: any;

  /**
   * 接收欲呈現的模板
   */
  @Input() systemTemplateI!: TemplateRef<any>;

  /**
   * 接收欲呈現的模板
   */
  @Input() systemTemplateII!: TemplateRef<any>;

  /**
   * 接收欲呈現的模板
   */
  @Input() suggestionTemplate!: TemplateRef<any>;

  /**
   * 是否彈出dialog視窗
   */
  onExtendedDialog(selectedTemplate: TemplateRef<any>) {
    this.isVisible = true;
    this.selectedTemplate = selectedTemplate;
  }
}
