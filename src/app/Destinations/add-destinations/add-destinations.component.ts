import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Destinations} from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-destinations',
  templateUrl: './add-destinations.component.html',
  styleUrls: ['./add-destinations.component.scss']
})
export class AddDestinationsComponent implements OnInit{
  destinations:Destinations;
  destinationslist:any[];
  
  uploadResult: any;
    filesToUpload: Array<File>;
    selectedFileNames: string[] = [];
    Blog: any;
  
  constructor(
    private router:Router,
    private http:HttpClient,
    private service: Service){
      this.destinations = new Destinations();
    // this.student=new Student();
    this.destinationslist=[];
  
    
  }
  OnSubmit() {
    console.log("destinations",this.destinations);
   this.service.AddDestinations(this.destinations).subscribe((result) => {
     if (result > 0) {
      const formData= new FormData();
     
           this.destinations.Photo = this.filesToUpload[0].name;
           formData.append('uploadedPhoto',this.filesToUpload[0],this.destinations.Photo);
           this.service.SaveDestinationsImage(formData,result).subscribe(data =>
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
        this.destinations.Photo = this.filesToUpload[i].name;
    } 
    }
  
  ngOnInit(): void {
  }
  
  }
