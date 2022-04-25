import { Component, HostListener, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RouterService } from 'src/app/service/router.service';
@Component({
  selector: 'app-deletepopup',
  templateUrl: './deletepopup.component.html',
  styleUrls: ['./deletepopup.component.scss']
})
export class DeletepopupComponent implements OnInit {

  model = false;

  @HostListener('document:keyup', ['$event']) closeModel(event: KeyboardEvent) {
    if(this.model && event.key == 'Escape') {
      this.model = false;
    }
  }

  constructor(public routeService: RouterService) { }
  @Output() closeModelEmit = new EventEmitter();
  @Input() headertitle = '';
  @Input() customclass = '';
  @Input() showHeader = true
  ngOnInit(): void {
  }
  closeModelclick() {
    this.closeModelEmit.emit(false);
  }



showModel(event: any) {
  this.model = event;
}

}
