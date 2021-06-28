import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ODPageRoutingModule } from './od-page-routing.module';
import { ODPageComponent } from './od-page.component';
import { AnnotationComponent } from './annotation/annotation.component';
import { SearchPipe } from '.././_Pipe/search.pipe';

@NgModule({
  declarations: [ODPageComponent, AnnotationComponent,SearchPipe],
  imports: [
    CommonModule,
    ODPageRoutingModule,
    FormsModule
  ]
})
export class ODPageModule { }
