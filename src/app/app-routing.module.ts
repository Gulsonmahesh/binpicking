import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectsComponent } from './component/steps/objects/objects.component';
import { GripperComponent } from './component/steps/gripper/gripper.component';
import { ProjectdetailsComponent} from './component/steps/projectdetails/projectdetails.component';
import { DeployComponent } from './component/steps/deploy/deploy.component';
import { CalibrationComponent} from './component/steps/calibration/calibration.component';
import { RobotComponent } from './component/steps/robot/robot.component';
import { GrippertcpComponent } from './component/steps/grippertcp/grippertcp.component';
import { GripperpointsComponent } from './component/steps/gripperpoints/gripperpoints.component';

const routes: Routes = [
  {path: 'object', component: ObjectsComponent },
  {path: 'grippingpoints', component: GripperpointsComponent },
  {path: 'gripper', component: GripperComponent},
  {path: 'project-details', component: ProjectdetailsComponent},
  {path: 'grippertcp', component: GrippertcpComponent},
  {path: 'deploy', component: DeployComponent},
  {path: 'calibration', component: CalibrationComponent},
  {path:'robot', component: RobotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
