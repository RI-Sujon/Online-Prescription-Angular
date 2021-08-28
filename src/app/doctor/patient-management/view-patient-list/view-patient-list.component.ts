import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientInfoService } from 'src/app/service/patient-info.service';

@Component({
  selector: 'app-view-patient-list',
  templateUrl: './view-patient-list.component.html',
  styleUrls: ['./view-patient-list.component.css']
})
export class ViewPatientListComponent implements OnInit {

  public patients: Patient[] = [] ;

  constructor(private service: PatientInfoService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadMedicines() ;
  }

  loadMedicines(){
    this.service.getAllPatient(localStorage.getItem("doctorId")).subscribe(
      response => {
        this.patients = response ;
      }
    );
  }
  deletePatient(patient:Patient){
    alert("Delete Patient: " + patient.name );

    this.service.removePatient(patient.id).subscribe(
      (response: any)=>{
        if(response==true)
        {
          this.snackBar.open(patient.name + " has been deleted successfully", "",{duration: 2000});
          this.loadMedicines() ;
        }
        else{
          this.snackBar.open("Something Wrong", "",{duration: 2000});
        }
    }
    );
  }

  editPatientInfo(patient: Patient){
    localStorage.setItem("tempPatient", JSON.stringify(patient)) ;
    this.router.navigate(["doctor/patient-management/edit-patient-info"]) ;
  }

  goToPrescription(patient: Patient){
    localStorage.setItem("tempPatient", JSON.stringify(patient)) ;
    this.router.navigate(["doctor/prescription/view-prescription"]) ;
  }
}
