import { Component, OnInit } from '@angular/core';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import {PatientService} from "./patient.service";
import {Patient} from "./patient.model";

@Component({
  selector: 'patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  providers: [PatientService]
})
export class PatientComponent implements OnInit {

  public patients: Patient[] = [];

  constructor(private service: PatientService) {
  }

  ngOnInit() {
    this.service.getPatients()
      .subscribe(data => this.patients = data,
        error => console.log(error));

    // this.service.setPatient().subscribe(data => this.patients = data,
    //   error => console.log(error));
  }

}
