import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studentsList:any=[];
  Sname:string;
  CName:string;
  Cduration:string;
  CFee:number;
  constructor() {
    this.studentsList=[
      {
        Sname : "Krishna", 
        CName : "Data Science",
        Cduration : "3 Months",
        CFee : 20000
      },
      {
        Sname : "Venu", 
        CName : "Data Analysis",
        Cduration : "4 Months",
        CFee : 25000
      }  ,
      {
        Sname : "Krishna", 
        CName : "Data Science",
        Cduration : "2 Months",
        CFee : 20000
      },
      {
        Sname : "Venu", 
        CName : "Data Analysis",
        Cduration : "6 Months",
        CFee : 25000
      } 
    ]
   }

  ngOnInit() {
  }

}
