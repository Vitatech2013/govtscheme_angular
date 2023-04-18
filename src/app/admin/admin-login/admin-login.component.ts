import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/Service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
adminLoginForm!:FormGroup
  constructor(
    private fb:FormBuilder,
    private adminService:AdminService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.adminLoginForm=this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  adminLogin(){
    let uname=this.adminLoginForm.value.username
    let pwd=this.adminLoginForm.value.password
    if(this.adminLoginForm.valid){
    this.adminService.adminLogin(uname,pwd).subscribe((res:any)=>{
      if(res){
        sessionStorage.setItem('admin', JSON.stringify(res))
        this.router.navigate(['admin-dashboard'])
      }else{
        alert('invalid Credentials')
      }
      
    })
  }else{
    alert('please fill required fields')
  }
  }
}
