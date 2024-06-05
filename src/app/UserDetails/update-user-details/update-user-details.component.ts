import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UserDetails } from 'src/app/Class';
import { Router } from '@angular/router';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-update-user-details',
  templateUrl: './update-user-details.component.html',
  styleUrls: ['./update-user-details.component.scss']
})
export class UpdateUserDetailsComponent implements OnInit{
  Id:any
  userDetails:UserDetails
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  doctors: any;
  updateblog: any;
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: Service) { 
      this.userDetails = new UserDetails();
      this.route.params.subscribe((params) => {
        this.Id = params['Id'];
   
      this.userDetails = new UserDetails();
      // this.aboutlist = [];
  
        this.service.GetUserDetailsById(this.Id).subscribe((result) => {
       
          this.userDetails = result;
          console.log("UserDetail", this.userDetails);
  
      });
     });
    }
 
     OnSubmit(){
      debugger;
            console.log(this.userDetails);
            this.service.UpdateUserDetails(this.userDetails).subscribe((result) => {
              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } 
              else {
                const formData = new FormData();
                this.userDetails.Photo = this.filesToUpload[0].name;
                formData.append('uploadedImage',this.filesToUpload[0],this.userDetails.Photo);
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
                  this.userDetails.Photo = this.filesToUpload[i].name;
              } 
              }
            
             ngOnInit(): void {
    
             }

}

