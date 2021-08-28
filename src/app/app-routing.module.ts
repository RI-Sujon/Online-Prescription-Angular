import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AddMedicineComponent } from './doctor/medicine-management/add-medicine/add-medicine.component';
import { EditMedicineInfoComponent } from './doctor/medicine-management/edit-medicine-info/edit-medicine-info.component';
import { MedicineManagementComponent } from './doctor/medicine-management/medicine-management.component';
import { ViewMedicineListComponent } from './doctor/medicine-management/view-medicine-list/view-medicine-list.component';
import { AddPatientComponent } from './doctor/patient-management/add-patient/add-patient.component';
import { EditPatientInfoComponent } from './doctor/patient-management/edit-patient-info/edit-patient-info.component';
import { PatientManagementComponent } from './doctor/patient-management/patient-management.component';
import { ViewPatientListComponent } from './doctor/patient-management/view-patient-list/view-patient-list.component';
import { AddPrescriptionComponent } from './doctor/prescription/add-prescription/add-prescription.component';
import { EditPrescriptionComponent } from './doctor/prescription/edit-prescription/edit-prescription.component';
import { PdfViewComponent } from './doctor/prescription/pdf-view/pdf-view.component';
import { PrescriptionComponent } from './doctor/prescription/prescription.component';
import { ViewPrescriptionComponent } from './doctor/prescription/view-prescription/view-prescription.component';
import { EditInfoComponent } from './doctor/profile-management/edit-info/edit-info.component';
import { ProfileManagementComponent } from './doctor/profile-management/profile-management.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/authentication/signin', pathMatch: 'full'},
  { path: 'authentication', component: AuthenticationComponent,
    children:[
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent }
    ]
  },
  { path: "pdf", component: PdfViewComponent, canActivate: [AuthGuardService] },
  { path: 'doctor', component: DoctorComponent, canActivate: [AuthGuardService], 
    children:[
      { path: 'medicine-management', component: MedicineManagementComponent, canActivate: [AuthGuardService],
        children: [
          { path: "add-medicine", component: AddMedicineComponent, canActivate: [AuthGuardService]}, 
          { path: "edit-medicine-info", component: EditMedicineInfoComponent, canActivate: [AuthGuardService] },
          { path: "view-medicine-list", component: ViewMedicineListComponent, canActivate: [AuthGuardService] }
        ]
      },
      { path: 'patient-management', component: PatientManagementComponent, canActivate: [AuthGuardService],
        children: [
          { path: "add-patient", component: AddPatientComponent, canActivate: [AuthGuardService] },
          { path: "edit-patient-info", component: EditPatientInfoComponent, canActivate: [AuthGuardService] },
          { path: "view-patient-list", component: ViewPatientListComponent, canActivate: [AuthGuardService] }
        ]
      },
      { path: 'profile-management', component: ProfileManagementComponent, canActivate: [AuthGuardService],
        children:[
          {
            path: "edit-profile", component: EditInfoComponent, canActivate: [AuthGuardService]
          }
        ]
      },
      { path: 'prescription', component: PrescriptionComponent, canActivate: [AuthGuardService],
        children: [
          { path: "add-prescription", component: AddPrescriptionComponent, canActivate: [AuthGuardService] },
          { path: "edit-prescription", component: EditPrescriptionComponent, canActivate: [AuthGuardService] },
          { path: "view-prescription", component: ViewPrescriptionComponent, canActivate: [AuthGuardService] }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
