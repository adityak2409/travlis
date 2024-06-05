import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AlertListComponent } from './Alert/alert-list/alert-list.component';
import { UpdateAlertComponent } from './Alert/update-alert/update-alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddBlogComponent } from './Blog/add-blog/add-blog.component';
import { BlogListComponent } from './Blog/blog-list/blog-list.component';
import { UpdateBlogComponent } from './Blog/update-blog/update-blog.component';
import { AddBookingComponent } from './Booking/add-booking/add-booking.component';
import { UpdateBookingComponent } from './Booking/update-booking/update-booking.component';
import { BookingListComponent } from './Booking/booking-list/booking-list.component';
import { AddFeedbackComponent } from './Feedback/add-feedback/add-feedback.component';
import { FeedbackListComponent } from './Feedback/feedback-list/feedback-list.component';
import { UpdateFeedbackComponent } from './Feedback/update-feedback/update-feedback.component';
import { AddGalleryComponent } from './Gallery/add-gallery/add-gallery.component';
import { GalleryListComponent } from './Gallery/gallery-list/gallery-list.component';
import { UpdateGalleryComponent } from './Gallery/update-gallery/update-gallery.component';

import { AddTripComponent } from './Trip/add-trip/add-trip.component';
import { UpdateTripComponent } from './Trip/update-trip/update-trip.component';
import { TripListComponent } from './Trip/trip-list/trip-list.component';


import { AddServiceTableComponent } from './ServiceTable/add-service-table/add-service-table.component';
import { UpdateServiceTableComponent } from './ServiceTable/update-service-table/update-service-table.component';
import { ServiceTableListComponent } from './ServiceTable/service-table-list/service-table-list.component';



import { AddActivitiesComponent } from './Activities/add-activities/add-activities.component';
import { UpdateActivitiesComponent } from './Activities/update-activities/update-activities.component';
import { ActivitiesListComponent } from './Activities/activities-list/activities-list.component';
import { AddDestinationGalleryComponent } from './DestinationGallery/add-destination-gallery/add-destination-gallery.component';
import { UpdateDestinationGalleryComponent } from './DestinationGallery/update-destination-gallery/update-destination-gallery.component';
import { DestinationGalleryListComponent } from './DestinationGallery/destination-gallery-list/destination-gallery-list.component';
import { AddDestinationsComponent } from './Destinations/add-destinations/add-destinations.component';
import { UpdateDestinationsComponent } from './Destinations/update-destinations/update-destinations.component';
import { DestinationsListComponent } from './Destinations/destinations-list/destinations-list.component';
import { AddEmergencyContactComponent } from './EmergencyContact/add-emergency-contact/add-emergency-contact.component';
import { UpdateEmergencyContactComponent } from './EmergencyContact/update-emergency-contact/update-emergency-contact.component';
import { EmergencyContactListComponent } from './EmergencyContact/emergency-contact-list/emergency-contact-list.component';

import { AddUserSocialMediaComponent } from './UserSocialMedia/add-user-social-media/add-user-social-media.component';
// import { UpdateUserSocialMediaComponent } from './UserSocialMedia/update-user-social-media/update-user-social-media.component';
import { UserSocialMediaListComponent } from './UserSocialMedia/user-social-media-list/user-social-media-list.component';
import { AddUserDetailsComponent } from './UserDetails/add-user-details/add-user-details.component';
import { UpdateUserDetailsComponent } from './UserDetails/update-user-details/update-user-details.component';
import { UserDetailsListComponent } from './UserDetails/user-details-list/user-details-list.component';

import { UpdateRegistrationComponent } from './Registration/update-registration/update-registration.component';
import { RegistrationListComponent } from './Registration/registration-list/registration-list.component';
import { AddAlertComponent } from './Alert/add-alert/add-alert.component';

import { AddTripTypeComponent } from './TripType/add-trip-type/add-trip-type.component';
import { TripTypeListComponent } from './TripType/trip-type-list/trip-type-list.component';
import { UpdateTripTypeComponent } from './TripType/update-trip-type/update-trip-type.component';
import { AddStudentComponent } from './Student/add-student/add-student.component';
import { StudentListComponent } from './Student/student-list/student-list.component';
import { UpdateStudentComponent } from './Student/update-student/update-student.component';
// import { AddRegistrationComponent } from './Registration/add-registration/add-registration.component';
import { LoginComponent } from './Registration/login/login.component';
import { ForgotPasswordOtpComponent } from './Registration/forgot-password-otp/forgot-password-otp.component';
import { EmailVerifyOtpComponent } from './Registration/email-verify-otp/email-verify-otp.component';
import { ResetPasswordComponent } from './Registration/reset-password/reset-password.component';
import { ForgotPasswordEmailComponent } from './Registration/forgot-password-email/forgot-password-email.component';
import { HomePageComponent } from './Registration/home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminVendorComponent } from './admin-vendor/admin-vendor.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { RoleMasterComponent } from './Registration/role-master/role-master.component';
import { UserRoleComponent } from './Registration/user-role/user-role.component';





// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';






@NgModule({
  declarations: [
    AppComponent,
    
    AddAlertComponent,
    AlertListComponent,
    UpdateAlertComponent,
    AddBlogComponent,
    BlogListComponent,
    UpdateBlogComponent,
    AddBookingComponent,
    UpdateBookingComponent,
    BookingListComponent,
    AddFeedbackComponent,
    FeedbackListComponent,
    UpdateFeedbackComponent,
    AddGalleryComponent,
    GalleryListComponent,
    UpdateGalleryComponent,
    
    AddTripComponent,
    UpdateTripComponent,
    TripListComponent,
    
   
    AddServiceTableComponent,
    UpdateServiceTableComponent,
    ServiceTableListComponent,
    
    AddActivitiesComponent,
    UpdateActivitiesComponent,
    ActivitiesListComponent,
    AddDestinationGalleryComponent,
    UpdateDestinationGalleryComponent,
    DestinationGalleryListComponent,
    AddDestinationsComponent,
    UpdateDestinationsComponent,
    DestinationsListComponent,
    AddEmergencyContactComponent,
    UpdateEmergencyContactComponent,
    EmergencyContactListComponent,
    
    AddUserSocialMediaComponent,
        //  UpdateUserSocialMediaComponent,
         UserSocialMediaListComponent,
         AddUserDetailsComponent,
         UpdateUserDetailsComponent,
         UserDetailsListComponent,
         
         UpdateRegistrationComponent,
         RegistrationListComponent,
         
         AddTripTypeComponent,
         TripTypeListComponent,
         UpdateTripTypeComponent,
         
         AddStudentComponent,
         StudentListComponent,
         UpdateStudentComponent,
        //  AddRegistrationComponent,
         LoginComponent,
         
         ForgotPasswordOtpComponent,
         EmailVerifyOtpComponent,
         ResetPasswordComponent,
         ForgotPasswordEmailComponent,
         HomePageComponent,
         DashboardComponent,
         AdminUserComponent,
         AdminVendorComponent,
         VendorDashboardComponent,
         RoleMasterComponent,
         UserRoleComponent,
        
         
        
         
         
         
         
         
         
         
    
         

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
