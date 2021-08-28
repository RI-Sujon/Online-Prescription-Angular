import { Component, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Prescription } from 'src/app/models/prescription';
import { Patient } from 'src/app/models/patient';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.css']
})
export class PdfViewComponent {

  @ViewChild('htmlData') htmlData: ElementRef | any;

  USERS = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "sincere@april.biz",
      "phone": "1-770-736-8031 x56442"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "shanna@melissa.tv",
      "phone": "010-692-6593 x09125"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "nathan@yesenia.net",
      "phone": "1-463-123-4447",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "julianne@kory.org",
      "phone": "493-170-9623 x156"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "lucio@annie.ca",
      "phone": "(254)954-1289"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    }
  ];

  prescription: Prescription | any ;
  patient: Patient | any ;
  doctor: Doctor | any ;

  constructor() { }

  ngOnInit(): void {
    this.patient = localStorage.getItem("tempPatient");
    this.patient = JSON.parse(this.patient);

    this.prescription = localStorage.getItem("tempPrescription");
    this.prescription = JSON.parse(this.prescription);

    this.doctor = localStorage.getItem("doctorInfo") ;
    this.doctor = JSON.parse(this.doctor) ;
  }

  public openPDF():void {
    let DATA = document.getElementById('htmlData') as HTMLElement;
      
    html2canvas(DATA).then(canvas => {
        let fileWidth = 210;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save( this.patient.name + this.patient.id + '.pdf');
    });     
  }
}
