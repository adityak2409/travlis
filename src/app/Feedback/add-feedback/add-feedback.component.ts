import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Feedback} from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.scss']
})
export class AddFeedbackComponent implements OnInit{
  feedback:Feedback;
  feedbacklist:any[];


constructor(
  private router:Router,
  private http:HttpClient,
  private service: Service){
    this.feedback = new Feedback();
  // this.student=new Student();
  this.feedbacklist=[];

  
}

OnSubmit() {
  console.log("prop",this.feedback);
 this.service.AddFeedback(this.feedback).subscribe((result) => {
   if (result > 0) { 
       alert('Saved Successfully.');   
   }
   else {
     alert("Something went wrong! Please try again.")
   }
 });

}

  
  
  
  
  
  
  
  
  
  
  
  ngOnInit(): void {
    
  }

}

