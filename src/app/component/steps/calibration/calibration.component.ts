import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
@Component({
  selector: 'app-calibration',
  templateUrl: './calibration.component.html',
  styleUrls: ['./calibration.component.scss']
})
export class CalibrationComponent implements OnInit {

  constructor(public routeService: RouterService) { }

  ngOnInit(): void {
  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
