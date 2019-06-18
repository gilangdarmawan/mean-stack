import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms"; 
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorService } from './doctor.service';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { ViewChartComponent } from './view-chart/view-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDoctorsComponent,
    AddDoctorComponent,
    EditDoctorComponent,
    ViewChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
