import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/Service';
import { GlobalVariable } from 'src/app/Global';

@Component({
  selector: 'app-trip-type-list',
  templateUrl: './trip-type-list.component.html',
  styleUrls: ['./trip-type-list.component.scss']
})
export class TripTypeListComponent implements OnInit{
  
  
  TripTypeList: any[];
  // imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(private router: Router,  private http: HttpClient, private service: Service) {
    this.TripTypeList=[];
   }

   Delete(TripTypeId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteTripType(TripTypeId).subscribe(result => {
      if (result == "Success") {
      this.TripTypeList = this.TripTypeList.filter(
        (item) => item.Id != TripTypeId);
      alert("Deleted Successfully");
    } else {
      alert("Something went wrong! please try again.");
    }
  });
  }
  Edit(TripTypeId): void{
    try {
      this.router.navigateByUrl("/updateTripType/" + TripTypeId,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  View(TripTypeId): void{
    try {
      this.router.navigateByUrl("/ViewTripType/" + TripTypeId,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  ngOnInit(): void {
    this.service.GetAllTripType().subscribe((result) => {
      console.log(result);
      for(let data of result)
      {
          this.TripTypeList.push(data);   
      }     
           console.log(this.TripTypeList);
    });
  }
}