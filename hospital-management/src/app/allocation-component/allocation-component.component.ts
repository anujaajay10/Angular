import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { Patient } from '../models/patient.model';
import { DoctorService } from '../services/doctor.service';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {
  selectedDoctor: Doctor;
  patients: Patient[];

  constructor(private doctorService: DoctorService, private patientService: PatientService) { }

  ngOnInit() {
    this.doctorService.selectedDoctor.subscribe((doctor: Doctor) => {
      this.selectedDoctor = doctor;
      this.patients = this.patientService.getPatientById(doctor.id);
    });
  }

  allocatePatient(patient: Patient) {
    this.patientService.allocateDoctor(patient, this.selectedDoctor);
  }
}
