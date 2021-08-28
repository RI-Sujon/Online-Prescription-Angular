import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PatientInfoService {
  constructor(private formbuilder: FormBuilder, private http: HttpClient){}

  public url = "http://localhost:5001/patient/" ;

  formModel = this.formbuilder.group({
    Name: [],
    Age: [],
    BloodGroup : [],
    Weight : [],
    MobileNumber: [],
    Address: [],
    Disease: []
  });

  public addPatient(doctorId: any){
    var body = {
      "name": this.formModel.value.Name,
      "age": this.formModel.value.Age,
      "bloodGroup": this.formModel.value.BloodGroup,
      "weight": this.formModel.value.Weight,
      "mobileNumber": this.formModel.value.MobileNumber,
      "address": this.formModel.value.Address,
      "disease": this.formModel.value.Disease,
      "doctorId": doctorId,
    }

    return this.http.post<any>(this.url + "add", body);
  }


  public getAllPatient(doctorId: any){
    return this.http.get<any>(this.url + "getAll", {params: {"doctorId": doctorId }}) ;
  }

  public removePatient(patientId: any){
    return this.http.delete<any>(this.url + "remove", {params: {"patientId": patientId }}) ;
  }

  public editPatientInfo(doctorId: any, patientId: any){
    var body = {
      "id": patientId,
      "name": this.formModel.value.Name,
      "age": this.formModel.value.Age,
      "bloodGroup": this.formModel.value.BloodGroup,
      "weight": this.formModel.value.Weight,
      "mobileNumber": this.formModel.value.MobileNumber,
      "address": this.formModel.value.Address,
      "disease": this.formModel.value.Disease,
      "doctorId": doctorId,
    }

    return this.http.post<any>(this.url + "update", body);
  }
}
