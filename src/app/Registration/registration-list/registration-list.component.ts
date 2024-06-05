import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/Service';
import { GlobalVariable } from 'src/app/Global';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.scss']
})
export class RegistrationListComponent implements OnInit{
  
  
  RegistrationList: any[];
  // imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(private router: Router,  private http: HttpClient, private service: Service) {
    this.RegistrationList=[];
   }

   Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteRegistration(Id).subscribe(result => {
      if (result == "Success") {
      this.RegistrationList = this.RegistrationList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Something went wrong! please try again.");
    }
  });
  }
  Edit(Id): void{
    try {
      this.router.navigateByUrl("/updateUserSocialMedia/" + Id,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  View(Id): void{
    try {
      this.router.navigateByUrl("/ViewUserSocialMedia/" + Id,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  ngOnInit(): void {
    this.service.GetAllRegistration().subscribe((result) => {
      console.log(result);
      for(let data of result)
      {
          this.RegistrationList.push(data);   
      }     
           console.log(this.RegistrationList);
    });
  }
  
  
  
  
  
  
  
  
  
  

}



