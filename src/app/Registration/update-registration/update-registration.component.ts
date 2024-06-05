import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Registration   } from 'src/app/Class';
import { Router } from '@angular/router';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-update-registration',
  templateUrl: './update-registration.component.html',
  styleUrls: ['./update-registration.component.scss']
})
export class UpdateRegistrationComponent implements OnInit{






  registration:Registration;
  // aboutlist  : any[];
  RegistrationId: any;
  // uploadResult: any;
  // filesToUpload: Array<File>;
  // selectedFileNames: string[] = [];
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: Service) {
      this.registration = new Registration();
      // this.aboutlist = [];
  
      this.route.params.subscribe((params) => {
        this.RegistrationId = params['RegistrationId'];
  
        this.service.GetRegistrationById(this.RegistrationId).subscribe((result) => {
       
          this.registration = result;
          console.log(this.registration);
  
        });
      });
     }

     OnSubmit(){
      debugger;
            console.log(this.registration);
            this.service.UpdateRegistration(this.registration).subscribe((result) => {
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



