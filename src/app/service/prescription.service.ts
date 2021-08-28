import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(public formBuilder: FormBuilder, private http: HttpClient) { }

  public url = "http://localhost:5001/prescription/" ;

  formModel = this.formBuilder.group({
    prescribedMedicine: this.formBuilder.array([]),
    suggestion: [""],
  });

  addPrescription(doctorId: any, patientId: any){
    var body = {
      "doctorId": doctorId,
      "patientId": patientId,
      "dateAndTime": Date.now,
      "prescribedMedicines": this.formModel.value.prescribedMedicine,
      "suggestion": this.formModel.value.suggestion
    }

    return this.http.post<any>(this.url + "add", body);
  }

  public getAllPrescription(doctorId: any, patientId: any){
    return this.http.get<any>(this.url + "getAll", {params: {"doctorId": doctorId, "patientId": patientId }}) ;
  }

  public removePrescription(prescriptionId: any){
    return this.http.delete<any>(this.url + "remove", {params: {"prescriptionId": prescriptionId }}) ;
  }

  public editPrescriptionInfo(doctorId: any, patientId: any, prescriptionId: any){
    var body = {
      "id": prescriptionId,
      "doctorId": doctorId,
      "patientId": patientId,
      "dateAndTime": Date.now,
      "prescribedMedicines": this.formModel.value.prescribedMedicine,
      "suggestion": this.formModel.value.suggestion
    }

    return this.http.post<any>(this.url + "update", body);
  }
}
