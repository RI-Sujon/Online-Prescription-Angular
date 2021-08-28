// import { Component, ViewChild, ElementRef } from '@angular/core';
  
// import jsPDF from 'jspdf';
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
// import htmlToPdfmake from 'html-to-pdfmake';

// @Component({
//   selector: 'app-pdf-view',
//   templateUrl: './pdf-view.component.html',
//   styleUrls: ['./pdf-view.component.css']
// })
// export class PdfViewComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

//   title = 'htmltopdf';
  
//   //@ViewChild('pdfTable') pdfTable: ElementRef;
  
//   public downloadAsPDF() {
//     const doc = new jsPDF();
   
//     //const pdfTable = this.pdfTable.nativeElement;
   
//     var html = htmlToPdfmake(pdfTable.innerHTML);
     
//     const documentDefinition = { content: html };
//     pdfMake.createPdf(documentDefinition).open(); 
     
//   }

// }
