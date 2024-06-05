import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {  TripType } from 'src/app/Class';
import { Router } from '@angular/router';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-update-trip-type',
  templateUrl: './update-trip-type.component.html',
  styleUrls: ['./update-trip-type.component.scss']
})
export class UpdateTripTypeComponent implements OnInit{






  tripType:TripType;
  // aboutlist  : any[];
  TripTypeId: any;
  // uploadResult: any;
  // filesToUpload: Array<File>;
  // selectedFileNames: string[] = [];
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: Service) {
      this.tripType = new TripType();
      // this.aboutlist = [];
  
      this.route.params.subscribe((params) => {
        this.TripTypeId = params['TripTypeId'];
  
        this.service.GetTripTypeById(this.TripTypeId).subscribe((result) => {
       
          this.tripType = result;
          console.log(this.tripType);
  
        });
      });
     }

     OnSubmit(){
      debugger;
            console.log(this.tripType);
            this.service.UpdateTripType(this.tripType).subscribe((result) => {
              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } 
               else {
            //     const formData = new FormData();
            //     // this.alert.Photo = this.filesToUpload[0].name;
            //     // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
            //     // this.service.SaveBlogImage(formData,result).subscribe(data => 
            //       {
                 
                 alert('Saved Successfully.');
                }
            //     // );         
            //  }
           
              
            });
          }
          ngOnInit(): void {
          }

}