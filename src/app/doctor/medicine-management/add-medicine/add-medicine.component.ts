import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { MedicineInfoService } from 'src/app/service/medicine-info.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  constructor(public service: MedicineInfoService, public router: Router, public snackBar: MatSnackBar) { }

  doctor : Doctor | any ;

  ngOnInit(): void {
    this.doctor = localStorage.getItem("doctorInfo");
    this.doctor = JSON.parse(this.doctor);
  }

  addMedicine(): void{
    this.service.addMedicine(this.doctor.id).subscribe(
      (response: any)=>{
        if(response==true){
          this.snackBar.open("Medicine Added", "",{duration: 2000});
          this.service.formModel.reset() ;
          this.router.navigate(["doctor/medicine-management/view-medicine-list"]) ;
        }
        else if(response==false){
          this.snackBar.open("Medicine Name: " + this.service.formModel.value.Name + " Already Exist", "",{duration: 2000});
        }
        else{
          this.snackBar.open("Something Wrong", "",{duration: 2000});
        }
      }
    ) ;
  }

}
