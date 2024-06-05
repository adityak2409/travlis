import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DestinationGallery} from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-destination-gallery',
  templateUrl: './add-destination-gallery.component.html',
  styleUrls: ['./add-destination-gallery.component.scss']
})
export class AddDestinationGalleryComponent implements OnInit{
  destinationGallery:DestinationGallery;
  destinationGallerylist:any[];
  
  uploadResult: any;
    filesToUpload: Array<File>;
    selectedFileNames: string[] = [];
    Blog: any;
  
  constructor(
    private router:Router,
    private http:HttpClient,
    private service: Service){
      this.destinationGallery = new DestinationGallery();
    // this.student=new Student();
    this.destinationGallerylist=[];
  
    
  }
  OnSubmit() {
    console.log("blog",this.destinationGallery);
   this.service.AddDestinationGallery(this.destinationGallery).subscribe((result) => {
     if (result > 0) {
      const formData= new FormData();
     
           this.destinationGallery.Photo = this.filesToUpload[0].name;
           formData.append('uploadedPhoto',this.filesToUpload[0],this.destinationGallery.Photo);
           this.service.SaveDestinationGalleryImage(formData,result).subscribe(data =>
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
        this.destinationGallery.Photo = this.filesToUpload[i].name;
    } 
    }
  
  ngOnInit(): void {
  }
  
  }
  

