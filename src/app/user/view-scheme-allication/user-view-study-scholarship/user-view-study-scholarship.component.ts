import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/Service/user.service';

@Component({
  selector: 'app-user-view-study-scholarship',
  templateUrl: './user-view-study-scholarship.component.html',
  styleUrls: ['./user-view-study-scholarship.component.scss']
})
export class UserViewStudyScholarshipComponent implements OnInit {
ss:any
ssForm:any
aCopy:any
pBook:any
casteLink:any
  constructor(
    private userService:UserService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    let username=this.userService.getUserFromLocal().username
  this.userService.getStudentScholorShip(username).subscribe((res:any)=>{
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
  })

  }
  viewSS(k:any){
    console.log(k);
    
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
})
this.aCopy=k.aadharcopy,
this.pBook=k.passbook
this.casteLink=k.castecertificte
  }
}
