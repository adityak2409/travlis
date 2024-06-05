import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {  Gallery } from 'src/app/Class';
import { Router } from '@angular/router';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-update-gallery',
  templateUrl: './update-gallery.component.html',
  styleUrls: ['./update-gallery.component.scss']
})
export class UpdateGalleryComponent implements OnInit{






  gallery:Gallery;
  // aboutlist  : any[];
  Id: any;
  // uploadResult: any;
  // filesToUpload: Array<File>;
  // selectedFileNames: string[] = [];
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: Service) {
      this.gallery = new Gallery();
      // this.aboutlist = [];
  
      this.route.params.subscribe((params) => {
        this.Id = params['Id'];
  
        this.service.GetAlertById(this.Id).subscribe((result) => {
       
          this.gallery = result;
          console.log(this.gallery);
  
        });
      });
     }

     OnSubmit(){
      debugger;
            console.log(this.gallery);
            this.service.UpdateAlert(this.gallery).subscribe((result) => {
              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } 
            //   else {
            //     const formData = new FormData();
            //     // this.alert.Photo = this.filesToUpload[0].name;
            //     // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
            //     // this.service.SaveBlogImage(formData,result).subscribe(data => 
            //       {
                 
            //       alert('Saved Successfully.');
            //     }
            //     // );         
            //  }
           
              
            });
          }
          ngOnInit(): void {
          }

}


