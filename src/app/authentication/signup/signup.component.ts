import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public service: DoctorService, public router: Router, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  // ngOnDestroy(){
  //   this.service.formModel.reset() ;
  // }

  signUp(){
    this.service.doctorSignUp().subscribe(
      (response: any) => {
        if(response==true){
          this.service.addDoctorInfo().subscribe(
            (response: any) => {
              if(response!=null){
                localStorage.setItem('doctoInfo', JSON.stringify(response)) ;
                localStorage.setItem('doctorId', response.id) ;
                localStorage.setItem('isLoggedIn', "true") ; 
                this.service.formModel.reset() ;
                this.router.navigate(["doctor/patient-management/view-patient-list"]) ;
              }
            }
          );
        }
        else if(response==false){
          this.snackBar.open("Email Already Exists.", "",{duration: 2000});
        }
        
      }
    );
  }

}
