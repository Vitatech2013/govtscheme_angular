import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/Service/user.service';

@Component({
  selector: 'app-user-apply-double-bedroom',
  templateUrl: './user-apply-double-bedroom.component.html',
  styleUrls: ['./user-apply-double-bedroom.component.scss']
})
export class UserApplyDoubleBedroomComponent implements OnInit {
  dbrForm!:FormGroup
  cc:any
  ration:any
  uname:any
  constructor(
    private fb:FormBuilder,
    private userService:UserService
  ) { }

  ngOnInit(): void {
this.uname=this.userService.getUserFromLocal().username
    this.dbrForm=this.fb.group({
      name:['',[Validators.required]],
      age:['',[Validators.required]],
      gender:['',[Validators.required]],
      phoneno:['',[Validators.required]],
      aadharno:['',[Validators.required]],
      occupation:['',[Validators.required]],
      religion:['',[Validators.required]],
      caste:['',[Validators.required]],
      residenttype:['',[Validators.required]],
      address:['',[Validators.required]],
      castecertificate:['',[Validators.required]],
      rationcard:['',[Validators.required]] 
    })

  }
  uploadCaste(event:any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (event) => { 
           this.cc  = event.target?.result      
      }
    }
  }
uploadRationCard(event:any){
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); 
    reader.onload = (event) => { 
         this.ration  = event.target?.result      
    }
  }
}

applyDBR(){

  if(this.dbrForm.valid){
    let data={
      username:this.uname,
      ...this.dbrForm.value,
      castecertificate:this.cc,
      rationcard:this.ration,
      status:'Pending'
      }
      this.userService.applyDoubleBedRoom(data).subscribe((res:any)=>{
        if(res){
          alert('successfully applied')
        }else{
          alert('something went wrong')
        }
      })
  }else{
    alert('please fill required fields')
  }
}
}
