import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../models/patient.model';


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  @Input() patient: Patient ;

  constructor() { }

  ngOnInit() {
  }
}
