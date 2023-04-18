import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/Service/admin.service';

@Component({
  selector: 'app-admin-add-schemes',
  templateUrl: './admin-add-schemes.component.html',
  styleUrls: ['./admin-add-schemes.component.scss']
})
export class AdminAddSchemesComponent implements OnInit {
schemes:any
castes:any
addSchemeForm!:FormGroup
  constructor(
    private adminService:AdminService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.schemes=this.adminService.schemes
    this.castes=this.adminService.castes
    this.addSchemeForm=this.fb.group({
      schemename:['',[Validators.required]],
      startdate:['',[Validators.required]],
      enddate:['',[Validators.required]],
      castetype:['',[Validators.required]],
      Aadhar:['',[Validators.required]],
      Passbook:['',[Validators.required]],
      CastCertificate:['',[Validators.required]],
      IncomeCertificate:['',[Validators.required]],
      VoterId:['',[Validators.required]],
      RationCard:['',[Validators.required]],
      MarraigeCard:['',[Validators.required]],
      Photo:['',[Validators.required]],
      aboutscheme:['',[Validators.required]]
    })

  }
  a:any
  p:any
  c:any
  i:any
  v:any
  r:any
  m:any
  pic:any
addScheme(){
  if(this.addSchemeForm.valid){
    if(this.addSchemeForm.value.Aadhar==true){
      this.a='Aadhar' 
    }
    if(this.addSchemeForm.value.Passbook==true){
      this.p='Passbook' 
    }
    if(this.addSchemeForm.value.CastCertificate==true){
      this.c='CastCertificate' 
    }
    if(this.addSchemeForm.value.IncomeCertificate==true){
      this.i='IncomeCertificate' 
    } 
    if(this.addSchemeForm.value.VoterId==true){
      this.v='VoterId' 
    }
     if(this.addSchemeForm.value.RationCard==true){
      this.r='RationCard' 
    }
     if(this.addSchemeForm.value.MarraigeCard==true){
      this.m='MarraigeCard' 
    }
     if(this.addSchemeForm.value.Photo==true){
      this.pic='Photo' 
    }

let data={
  schemename:this.addSchemeForm.value.schemename,
  startdate:this.addSchemeForm.value.startdate,
  enddate:this.addSchemeForm.value.enddate,
  castetype:this.addSchemeForm.value.castetype,
  requireddocuments:this.a+','+this.p+','+this.c+','+this.i+','+this.v+','+this.r+','+this.m+','+this.pic,
  aboutscheme:this.addSchemeForm.value.aboutscheme
}
this.adminService.addScheme(data).subscribe((res:any)=>{
  if(res){
    alert('scheme added successfully')
  }
})

  }else{
    alert('please fill and select all fields')
  }

}
}
