import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ClarityModule } from "clarity-angular";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./shared/app/app.component";
import {PatientService} from "./shared/patient/patient.service";
import {PatientComponent} from "./shared/patient/patient.component";

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    JsonpModule,
    RouterModule,
    ClarityModule
  ],
  providers: [
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
