import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
schemes=['Kalyana Laxmi','Study Scholarship','Old Age Pension','Double BedRoom Scheme']
castes=['SC,ST&BC','SC,ST&Minority', 'SC,ST,BC&OC']
  constructor(
    private http:HttpClient
  ) { }
  url=environment.baseUrl

  getAdminFormLocal(){
    return JSON.parse(sessionStorage.getItem('admin')!)
  }

  adminLogin(uname:any,pwd:any){
    return this.http.get(`${this.url}/admin/adminLogin?username=${uname}&password=${pwd}`)
  }
  viewUser(){
    return this.http.get(`${this.url}/admin/viewusers`)
  }

  viewSchemes(){
    return this.http.get(`${this.url}/admin/viewschemes`) 
  }

  viewFeedbacks(){
    return this.http.get(`${this.url}/admin/viewfeedback`)
  }
  adminChangePwd(id:any,data:any){
    return this.http.put(`${this.url}/admin/updatepassword/${id}`,data)
  }
  addScheme(data:any){
    return this.http.post(`${this.url}/admin/addschemes`,data)
  }
  viewKalyanalaxmi(){
    return this.http.get(`${this.url}/admin/viewkalyanalaxmi`)
  }
  viewStudentScheme(){
    return this.http.get(`${this.url}/admin/viewstudy`)
  }
  viewOldAgeScheme(){
    return this.http.get(`${this.url}/admin/viewoldage`)
  }
  viewDoubleBedRoom(){
    return this.http.get(`${this.url}/admin/viewhousing`)
  }
  changeKLstatus(id:any,data:any){
    return this.http.put(`${this.url}/admin/kalyanalaxmistatus/${id}`,data)
  }
  changeSSstatus(id:any,data:any){
    return this.http.put(`${this.url}/admin/studystatus/${id}`,data)
  }
  changeOAPstatus(id:any,data:any){
    return this.http.put(`${this.url}/admin/oldagestatus/${id}`,data)
  }
  changeDBRstatus(id:any,data:any){
    return this.http.put(`${this.url}/admin/housingstatus/${id}`,data)
  }
  
}
