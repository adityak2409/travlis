import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {  Trip } from 'src/app/Class';
import { Router } from '@angular/router';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-update-trip',
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.scss']
})
export class UpdateTripComponent implements OnInit{






  trip:Trip;
   aboutlist  : any[];
  TripId: any;
   uploadResult: any;
   filesToUpload: Array<File>;
   selectedFileNames: string[] = [];
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: Service) {
      this.trip = new Trip();
    this.aboutlist = [];
  
      this.route.params.subscribe((params) => {
        this.TripId = params['TripId'];
  
        this.service.GetTripById(this.TripId).subscribe((result) => {
       
          this.trip = result;
          console.log(this.trip);
  
        });
      });
     }

     OnSubmit(){
      debugger;
            console.log(this.trip);
            this.service.UpdateTrip(this.trip).subscribe((result) => {
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



