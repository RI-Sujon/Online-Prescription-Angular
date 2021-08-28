import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { AuthenticationComponent } from './authentication/authentication.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorComponent } from './doctor/doctor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientManagementComponent } from './doctor/patient-management/patient-management.component';
import { MedicineManagementComponent } from './doctor/medicine-management/medicine-management.component';
import { MedicineInfoService } from './service/medicine-info.service';
import { AddMedicineComponent } from './doctor/medicine-management/add-medicine/add-medicine.component';
import { EditMedicineInfoComponent } from './doctor/medicine-management/edit-medicine-info/edit-medicine-info.component';
import { ViewMedicineListComponent } from './doctor/medicine-management/view-medicine-list/view-medicine-list.component';
import { AddPatientComponent } from './doctor/patient-management/add-patient/add-patient.component';
import { EditPatientInfoComponent } from './doctor/patient-management/edit-patient-info/edit-patient-info.component';
import { ViewPatientListComponent } from './doctor/patient-management/view-patient-list/view-patient-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { ProfileManagementComponent } from './doctor/profile-management/profile-management.component';
import { EditInfoComponent } from './doctor/profile-management/edit-info/edit-info.component';
import { PrescriptionComponent } from './doctor/prescription/prescription.component' ;
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input' ;
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddPrescriptionComponent } from './doctor/prescription/add-prescription/add-prescription.component';
import { EditPrescriptionComponent } from './doctor/prescription/edit-prescription/edit-prescription.component';
import { ViewPrescriptionComponent } from './doctor/prescription/view-prescription/view-prescription.component';
import { PdfViewComponent } from './doctor/prescription/pdf-view/pdf-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    AuthenticationComponent,
    DoctorComponent,
    PatientManagementComponent,
    MedicineManagementComponent,
    AddMedicineComponent,
    EditMedicineInfoComponent,
    ViewMedicineListComponent,
    AddPatientComponent,
    EditPatientInfoComponent,
    ViewPatientListComponent,
    ProfileManagementComponent,
    EditInfoComponent,
    PrescriptionComponent,
    AddPrescriptionComponent,
    EditPrescriptionComponent,
    ViewPrescriptionComponent,
    PdfViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [MedicineInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
