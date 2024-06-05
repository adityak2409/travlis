import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-forgot-password-email',
  templateUrl: './forgot-password-email.component.html',
  styleUrls: ['./forgot-password-email.component.scss']
})
export class ForgotPasswordEmailComponent {
  registrationlist: any[]
  mainlist: any[]
  mainlist1:any[]
  registration: Registration;
  RegistrationId:any

  constructor(private router: Router,
    private http: HttpClient,
    private service: Service) {
    this.registration = new Registration();
    this.registrationlist = []
    this.mainlist = []
    this.mainlist1=[]
   
  }
  OnSubmit() {
    this.registrationlist = []
    this.service.GetAllRegistration().subscribe((result) => {
      console.log(result);
      debugger
      for (let data of result) {
        this.registrationlist.push(data);
      }
      console.log("registration", this.registrationlist); //Email

      this.mainlist = this.registrationlist.filter(x => x.Email == this.registration.Email);
      console.log("e1", this.mainlist);

      if (this.mainlist.length == 1) {
        alert('Email Id Existed');
        this.SendOtpEmail()
      }

      else {
        alert("Invalid Email Id");

      }
    });

  }


  SendOtpEmail() {
    this.registrationlist = []
    this.mainlist = []
    this.mainlist1=[]
    this.service.SendOtpEmail(this.registration.Email).subscribe({

      next: (response) => {
        alert("Email sent successfully")
        
        console.log('Email sent successfully:', response);
        
        //this.router.navigate(['otp']);
        this.registration.OtpNo = response.otp;
        console.log('Received OTP:', this.registration.OtpNo);
        //this.storeotp();
        this.service.GetAllRegistration().subscribe((result) => {
          this.registrationlist = result;
          this.mainlist1 = this.registrationlist.filter(x => x.Email == this.registration.Email);

          for (let data1 of this.mainlist1) {
            this.RegistrationId = data1.RegistrationId;
            // this.sendVerificationEmail(this.demo);
          }
        
          this.service.GetRegistrationById(this.RegistrationId).subscribe((result) => {
            this.registration = result;
            console.log("fun", this.registration);

            // Invoke OnSubmit here
            //this.OnUpdate();\
            debugger
            this.registration.OtpNo = response.otp;
            this.service.UpdateRegistration(this.registration).subscribe((result) => {
              if (result == 0) {
                alert('Not updated!');

              } 
            
              else {
                alert('updated successfully');
                this.router.navigateByUrl("/forgot-password-otp/" +this.RegistrationId);
                console.log("fun", this.registration);
                
              }
            });
          });
        });
      }
    });
  }


}