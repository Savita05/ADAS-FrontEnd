import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ODPageComponent } from './od-page.component';
import { AnnotationComponent } from './annotation/annotation.component';

const routes: Routes = [
  { path: 'Task_list', component: ODPageComponent },
  { path: 'Annotation_page', component: AnnotationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ODPageRoutingModule { }
