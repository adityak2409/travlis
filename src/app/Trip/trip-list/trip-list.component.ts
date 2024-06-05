import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/Service';
import { GlobalVariable } from 'src/app/Global';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit{
  
  TripId: any 
  TripList: any[];
  // imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(private router: Router,  private http: HttpClient, private service: Service) {
    this.TripList=[];
   }

   Delete(TripId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteTrip(TripId).subscribe(result => {
      if (result == "Success") {
      this.TripList = this.TripList.filter(
        (item) => item.Id != TripId);
      alert("Deleted Successfully");
    } else {
      alert("Something went wrong! please try again.");
    }
  });
  }
  Edit(TripId): void{
    try {
      this.router.navigateByUrl("/updatetrip/" + TripId,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  View(TripId): void{
    try {
      this.router.navigateByUrl("/Viewtrip/" + TripId,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  ngOnInit(): void {
    this.service.GetAllTrip().subscribe((result) => {
      console.log(result);
      for(let data of result)
      {
          this.TripList.push(data);   
      }     
           console.log(this.TripList);
    });
  }
  
  
  
  
  
  
  
  
  
  

}



