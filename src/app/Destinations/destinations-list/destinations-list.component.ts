import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/Service';
import { GlobalVariable } from 'src/app/Global';

@Component({
  selector: 'app-destinations-list',
  templateUrl: './destinations-list.component.html',
  styleUrls: ['./destinations-list.component.scss']
})
export class DestinationsListComponent implements OnInit{
  DestinationsList:any[];
  imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(private router: Router,  private http: HttpClient, private service: Service) {
    this.DestinationsList=[];
   }

   Delete(DestinationsId) {
    alert('Are you sure you want to delete?');
    this.service.DeleteDestinations(DestinationsId).subscribe(result => {
      if (result == "Success") {
      this.DestinationsList = this.DestinationsList.filter(
        (item) => item.Id != DestinationsId);
      alert("Deleted Successfully");
    } else {
      alert("Something went wrong! please try again.");
    }
  });
  }
  Edit(DestinationsId): void{
    try {
      this.router.navigateByUrl("/updateDestinations/" + DestinationsId,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  View(DestinationsId): void{
    try {
      this.router.navigateByUrl("/ViewDestinations/" + DestinationsId,);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
  ngOnInit(): void {
    this.service.GetAllDestinations().subscribe((result) => {
      console.log(result);
      for(let data of result)
      {
          this.DestinationsList.push(data);   
      }     
           console.log(this.DestinationsList);
    });
  }

}

