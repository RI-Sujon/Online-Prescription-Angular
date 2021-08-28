import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/models/patient';
import { PrescriptionService } from 'src/app/service/prescription.service';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
import { MedicineInfoService } from 'src/app/service/medicine-info.service';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.css']
})
export class AddPrescriptionComponent implements OnInit {

  constructor(public service: PrescriptionService, public service2: MedicineInfoService, public formBuilder: FormBuilder, public router: Router) { }

  patient: Patient | any ;
  isEditMode: boolean = false ;

  myControl: FormControl[] = [];
  options: string[] = [];
  filteredOptions: Observable<string[]>[] = [];
  

  ngOnInit(): void {
    this.patient = localStorage.getItem("tempPatient");
    this.patient = JSON.parse(this.patient);

    this.service.formModel.reset();
    this.prescribedMedicine.clear();

    this.service2.getAllMedicineName(localStorage.getItem("doctorId")).subscribe(
      (response: any) =>{
        this.options = response ;
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

  deleteItem(index: number) {
    this.prescribedMedicine.removeAt(index);
  }

  get prescribedMedicine(){
    return this.service.formModel.controls['prescribedMedicine'] as FormArray;
  }

  save(){
    console.log(this.service.formModel.value.prescribedMedicine);
    this.service.addPrescription(localStorage.getItem("doctorId"), this.patient.id).subscribe(
      (response: any) => {
        if(response==true){
          this.router.navigate(["doctor/prescription/view-prescription"]);
        }
      }
    );
  }

}
