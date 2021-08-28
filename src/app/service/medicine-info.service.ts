import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MedicineInfoService {

  constructor(private formbuilder: FormBuilder, private http: HttpClient){}

  public url = "http://localhost:5001/medicine/" ;

  formModel = this.formbuilder.group({
    Name: [],
    Indication: [],
    Usage : [],
    Instruction : [],
  });
  
  
  public addMedicine(doctorId: any){
    var body = {
      "name": this.formModel.value.Name,
      "indication": this.formModel.value.Indication,
      "usage": this.formModel.value.Usage,
      "instruction": this.formModel.value.Instruction,
      "doctorId": doctorId 
    }

    return this.http.post<any>(this.url + "add", body);
  }


  public getAllMedicine(doctorId: any){
    return this.http.get<any>(this.url + "getAll", {params: {"doctorId": doctorId }}) ;
  }

  public getAllMedicineName(doctorId: any){
    return this.http.get<any>(this.url + "getAllMedicineName", {params: {"doctorId": doctorId }}) ;
  }

  public removeMedicine(medicineId: any){
    return this.http.delete<any>(this.url + "remove", {params: {"medicineId": medicineId }}) ;
  }

  public editMedicineInfo( doctorId: any, medicineId: any){
    var body = {
      "id": medicineId,
      "name": this.formModel.value.Name,
      "indication": this.formModel.value.Indication,
      "usage": this.formModel.value.Usage,
      "instruction": this.formModel.value.Instruction,
      "doctorId": doctorId 
    }

    return this.http.post<any>(this.url + "update", body);
  }
}
