import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Booking} from 'src/app/Class';
import { Service } from 'src/app/Service';


@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss']
})
export class AddBookingComponent implements OnInit{
  booking:Booking;
  bookinglist:any[];


constructor(
  private router:Router,
  private http:HttpClient,
  private service: Service){
    this.booking = new Booking();
  // this.student=new Student();
  this.bookinglist=[];

  
}



OnSubmit() {
  console.log("prop",this.booking);
 this.service.AddBooking(this.booking).subscribe((result) => {
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
