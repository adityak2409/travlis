import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TripType} from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-trip-type',
  templateUrl: './add-trip-type.component.html',
  styleUrls: ['./add-trip-type.component.scss']
})
export class AddTripTypeComponent implements OnInit {
  tripType:TripType;
  // TripTypeList  : any[];
  tripTypelist: any[];
  constructor(private router: Router,
    private http: HttpClient,
    private service: Service) {
      this.tripType= new TripType();
      this.tripTypelist = [];
     }
     OnSubmit() {
      console.log("tripType",this.tripType);
     this.service.AddTripType(this.tripType).subscribe((result) => {
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