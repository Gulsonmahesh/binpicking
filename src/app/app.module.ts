import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { ModelComponent } from './component/common/model/model.component'

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
    ModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
