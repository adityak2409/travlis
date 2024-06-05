import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/Class';
import { Router } from '@angular/router';
import { Service } from 'src/app/Service';


@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.scss']
})
export class UpdateBlogComponent implements OnInit{
  Id:any
  blog:Blog
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  doctors: any;
  updateblog: any;
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: Service) { 
      this.blog = new Blog();
      this.route.params.subscribe((params) => {
        this.Id = params['Id'];
   
      this.blog = new Blog();
      // this.aboutlist = [];
  
        this.service.GetBlogById(this.Id).subscribe((result) => {
       
          this.blog = result;
          console.log("blog", this.blog);
  
      });
     });
    }
 
     OnSubmit(){
      debugger;
            console.log(this.blog);
            this.service.UpdateBlog(this.blog).subscribe((result) => {
              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } 
              else {
                const formData = new FormData();
                this.blog.Photo = this.filesToUpload[0].name;
                formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
                this.service.SaveBlogImage(formData,result).subscribe(data => {
                 
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
                  this.blog.Photo = this.filesToUpload[i].name;
              } 
              }
            
             ngOnInit(): void {
    
             }

}
