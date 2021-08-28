import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PatientInfoService } from 'src/app/service/patient-info.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor(public service: PatientInfoService, public router: Router, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  
  // ngOnDestroy(){
  //   this.service.formModel.reset() ;
  // }

  addPatient(): void{
    this.service.addPatient(localStorage.getItem("doctorId")).subscribe(
      (response: any)=>{
        if(response==true){
          this.snackBar.open("Patient Added", "",{duration: 2000});
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
