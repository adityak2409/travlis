import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/Class';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  student: Student;
  filesToUpload: Array<File>;
  pdfFilesToUpload: any;
  photoFilesToUpload: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private service: Service
  ) {
    this.student = new Student();
    this.filesToUpload = [];
  }

  ngOnInit(): void {
    // Initialization if needed
  }

  OnSubmit() {
    console.log("student", this.student);
    this.service.AddStudent(this.student).subscribe((result) => {
      if (result > 0) {
        const formData = new FormData();

        if (this.photoFilesToUpload.length > 0) {
          
          this.student.Photo = this.photoFilesToUpload[0].name;
          formData.append('uploadedImage', this.photoFilesToUpload[0], this.student.Photo);
          this.service.SaveStudentImage(formData, result).subscribe(data => {
            alert('Image Saved Successfully.');
          });
        }

        if (this.pdfFilesToUpload.length > 0) {
          
          this.student.Pdf = this.pdfFilesToUpload[0].name;
          formData.append('uploadedPDF', this.pdfFilesToUpload[0], this.student.Pdf);
          this.service.SaveStudentPdf(formData, result).subscribe(data => {
            alert('PDF Saved Successfully.');
          });
        }
      } else {
        alert("Something went wrong! Please try again.")
      }
    });
  }

  fileChangeEvent(fileInput: any) {
    this.updateStudentProperty(fileInput, 'Photo');
  }

  fileChangeEventt(fileInput: any) {
    this.updateStudentProperty(fileInput, 'Pdf');
  }

  private updateStudentProperty(fileInput: any, property: string) {
    const file = fileInput.target.files[0];

    if (file) {
      if (property === 'Photo') {
        this.photoFilesToUpload = [file];
      } else if (property === 'Pdf') {
        this.pdfFilesToUpload = [file];
      }

      this.student[property] = file.name;
    }
  }
}