import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlertComponent } from './Alert/add-alert/add-alert.component';
import { AlertListComponent } from './Alert/alert-list/alert-list.component';
import { UpdateAlertComponent } from './Alert/update-alert/update-alert.component';
import { UpdateBlogComponent } from './Blog/update-blog/update-blog.component';
import { BlogListComponent } from './Blog/blog-list/blog-list.component';
import { AddBlogComponent } from './Blog/add-blog/add-blog.component';
import { AddBookingComponent } from './Booking/add-booking/add-booking.component';
import { BookingListComponent } from './Booking/booking-list/booking-list.component';
import { UpdateBookingComponent } from './Booking/update-booking/update-booking.component';
import { AddFeedbackComponent } from './Feedback/add-feedback/add-feedback.component';
import { FeedbackListComponent } from './Feedback/feedback-list/feedback-list.component';
import { UpdateFeedbackComponent } from './Feedback/update-feedback/update-feedback.component';
import { GalleryListComponent } from './Gallery/gallery-list/gallery-list.component';
import { AddGalleryComponent } from './Gallery/add-gallery/add-gallery.component';
import { UpdateGalleryComponent } from './Gallery/update-gallery/update-gallery.component';
import { AddTripComponent } from './Trip/add-trip/add-trip.component';
import { TripListComponent } from './Trip/trip-list/trip-list.component';
import { UpdateTripComponent } from './Trip/update-trip/update-trip.component';
import { AddServiceTableComponent } from './ServiceTable/add-service-table/add-service-table.component';
import { ServiceTableListComponent } from './ServiceTable/service-table-list/service-table-list.component';
import { UpdateServiceTableComponent } from './ServiceTable/update-service-table/update-service-table.component';
import { ActivitiesListComponent } from './Activities/activities-list/activities-list.component';
import { AddActivitiesComponent } from './Activities/add-activities/add-activities.component';
import { UpdateActivitiesComponent } from './Activities/update-activities/update-activities.component';
import { AddDestinationGalleryComponent } from './DestinationGallery/add-destination-gallery/add-destination-gallery.component';
import { DestinationGalleryListComponent } from './DestinationGallery/destination-gallery-list/destination-gallery-list.component';
import { UpdateDestinationGalleryComponent } from './DestinationGallery/update-destination-gallery/update-destination-gallery.component';
import { AddDestinationsComponent } from './Destinations/add-destinations/add-destinations.component';
import { DestinationsListComponent } from './Destinations/destinations-list/destinations-list.component';
import { UpdateDestinationsComponent } from './Destinations/update-destinations/update-destinations.component';
import { AddUserDetailsComponent } from './UserDetails/add-user-details/add-user-details.component';
import { UserDetailsListComponent } from './UserDetails/user-details-list/user-details-list.component';
import { UpdateUserDetailsComponent } from './UserDetails/update-user-details/update-user-details.component';
import { AddUserSocialMediaComponent } from './UserSocialMedia/add-user-social-media/add-user-social-media.component';
import { UserSocialMediaListComponent } from './UserSocialMedia/user-social-media-list/user-social-media-list.component';
// import { UpdateUserSocialMediaComponent } from './UserSocialMedia/update-user-social-media/update-user-social-media.component';
import { RegistrationListComponent } from './Registration/registration-list/registration-list.component';
import { UpdateRegistrationComponent } from './Registration/update-registration/update-registration.component';

import { AddTripTypeComponent } from './TripType/add-trip-type/add-trip-type.component';
import { TripTypeListComponent } from './TripType/trip-type-list/trip-type-list.component';
import { UpdateTripTypeComponent } from './TripType/update-trip-type/update-trip-type.component';
import { AddStudentComponent } from './Student/add-student/add-student.component';
import { StudentListComponent } from './Student/student-list/student-list.component';
import { UpdateStudentComponent } from './Student/update-student/update-student.component';
import { LoginComponent } from './Registration/login/login.component';
import { ForgotPasswordEmailComponent } from './Registration/forgot-password-email/forgot-password-email.component';
import { EmailVerifyOtpComponent } from './Registration/email-verify-otp/email-verify-otp.component';
import { ForgotPasswordOtpComponent } from './Registration/forgot-password-otp/forgot-password-otp.component';
import { ResetPasswordComponent } from './Registration/reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminVendorComponent } from './admin-vendor/admin-vendor.component';
import { Registration } from './Class';
import { RoleMasterComponent } from './Registration/role-master/role-master.component';
import { UserRoleComponent } from './Registration/user-role/user-role.component';







