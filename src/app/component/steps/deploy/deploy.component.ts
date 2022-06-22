import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { DeployService } from '../../../service/deploy.service';
import { ValidationService } from '../../../service/validation.service';
import { UpdatesidebarService } from '../../../service/updatesidebar.service';

@Component({
  selector: 'app-deploy',
  templateUrl: './deploy.component.html',
  styleUrls: ['./deploy.component.scss']
})
export class DeployComponent implements OnInit {

  constructor(public routeService: RouterService, private deployService: DeployService,
    private validationService: ValidationService, private sidebarService: UpdatesidebarService) { }
  
  scanner = ''
  robot = '';
  setScannerError = false;
  setRobotError = false
  showScannerStatus = false;
  showRobotStatus = false;
  ngOnInit(): void {
  }

  deployProject(){
    const project_id=3
    this.deployService.deployProject(project_id).subscribe((data:any) => {
      console.log(data)
    });
  }

  getConnect = (type: string) => {
    if(type === 'scanner') {
      if(this.validationService.checkEmpty(this.scanner))
      {
        alert("Enter Scanner IP");
        return;
      }
      this.setScannerError = this.showScannerStatus =  false;
      this.deployService.getScannerConnect(this.scanner).subscribe((data: any) => {
          console.log("data",data.status)
          if(data.status!="success") {
            this.setScannerError = this.showScannerStatus = true;
          } else {
            this.setScannerError = this.showScannerStatus = false;
          }
      }, 
      error => {
        this.setScannerError = this.showScannerStatus = true;
      })
    } else {
      if(this.validationService.checkEmpty(this.robot))
      {
        alert("Enter Scanner IP");
        return;
      }
      this.setRobotError = this.showRobotStatus =  false;
      this.deployService.getRobotConnect(this.scanner).subscribe((data: any) => {
        if(data.status!="success") {
          this.setRobotError = this.showRobotStatus = true;
        } else {
          this.setRobotError = this.showRobotStatus = false;
        }
      }, 
      error => {
        this.setRobotError = this.showRobotStatus = true;
      })
    }
  }
  setSidebarstatus() {
    if(this.setScannerError || this.setRobotError) {
      this.sidebarService.updateSidebarStatus(7, 'error');
    }
    if(!this.setScannerError && !this.setRobotError) {
      this.sidebarService.updateSidebarStatus(7, 'completed');
    }
  }
  moveTonext = () => {
    this.setScannerError = this.setRobotError = false;
    this.setSidebarstatus();
    this.routeService.movetonextpage('executebin')
  }

  moveToBack() {
    this.setScannerError = this.setRobotError = false;
    this.setSidebarstatus();
    this.routeService.movetonextpage('calibration')
  }
}
