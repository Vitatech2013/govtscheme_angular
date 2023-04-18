import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/Service/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
userLoginForm!:FormGroup
  constructor(
    private fb:FormBuilder,
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.userLoginForm=this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  userLogin(){
    let uname=this.userLoginForm.value.username
    let pwd=this.userLoginForm.value.password
 
    
if(this.userLoginForm.valid){
this.userService.userLogin(uname,pwd).subscribe((res:any)=>{
 if(res){
  sessionStorage.setItem('user', JSON.stringify(res))
  this.router.navigate(['user-dashboard'])
 }else{
  alert('invalid credentials')
 }
  
})
}else{
  alert('please fill required fields')
}
  }
}
