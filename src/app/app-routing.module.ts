import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectsComponent } from './component/steps/objects/objects.component';
import { GripperComponent } from './component/steps/gripper/gripper.component';

const routes: Routes = [
  {path: 'objects', component: ObjectsComponent },
  {path: 'gripper', component: GripperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
