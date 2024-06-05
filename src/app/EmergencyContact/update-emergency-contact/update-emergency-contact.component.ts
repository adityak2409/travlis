import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { EmergencyContact } from 'src/app/Class';
import { Router } from '@angular/router';
import { Service } from 'src/app/Service';


@Component({
  selector: 'app-update-emergency-contact',
  templateUrl: './update-emergency-contact.component.html',
  styleUrls: ['./update-emergency-contact.component.scss']
})
export class UpdateEmergencyContactComponent implements OnInit{






  emergencyContact:EmergencyContact;
  // aboutlist  : any[];
  Id: any;
  // uploadResult: any;
  // filesToUpload: Array<File>;
  // selectedFileNames: string[] = [];
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: Service) {
      this.emergencyContact = new EmergencyContact();
      // this.aboutlist = [];
  
      this.route.params.subscribe((params) => {
        this.Id = params['Id'];
  
        this.service.GetEmergencyContactById(this.Id).subscribe((result) => {
       
          this.emergencyContact = result;
          console.log(this.emergencyContact);
  
        });
      });
     }

     OnSubmit(){
      debugger;
            console.log(this.emergencyContact);
            this.service.UpdateEmergencyContact(this.emergencyContact).subscribe((result) => {
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

