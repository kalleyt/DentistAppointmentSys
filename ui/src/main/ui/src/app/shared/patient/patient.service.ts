import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Patient} from "./patient.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PatientService{

  constructor(private httpClient: HttpClient) {
  }

  public getPatients(): Observable<Patient[]> {
    return this.httpClient.get('patients');
  }

  // public setPatient(): Observable<Patient[]> {
  //   return this.httpClient.get('user');
  // }

}
