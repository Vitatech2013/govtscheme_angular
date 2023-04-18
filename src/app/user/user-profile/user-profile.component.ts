import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/Service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userUpdateForm!:FormGroup
  u:any
  user:any
  constructor(
    private fb:FormBuilder,
    private userService:UserService
  ) { }

  ngOnInit(): void {
this.u=this.userService.getUserFromLocal()
    this.userUpdateForm=this.fb.group({
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
    this.userService.viewProfile(this.u.username).subscribe((res:any)=>{
      res.map((x:any)=>{
        this.user=x
        this.userUpdateForm.patchValue({
          firstname:this.user.firstname,
      lastname:this.user.lastname,
      fathername:this.user.fathername,
      username:this.user.username,
      password:this.user.password,
      mobileno:this.user.mobileno,
      Emailid:this.user.Emailid,
      aadharno:this.user.aadharno,
      occupation:this.user.occupation,
      state:this.user.state,
      address:this.user.address,
        })
        
      })
      
    })
  }
userUpdate(){
  if(this.userUpdateForm.valid){
    this.userService.updateProfile(this.u._id,this.userUpdateForm.value).subscribe((res:any)=>{
      if(res){
        alert('update successfull')
      }else{
        alert('something went wrong')
      }
    })
  }

}
}
