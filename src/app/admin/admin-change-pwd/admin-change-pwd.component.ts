import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/Service/admin.service';

@Component({
  selector: 'app-admin-change-pwd',
  templateUrl: './admin-change-pwd.component.html',
  styleUrls: ['./admin-change-pwd.component.scss']
})
export class AdminChangePwdComponent implements OnInit {
adminChangePwdForm!:FormGroup
admin:any
  constructor(
    private adminService:AdminService,
    private fb:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
   this.admin= this.adminService.getAdminFormLocal()
   console.log(this.admin);
   
    this.adminChangePwdForm=this.fb.group({
      username:[this.admin.username,[Validators.required]],
      pwd:['',[Validators.required]],
      npwd:['',[Validators.required]]
    })
    
  }
adminChangePWD(){
  if(this.adminChangePwdForm.valid){
  if(this.admin.password==this.adminChangePwdForm.value.pwd){
   let newPwd={
    password:this.adminChangePwdForm.value.npwd
   }
    this.adminService.adminChangePwd(this.admin._id,newPwd).subscribe((res:any)=>{
      if(res){
        alert('password updated')
        sessionStorage.removeItem('admin')
        this.router.navigate(['home/admin-login'])
      }
    })
  }else{
    alert('old password not matched')
  }
}else{
  alert('please fill required fields')
}
}
}
