import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login, Registration} from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-registration',
  templateUrl: './add-registration.component.html',
  styleUrls: ['./add-registration.component.scss']
})
export class AddRegistrationComponent {
  registration:Registration;
  adminregistrationlist: any[];
  login : Login
  
  constructor(private router: Router,
    private http: HttpClient,
    private service: Service) {
  
      this.registration = new Registration();
      this.adminregistrationlist = [];
  
     }
     
     OnSubmit() {
      console.log("prop",this.registration);
     this.service.AddRegistration(this.registration).subscribe((result) => {
      localStorage.setItem('SID', result.AdminRegistrationId);
       if (result > 0) {
       
          
           alert('Saved Successfully.');
            
       }
       else {
         alert("Something went wrong! Please try again.")
       }
     });
    
    }
  
    OnSubmitt(){
      alert ("Success")
      console.log(this.login)
  
      this.service.Login(this.login.Email,this.login.Password).subscribe((result) => {
        console.log(result);
        // debugger;
        localStorage.setItem('SID', result.RegistrationId);
        if (result.RegistrationId == 0) {
          alert("Something went wrong! Please try again.");
          this.router.navigateByUrl('/login');
        } else {
          alert("Saved Successfully");
          
          this.router.navigateByUrl('/homepage');
          
        }
      
        
      });
    }
  
  
  ngOnInit(): void {
  }
  
  }

