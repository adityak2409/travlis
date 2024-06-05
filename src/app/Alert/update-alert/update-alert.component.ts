import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Alert } from 'src/app/Class';
import { Router } from '@angular/router';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-update-alert',
  templateUrl: './update-alert.component.html',
  styleUrls: ['./update-alert.component.scss']
})
export class UpdateAlertComponent implements OnInit{
 alert:Alert;
 aboutlist  : any[];
 AlertId: any;
 uploadResult: any;
 filesToUpload: Array<File>;
 selectedFileNames: string[] = [];
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: Service) {
      this.AlertId = new Alert();
      // this.aboutlist = [];
  
      this.route.params.subscribe((params) => {
        this.AlertId = params['AlertId'];
        console.log("AlertId",this.AlertId);
        this.service.GetAlertById(this.AlertId).subscribe((result) => {
          this.AlertId = result;
          console.log(this.AlertId);
  
        });
      });
     }

     OnSubmit(){
      debugger;
            console.log(this.AlertId);
            this.service.UpdateAlert(this.AlertId).subscribe((result) => {
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
