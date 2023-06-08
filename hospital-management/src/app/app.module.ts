import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    PatientListComponent,
    AllocationComponent,
    DoctorDetailsComponent,
    PatientDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DoctorService,
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
