import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DestinationGallery } from 'src/app/Class';
import { Router } from '@angular/router';
import { Service } from 'src/app/Service';


@Component({
  selector: 'app-update-destination-gallery',
  templateUrl: './update-destination-gallery.component.html',
  styleUrls: ['./update-destination-gallery.component.scss']
})
export class UpdateDestinationGalleryComponent implements OnInit{
  Id:any
  destinationGallery:DestinationGallery
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  doctors: any;
  updateblog: any;
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: Service) { 
      this.destinationGallery = new DestinationGallery();
      this.route.params.subscribe((params) => {
        this.Id = params['Id'];
   
      this.destinationGallery = new DestinationGallery();
      // this.aboutlist = [];
  
        this.service.GetDestinationGalleryById(this.Id).subscribe((result) => {
       
          this.destinationGallery = result;
          console.log("blog", this.destinationGallery);
  
      });
     });
    }
 
     OnSubmit(){
      debugger;
            console.log(this.destinationGallery);
            this.service.UpdateDestinationGallery(this.destinationGallery).subscribe((result) => {
              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } 
              else {
                const formData = new FormData();
                this.destinationGallery.Photo = this.filesToUpload[0].name;
                formData.append('uploadedImage',this.filesToUpload[0],this.destinationGallery.Photo);
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
                  this.destinationGallery.Photo = this.filesToUpload[i].name;
              } 
              }
            
             ngOnInit(): void {
    
             }

}

