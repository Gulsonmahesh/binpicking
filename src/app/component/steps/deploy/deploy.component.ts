import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { DeployService } from '../../../service/deploy.service';
import { ValidationService } from '../../../service/validation.service';

@Component({
  selector: 'app-deploy',
  templateUrl: './deploy.component.html',
  styleUrls: ['./deploy.component.scss']
})
export class DeployComponent implements OnInit {

  constructor(public routeService: RouterService, private deployService: DeployService,
    private validationService: ValidationService) { }
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
          if(data?.error) {
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
        if(data?.error) {
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
}
