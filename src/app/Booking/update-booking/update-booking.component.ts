import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {  Booking } from 'src/app/Class';
import { Router } from '@angular/router';
import { Service } from 'src/app/Service';


@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.scss']
})
export class UpdateBookingComponent implements OnInit{
  booking:Booking;
  
  BookingId: any;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private http: HttpClient,
    private service: Service) {
      this.booking = new Booking();

  
      this.route.params.subscribe((params) => {
        this.BookingId = params['BookingId'];
  
        this.service.GetBookingById(this.BookingId).subscribe((result) => {
       
          this.booking = result;
          console.log(this.booking);
  
        });
      });
     }

     OnSubmit(){
      debugger;
            console.log(this.booking);
            this.service.UpdateBooking(this.booking).subscribe((result) => {
              console.log("hhh",result);
              if (result == 0) {
                alert("Something went wrong! Please try again.");
              } 
              else
              {
                alert('Save Successfully')
            }              
            });
          }
          ngOnInit(): void {
          }

}

