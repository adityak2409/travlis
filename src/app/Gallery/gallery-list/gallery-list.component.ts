import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/Service';
import { GlobalVariable } from 'src/app/Global';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit{
  
  
  GalleryList: any[];
  // imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(private router: Router,  private http: HttpClient, private service: Service) {
    this.GalleryList=[];
   }

   Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteFeedback(Id).subscribe(result => {
      if (result == "Success") {
      this.GalleryList = this.GalleryList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Something went wrong! please try again.");
    }
  });
  }
  Edit(Id): void{
    try {
      this.router.navigateByUrl("/updategallery/" + Id,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  View(Id): void{
    try {
      this.router.navigateByUrl("/Viewgallery/" + Id,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  ngOnInit(): void {
    this.service.GetAllGallery().subscribe((result) => {
      console.log(result);
      for(let data of result)
      {
          this.GalleryList.push(data);   
      }     
           console.log(this.GalleryList);
    });
  }
  
  
  
  
  
  
  
  
  
  

}


