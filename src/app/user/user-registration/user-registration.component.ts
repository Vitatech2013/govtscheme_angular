import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/Service/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  userRegForm!:FormGroup
  constructor(
    private fb:FormBuilder,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.userRegForm=this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      fathername:['',[Validators.required]],
      username:['',[Validators.required]],
      password:['',[Validators.required]],
      mobileno:['',[Validators.required]],
      Emailid:['',[Validators.required]],
      aadharno:['',[Validators.required]],
      occupation:['',[Validators.required]],
      state:['',[Validators.required]],
      address:['',[Validators.required]],
    })
  }
  userReg(){
    if(this.userRegForm.valid){
      this.userService.userReg(this.userRegForm.value).subscribe((res:any)=>{
        if(res){
          alert('Register Successfull')
        }else{
          alert('something went wrong')
        }
      })
    }

  }
}
