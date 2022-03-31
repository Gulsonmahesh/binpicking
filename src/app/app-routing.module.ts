import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectsComponent } from './component/steps/objects/objects.component';
import { GripperComponent } from './component/steps/gripper/gripper.component';
import { ProjectdetailsComponent} from './component/steps/projectdetails/projectdetails.component';
import { DeployComponent } from './component/steps/deploy/deploy.component';
import { CalibrationComponent} from './component/steps/calibration/calibration.component';

const routes: Routes = [
  {path: 'object', component: ObjectsComponent },
  {path: 'grippingpoints', component: GripperComponent },
  {path: 'project-details', component: ProjectdetailsComponent},
  {path: 'deploy', component: DeployComponent},
  {path: 'calibration', component: CalibrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
