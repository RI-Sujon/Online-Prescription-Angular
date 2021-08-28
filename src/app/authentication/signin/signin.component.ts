import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public service:DoctorService, public router: Router, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    var isLoggedIn = localStorage.getItem("isLoggedIn");
    if(isLoggedIn=="true"){
      this.router.navigate(["doctor/patient-management/view-patient-list"]) ;
    }
  }

  // ngOnDestroy(){
  //   this.service.formModel.reset() ;
  // }

  signIn(){
    this.service.doctorSignIn().subscribe(
      (response: any)=>{
        if(response != null){
          if(response==false){
            this.snackBar.open("email && password doesnot match.", "",{duration: 2000});
          }
          else{
            localStorage.setItem('doctorInfo', JSON.stringify(response)) ;
            localStorage.setItem('isLoggedIn', "true") ;
            localStorage.setItem('doctorId', response.id) ;
                      
            this.service.formModel.reset() ;
            
            this.router.navigate(["doctor/patient-management/view-patient-list"]) ;
          }
        }
        else{
          this.snackBar.open("Something Wrong", "",{duration: 2000});
        }
      }
    ) ;
  }

}
