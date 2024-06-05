import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserDetails} from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-user-details',
  templateUrl: './add-user-details.component.html',
  styleUrls: ['./add-user-details.component.scss']
})

export class AddUserDetailsComponent implements OnInit{
  userDetails:UserDetails;
  userDetailslist:any[];
  
  uploadResult: any;
    filesToUpload: Array<File>;
    selectedFileNames: string[] = [];
    Blog: any;
  
  constructor(
    private router:Router,
    private http:HttpClient,
    private service: Service){
      this.userDetails = new UserDetails();
    // this.student=new Student();
    this.userDetailslist=[];
  
    
  }
  OnSubmit() {
    console.log("blog",this.userDetails);
   this.service.AddUserDetails(this.userDetails).subscribe((result) => {
     if (result > 0) {
      const formData= new FormData();
     
           this.userDetails.Photo = this.filesToUpload[0].name;
           formData.append('uploadedPhoto',this.filesToUpload[0],this.userDetails.Photo);
           this.service.SaveUserDetailsImage(formData,result).subscribe(data =>
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
        this.userDetails.Photo = this.filesToUpload[i].name;
    } 
    }
  
  ngOnInit(): void {
  }
  
  }
