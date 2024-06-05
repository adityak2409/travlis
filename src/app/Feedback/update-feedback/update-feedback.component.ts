import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {  Feedback } from 'src/app/Class';
import { Router } from '@angular/router';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-update-feedback',
  templateUrl: './update-feedback.component.html',
  styleUrls: ['./update-feedback.component.scss']
})
export class UpdateFeedbackComponent implements OnInit{
  feedback:Feedback;
  // aboutlist  : any[];
  FeedbackId: any;
  // uploadResult: any;
  // filesToUpload: Array<File>;
  // selectedFileNames: string[] = [];
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: Service) {
      this.feedback = new Feedback();
      // this.aboutlist = [];
  
      this.route.params.subscribe((params) => {
        this.feedback = params['FeedbackId'];
  
        this.service.GetFeedbackById(this.feedback).subscribe((result) => {
       
          this.feedback = result;
          console.log(this.feedback);
  
        });
      });
     }

     OnSubmit(){
      debugger;
            console.log(this.feedback);
            this.service.UpdateFeedback(this.feedback).subscribe((result) => {
              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } 
               else {
            //     const formData = new FormData();
            //     // this.alert.Photo = this.filesToUpload[0].name;
            //     // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
            //     // this.service.SaveBlogImage(formData,result).subscribe(data => 
            //       {
                 
                   alert('Saved Successfully.');
                 }
            //     // );         
            //  }
           
              
            });
          }
          ngOnInit(): void {
          }

}


