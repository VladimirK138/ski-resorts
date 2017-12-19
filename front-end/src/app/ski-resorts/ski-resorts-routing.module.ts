import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { SkiResortsComponent } from './ski-resorts.component';

const skiResortRoutes: Routes = [
  { path: 'ski-resorts/:resortId', component: SkiResortsComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(skiResortRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SkiResortsRoutingModule { }