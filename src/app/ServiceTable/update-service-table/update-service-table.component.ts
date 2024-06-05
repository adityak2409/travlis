import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ServiceTable } from 'src/app/Class';
import { Router } from '@angular/router';
import { Service } from 'src/app/Service';


@Component({
  selector: 'app-update-service-table',
  templateUrl: './update-service-table.component.html',
  styleUrls: ['./update-service-table.component.scss']
})
export class UpdateServiceTableComponent implements OnInit{
  Id:any
  serviceTable:ServiceTable
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  doctors: any;
  updateblog: any;
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: Service) { 
      this.serviceTable = new ServiceTable();
      this.route.params.subscribe((params) => {
        this.Id = params['Id'];
   
      this.serviceTable = new ServiceTable();
      // this.aboutlist = [];
  
        this.service.GetBlogById(this.Id).subscribe((result) => {
       
          this.serviceTable = result;
          console.log("student", this.serviceTable);
  
      });
     });
    }
 
     OnSubmit(){
      debugger;
            console.log(this.serviceTable);
            this.service.UpdateBlog(this.serviceTable).subscribe((result) => {
              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } 
              else {
                const formData = new FormData();
                this.serviceTable.Photo = this.filesToUpload[0].name;
                formData.append('uploadedImage',this.filesToUpload[0],this.serviceTable.Photo);
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
                  this.serviceTable.Photo = this.filesToUpload[i].name;
              } 
              }
            
             ngOnInit(): void {
    
             }

}

