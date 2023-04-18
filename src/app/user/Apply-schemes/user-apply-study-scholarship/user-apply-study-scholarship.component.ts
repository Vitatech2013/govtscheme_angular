import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/Service/user.service';

@Component({
  selector: 'app-user-apply-study-scholarship',
  templateUrl: './user-apply-study-scholarship.component.html',
  styleUrls: ['./user-apply-study-scholarship.component.scss']
})
export class UserApplyStudyScholarshipComponent implements OnInit {
ac:any
pc:any
cc:any
ssForm!:FormGroup
user:any
  constructor(
    private fb:FormBuilder,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.user=this.userService.getUserFromLocal().username
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
      aadharcopy:['',[Validators.required]],
      passbook:['',[Validators.required]],
      castecertificate:['',[Validators.required]],
    })
  }

  uploadAadhar(event:any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (event) => { 
           this.ac  = event.target?.result      
      }
    }
  }

  uploadPassbook(event:any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (event) => { 
           this.pc  = event.target?.result      
      }
    }
  }
  uploadCast(event:any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (event) => { 
           this.cc  = event.target?.result      
      }
    }
  }
  applySS(){
    
    if(this.ssForm.valid){
      let data={
        username:this.user,
        ...this.ssForm.value,
        aadharcopy:this.ac,
        passbook:this.pc,
        castecertificate:this.cc,
        status:'Pending'
      }
      this.userService.applyStudentScholarship(data).subscribe((res:any)=>{
        if(res){
          alert('successfully applied for Student ScholarShip')
          this.ssForm.reset()
        }else{
          alert('something went wrong')
        }
      })
    }else{
      alert('please fill required fields')
    }
    
  }
}
