import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { DeployService } from '../../../service/deploy.service';
@Component({
  selector: 'app-deploy',
  templateUrl: './deploy.component.html',
  styleUrls: ['./deploy.component.scss']
})
export class DeployComponent implements OnInit {

  constructor(public routeService: RouterService, private deployService: DeployService) { }
  scanner = ''
  robot = '';
  setScannerError = false;
  setRobotError = false

  ngOnInit(): void {
  }

  getConnect = (type: string) => {
    if(type === 'scanner') {
      this.deployService.getScannerConnect(this.scanner).subscribe((data: any) => {
          if(data?.error) {
            this.setScannerError = true;
          } else {
            this.setScannerError = false;
          }
      })
    } else {
      this.deployService.getRobotConnect(this.scanner).subscribe((data: any) => {
        if(data?.error) {
          this.setRobotError = true;
        } else {
          this.setRobotError = false;
        }
      })
    }
  }
}
