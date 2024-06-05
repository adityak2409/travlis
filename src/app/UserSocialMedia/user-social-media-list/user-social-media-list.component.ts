import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/Service';
import { GlobalVariable } from 'src/app/Global';

@Component({
  selector: 'app-user-social-media-list',
  templateUrl: './user-social-media-list.component.html',
  styleUrls: ['./user-social-media-list.component.scss']
})
export class UserSocialMediaListComponent implements OnInit{
  
  
  UserSocialMediaList: any[];
  // imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(private router: Router,  private http: HttpClient, private service: Service) {
    this.UserSocialMediaList=[];
   }

   Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteUserSocialMedia(Id).subscribe(result => {
      if (result == "Success") {
      this.UserSocialMediaList = this.UserSocialMediaList.filter(
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
    this.service.GetAllUserSocialMedia().subscribe((result) => {
      console.log(result);
      for(let data of result)
      {
          this.UserSocialMediaList.push(data);   
      }     
           console.log(this.UserSocialMediaList);
    });
  }
  
  
  
  
  
  
  
  
  
  

}


