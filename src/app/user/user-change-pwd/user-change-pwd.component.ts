import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/Service/user.service';

@Component({
  selector: 'app-user-change-pwd',
  templateUrl: './user-change-pwd.component.html',
  styleUrls: ['./user-change-pwd.component.scss']
})
export class UserChangePwdComponent implements OnInit {
  userChangePwdForm!:FormGroup
  user:any
  constructor(
    private userService:UserService,
    private fb:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.user= this.userService.getUserFromLocal()
    this.userChangePwdForm=this.fb.group({
      username:[this.user.username,[Validators.required]],
      pwd:['',[Validators.required]],
      npwd:['',[Validators.required]]
    })
  }
  userChangePWD(){
    if(this.userChangePwdForm.valid){
      if(this.user.password==this.userChangePwdForm.value.pwd){
       let newPwd={
        password:this.userChangePwdForm.value.npwd
       }
        this.userService.updatePassword(this.user._id,newPwd).subscribe((res:any)=>{
          if(res){
            alert('password updated')
            sessionStorage.removeItem('user')
            this.router.navigate(['home/user-login'])
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
