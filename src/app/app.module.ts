import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminViewUsersComponent } from './admin/admin-view-users/admin-view-users.component';
import { AdminAddSchemesComponent } from './admin/admin-add-schemes/admin-add-schemes.component';
import { AdminViewSchemesComponent } from './admin/admin-view-schemes/admin-view-schemes.component';
import { AdminViewFeedbackComponent } from './admin/admin-view-feedback/admin-view-feedback.component';
import { AdminChangePwdComponent } from './admin/admin-change-pwd/admin-change-pwd.component';
import { AdminKalyanaLaxmiComponent } from './admin/admin-scheme-allications/admin-kalyana-laxmi/admin-kalyana-laxmi.component';
import { AdminStudyScholarshipComponent } from './admin/admin-scheme-allications/admin-study-scholarship/admin-study-scholarship.component';
import { AdminOldagePensionComponent } from './admin/admin-scheme-allications/admin-oldage-pension/admin-oldage-pension.component';
import { AdminDoubleBedrommComponent } from './admin/admin-scheme-allications/admin-double-bedromm/admin-double-bedromm.component';
import { UserViewSchemesComponent } from './user/user-view-schemes/user-view-schemes.component';
import { UserSendFeedbackComponent } from './user/user-send-feedback/user-send-feedback.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserChangePwdComponent } from './user/user-change-pwd/user-change-pwd.component';
import { UserApplyKalyanalaxmiComponent } from './user/Apply-schemes/user-apply-kalyanalaxmi/user-apply-kalyanalaxmi.component';
import { UserApplyStudyScholarshipComponent } from './user/Apply-schemes/user-apply-study-scholarship/user-apply-study-scholarship.component';
import { UserApplyOldagePensionComponent } from './user/Apply-schemes/user-apply-oldage-pension/user-apply-oldage-pension.component';
import { UserApplyDoubleBedroomComponent } from './user/Apply-schemes/user-apply-double-bedroom/user-apply-double-bedroom.component';
import { UserViewKalyanalaxmiComponent } from './user/view-scheme-allication/user-view-kalyanalaxmi/user-view-kalyanalaxmi.component';
import { UserViewStudyScholarshipComponent } from './user/view-scheme-allication/user-view-study-scholarship/user-view-study-scholarship.component';
import { UserViewOldagePensionComponent } from './user/view-scheme-allication/user-view-oldage-pension/user-view-oldage-pension.component';
import { UserViewDoubleBedroomComponent } from './user/view-scheme-allication/user-view-double-bedroom/user-view-double-bedroom.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    UserLoginComponent,
    UserDashboardComponent,
    UserRegistrationComponent,
    AdminViewUsersComponent,
    AdminAddSchemesComponent,
    AdminViewSchemesComponent,
    AdminViewFeedbackComponent,
    AdminChangePwdComponent,
    AdminKalyanaLaxmiComponent,
    AdminStudyScholarshipComponent,
    AdminOldagePensionComponent,
    AdminDoubleBedrommComponent,
    UserViewSchemesComponent,
    UserSendFeedbackComponent,
    UserProfileComponent,
    UserChangePwdComponent,
    UserApplyKalyanalaxmiComponent,
    UserApplyStudyScholarshipComponent,
    UserApplyOldagePensionComponent,
    UserApplyDoubleBedroomComponent,
    UserViewKalyanalaxmiComponent,
    UserViewStudyScholarshipComponent,
    UserViewOldagePensionComponent,
    UserViewDoubleBedroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
