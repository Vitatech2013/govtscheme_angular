import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/Service/user.service';

@Component({
  selector: 'app-user-view-kalyanalaxmi',
  templateUrl: './user-view-kalyanalaxmi.component.html',
  styleUrls: ['./user-view-kalyanalaxmi.component.scss']
})
export class UserViewKalyanalaxmiComponent implements OnInit {
kl:any
klForm!:FormGroup
districts:any
  mandals:any
  gmandals:any
mCard:any
bPhoto:any
aCopy:any
pBook:any
caste:any
  constructor(
    private userService:UserService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.districts=this.userService.districts
    let username=this.userService.getUserFromLocal().username
  this.userService.getKalyanaLaxmi(username).subscribe((res:any)=>{
    this.kl=res
  })
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
  })


  }
  selectDistricts(event:any){
    this.mandals=this.userService.mandals.filter((x:any)=>x.d==event.target.value)
  }
  groomDistricts(event:any){
    this.gmandals=this.userService.mandals.filter((x:any)=>x.d==event.target.value)
  }

  viewKalayana(k:any){
this.klForm.patchValue({
  bridalname:k.bridalname,
    bridalfathername:k.bridalfathername,
    bridalmothername:k.bridalmothername,
    bridaldob:k.bridaldob,
    bridalqualification:k.bridalqualification,
    bridalphoneno:k.bridalphoneno,
    bridalaadharno:k.bridalaadharno,
    bridalmotheraadharno:k.bridalmotheraadharno,
    bridalcaste:k.bridalcaste,
    bridalincomeno:k.bridalincomeno,
    bridaltotallincome:k.bridaltotallincome,
    bridalcasteno:k.bridalcasteno,
    bridaldistrict:k.bridaldistrict,
    bridalmondel:k.bridalmondel,
    bridalvillage:k.bridalvillage,
    holdername:k.holdername,
    bridalmotheraccno:k.bridalmotheraccno,
    bankdistrict:k.bankdistrict,
    bankname:k.bankname,
    branchname:k.branchname,
    bridalgroomname:k.bridalgroomname,
    bridalgroomfathername:k.bridalgroomfathername,
    bridalgroommothername:k.bridalgroommothername,
    bridalgroomdob:k.bridalgroomdob,
    bridalgroomqualification:k.bridalgroomqualification,
    bridalgroomphone:k.bridalgroomphone,
    bridalgroomaadharno:k.bridalgroomaadharno,
    bridalgroomafatheradharno:k.bridalgroomafatheradharno,
    bridalgroomdistrict:k.bridalgroomdistrict,
    bridalgroommandel:k.bridalgroommandel,
    bridalgroomvillage:k.bridalgroomvillage,
    marriagedate:k.marriagedate,
    marriageplace:k.marriageplace,
    marriageaddress:k.marriageaddress,
})
this.mCard=k.marriagecard,
this.bPhoto=k.bridalphoto,
this.aCopy=k.aadharcopy,
this.pBook=k.passbook,
this.caste=k.castecertificate
  }
}
