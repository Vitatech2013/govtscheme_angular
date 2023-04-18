import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/Service/user.service';

@Component({
  selector: 'app-user-view-oldage-pension',
  templateUrl: './user-view-oldage-pension.component.html',
  styleUrls: ['./user-view-oldage-pension.component.scss']
})
export class UserViewOldagePensionComponent implements OnInit {
oap:any
oapForm!:FormGroup
pic:any
bc:any
pb:any
vid:any
  constructor(
    private userService:UserService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    let username=this.userService.getUserFromLocal().username
  this.userService.getOldAgePension(username).subscribe((res:any)=>{
    this.oap=res
  })

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
  })
  }
  viewOAP(o:any){
    this.oapForm.patchValue({
      name:o.name, 
    fathername:o.fathername, 
    dob:o.dob, 
    gender:o.gender, 
    age:o.age, 
    phoneno:o.phoneno, 
    aadharno:o.aadharno, 
    occupation:o.occupation, 
    bankname:o.bankname, 
    branchname:o.branchname,
    accholdername:o.accholdername, 
    accountno:o.accountno, 
    address:o.address,
    })

    this.pic=o.photo
    this.bc=o.birthcertificate
    this.pb=o.passbook
    this.vid=o.voterid

  }
}
