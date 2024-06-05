import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/Service';
import { GlobalVariable } from 'src/app/Global';

@Component({
  selector: 'app-emergency-contact-list',
  templateUrl: './emergency-contact-list.component.html',
  styleUrls: ['./emergency-contact-list.component.scss']
})
export class EmergencyContactListComponent implements OnInit{
  
  
  EmergencyContactList: any[];
  // imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(private router: Router,  private http: HttpClient, private service: Service) {
    this.EmergencyContactList=[];
   }

   Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteEmergencyContact(Id).subscribe(result => {
      if (result == "Success") {
      this.EmergencyContactList = this.EmergencyContactList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Something went wrong! please try again.");
    }
  });
  }
  Edit(Id): void{
    try {
      this.router.navigateByUrl("/updatestudent/" + Id,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  View(Id): void{
    try {
      this.router.navigateByUrl("/Viewstudent/" + Id,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  ngOnInit(): void {
    this.service.GetAllEmergencyContact().subscribe((result) => {
      console.log(result);
      for(let data of result)
      {
          this.EmergencyContactList.push(data);   
      }     
           console.log(this.EmergencyContactList);
    });
  }
  
  
  
  
  
  
  
  
  
  

}


