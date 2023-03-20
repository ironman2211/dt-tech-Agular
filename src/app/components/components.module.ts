import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HeaderComponent } from './header/header.component';
import { JourneyboardComponent } from './journeyboard/journeyboard.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import { AssetsComponent } from './assets/assets.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    HeaderComponent,
    JourneyboardComponent,
    NoticeboardComponent,
    AssetsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    DragDropModule,
    MatExpansionModule,
    HttpClientModule,
AngularEditorModule
  ],
  exports: [
    HeaderComponent,
    JourneyboardComponent,
    NoticeboardComponent,
    AssetsComponent,
  ]
})
export class ComponentsModule { }
