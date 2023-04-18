import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { AdminViewUsersComponent } from './admin/admin-view-users/admin-view-users.component';
import { AdminAddSchemesComponent } from './admin/admin-add-schemes/admin-add-schemes.component';
import { AdminKalyanaLaxmiComponent } from './admin/admin-scheme-allications/admin-kalyana-laxmi/admin-kalyana-laxmi.component';
import { AdminStudyScholarshipComponent } from './admin/admin-scheme-allications/admin-study-scholarship/admin-study-scholarship.component';
import { AdminOldagePensionComponent } from './admin/admin-scheme-allications/admin-oldage-pension/admin-oldage-pension.component';
import { AdminDoubleBedrommComponent } from './admin/admin-scheme-allications/admin-double-bedromm/admin-double-bedromm.component';
import { AdminViewSchemesComponent } from './admin/admin-view-schemes/admin-view-schemes.component';
import { AdminViewFeedbackComponent } from './admin/admin-view-feedback/admin-view-feedback.component';
import { AdminChangePwdComponent } from './admin/admin-change-pwd/admin-change-pwd.component';
import { UserViewSchemesComponent } from './user/user-view-schemes/user-view-schemes.component';
import { UserSendFeedbackComponent } from './user/user-send-feedback/user-send-feedback.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserChangePwdComponent } from './user/user-change-pwd/user-change-pwd.component';
import { UserApplyKalyanalaxmiComponent } from './user/Apply-schemes/user-apply-kalyanalaxmi/user-apply-kalyanalaxmi.component';
import { UserApplyDoubleBedroomComponent } from './user/Apply-schemes/user-apply-double-bedroom/user-apply-double-bedroom.component';
import { UserApplyOldagePensionComponent } from './user/Apply-schemes/user-apply-oldage-pension/user-apply-oldage-pension.component';
import { UserApplyStudyScholarshipComponent } from './user/Apply-schemes/user-apply-study-scholarship/user-apply-study-scholarship.component';
import { UserViewKalyanalaxmiComponent } from './user/view-scheme-allication/user-view-kalyanalaxmi/user-view-kalyanalaxmi.component';
import { UserViewStudyScholarshipComponent } from './user/view-scheme-allication/user-view-study-scholarship/user-view-study-scholarship.component';
import { UserViewOldagePensionComponent } from './user/view-scheme-allication/user-view-oldage-pension/user-view-oldage-pension.component';
import { UserViewDoubleBedroomComponent } from './user/view-scheme-allication/user-view-double-bedroom/user-view-double-bedroom.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home', component:WelcomeComponent, children:[
    {path:'user-login', component:UserLoginComponent},
    {path:'user-reg', component:UserRegistrationComponent},
    {path:'admin-login', component:AdminLoginComponent}
  ]},
  {path:'admin-dashboard', component:AdminDashboardComponent, children:[
    {path:'admin-view-users',component:AdminViewUsersComponent},
    {path:'admin-add-scheme',component:AdminAddSchemesComponent},
    {path:'admin-view-scheme',component:AdminViewSchemesComponent},
    {path:'admin-view-kl',component:AdminKalyanaLaxmiComponent},
    {path:'admin-view-ss',component:AdminStudyScholarshipComponent},
    {path:'admin-view-oap',component:AdminOldagePensionComponent},
    {path:'admin-view-dbr',component:AdminDoubleBedrommComponent},
    {path:'admin-view-feedback',component:AdminViewFeedbackComponent},
    {path:'admin-change-pwd',component:AdminChangePwdComponent},
  ]},
  {path:'user-dashboard', component:UserDashboardComponent,children:[
    {path:'user-view-scheme', component:UserViewSchemesComponent},
    {path:'user-apply-kl', component:UserApplyKalyanalaxmiComponent},
    {path:'user-apply-ss', component:UserApplyStudyScholarshipComponent},
    {path:'user-apply-oap', component:UserApplyOldagePensionComponent},
    {path:'user-apply-dbr', component:UserApplyDoubleBedroomComponent},
    {path:'user-view-kl',component:UserViewKalyanalaxmiComponent},
    {path:'user-view-ss',component:UserViewStudyScholarshipComponent},
    {path:'user-view-oap',component:UserViewOldagePensionComponent},
    {path:'user-view-dbr',component:UserViewDoubleBedroomComponent},
    {path:'user-send-feedback', component:UserSendFeedbackComponent},
    {path:'user-profile',component:UserProfileComponent},
    {path:'user-change-pwd', component:UserChangePwdComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
