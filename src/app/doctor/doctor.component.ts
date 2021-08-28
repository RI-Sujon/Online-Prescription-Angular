import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signOut(){
    // localStorage.removeItem("isLoggedIn");
    // localStorage.removeItem("doctorInfo");
    // localStorage.removeItem("doctorId");
    localStorage.clear();

    this.router.navigate(["authentication/signin"]);
  }

}
