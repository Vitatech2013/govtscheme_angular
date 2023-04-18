import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/Service/user.service';

@Component({
  selector: 'app-user-apply-kalyanalaxmi',
  templateUrl: './user-apply-kalyanalaxmi.component.html',
  styleUrls: ['./user-apply-kalyanalaxmi.component.scss']
})
export class UserApplyKalyanalaxmiComponent implements OnInit {
  klForm!:FormGroup
  a:any
  mc:any
  bp:any
  ac:any
  pc:any
  cc:any
  user:any
  districts:any
  mandals:any
  gmandals:any
  constructor(
    private fb:FormBuilder,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.districts=this.userService.districts
this.user=this.userService.getUserFromLocal()

    this.klForm=this.fb.group({
      bridalname:['',[Validators.required]],
      bridalfathername:['',[Validators.required]],
      bridalmothername:['',[Validators.required]],
      bridaldob:['',[Validators.required]],
      bridalqualification:['',[Validators.required]],
      bridalphoneno:['',[Validators.required]],
      bridalaadharno:['',[Validators.required]],
      bridalmotheraadharno:['',[Validators.required]],
      bridalcaste:['',[Validators.required]],
      bridalincomeno:['',[Validators.required]],
      bridaltotallincome:['',[Validators.required]],
      bridalcasteno:['',[Validators.required]],
      bridaldistrict:['',[Validators.required]],
      bridalmondel:['',[Validators.required]],
      bridalvillage:['',[Validators.required]],
      holdername:['',[Validators.required]],
      bridalmotheraccno:['',[Validators.required]],
      bankdistrict:['',[Validators.required]],
      bankname:['',[Validators.required]],
      branchname:['',[Validators.required]],
      bridalgroomname:['',[Validators.required]],
      bridalgroomfathername:['',[Validators.required]],
      bridalgroommothername:['',[Validators.required]],
      bridalgroomdob:['',[Validators.required]],
      bridalgroomqualification:['',[Validators.required]],
      bridalgroomphone:['',[Validators.required]],
      bridalgroomaadharno:['',[Validators.required]],
      bridalgroomafatheradharno:['',[Validators.required]],
      bridalgroomdistrict:['',[Validators.required]],
      bridalgroommandel:['',[Validators.required]],
      bridalgroomvillage:['',[Validators.required]],
      marriagedate:['',[Validators.required]],
      marriageplace:['',[Validators.required]],
      marriageaddress:['',[Validators.required]],
      marriagecard:[''],
      bridalphoto:[''],
      aadharcopy:[''],
      passbook:[''],
      castecertificate:[''],
    })
  }
 
  selectDistricts(event:any){
    this.mandals=this.userService.mandals.filter((x:any)=>x.d==event.target.value)
  }
  groomDistricts(event:any){
    this.gmandals=this.userService.mandals.filter((x:any)=>x.d==event.target.value)
  }

  uploadmarriageCard(event:any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (event) => { 
           this.mc  = event.target?.result      
      }
    }
  }

  uploadBridalPhoto(event:any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (event) => { 
           this.bp  = event.target?.result      
      }
    }
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
  applyKL(){
   
   console.log('method calling');
   
    if(this.klForm.valid){
      let data={
        username:this.user.username,
        ...this.klForm.value,
        marriagecard:this.mc,
        bridalphoto:this.bp,
        aadharcopy:this.ac,
        passbook:this.pc,
        castecertificate:this.cc,
        status:'Pending'
      }
      this.userService.applyKalyanaLaxmi(data).subscribe((res:any)=>{
        if(res){
          alert('successfully applied kalyana laxmi')
          this.klForm.reset()
        }else{
          alert('failed')
        }
      })
      
    }else{
      alert('please fill')
    }
    

  }

  
}
