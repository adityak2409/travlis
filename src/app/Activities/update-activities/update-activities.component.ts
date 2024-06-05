import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Activities } from 'src/app/Class';
import { Router } from '@angular/router';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-update-activities',
  templateUrl: './update-activities.component.html',
  styleUrls: ['./update-activities.component.scss']
})
export class UpdateActivitiesComponent implements OnInit{
  Id:any
  activities:Activities
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  doctors: any;
  updateblog: any;
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: Service) { 
      this.activities = new Activities();
      this.route.params.subscribe((params) => {
        this.Id = params['Id'];
   
      this.activities = new Activities();
      // this.aboutlist = [];
  
        this.service.GetActivitiesById(this.Id).subscribe((result) => {
       
          this.activities = result;
          console.log("activities", this.activities);
  
      });
     });
    }
 
     OnSubmit(){
      debugger;
            console.log(this.activities);
            this.service.UpdateActivities(this.activities).subscribe((result) => {
              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } 
              else {
                const formData = new FormData();
                this.activities.Photo = this.filesToUpload[0].name;
                formData.append('uploadedImage',this.filesToUpload[0],this.activities.Photo);
                this.service.SaveActivitiesImage(formData,result).subscribe(data => {
                 
                  alert('Saved Successfully.');
                });
              }
                        
             });
             

            }
            fileChangeEvent(fileInput: any){
              this.filesToUpload = <Array<File>>fileInput.target.files;
              this.selectedFileNames = [];
              for (let i = 0; i < this.filesToUpload.length; i++)
              {
                  this.selectedFileNames.push(this.filesToUpload[i].name);
                  this.activities.Photo = this.filesToUpload[i].name;
              } 
              }
            
             ngOnInit(): void {
    
             }

}

