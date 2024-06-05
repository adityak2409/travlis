import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Destinations, Trip} from 'src/app/Class';
import { Service } from 'src/app/Service';


@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.scss']
})
export class AddTripComponent implements OnInit{
  trip:Trip;
  triplist:any[];
  destinations:Destinations;
  DestinationsList:any[];



  constructor(
  private router:Router,
  private http:HttpClient,
  private service: Service){
    this.trip = new Trip();
    this.trip.Destinations = new Destinations();
  this.triplist=[];
  this.DestinationsList=[];
  
  this.GetAllDestinations();
 }
  
 

OnSubmit() {
  console.log("prop",this.trip);
 this.service.AddTrip(this.trip).subscribe((result) => {
   if (result > 0) {      
       alert('Saved Successfully.');
   }
   else {
     alert("Something went wrong! Please try again.")
   }
 });

}

GetAllDestinations() {
  debugger;
  this.service.GetAllDestinations().subscribe((result) => {
   console.log("es",result);
   for(let data of result){
       this.DestinationsList.push(data);   
   }     
        console.log("servicelist"+this.DestinationsList);
 });
}
  
  
  
  
  
  
  
  
  
  
  ngOnInit(): void {
    
  }

}

