import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {UserService} from './service/user/user.service'
import { AuthguardGuard } from './authguard.guard';
import { UnitComponent } from './component/Unit/unit.component';
import {UnitService} from './service/unit/unit.service';
import {AuthenticationService} from './service/authentication/authentication.service';
import { HttpModule } from '@angular/http';
import { AlertComponent } from './component/alert/alert.component';
import{AlertService} from './service/alert/alert.service';
import { UserprofileComponent } from './component/userprofile/userprofile.component';
import { IndexComponent } from './component/index/index.component';

import { ToastsManager } from 'ng2-toastr/ng2-toastr'; 
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { ToastOptions} from 'ng2-toastr/ng2-toastr';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';

//import employee
import{EmployeeService} from './service/employee/employee.service';
import { EmployeeComponent } from './component/employee/employee.component';
//data table swim lane
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SidemenuComponent } from './component/sidemenu/sidemenu.component';
const appRoutes:Routes =[
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],
    component:DashboardComponent
  },
  {
    path: 'employee',
    canActivate: [AuthguardGuard],
    component:EmployeeComponent
  },
  {
    path:'',
    canActivate: [AuthguardGuard],
    component:IndexComponent
  },
  {
    path:'userprofile',
    canActivate: [AuthguardGuard],
    component:UserprofileComponent
  },
     // otherwise redirect to home
  { path: '**', redirectTo: '' }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    DashboardComponent,
    AlertComponent,
    UserprofileComponent,
    IndexComponent,
    EmployeeComponent,
    SidemenuComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    NgxDatatableModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastModule,
  ],
  providers: [UserService,
    AuthguardGuard,
    UnitService,
    AuthenticationService,
    EmployeeService,
    AlertService,
    ToastsManager,
    ToastOptions],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
