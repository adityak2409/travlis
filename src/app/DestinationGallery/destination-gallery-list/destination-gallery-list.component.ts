import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/Service';
import { GlobalVariable } from 'src/app/Global';

@Component({
  selector: 'app-destination-gallery-list',
  templateUrl: './destination-gallery-list.component.html',
  styleUrls: ['./destination-gallery-list.component.scss']
})
export class DestinationGalleryListComponent implements OnInit{
  DestinationGalleryList:any[];
  imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(private router: Router,  private http: HttpClient, private service: Service) {
    this.DestinationGalleryList=[];
   }

   Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteDestinationGallery(Id).subscribe(result => {
      if (result == "Success") {
      this.DestinationGalleryList = this.DestinationGalleryList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Something went wrong! please try again.");
    }
  });
  }
  Edit(Id): void{
    try {
      this.router.navigateByUrl("/updateblog/" + Id,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  View(Id): void{
    try {
      this.router.navigateByUrl("/Viewblog/" + Id,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  ngOnInit(): void {
    this.service.GetAllDestinationGallery().subscribe((result) => {
      console.log(result);
      for(let data of result)
      {
          this.DestinationGalleryList.push(data);   
      }     
           console.log(this.DestinationGalleryList);
    });
  }

}
