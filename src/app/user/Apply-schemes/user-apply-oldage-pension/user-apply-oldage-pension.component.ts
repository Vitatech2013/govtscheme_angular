import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/Service/user.service';

@Component({
  selector: 'app-user-apply-oldage-pension',
  templateUrl: './user-apply-oldage-pension.component.html',
  styleUrls: ['./user-apply-oldage-pension.component.scss']
})
export class UserApplyOldagePensionComponent implements OnInit {
  oapForm!:FormGroup
  user:any
  p:any
  bc:any
  pb:any
  vid:any
  constructor(
    private fb:FormBuilder,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.user=this.userService.getUserFromLocal().username
    this.oapForm=this.fb.group({
      name:['',[Validators.required]], 
      fathername:['',[Validators.required]], 
      dob:['',[Validators.required]], 
      gender:['',[Validators.required]], 
      age:['',[Validators.required]], 
      phoneno:['',[Validators.required]], 
      aadharno:['',[Validators.required]], 
      occupation:['',[Validators.required]], 
      bankname:['',[Validators.required]], 
      branchname:['',[Validators.required]],
      accholdername:['',[Validators.required]], 
      accountno:['',[Validators.required]], 
      address:['',[Validators.required]], 
      photo:['',[Validators.required]], 
      birthcertificate:['',[Validators.required]], 
      passbook:['',[Validators.required]], 
      voterid:['',[Validators.required]]
    })
  }
uploadPhoto(event:any){
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); 
    reader.onload = (event) => { 
         this.p  = event.target?.result      
    }
  }
}
uploadBirthCertificate(event:any){
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); 
    reader.onload = (event) => { 
         this.bc  = event.target?.result      
    }
  }
}
uploadPassbook(event:any){
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); 
    reader.onload = (event) => { 
         this.pb  = event.target?.result      
    }
  }
}
uploadVoterID(event:any){
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); 
    reader.onload = (event) => { 
         this.vid  = event.target?.result      
    }
  }
}
  applyOAP(){
if(this.oapForm.valid){
  let data={
    username:this.user,
    ...this.oapForm.value,
    photo:this.p,
    birthcertificate:this.bc,
    passbook:this.pb,
    voterid:this.vid,
    status:'Pending'
  }
  this.userService.applyOldAgePension(data).subscribe((res:any)=>{
    if(res){
      alert('ola age pension applied successfully')
    }else{
      alert('something went wrong')
    }
  })
}else{
  alert('please fill required field')
}
  }
}
