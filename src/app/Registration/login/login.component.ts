import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from 'src/app/Service';
import { Registration, Login } from 'src/app/Class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginArray:any={}
  logina: Login;
  
  registration: Registration;

  registrationlist  : any[];
  isEdit: boolean = false;

 

  constructor(private formBuilder: FormBuilder, private router: Router, private service: Service , private http: HttpClient)
  {
  
  
      this.logina = new Login();
      this.registration = new Registration();
      this.registrationlist = [];
     }
     
       


OnLogin(){
  alert ("Success")
  console.log(this.logina)

  this.service.Login(this.logina.Email,this.logina.Password).subscribe((result) => {
    console.log(result);
    // debugger;
    localStorage.setItem('name', JSON.stringify(this.loginArray));
    if (result.loginArray == 0) {
      alert("Something went wrong! Please try again.");
      this.router.navigateByUrl('/AddRegistrationComponent');
    } else {
      alert("Saved Successfully");
      
      this.router.navigateByUrl('/AddTrip');
      
    }
  
    
  });
}
OnLogOut(){
 
  localStorage.removeItem('name');

}
}