const routes: Routes = [
  
  { path: 'AddAlert', component:AddAlertComponent},
  { path: 'AlertList', component:AlertListComponent},
  { path: 'updateAlert/:AlertId', component:UpdateAlertComponent},
  { path: 'updateAlert', component:UpdateAlertComponent},
  
  { path: 'AddBlog', component:AddBlogComponent},
  { path: 'BlogList', component:BlogListComponent},
  { path: 'UpdateBlog', component:UpdateBlogComponent},
  
  { path: 'AddBooking', component:AddBookingComponent},
  { path: 'BookingList', component:BookingListComponent},
  { path: 'updateBooking/:BookingId', component:UpdateBookingComponent},
  { path: 'UpdateBooking', component:UpdateBookingComponent},
  
  { path: 'AddFeedback', component:AddFeedbackComponent},
  { path: 'FeedbackList', component:FeedbackListComponent},
  { path: 'UpdateFeedback', component:UpdateFeedbackComponent},
  { path: 'UpdateFeedback/:FeedbackId', component:UpdateFeedbackComponent},
  
  { path: 'AddGallery', component:AddGalleryComponent},
  { path: 'GalleryList', component:GalleryListComponent},
  { path: 'UpdateGallery', component:UpdateGalleryComponent},
  
  { path: 'AddTrip', component:AddTripComponent},
  { path: 'TripList', component:TripListComponent},
  { path: 'UpdateTrip', component:UpdateTripComponent},
  { path: 'updatetrip/:TripId', component:UpdateTripComponent},

  { path: 'AddDestinations', component:AddDestinationsComponent},
  { path: 'DestinationsList', component:DestinationsListComponent},
  { path: 'UpdateDestinations', component:UpdateDestinationsComponent},
  { path: 'updateDestinations/:DestinationsId', component:UpdateDestinationsComponent},


  { path: 'AddTripType', component:AddTripTypeComponent},
  { path: 'TripTypeList', component:TripTypeListComponent},
  { path: 'updateTripType', component:UpdateTripTypeComponent},
  { path: 'updateTripType/:TripTypeId', component:UpdateTripTypeComponent},

  
  
  
  
 
  
  { path: 'AddServiceTable', component:AddServiceTableComponent},
  { path: 'ServiceTableList', component:ServiceTableListComponent},
  { path: 'UpdateServiceTable', component:UpdateServiceTableComponent},
  
  { path: 'AddActivities', component:AddActivitiesComponent},
  { path: 'ActivitiesList', component:ActivitiesListComponent},
  { path: 'UpdateActivities', component:UpdateActivitiesComponent},
  
  { path: 'AddDestinationGallery', component:AddDestinationGalleryComponent},
  { path: 'DestinationGalleryList', component:DestinationGalleryListComponent},
  { path: 'UpdateDestinationGallery', component:UpdateDestinationGalleryComponent},
  
  { path: 'AddUserDetails', component:AddUserDetailsComponent},
  { path: 'UserDetailsList', component:UserDetailsListComponent},
  { path: 'UpdateUserDetails', component:UpdateUserDetailsComponent},
  
  { path: 'AddUserSocialMedia', component:AddUserSocialMediaComponent},
  { path: 'UserDetailsList', component:UserSocialMediaListComponent},
  // { path: 'UpdateUserDetails', component:UpdateUserSocialMediaComponent},
  
  { path: 'RegistrationList', component:RegistrationListComponent},
  { path: 'UpdateRegistration', component:UpdateRegistrationComponent},
  { path: 'AddRegistration', component:Registration},
  { path: 'LoginComponent', component:LoginComponent},
  { path: 'ForgotPasswordEmail', component:ForgotPasswordEmailComponent},
  { path: 'email-verify-otp/:RegistrationId', component:EmailVerifyOtpComponent},
  { path: 'forgot-password-otp/:RegistrationId', component:ForgotPasswordOtpComponent},
  { path: 'reset-password/:RegistrationId', component:ResetPasswordComponent},
  { path: 'role-master', component:RoleMasterComponent},
  { path: 'user-role', component:UserRoleComponent},

 
 
  { path: 'AddStudent', component:AddStudentComponent},
  { path: 'StudentList', component:StudentListComponent},
  { path: 'UpdateStudent', component:UpdateStudentComponent},

  { path: 'Dashboard', component:DashboardComponent},
  { path: 'admin-user', component:AdminUserComponent},
  { path: 'admin-vendor', component:AdminVendorComponent},
 


  //  { path: '',   redirectTo: '/AddDestinationGallery', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
