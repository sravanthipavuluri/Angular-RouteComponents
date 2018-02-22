import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  registerStudent(Msg:HTMLParagraphElement):boolean{
    Msg.innerHTML = "<h5 style=' color: Green;font-weight: bold;'>Congratulations! <br> Welcome To DigitalLync <br> You Have Successfully Registered....</h5>";
      return true;
  }

}
