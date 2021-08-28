import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Medicine } from 'src/app/models/medicine';
import { MedicineInfoService } from 'src/app/service/medicine-info.service';

@Component({
  selector: 'app-view-medicine-list',
  templateUrl: './view-medicine-list.component.html',
  styleUrls: ['./view-medicine-list.component.css']
})
export class ViewMedicineListComponent implements OnInit {

  public medicines: Medicine[] = [] ;

  constructor(private service: MedicineInfoService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log("=========>ss");
    this.loadMedicines() ;
  }

  loadMedicines(){
    this.service.getAllMedicine(localStorage.getItem("doctorId")).subscribe(
      response => {
        this.medicines = response ;
      }
    );
  }
  deleteMedicine(medicine:Medicine){
    alert("Delete Medicine: " + medicine.name );

    this.service.removeMedicine(medicine.id).subscribe(
      (response: any)=>{
        if(response==true)
        {
          this.snackBar.open(medicine.name + " has been deleted successfully", "",{duration: 2000});
          this.loadMedicines() ;
        }
        else{
          this.snackBar.open("Something Wrong", "",{duration: 2000});
        }
    }
    );
  }

  editMedicineInfo(medicine: Medicine){
    localStorage.setItem("tempMedicine", JSON.stringify(medicine)) ;
    this.router.navigate(["doctor/medicine-management/edit-medicine-info"]) ;
  }

}
