import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/Service/admin.service';

@Component({
  selector: 'app-admin-study-scholarship',
  templateUrl: './admin-study-scholarship.component.html',
  styleUrls: ['./admin-study-scholarship.component.scss']
})
export class AdminStudyScholarshipComponent implements OnInit {
ss:any
ssForm:any
aCopy:any
pBook:any
casteLink:any
id:any
  constructor(
    private adminService:AdminService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.adminService.viewStudentScheme().subscribe((res:any)=>{
      this.ss=res
    })
    this.ssForm=this.fb.group({
      studentname:['',[Validators.required]],
      fathername:['',[Validators.required]],
      phoneno:['',[Validators.required]],
      aadharno:['',[Validators.required]],
      gender:['',[Validators.required]], 
      dob:['',[Validators.required]],
      ssctype:['',[Validators.required]],
      hallticket:['',[Validators.required]],
      passyear:['',[Validators.required]],
      universityname:['',[Validators.required]],
      collegename:['',[Validators.required]],
      course:['',[Validators.required]],
      address:['',[Validators.required]],
      bankname:['',[Validators.required]],
      branchname:['',[Validators.required]],
      accountno:['',[Validators.required]],
      status:['',[Validators.required]]
    })
  }
  viewSS(k:any){
this.id=k._id
this.ssForm.patchValue({
  studentname:k.studentname,
    fathername:k.fathername,
    phoneno:k.phoneno,
    aadharno:k.aadharno,
    gender:k.gender, 
    dob:k.dob,
    ssctype:k.ssctype,
    hallticket:k.hallticket,
    passyear:k.passyear,
    universityname:k.universityname,
    collegename:k.collegename,
    course:k.course,
    address:k.address,
    bankname:k.bankname,
    branchname:k.branchname,
    accountno:k.accountno,
    status:k.status
})
this.aCopy=k.aadharcopy,
this.pBook=k.passbook
this.casteLink=k.castecertificte
  }

  changeStatus(){
    let data={
      status:this.ssForm.value.status
    }
    this.adminService.changeSSstatus(this.id,data).subscribe((res:any)=>{
      window.location.reload()
    })
  }
}
