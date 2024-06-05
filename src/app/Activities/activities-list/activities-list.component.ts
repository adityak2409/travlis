import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/Service';
import { GlobalVariable } from 'src/app/Global';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss']
})
export class ActivitiesListComponent implements OnInit{
  ActivitiesList:any[];
  imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(private router: Router,  private http: HttpClient, private service: Service) {
    this.ActivitiesList=[];
   }

   Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteBlog(Id).subscribe(result => {
      if (result == "Success") {
      this.ActivitiesList = this.ActivitiesList.filter(
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
    this.service.GetAllBlog().subscribe((result) => {
      console.log(result);
      for(let data of result)
      {
          this.ActivitiesList.push(data);   
      }     
           console.log(this.ActivitiesList);
    });
  }

}
