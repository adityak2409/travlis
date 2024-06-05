import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EmergencyContact} from 'src/app/Class';
import { Service } from 'src/app/Service';


@Component({
  selector: 'app-add-emergency-contact',
  templateUrl: './add-emergency-contact.component.html',
  styleUrls: ['./add-emergency-contact.component.scss']
})
export class AddEmergencyContactComponent implements OnInit{
  emergencyContact:EmergencyContact;
  emergencyContactlist:any[];


constructor(
  private router:Router,
  private http:HttpClient,
  private service: Service){
    this.emergencyContact = new EmergencyContact();
  // this.student=new Student();
  this.emergencyContactlist=[];

  
}



OnSubmit() {
  console.log("prop",this.emergencyContact);
 this.service.AddBooking(this.emergencyContact).subscribe((result) => {
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
