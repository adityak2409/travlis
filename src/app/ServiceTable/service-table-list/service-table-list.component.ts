import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/Service';
import { GlobalVariable } from 'src/app/Global';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service-table-list',
  templateUrl: './service-table-list.component.html',
  styleUrls: ['./service-table-list.component.scss']
})
export class ServiceTableListComponent implements OnInit{
  ServiceTableList:any[];
  imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(private router: Router,  private http: HttpClient, private service: Service) {
    this.ServiceTableList=[];
   }

   Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteServiceTable(Id).subscribe(result => {
      if (result == "Success") {
      this.ServiceTableList = this.ServiceTableList.filter(
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
    this.service.GetAllServiceTable().subscribe((result) => {
      console.log(result);
      for(let data of result)
      {
          this.ServiceTableList.push(data);   
      }     
           console.log(this.ServiceTableList);
    });
  }

}

