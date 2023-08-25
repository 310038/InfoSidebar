/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'his-infoSidebar',
  standalone: true,
  imports: [CommonModule,AccordionModule,TabViewModule,DialogModule,ButtonModule,CardModule,DividerModule],
  templateUrl: './info-sidebar.component.html',
  // styleUrls: ['./lib-InfoSidebar.component.scss']
})

export class InfoSidebarComponent {
  @Input() value!: any;
  @Input() systemTemplateI!: TemplateRef<any>;
  @Input() systemTemplateII!: TemplateRef<any>;
  @Input()  suggestionTemplate!: TemplateRef<any>;

  @Output() ExtendedDialog = new EventEmitter<any>();


    onExtendedDialog(){
      this.ExtendedDialog.emit('dialogTemplate');
    }
}
