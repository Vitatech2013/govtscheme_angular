import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/Service/admin.service';

@Component({
  selector: 'app-admin-view-schemes',
  templateUrl: './admin-view-schemes.component.html',
  styleUrls: ['./admin-view-schemes.component.scss']
})
export class AdminViewSchemesComponent implements OnInit {
schemes:any
  constructor(
    private adminService:AdminService
  ) { }

  ngOnInit(): void {
this.adminService.viewSchemes().subscribe((res:any)=>{
  this.schemes=res
})
  }

}
