import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { Prescription } from 'src/app/models/prescription';
import { PrescriptionService } from 'src/app/service/prescription.service';

@Component({
  selector: 'app-view-prescription',
  templateUrl: './view-prescription.component.html',
  styleUrls: ['./view-prescription.component.css']
})
export class ViewPrescriptionComponent implements OnInit {

  public prescriptions: Prescription[] = [] ;
  public patient: Patient | any ;

  constructor(private service: PrescriptionService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.patient = localStorage.getItem("tempPatient");
    this.patient = JSON.parse(this.patient);

    this.loadPrescriptions() ;
  }

  loadPrescriptions(){
    this.service.getAllPrescription(localStorage.getItem("doctorId"), this.patient.id).subscribe(
      response => {
        this.prescriptions = response ;
      }
    );
  }
  deletePrescription(prescription: Prescription){
    this.service.removePrescription(prescription.id).subscribe(
      (response: any)=>{
        if(response==true)
        {
          this.snackBar.open(prescription.id + " has been deleted successfully", "",{duration: 2000});
          this.loadPrescriptions() ;
        }
        else{
          this.snackBar.open("Something Wrong", "",{duration: 2000});
        }
      }
    );
  }

  editPrescriptionInfo(prescription: Prescription){
    localStorage.setItem("tempPrescription", JSON.stringify(prescription)) ;
    this.router.navigate(["doctor/prescription/edit-prescription"]) ;
  }
  
  exportAsPDF(prescription: Prescription){
    localStorage.setItem("tempPrescription", JSON.stringify(prescription)) ;
    this.router.navigate(["pdf"]) ;
  }

}
