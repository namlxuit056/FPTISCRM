import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css','../../../../node_modules/ng2-toastr/bundles/ng2-toastr.min.css'],

})
export class AlertComponent implements OnInit {

  message: any;
  
     constructor(public toastr: ToastsManager, vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
     }
     
     ngOnInit() {
        
     }
     showSuccess() {
      this.toastr.success('You are awesome!', 'Success!');
    }
  
    showError() {
      this.toastr.error('This is not good!', 'Oops!');
    }


}
