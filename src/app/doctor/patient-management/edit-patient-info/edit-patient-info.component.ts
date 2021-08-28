import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { Patient } from 'src/app/models/patient';
import { PatientInfoService } from 'src/app/service/patient-info.service';

@Component({
  selector: 'app-edit-patient-info',
  templateUrl: './edit-patient-info.component.html',
  styleUrls: ['./edit-patient-info.component.css']
})
export class EditPatientInfoComponent implements OnInit {

  patient: Patient | any ;
  doctor: Doctor | any ; 
  
  constructor(public service: PatientInfoService, public router: Router, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.patient = localStorage.getItem("tempPatient") ;
    this.patient = JSON.parse(this.patient) ;
    
    //localStorage.removeItem("tempPatient");
  }

  ngOnDestroy(){
    this.service.formModel.reset() ;
  }

  editPatientInfo(): void{
    this.service.editPatientInfo(localStorage.getItem("doctorId"), this.patient.id).subscribe(
      (response: any)=>{
        if(response==true){
          this.snackBar.open("Patient Info Edited", "",{duration: 2000});
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
