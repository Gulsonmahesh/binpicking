import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
// import { LayerComponent } from './component/layer/layer.component';
import { ObjectsComponent } from './component/steps/objects/objects.component';
import { GripperComponent } from './component/steps/gripper/gripper.component';
import { CardComponent } from './component/common/card/card.component';
import { MainfooterComponent } from './component/mainfooter/mainfooter.component';
import { ButtonComponent } from './component/common/button/button.component';
import { ModelComponent } from './component/common/model/model.component';
import { ProjectdetailsComponent } from './component/steps/projectdetails/projectdetails.component'

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { DeployComponent } from './component/steps/deploy/deploy.component';
import { CalibrationComponent } from './component/steps/calibration/calibration.component';
import { RobotComponent } from './component/steps/robot/robot.component';
import { TooltipComponent } from './component/common/tooltip/tooltip.component';
import { RobotdetailsComponent } from './component/common/robotdetails/robotdetails.component';
import { GrippercommonconterComponent } from './component/common/grippercommonconter/grippercommonconter.component';
import { GripperpointsComponent } from './component/steps/gripperpoints/gripperpoints.component';
import { GrippertcpComponent } from './component/steps/grippertcp/grippertcp.component';
import { ProjectsummaryComponent } from './component/steps/projectsummary/projectsummary.component';
import { LoginpageComponent } from './component/loginpage/loginpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {  TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { EditorModule } from '@tinymce/tinymce-angular';
import { EnvironmentComponent } from './component/steps/environment/environment.component';
import { ExecutebinComponent } from './component/steps/executebin/executebin.component';
import { ProgressPopupComponent } from './component/steps/progress-popup/progress-popup.component';
import { DeletepopupComponent } from './component/steps/deletepopup/deletepopup.component';
import { AddrobotComponent } from './component/steps/robot/addrobot/addrobot.component';

const material=[
  MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule,FormsModule,ReactiveFormsModule,MatSlideToggleModule,
  MatSliderModule,MatTabsModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    // LayerComponent,
    ObjectsComponent,
    GripperComponent,
    CardComponent,
    MainfooterComponent,
    ButtonComponent,
    ModelComponent,
    ProjectdetailsComponent,
    DeployComponent,
    CalibrationComponent,
    RobotComponent,
    TooltipComponent,
    RobotdetailsComponent,
    GrippercommonconterComponent,
    GripperpointsComponent,
    GrippertcpComponent,
    ProjectsummaryComponent,
    LoginpageComponent,
    EnvironmentComponent,
    ExecutebinComponent,
    ProgressPopupComponent,
    DeletepopupComponent,
    AddrobotComponent    
  ],
  imports: [
    material,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    EditorModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [material],
  providers: [{ provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }],
  bootstrap: [AppComponent]
})
export class AppModule { }