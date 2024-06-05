import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { GlobalVariable } from './Global';
import { Alert } from './Class';
import { Blog } from './Class';
import { Booking } from './Class';
import { Feedback } from './Class';
import { Gallery } from './Class';
import { Trip } from './Class';
import { Vendor } from './Class';
import { VendorService } from './Class';
import { ServiceTable } from './Class';
import { TripType } from './Class';
import { Activities } from './Class';
import { DestinationGallery} from'./Class';
import { Destinations } from './Class';
import { EmergencyContact} from './Class';
import { UserDetails } from './Class';
import { UserSocialMedia} from'./Class';
import { Registration } from './Class';

@Injectable({
    providedIn: 'root'
  })
  
  
  export class Service {
  
 

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": 'GET, POST, OPTIONS, DELETE,PUT',
          "Content-Security-Policy": 'upgrade-insecure-requests'
        })
      };









      IsLogin: any;
  SendOTPEmail: any;
      constructor(private http: HttpClient) {
        this.IsLogin = false;
       }
    
      AddAlert(Alert): Observable<any> {
        return this.http.post<Alert>( GlobalVariable.SERVICE_API_URL +"Alert/AddAlert", Alert.this.httpOptions);
      } 
      GetAllAlert() {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Alert/GetAllAlert",this.httpOptions);
      }
      DeleteAlert(AlertId): Observable<any> {
        Observable<Alert>
        return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Alert/DeleteAlert?AlertId="+AlertId,this.httpOptions);
      }
      GetAlertById(AlertId): Observable<any> {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Alert/GetAlertById?AlertId=" +AlertId, this.httpOptions);
      }
      UpdateAlert(AlertId): Observable<any> {
        return this.http.post<Alert>( GlobalVariable.SERVICE_API_URL +"Alert/UpdateAlert",+AlertId, this.httpOptions);
      } 
    //   SaveAlertImage(formdata,Id): Observable<any> {
    //     const uploadReq = new HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"TripType/SaveTripTypeImage?Id="+Id, formdata, null );
    //     return this.http.request(uploadReq);
    //   }
    
    




    AddCountry(Country): Observable<any> {
      return this.http.post<Blog>( GlobalVariable.SERVICE_API_URL +"Country/AddCountry", Country, this.httpOptions);
    } 
    GetAllCountry() {
      return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Country/GetAllCountry", this.httpOptions);
    }
    DeleteCountry(CountryId): Observable<any> {
      Observable<Blog>
      return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Country/DeleteCountry?CountryId="+CountryId,this.httpOptions);
    }
    GetCountryById(CountryId): Observable<any> {
      return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Country/GetCountryById?CountryId=" +CountryId, this.httpOptions);
    }
    UpdateCountry(Country): Observable<any> {
      return this.http.post<Blog>( GlobalVariable.SERVICE_API_URL +"Country/UpdateCountry", Country, this.httpOptions);
    } 
   






    AddState(State): Observable<any> {
      return this.http.post<Blog>( GlobalVariable.SERVICE_API_URL +"State/AddState", State, this.httpOptions);
    } 
    GetAllState() {
      return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"State/GetAllState", this.httpOptions);
    }
    DeleteState(StateId): Observable<any> {
      Observable<Blog>
      return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"State/DeleteState?StateId="+StateId,this.httpOptions);
    }
    GetStateById(StateId): Observable<any> {
      return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"State/GetStateById?StateId=" +StateId, this.httpOptions);
    }
    UpdateState(State): Observable<any> {
      return this.http.post<Blog>( GlobalVariable.SERVICE_API_URL +"State/UpdateState", State, this.httpOptions);
    } 





    AddCity(City): Observable<any> {
      return this.http.post<Blog>( GlobalVariable.SERVICE_API_URL +"City/AddCity", City, this.httpOptions);
    } 
    GetAllCity() {
      return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"City/GetAllCity", this.httpOptions);
    }
    DeleteCity(CityId): Observable<any> {
      Observable<Blog>
      return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"City/DeleteCity?CityId="+CityId,this.httpOptions);
    }
    GetCityById(CityId): Observable<any> {
      return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"City/GetCityById?CityId=" +CityId, this.httpOptions);
    }
    UpdateCity(City): Observable<any> {
      return this.http.post<Blog>( GlobalVariable.SERVICE_API_URL +"City/UpdateCity", City, this.httpOptions);
    } 





   








    AddBlog(Blog): Observable<any> {
        return this.http.post<Blog>( GlobalVariable.SERVICE_API_URL +"Blog/AddBlog", Blog, this.httpOptions);
      } 
      GetAllBlog() {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Blog/GetAllBlog", this.httpOptions);
      }
      DeleteBlog(Id): Observable<any> {
        Observable<Blog>
        return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Blog/DeleteBlog?Id="+Id,this.httpOptions);
      }
      GetBlogById(Id): Observable<any> {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Blog/GetBlogById?Id=" +Id, this.httpOptions);
      }
      UpdateBlog(Blog): Observable<any> {
        return this.http.post<Blog>( GlobalVariable.SERVICE_API_URL +"Blog/UpdateBlog", Alert, this.httpOptions);
      } 
     SaveBlogImage(formdata,Id): Observable<any> {
         const uploadReq = new HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Blog/SaveBlogImage?Id="+Id, formdata, null );
         return this.http.request(uploadReq);
       }
    
    





       AddBooking(Booking): Observable<any> {
        return this.http.post<Booking>( GlobalVariable.SERVICE_API_URL +"Booking/AddBooking", Booking, this.httpOptions);
      } 
      GetAllBooking() {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Booking/GetAllBooking", this.httpOptions);
      }
      DeleteBooking(BookingId): Observable<any> {
        Observable<Booking>
        return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Booking/DeleteBooking?BookingId="+BookingId,this.httpOptions);
      }
      GetBookingById(BookingId): Observable<any> {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Booking/GetBookingById?BookingId=" +BookingId, this.httpOptions);
      }
      UpdateBooking(Booking): Observable<any> {
        return this.http.post<Booking>( GlobalVariable.SERVICE_API_URL +"Booking/UpdateBooking", Booking, this.httpOptions);
      } 











      AddFeedback(FeedbackId): Observable<any> {
        return this.http.post<Feedback>( GlobalVariable.SERVICE_API_URL +"Feedback/AddFeedback", FeedbackId, this.httpOptions);
      } 
      GetAllFeedback() {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Feedback/GetAllFeedback", this.httpOptions);
      }
      DeleteFeedback(FeedbackId): Observable<any> {
        Observable<Feedback>
        return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Feedback/DeleteFeedback?FeedbackId="+FeedbackId,this.httpOptions);
      }
      GetFeedbackById(FeedbackId): Observable<any> {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Feedback/GetFeedbackById?FeedbackId=" +FeedbackId, this.httpOptions);
      }
      UpdateFeedback(FeedbackId): Observable<any> {
        return this.http.post<Feedback>( GlobalVariable.SERVICE_API_URL +"Feedback/UpdateFeedback", FeedbackId, this.httpOptions);
      } 








      AddGallery(Gallery): Observable<any> {
        return this.http.post<Gallery>( GlobalVariable.SERVICE_API_URL +"Gallery/AddGallery", Alert, this.httpOptions);
      } 
      GetAllGallery() {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Gallery/GetAllGallery", this.httpOptions);
      }
      DeleteGallery(Id): Observable<any> {
        Observable<Gallery>
        return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Gallery/DeleteGallery?Id="+Id,this.httpOptions);
      }
      GetGalleryById(Id): Observable<any> {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Gallery/GetGalleryById?Id=" +Id, this.httpOptions);
      }
      UpdateGallery(Gallery): Observable<any> {
        return this.http.post<Gallery>( GlobalVariable.SERVICE_API_URL +"Gallery/UpdateGallery", Alert, this.httpOptions);
      } 













      








       AddTrip(Trip): Observable<any> {
        return this.http.post<Trip>( GlobalVariable.SERVICE_API_URL +"Trip/AddTrip", Trip, this.httpOptions);
      } 
      GetAllTrip() {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Trip/GetAllTrip", this.httpOptions);
      }
      DeleteTrip(TripId): Observable<any> {
        Observable<Trip>
        return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Trip/DeleteTrip?TripId="+TripId,this.httpOptions);
      }
      GetTripById(TripId): Observable<any> {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Trip/GetTripById?TripId=" +TripId, this.httpOptions);
      }
      UpdateTrip(TripId): Observable<any> {
        return this.http.post<Trip>( GlobalVariable.SERVICE_API_URL +"Trip/UpdateTrip", TripId, this.httpOptions);
      } 














      








       AddVendorService(VendorService): Observable<any> {
        return this.http.post<VendorService>( GlobalVariable.SERVICE_API_URL +"VendorService/AddVendorService", VendorService, this.httpOptions);
      } 
      GetAllVendorService() {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"VendorService/GetAllVendorService", this.httpOptions);
      }
      DeleteVendorService(VendorServiceId): Observable<any> {
        Observable<VendorService>
        return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"VendorService/DeleteVendorService?VendorServiceId="+VendorServiceId,this.httpOptions);
      }
      GetVendorServiceById(VendorServiceId): Observable<any> {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"VendorService/GetVendorServiceById?VendorServiceId="+VendorServiceId,this.httpOptions);
      }
      UpdateVendorService(VendorService): Observable<any> {
        return this.http.post<VendorService>( GlobalVariable.SERVICE_API_URL +"VendorService/UpdateVendorService", VendorService, this.httpOptions);
      } 














      AddServiceTable(ServiceTable): Observable<any> {
        return this.http.post<ServiceTable>( GlobalVariable.SERVICE_API_URL +"Blog/AddBlog", Alert, this.httpOptions);
      } 
      GetAllServiceTable() {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Blog/GetAllBlog", this.httpOptions);
      }
      DeleteServiceTable(Id): Observable<any> {
        Observable<ServiceTable>
        return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Blog/DeleteBlog?Id="+Id,this.httpOptions);
      }
      GetServiceTableById(Id): Observable<any> {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Blog/GetBlogById?Id=" +Id, this.httpOptions);
      }
      UpdateServiceTable(ServiceTable): Observable<any> {
        return this.http.post<ServiceTable>( GlobalVariable.SERVICE_API_URL +"Blog/UpdateBlog", Alert, this.httpOptions);
      } 
     SaveServiceTableImage(formdata,Id): Observable<any> {
         const uploadReq = new HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Blog/SaveBlogImage?Id="+Id, formdata, null );
         return this.http.request(uploadReq);
       }
    



         AddTripType(TripType): Observable<any> {
        return this.http.post<TripType>( GlobalVariable.SERVICE_API_URL +"TripType/AddTripType", TripType, this.httpOptions);
      } 
      GetAllTripType() {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"TripType/GetAllTripType", this.httpOptions);
      }
      DeleteTripType(TripTypeId): Observable<any> {
        return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"TripType/DeleteTripType?TripTypeId="+TripTypeId,this.httpOptions);
      }
      GetTripTypeById(TripTypeId): Observable<any> {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"TripType/GetTripTypeById?TripTypeId=" +TripTypeId, this.httpOptions);
      }
      UpdateTripType(TripType): Observable<any> {
        return this.http.post<TripType>( GlobalVariable.SERVICE_API_URL +"TripType/UpdateTripType", TripType, this.httpOptions);
      } 
      // SaveTripTypeImage(formdata,Id): Observable<any> {
      //   const uploadReq = new HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"TripType/SaveTripTypeImage?Id="+Id, formdata, null );
      //   return this.http.request(uploadReq);
      
    













      AddActivities(Activities): Observable<any> {
        return this.http.post<Activities>( GlobalVariable.SERVICE_API_URL +"Activities/AddActivities", Alert, this.httpOptions);
      } 
      GetAllActivities() {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Activities/GetAllActivities", this.httpOptions);
      }
      DeleteActivities(Id): Observable<any> {
        Observable<Activities>
        return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Activities/DeleteActivities?Id="+Id,this.httpOptions);
      }
      GetActivitiesById(Id): Observable<any> {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Activities/GetActivitiesById?Id=" +Id, this.httpOptions);
      }
      UpdateActivities(Activities): Observable<any> {
        return this.http.post<Activities>( GlobalVariable.SERVICE_API_URL +"Activities/UpdateActivities", Alert, this.httpOptions);
      } 
     SaveActivitiesImage(formdata,Id): Observable<any> {
         const uploadReq = new HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Activities/SaveActivitiesImage?Id="+Id, formdata, null );
         return this.http.request(uploadReq);
       }
    








       AddDestinationGallery(DestinationGallery): Observable<any> {
        return this.http.post<DestinationGallery>( GlobalVariable.SERVICE_API_URL +"DestinationGallery/AddDestinationGallery", Alert, this.httpOptions);
      } 
      GetAllDestinationGallery() {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"DestinationGallery/GetAllDestinationGallery", this.httpOptions);
      }
      DeleteDestinationGallery(Id): Observable<any> {
        Observable<DestinationGallery>
        return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"DestinationGallery/DeleteDestinationGallery?Id="+Id,this.httpOptions);
      }
      GetDestinationGalleryById(Id): Observable<any> {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"DestinationGallery/GetDestinationGalleryById?Id=" +Id, this.httpOptions);
      }
      UpdateDestinationGallery(DestinationGallery): Observable<any> {
        return this.http.post<DestinationGallery>( GlobalVariable.SERVICE_API_URL +"DestinationGallery/UpdateDestinationGallery", Alert, this.httpOptions);
      } 
     SaveDestinationGalleryImage(formdata,Id): Observable<any> {
         const uploadReq = new HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"DestinationGallery/SaveDestinationGalleryImage?Id="+Id, formdata, null );
         return this.http.request(uploadReq);
       }








       AddDestinations(Destinations): Observable<any> {
        return this.http.post<Destinations>( GlobalVariable.SERVICE_API_URL +"Destinations/AddDestinations", Destinations, this.httpOptions);
      } 
      GetAllDestinations() {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Destinations/GetAllDestinations", this.httpOptions);
      }
      DeleteDestinations(Destinations): Observable<any> {
        Observable<Destinations>
        return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Destinations/DeleteDestinations?DestinationsId="+Destinations,this.httpOptions);
      }
      GetDestinationsById(DestinationsId): Observable<any> {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Destinations/GetDestinationsById?DestinationsId=" +DestinationsId, this.httpOptions);
      }
      UpdateDestinations(Destinations): Observable<any> {
        return this.http.post<Destinations>( GlobalVariable.SERVICE_API_URL +"Destinations/UpdateDestinations", Destinations, this.httpOptions);
      } 
     SaveDestinationsImage(formdata,DestinationsId): Observable<any> {
         const uploadReq = new HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Destinations/SaveDestinationsImage?DestinationsId="+DestinationsId, formdata, null );
         return this.http.request(uploadReq);
       }





       AddEmergencyContact(EmergencyContact): Observable<any> {
        return this.http.post<EmergencyContact>( GlobalVariable.SERVICE_API_URL +"Booking/AddBooking", Alert, this.httpOptions);
      } 
      GetAllEmergencyContact() {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Booking/GetAllBooking", this.httpOptions);
      }
      DeleteEmergencyContact(Id): Observable<any> {
        Observable<EmergencyContact>
        return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Booking/DeleteBooking?Id="+Id,this.httpOptions);
      }
      GetEmergencyContactById(Id): Observable<any> {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Booking/GetBookingById?Id=" +Id, this.httpOptions);
      }
      UpdateEmergencyContact(EmergencyContact): Observable<any> {
        return this.http.post<EmergencyContact>( GlobalVariable.SERVICE_API_URL +"Booking/UpdateBooking", Alert, this.httpOptions);
      } 



    AddUserDetails(UserDetails): Observable<any> {
        return this.http.post<Destinations>( GlobalVariable.SERVICE_API_URL +"Destinations/AddDestinations", Alert, this.httpOptions);
      } 
      GetAllUserDetails() {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Destinations/GetAllDestinations", this.httpOptions);
      }
      DeleteUserDetails(Id): Observable<any> {
        Observable<UserDetails>
        return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Destinations/DeleteDestinations?Id="+Id,this.httpOptions);
      }
      GetUserDetailsById(Id): Observable<any> {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Destinations/GetDestinationsById?Id=" +Id, this.httpOptions);
      }
      UpdateUserDetails(Destinations): Observable<any> {
        return this.http.post<Destinations>( GlobalVariable.SERVICE_API_URL +"Destinations/UpdateDestinations", Alert, this.httpOptions);
      } 
     SaveUserDetailsImage(formdata,Id): Observable<any> {
         const uploadReq = new HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Destinations/SaveDestinationsImage?Id="+Id, formdata, null );
         return this.http.request(uploadReq);
       }














       AddUserSocialMedia(UserSocialMedia): Observable<any> {
        return this.http.post<UserSocialMedia>( GlobalVariable.SERVICE_API_URL +"Booking/AddBooking", Alert, this.httpOptions);
      } 
      GetAllUserSocialMedia() {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Booking/GetAllBooking", this.httpOptions);
      }
      DeleteUserSocialMedia(Id): Observable<any> {
        Observable<UserSocialMedia>
        return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Booking/DeleteBooking?Id="+Id,this.httpOptions);
      }
      GetUserSocialMediaById(Id): Observable<any> {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Booking/GetBookingById?Id=" +Id, this.httpOptions);
      }
      UpdateUserSocialMedia(UserSocialMedia): Observable<any> {
        return this.http.post<UserSocialMedia>( GlobalVariable.SERVICE_API_URL +"Booking/UpdateBooking", Alert, this.httpOptions);
      } 







      AddRegistration(Registration): Observable<any> {
        return this.http.post<Registration>( GlobalVariable.SERVICE_API_URL +"Registration/AddRegistration", Registration, this.httpOptions);
      } 
      GetAllRegistration() {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Registration/GetAllRegistration", this.httpOptions);
      }
      DeleteRegistration(RegistrationId): Observable<any> {
        Observable<Registration>
        return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Registration/DeleteRegistration?RegistrationId="+RegistrationId,this.httpOptions);
      }
      GetRegistrationById(RegistrationId): Observable<any> {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Registration/GetRegistrationById?RegistrationId=" +RegistrationId, this.httpOptions);
      }
      UpdateRegistration(Registration): Observable<any> {
        return this.http.post<Registration>( GlobalVariable.SERVICE_API_URL +"Registration/UpdateRegistration", Registration, this.httpOptions);
      }
      Login(Email,Password): Observable<any> {
        return this.http.get<Registration>( GlobalVariable.SERVICE_API_URL +"Registration/Login?Email="+Email+"&Password="+Password);
      } 
      SendOtpEmail(Email){
        return this.http.post<any>(GlobalVariable.SERVICE_API_URL +"Registration/SendOTPEmail?Email="+Email,this.httpOptions);
      }



      AddStudent(Student): Observable<any> {
        return this.http.post<Destinations>( GlobalVariable.SERVICE_API_URL +"Student/AddStudent", Student, this.httpOptions);
      } 
      GetAllStudent() {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Student/GetAllStudent", this.httpOptions);
      }
      DeleteStudent(StudentId): Observable<any> {
        Observable<UserDetails>
        return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Student/DeleteStudent?StudentId="+StudentId,this.httpOptions);
      }
      GetStudentById(StudentId): Observable<any> {
        return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Student/GetStudentById?StudentId=" +StudentId,this.httpOptions);
      }
      UpdateStudent(Student): Observable<any> {
        return this.http.post<Destinations>( GlobalVariable.SERVICE_API_URL +"Student/UpdateStudent",Student,this.httpOptions);
      } 
     SaveStudentImage(formdata,StudentId): Observable<any> {
         const uploadReq = new HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Student/SaveStudentImage?StudentId="+StudentId,formdata, null );
         return this.http.request(uploadReq);
     }
      SaveStudentPdf(formdata,StudentId): Observable<any> {
          const uploadReq = new HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Student/SaveStudentPdf?StudentId="+StudentId,formdata, null );
          return this.http.request(uploadReq);
     }
    





     AddVendor(Vendor): Observable<any> {
      return this.http.post<Destinations>( GlobalVariable.SERVICE_API_URL +"Vendor/AddVendor", Vendor, this.httpOptions);
    } 
    GetAllVendor() {
      return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Vendor/GetAllVendor", this.httpOptions);
    }
    DeleteVendor(VendorId): Observable<any> {
      Observable<UserDetails>
      return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Destinations/DeleteDestinations?VendorId="+VendorId,this.httpOptions);
    }
    GetVendorById(VendorId): Observable<any> {
      return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Vendor/GetVendorById/VendorId" +VendorId,this.httpOptions);
    }
    UpdateVendor(Vendor): Observable<any> {
      return this.http.post<Destinations>( GlobalVariable.SERVICE_API_URL +"Vendor/UpdateVendor",Vendor,this.httpOptions);
    } 
   SaveVendorImage(formdata,VendorId): Observable<any> {
       const uploadReq = new HttpRequest('Post',GlobalVariable.SERVICE_API_URL +"Vendor/SaveVendorImage?VendorId="+VendorId,formdata, null );
       return this.http.request(uploadReq);
   }

  }

    

   