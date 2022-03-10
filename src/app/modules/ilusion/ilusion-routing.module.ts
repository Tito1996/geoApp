import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoToMeriendarComponent } from './pages/go-to-meriendar/go-to-meriendar.component';

const routes: Routes = [
  {
    path: '',
    component: GoToMeriendarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IlusionRoutingModule { }
