import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/Service/user.service';

@Component({
  selector: 'app-user-view-schemes',
  templateUrl: './user-view-schemes.component.html',
  styleUrls: ['./user-view-schemes.component.scss']
})
export class UserViewSchemesComponent implements OnInit {
schemes:any
  constructor( 
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.userService.viewSchemes().subscribe((res:any)=>{
      this.schemes=res
    })
  }

}
