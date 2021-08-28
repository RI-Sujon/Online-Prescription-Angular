import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.css']
})
export class ProfileManagementComponent implements OnInit {

  constructor() { }

  doctor : Doctor | any ;

  ngOnInit(): void {
    this.doctor = localStorage.getItem("doctorInfo") ;
    this.doctor = JSON.parse(this.doctor) ;
  }

}
