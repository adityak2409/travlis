import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Activities} from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-activities',
  templateUrl: './add-activities.component.html',
  styleUrls: ['./add-activities.component.scss']
})
export class AddActivitiesComponent implements OnInit{
  activities:Activities;
  activitieslist:any[];
  
  uploadResult: any;
    filesToUpload: Array<File>;
    selectedFileNames: string[] = [];
    Blog: any;
  
  constructor(
    private router:Router,
    private http:HttpClient,
    private service: Service){
      this.activities = new Activities();
    // this.student=new Student();
    this.activitieslist=[];
  
    
  }
  OnSubmit() {
    console.log("blog",this.activities);
   this.service.AddActivities(this.activities).subscribe((result) => {
     if (result > 0) {
      const formData= new FormData();
     
           this.activities.Photo = this.filesToUpload[0].name;
           formData.append('uploadedPhoto',this.filesToUpload[0],this.activities.Photo);
           this.service.SaveActivitiesImage(formData,result).subscribe(data =>
            {
             
          
     
        
         alert('Saved Successfully.');
        }); 
          
     }
     else {
       alert("Something went wrong! Please try again.")
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
  


