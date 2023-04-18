import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/Service/user.service';

@Component({
  selector: 'app-user-view-double-bedroom',
  templateUrl: './user-view-double-bedroom.component.html',
  styleUrls: ['./user-view-double-bedroom.component.scss']
})
export class UserViewDoubleBedroomComponent implements OnInit {
dbr:any
dbrForm!:FormGroup
caste:any
ration:any
  constructor(
    private userService:UserService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    let username=this.userService.getUserFromLocal().username
  this.userService.getDoubleBedRoom(username).subscribe((res:any)=>{
    this.dbr=res
  })
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
  })

  }

  viewDBR(d:any){
    this.dbrForm.patchValue({
      name:d.name,
      age:d.age,
      gender:d.gender,
      phoneno:d.phoneno,
      aadharno:d.aadharno,
      occupation:d.occupation,
      religion:d.religion,
      caste:d.caste,
      residenttype:d.residenttype,
      address:d.address,
    })
    this.caste=d.castecertificate,
    this.ration=d.rationcard
  }
}
