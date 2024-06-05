import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/Service';
import { GlobalVariable } from 'src/app/Global';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent implements OnInit{
  
  AlertList:any[];
  // imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(private router: Router,  private http: HttpClient, private service: Service) {
    this.AlertList=[];
   }

   Delete(AlertId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteAlert(AlertId).subscribe(result => {
      if (result == "Success") {
      this.AlertList = this.AlertList.filter(
        (item) => item.Id != AlertId);
      alert("Deleted Successfully");
    } else {
      alert("Something went wrong! please try again.");
    }
  });
  }
  Edit(AlertId): void{
    try {
      this.router.navigateByUrl("/updateAlert/" + AlertId);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  View(AlertId): void{
    try {
      this.router.navigateByUrl("/ViewAlert/" + AlertId);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  ngOnInit(): void {
    this.service.GetAllAlert().subscribe((result) => {
      console.log(result);
      for(let data of result)
      {
          this.AlertList.push(data);   
      }     
           console.log(this.AlertList);
    });
  }
  
  
  
  
  
  
  
  
  
  

}
