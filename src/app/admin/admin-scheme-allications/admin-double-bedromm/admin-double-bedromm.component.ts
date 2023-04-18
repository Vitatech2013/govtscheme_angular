import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/Service/admin.service';

@Component({
  selector: 'app-admin-double-bedromm',
  templateUrl: './admin-double-bedromm.component.html',
  styleUrls: ['./admin-double-bedromm.component.scss']
})
export class AdminDoubleBedrommComponent implements OnInit {
dbr:any
dbrForm!:FormGroup
caste:any
ration:any
id:any
  constructor(
    private adminService:AdminService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.adminService.viewDoubleBedRoom().subscribe((res:any)=>{
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
      status:['',[Validators.required]]
    })

  }
  viewDBR(d:any){
    this.id=d._id
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
      status:d.status
    })
    this.caste=d.castecertificate,
    this.ration=d.rationcard
  }
  changeStatus(){
    let data={
      status:this.dbrForm.value.status
    }
    this.adminService.changeDBRstatus(this.id,data).subscribe((res:any)=>{
      window.location.reload()
    })
  }
}
