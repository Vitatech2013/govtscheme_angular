import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  districts=['karimnagar','peddapalli','warangal']
  mandals=[
    {d:'karimnagar',m:'gangadhara'},
    {d:'karimnagar',m:'manakondur'},
    {d:'karimnagar',m:'jammikunta'},
    {d:'peddapalli',m:'kamanpur'},
    {d:'peddapalli',m:'manthani'},
    {d:'peddapalli',m:'ramagundam'},
    {d:'warangal',m:'mulugu'},
    {d:'warangal',m:'parkal'},
    {d:'warangal',m:'nekkonda'},


  ]

  constructor(private http:HttpClient) { }

  url=environment.baseUrl

  getUserFromLocal(){
    return JSON.parse(sessionStorage.getItem('user')!)
  }
  userLogin(uname:any,pwd:any){
    return this.http.get(`${this.url}/user/userlogin?username=${uname}&password=${pwd}`)
  }

  userReg(data:any){
    return this.http.post(`${this.url}/user/registration`,data)
  }
  viewSchemes(){
    return this.http.get(`${this.url}/user/viewschemes`)
  }
  sendFeedBack(data:any){
    return this.http.post(`${this.url}/user/sendfeedback`, data)
  }
  viewProfile(uname:any){
    return this.http.get(`${this.url}/user/viewprofile?username=${uname}`)
  }
  updateProfile(id:any,data:any){
    return this.http.put(`${this.url}/user/${id}`,data)
  }
  updatePassword(id:any,data:any){
    return this.http.put(`${this.url}/user/updatepassword/${id}`,data)
  }
  applyKalyanaLaxmi(data:any){
    return this.http.post(`${this.url}/user/applykalyanalaxmi`,data)
  }
  getKalyanaLaxmi(uname:any){
    return this.http.get(`${this.url}/user/viewkalyanalaxmi?username=${uname}`)
  }
  getKalyanaLaxmiByID(id:any){
    return this.http.get(`${this.url}/user/viewkalyanalaxmi/${id}`) 
  }

  applyStudentScholarship(data:any){
    return this.http.post(`${this.url}/user/applystudy`,data)
  }

  getStudentScholorShip(uname:any){
    return this.http.get(`${this.url}/user/viewstudy?username=${uname}`)
  }

  getStudentScholorShipBYID(id:any){
    return this.http.get(`${this.url}/user/viewstudy/${id}`)
  }

  applyOldAgePension(data:any){
    return this.http.post(`${this.url}/user/applyoldage`,data)
  }

  getOldAgePension(uname:any){
    return this.http.get(`${this.url}/user/viewoldage?username=${uname}`)
  }

  getOldAgePensionBYID(id:any){
    return this.http.get(`${this.url}/user/viewoldage/${id}`)
  }

  applyDoubleBedRoom(data:any){
    return this.http.post(`${this.url}/user/applyhousing`,data)
  } 

  getDoubleBedRoom(uname:any){
    return this.http.get(`${this.url}/user/viewhousing?username=${uname}`)
  }

  getDoubleBedRoomBYID(id:any){
    return this.http.get(`${this.url}/user/viewhousing/${id}`)
  }
}
