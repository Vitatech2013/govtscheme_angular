import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/Service/admin.service';

@Component({
  selector: 'app-admin-oldage-pension',
  templateUrl: './admin-oldage-pension.component.html',
  styleUrls: ['./admin-oldage-pension.component.scss']
})
export class AdminOldagePensionComponent implements OnInit {
oap:any
oapForm!:FormGroup
pic:any
bc:any
pb:any
vid:any
id:any
  constructor(
    private fb:FormBuilder,
    private adminService:AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.viewOldAgeScheme().subscribe((res:any)=>{
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
      status:['',[Validators.required]]
    })
  }
  viewOAP(o:any){
    this.id=o._id
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
    status:o.status
    })

    this.pic=o.photo
    this.bc=o.birthcertificate
    this.pb=o.passbook
    this.vid=o.voterid

  }
  changeStatus(){
    let data={
      status:this.oapForm.value.status
    }
    this.adminService.changeOAPstatus(this.id,data).subscribe((res:any)=>{
      window.location.reload()
    })
  }
  }

