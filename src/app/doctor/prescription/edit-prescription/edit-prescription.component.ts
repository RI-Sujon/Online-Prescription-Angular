import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/models/patient';
import { Prescription } from 'src/app/models/prescription';
import {map, startWith} from 'rxjs/operators';
import { PrescriptionService } from 'src/app/service/prescription.service';
import { MedicineInfoService } from 'src/app/service/medicine-info.service';

@Component({
  selector: 'app-edit-prescription',
  templateUrl: './edit-prescription.component.html',
  styleUrls: ['./edit-prescription.component.css']
})
export class EditPrescriptionComponent implements OnInit {

  constructor(public router: Router, public formBuilder: FormBuilder, public service: PrescriptionService, public service2: MedicineInfoService) { }

  prescription: Prescription | any ;

  patient: Patient | any ;
  isEditMode: boolean = false ;

  myControl: FormControl[] = [];
  options: string[] = [];
  filteredOptions: Observable<string[]>[] = [];

  ngOnInit(): void {
    this.prescription = localStorage.getItem("tempPrescription") ;
    this.prescription = JSON.parse(this.prescription);

    this.service.formModel.reset();
    this.prescribedMedicine.clear();

    this.service2.getAllMedicineName(localStorage.getItem("doctorId")).subscribe(
      (response: any) =>{
        this.options = response ;
        for(var medicine of this.prescription.prescribedMedicines){
          this.addItem() ;
          
        }
      }
    );
  }

  filterOption(i: number){
    this.filteredOptions[i] = this.myControl[i].valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  addItem(): void {
    this.myControl[this.prescribedMedicine.length] = new FormControl() ;
    this.filterOption(this.prescribedMedicine.length);
    
    const formModel2 = this.formBuilder.group({
      medicineName: [""],
      morning : false,
      noon : false,
      night : false,
      beforeEating: false,
      afterEating: false,
      numberOfDaysToTake: [""],
      otherInfo: [""]
    }); 

    this.prescribedMedicine.push(formModel2);
  }

  deleteItem(i: number) {
    console.log("++++++++++:" + i);
    this.prescribedMedicine.removeAt(i);
    // this.prescription.prescribedMedicines.removeAt(i);
    this.prescription.prescribedMedicines.splice(i, 1);
  }

  get prescribedMedicine(){
    return this.service.formModel.controls['prescribedMedicine'] as FormArray;
  }

  updatePrescription(){
    console.log(this.service.formModel.value.prescribedMedicine);
    this.service.editPrescriptionInfo(localStorage.getItem("doctorId"), this.prescription.patientId, this.prescription.id).subscribe(
      (response: any) => {
        if(response==true){
          this.router.navigate(["doctor/prescription/view-prescription"]);
        }
      }
    );
  }

  isLessThan(i: any): boolean{
    return i<this.prescription.prescribedMedicines.length ;
  }

}
