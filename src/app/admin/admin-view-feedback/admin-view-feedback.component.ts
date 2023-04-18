import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/Service/admin.service';

@Component({
  selector: 'app-admin-view-feedback',
  templateUrl: './admin-view-feedback.component.html',
  styleUrls: ['./admin-view-feedback.component.scss']
})
export class AdminViewFeedbackComponent implements OnInit {
feedbacks:any
  constructor(
    private adminService:AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.viewFeedbacks().subscribe((res:any)=>{
      this.feedbacks=res
    })
  }

}
