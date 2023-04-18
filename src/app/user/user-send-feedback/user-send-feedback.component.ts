import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/Service/user.service';

@Component({
  selector: 'app-user-send-feedback',
  templateUrl: './user-send-feedback.component.html',
  styleUrls: ['./user-send-feedback.component.scss']
})
export class UserSendFeedbackComponent implements OnInit {
feedbackForm!:FormGroup
user:any
  constructor(
    private fb:FormBuilder,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.user=this.userService.getUserFromLocal()
    this.feedbackForm=this.fb.group({
      feedback:['',[Validators.required]],
      date:['',[Validators.required]]
    })
  }
  sendFeedback(){
let data={
  name:this.user.username,
  ...this.feedbackForm.value,
}
this.userService.sendFeedBack(data).subscribe((res:any)=>{
  if(res){
    alert('send Feedback successfully')
  }else{
alert('something went wrong')
  }
})

  }
}
