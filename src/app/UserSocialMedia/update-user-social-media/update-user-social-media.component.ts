// import { Component,OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';
// import { UserSocialMedia   } from 'src/app/Class';
// import { Router } from '@angular/router';
// import { Service } from 'src/app/Service';

// @Component({
//   selector: 'app-update-user-social-media',
//   templateUrl: './update-user-social-media.component.html',
//   styleUrls: ['./update-user-social-media.component.scss']
// })
// export class UpdateUserSocialMediaComponent implements OnInit{






//   userSocialMedia:UserSocialMedia;
//   // aboutlist  : any[];
//   Id: any;
//   // uploadResult: any;
//   // filesToUpload: Array<File>;
//   // selectedFileNames: string[] = [];
//   constructor(private route: ActivatedRoute,private router: Router,
//     private http: HttpClient,
//     private service: Service) {
//       this.userSocialMedia = new UserSocialMedia();
//       // this.aboutlist = [];
  
//       this.route.params.subscribe((params) => {
//         this.Id = params['Id'];
  
//         this.service.GetUserSocialMediaById(this.Id).subscribe((result) => {
       
//           this.userSocialMedia = result;
//           console.log(this.userSocialMedia);
  
//         });
//       });
//      }

//      OnSubmit(){
//       debugger;
//             console.log(this.userSocialMedia);
//             this.service.UpdateUserSocialMedia(this.userSocialMedia).subscribe((result) => {
//               console.log("hhh",result);
//               if (result == 0) {
//                 alert("Something went wrong! Please try again.");
//               } 
//             //   else {
//             //     const formData = new FormData();
//             //     // this.alert.Photo = this.filesToUpload[0].name;
//             //     // formData.append('uploadedImage',this.filesToUpload[0],this.blog.Photo);
//             //     // this.service.SaveBlogImage(formData,result).subscribe(data => 
//             //       {
                 
//             //       alert('Saved Successfully.');
//             //     }
//             //     // );         
//             //  }
           
              
//             });
//           }
//           ngOnInit(): void {
//           }

// }


