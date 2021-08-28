import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {
  doctor: Doctor | any ; 
  
  constructor(public service: DoctorService, public router: Router, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.doctor = localStorage.getItem("doctorInfo") ;
    this.doctor = JSON.parse(this.doctor) ;
  }

  ngOnDestroy(){
    this.service.formModel.reset() ;
  }

  editProfileInfo(): void{
    this.service.editDoctorInfo(localStorage.getItem("doctorId")).subscribe(
      (response: any)=>{
        if(response!=null){
          this.snackBar.open("Profile Updated Successfully", "",{duration: 2000});
          localStorage.setItem("doctorInfo", JSON.stringify(response));
          this.service.formModel.reset() ;
          this.router.navigate(["doctor/patient-management/view-patient-list"]) ;
        }
        else{
          this.snackBar.open("Something Wrong", "",{duration: 2000});

        }
      }
    ) ;
  }


}
