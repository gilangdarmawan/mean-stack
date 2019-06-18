import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { ViewChartComponent } from './view-chart/view-chart.component';

const routes: Routes = [
    { path: 'add-doctor', component: AddDoctorComponent },
    { path: 'edit-doctor', component: EditDoctorComponent},
    { path: 'doctor-list', component: ListDoctorsComponent},
    { path: '', component: ViewChartComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
