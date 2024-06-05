import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/Service';
import { GlobalVariable } from 'src/app/Global';


@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.scss']
})
export class FeedbackListComponent implements OnInit{
  
  
  FeedbackList: any[];
  // imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(private router: Router,  private http: HttpClient, private service: Service) {
    this.FeedbackList=[];
   }

   Delete(FeedbackId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteFeedback(FeedbackId).subscribe(result => {
      if (result == "Success") {
      this.FeedbackList = this.FeedbackList.filter(
        (item) => item.Id != FeedbackId);
      alert("Deleted Successfully");
    } else {
      alert("Something went wrong! please try again.");
    }
  });
  }
  Edit(FeedbackId): void{
    try {
      this.router.navigateByUrl("/UpdateFeedback/" + FeedbackId,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  View(FeedbackId): void{
    try {
      this.router.navigateByUrl("/Viewfeedback/" + FeedbackId,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  ngOnInit(): void {
    this.service.GetAllFeedback().subscribe((result) => {
      console.log(result);
      for(let data of result)
      {
          this.FeedbackList.push(data);   
      }     
           console.log(this.FeedbackList);
    });
  }
  
  
  
  
  
  
  
  
  
  

}


