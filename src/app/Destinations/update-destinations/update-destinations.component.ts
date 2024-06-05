import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Destinations } from 'src/app/Class';
import { Router } from '@angular/router';
import { Service } from 'src/app/Service';


@Component({
  selector: 'app-update-destinations',
  templateUrl: './update-destinations.component.html',
  styleUrls: ['./update-destinations.component.scss']
})
export class UpdateDestinationsComponent implements OnInit{
  DestinationsId:any
  destinations:Destinations
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
 // doctors: any;
  updateblog: any;
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: Service) { 
      this.destinations = new Destinations();
      this.route.params.subscribe((params) => {
        this.DestinationsId = params['DestinationsId'];
   
      this.destinations = new Destinations();
      // this.aboutlist = [];
  
        this.service.GetDestinationsById(this.DestinationsId).subscribe((result) => {
       
          this.destinations = result;
          console.log("Destinations", this.destinations);
  
      });
     });
    }
 
     OnSubmit(){
      debugger;
            console.log(this.destinations);
            this.service.UpdateDestinations(this.destinations).subscribe((result) => {
              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } 
              else {
                const formData = new FormData();
                this.destinations.Photo = this.filesToUpload[0].name;
                formData.append('uploadedImage',this.filesToUpload[0],this.destinations.Photo);
                this.service.SaveDestinationsImage(formData,result).subscribe(data => {
                 
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
                  this.destinations.Photo = this.filesToUpload[i].name;
              } 
              }
            
             ngOnInit(): void {
    
             }

}
