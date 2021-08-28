import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { Medicine } from 'src/app/models/medicine';
import { MedicineInfoService } from 'src/app/service/medicine-info.service';

@Component({
  selector: 'app-edit-medicine-info',
  templateUrl: './edit-medicine-info.component.html',
  styleUrls: ['./edit-medicine-info.component.css']
})
export class EditMedicineInfoComponent implements OnInit {

  medicine: Medicine | any ;
  doctor: Doctor | any ; 
  
  constructor(public service: MedicineInfoService, public router: Router, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.medicine = localStorage.getItem("tempMedicine") ;
    this.medicine = JSON.parse(this.medicine) ;
    this.service.formModel.value.Name = this.medicine.name ;
    
    //localStorage.removeItem("tempMedicine");
  }

  ngOnDestroy(){
    this.service.formModel.reset() ;
  }

  editMedicineInfo(): void{
    this.service.editMedicineInfo(localStorage.getItem("doctorId"), this.medicine.id).subscribe(
      (response: any)=>{
        if(response==true){
          this.snackBar.open("Medicine Info Edited", "",{duration: 2000});
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
