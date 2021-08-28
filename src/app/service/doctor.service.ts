import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  formModel = this.formBuilder.group({
    doctorName: [],
    mobileNumber: [],
    qualification: [],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  public url = "http://localhost:5001/doctor/" ;

  public doctorSignIn(){
    var body = {
      "email": this.formModel.value.email,
      "password": this.formModel.value.password,
    }

    return this.http.post<any>( this.url + "signIn", body);
  }

  public doctorSignUp(){
    var body = {
      "email": this.formModel.value.email,
      "password": this.formModel.value.password,
    }

    return this.http.post<any>( this.url + "signUp", body);
  }

  public addDoctorInfo(){
    var body = {
      "doctorName": this.formModel.value.doctorName,
      "qualification": this.formModel.value.qualification,
      "mobileNumber": this.formModel.value.mobileNumber,
      "email": this.formModel.value.email,
    }

    return this.http.post<any>( this.url + "addDoctorInfo", body);
  }

  public editDoctorInfo(doctorId : any){
    var body = {
      "id": doctorId,
      "doctorName": this.formModel.value.doctorName,
      "qualification": this.formModel.value.qualification,
      "mobileNumber": this.formModel.value.mobileNumber,
      "email": this.formModel.value.email,
    }

    return this.http.post<any>( this.url + "editDoctorInfo", body);
  }
}
