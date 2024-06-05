import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Blog} from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit{
  blog:Blog;
  bloglist:any[];
  
  uploadResult: any;
    filesToUpload: Array<File>;
    selectedFileNames: string[] = [];
    Blog: any;
  
  constructor(
    private router:Router,
    private http:HttpClient,
    private service: Service){
      this.blog = new Blog();
    // this.student=new Student();
    this.bloglist=[];
  
    
  }
  OnSubmit() {
    console.log("blog",this.blog);
   this.service.AddBlog(this.blog).subscribe((result) => {
     if (result > 0) {
      const formData= new FormData();
     
           this.blog.Photo = this.filesToUpload[0].name;
           formData.append('uploadedPhoto',this.filesToUpload[0],this.blog.Photo);
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
        this.blog.Photo = this.filesToUpload[i].name;
    } 
    }
  
  ngOnInit(): void {
  }
  
  }
  

