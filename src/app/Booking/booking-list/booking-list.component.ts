import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/Service';
import { GlobalVariable } from 'src/app/Global';


@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit{
  
  
  BookingList: any[];
  // imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(private router: Router,  private http: HttpClient, private service: Service) {
    this.BookingList=[];
   }

   Delete(BookingId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteBooking(BookingId).subscribe(result => {
      if (result == "Success") {
      this.BookingList = this.BookingList.filter(
        (item) => item.Id != BookingId);
      alert("Deleted Successfully");
    } else {
      alert("Something went wrong! please try again.");
    }
  });
  }
  Edit(BookingId): void{
    try {
      this.router.navigateByUrl("/updateBooking/" + BookingId,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  View(BookingId): void{
    try {
      this.router.navigateByUrl("/Viewbooking/" + BookingId,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  ngOnInit(): void {
    this.service.GetAllBooking().subscribe((result) => {
      console.log(result);
      for(let data of result)
      {
          this.BookingList.push(data);   
      }     
           console.log(this.BookingList);
    });
  }
  
  
  
  
  
  
  
  
  
  

}

