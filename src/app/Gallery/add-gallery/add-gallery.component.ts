import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Gallery} from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-gallery',
  templateUrl: './add-gallery.component.html',
  styleUrls: ['./add-gallery.component.scss']
})
export class AddGalleryComponent implements OnInit{
  gallery:Gallery;
  gallerylist:any[];


constructor(
  private router:Router,
  private http:HttpClient,
  private service: Service){
    this.gallery = new Gallery();
  // this.student=new Student();
  this.gallerylist=[];

  
}



OnSubmit() {
  console.log("prop",this.gallery);
 this.service.AddGallery(this.gallery).subscribe((result) => {
   if (result > 0) {
   
      
       alert('Saved Successfully.');
        
   }
   else {
     alert("Something went wrong! Please try again.")
   }
 });

}

  
  
  
  
  
  
  
  
  
  
  
  ngOnInit(): void {
    
  }

}

