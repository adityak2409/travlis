import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/Service';
import { GlobalVariable } from 'src/app/Global';


@Component({
  selector: 'app-user-details-list',
  templateUrl: './user-details-list.component.html',
  styleUrls: ['./user-details-list.component.scss']
})
export class UserDetailsListComponent implements OnInit{
  UserDetailsList:any[];
  imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(private router: Router,  private http: HttpClient, private service: Service) {
    this.UserDetailsList=[];
   }

   Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteUserDetails(Id).subscribe(result => {
      if (result == "Success") {
      this.UserDetailsList = this.UserDetailsList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Something went wrong! please try again.");
    }
  });
  }
  Edit(Id): void{
    try {
      this.router.navigateByUrl("/updateblog/" + Id,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  View(Id): void{
    try {
      this.router.navigateByUrl("/Viewblog/" + Id,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  ngOnInit(): void {
    this.service.GetAllUserDetails().subscribe((result) => {
      console.log(result);
      for(let data of result)
      {
          this.UserDetailsList.push(data);   
      }     
           console.log(this.UserDetailsList);
    });
  }

}
