import { Component, HostListener, OnInit } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
import { ObjectService } from 'src/app/service/object.service';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent implements OnInit {
  model = false;

  @HostListener('document:keyup', ['$event']) closeModel(event: KeyboardEvent) {
    if(this.model && event.key == 'Escape') {
      this.model = false;
    }
  }
  
  constructor(public routeService: RouterService,private objectservice: ObjectService) { }

  ngOnInit(): void {
    this.objectservice.getobjects().subscribe((data:any) => {
      console.log(data)
    })
  }
  
  showModel(event: any) {
    this.model = event;
  }

}
