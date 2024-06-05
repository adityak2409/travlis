import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceTable} from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-service-table',
  templateUrl: './add-service-table.component.html',
  styleUrls: ['./add-service-table.component.scss']
})
export class AddServiceTableComponent implements OnInit{
  serviceTable:ServiceTable;
  serviceTablelist:any[];
  
  uploadResult: any;
    filesToUpload: Array<File>;
    selectedFileNames: string[] = [];
    Blog: any;
  
  constructor(
    private router:Router,
    private http:HttpClient,
    private service: Service){
      this.serviceTable = new ServiceTable();
    // this.student=new Student();
    this.serviceTablelist=[];
  
    
  }
  OnSubmit() {
    console.log("blog",this.serviceTable);
   this.service.AddBlog(this.serviceTable).subscribe((result) => {
     if (result > 0) {
      const formData= new FormData();
     
           this.serviceTable.Photo = this.filesToUpload[0].name;
           formData.append('uploadedPhoto',this.filesToUpload[0],this.serviceTable.Photo);
           this.service.SaveBlogImage(formData,result).subscribe(data =>
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
        this.serviceTable.Photo = this.filesToUpload[i].name;
    } 
    }
  
  ngOnInit(): void {
  }
  
  }
  

