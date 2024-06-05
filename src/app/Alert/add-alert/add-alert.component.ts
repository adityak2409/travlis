import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Alert} from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-alert',
  templateUrl: './add-alert.component.html',
  styleUrls: ['./add-alert.component.scss']
})
export class AddAlertComponent implements OnInit{
  alert:Alert;
alertlist:any[];


constructor(
  private router:Router,
  private http:HttpClient,
  private service: Service){
    this.alert = new Alert();
  // this.student=new Student();
  this.alertlist=[];

  
}



OnSubmit() {
  console.log("prop",this.alert);
 this.service.AddAlert(this.alert).subscribe((result) => {
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
