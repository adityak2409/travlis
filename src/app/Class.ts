export class Alert{
    
    
    AlertId: number;
    UserId: number;
    DestinationId: number;
    AlertMessage: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
}
export class Blog{
    BlogId: number;
    DestinationId: number;
    UserId: number;
    Title: string;
    SubTitle: string;
    Description: string;
    Content: string;
    Status: string;
    Photo: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;                                                                                                                                                                                                                  
}
export class Booking{
    BookingId: number;
    UserId: number;
    VendorServiceId: number;
    BookingDate: string;
    Status: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;  
}
export class Feedback{
    FeedbackId: number;
    UserId: number;
    VendorId: number;
    FeedbackText: string;
    Rating: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string; 
}
export class Gallery{
    GalleryId: number;
    UserId: number;
    TripId: number;
    Title: string;
    SubTitle: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string; 
  Photo: string;
}

export class Trip{
    TripId: number;
    UserId: number;
    VendorId: number;
    DestinationId: number;
    TripTypeId: number;
    Source: string;
    Date: string;
    Status: string;
    Budget: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string; 
  Destinations: Destinations;
}
export class Vendor{
    VendorId: number;
    Name: string;
    SubTitle: string;
    Description: string;
    Photo: string;
    Status: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string; 
}
export class VendorService{
    VendorServiceId: number;
    VendorId: number;
    DestinationId: number;
    ServiceId: number;
    ServiceCost: string;
    Status: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string; 
}
export class ServiceTable{
    ServiceTableId: number;
    VendorServiceId: number;
    Title: string;
    SubTitle: string;
    Photo: string;
    Status: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string; 
}
export class TripType{
    TripTypeId: number;
    Title: string;
    SubTitle: string;
    Icon: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string; 

}
export class Activities{
    ActivitiesId: number;
    DestinationId: number;
    VendorServiceId: number;
    Title: string;
    SubTitle: string;
    Photo: string;
    Description: string;
    Amount: string;
    Status: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string; 

}
export class DestinationGallery{
    DestinationGalleryId: number;
    DestinationId: number;
    Title: string;
    SubTitle; string;
    Photo: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string; 


}
export class Destinations{
    DestinationsId: number;
    CountryId: number;
    StateId: number;
    CityId: number;
    Title: string;
    SubTitle: string;
    Description: string;
    Status: string;
    Photo: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string; 
}
export class EmergencyContact{
    EmergencyContactId: number;
    Name: string;
    Relationship: string;
    Contact: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string; 
}
export class UserDetails{
    UserDetailsId: number;
    UserId: number;
    CountryId: number;
    StateId: number;
    CityId: string;
    Contact: string;
    Tagline: string;
    Photo: string;
    BirthDate: string;
    Status: string;
    Gender: string;
    Address: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string; 

    
}
export class UserSocialMedia{
    UserSocialMediaId: number;
    UserId: number;
    Instagram: string;
    Facebook: string;
    Twitter: string;
    LinkedIn: string;
    YouTube: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string; 
}
export class Registration{
    RegistrationId: number;
    FName: string;
    LName: string;
    Email: string;
    Password: string;
    EmailStatus: string;
    OtpNo: string;
    Status: string;
    CreatedDate: string;
    CreatedBy: string;
    UpdatedDate: string;
    UpdatedBy: string;
}
    export class Login
    {
        Email: string;
        Password: string;
    }
    


    
    export class Student{
        StudentId: number;
        Name: string;
        Photo: string;
        Pdf: string;
        CreatedDate: string;
        CreatedBy: string;
        UpdatedDate: string;
        UpdatedBy: string; 
    }
    export class Country{
        CountryId: number;
        Name: string;
        Capital: string;
        CreatedDate: string;
        CreatedBy: string;
        UpdatedDate: string;
        UpdatedBy: string; 
    }

    export class State{
        StateId: number;
        CountryId: number;
        Name: string;
        CreatedDate: string;
        CreatedBy: string;
        UpdatedDate: string;
        UpdatedBy: string; 
    }

    export class City{
        CityId: number;
        StateId: number;
        CountryId: number;
        Name: string;
        Pincode: string;
        CreatedDate: string;
        CreatedBy: string;
        UpdatedDate: string;
        UpdatedBy: string; 
    }


    