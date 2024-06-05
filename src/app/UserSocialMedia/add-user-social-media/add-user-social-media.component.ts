import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserSocialMedia} from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-user-social-media',
  templateUrl: './add-user-social-media.component.html',
  styleUrls: ['./add-user-social-media.component.scss']
})
export class AddUserSocialMediaComponent implements OnInit{
  userSocialMedia:UserSocialMedia;
  userSocialMedialist:any[];


constructor(
  private router:Router,
  private http:HttpClient,
  private service: Service){
    this.userSocialMedia = new UserSocialMedia();
  // this.student=new Student();
  this.userSocialMedialist=[];

  
}



OnSubmit() {
  console.log("prop",this.userSocialMedia);
 this.service.AddUserSocialMedia(this.userSocialMedia).subscribe((result) => {
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

