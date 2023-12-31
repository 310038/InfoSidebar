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
import { ExtandDialogComponent } from '@his-component/extand-dialog/dist/extand-dialog';
import { ScrollPanelModule } from 'primeng/scrollpanel';
@Component({
  selector: 'his-infoSidebar',
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

  /**
   * 接收欲呈現的資料
   */
  @Input() title!: any;

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
  onExtendedDialog() {
    this.isVisible = !this.isVisible;
  }
}
