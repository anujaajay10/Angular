import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { DoctorService } from '../services/doctor.service';


@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] | undefined;

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctors = this.doctorService.getDoctors();
  }

  selectDoctor(doctorId: number) {
    this.doctorService.selectDoctor(doctorId);
  }
}
