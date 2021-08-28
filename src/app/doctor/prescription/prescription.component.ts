import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import { Patient } from 'src/app/models/patient';
import { PrescriptionService } from 'src/app/service/prescription.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  constructor(public service: PrescriptionService) { }

  @ViewChild('content', {static: false}) el!: ElementRef;

  patient: Patient | any ;

  

  ngOnInit(): void {
    this.patient = localStorage.getItem("tempPatient");
    this.patient = JSON.parse(this.patient);
  }

  createPDF(){
    let pdf = new jsPDF('p', 'pt', 'a4') ;
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=>{
        pdf.save(this.patient.name + this.patient.id + ".pdf");
      }
    });
  }

  
}
