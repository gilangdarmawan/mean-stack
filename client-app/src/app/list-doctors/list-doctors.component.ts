import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DoctorModel } from '../DoctorModel';
import { DoctorService } from '../doctor.service';

@Component({
    selector: 'app-list-doctors',
    templateUrl: './list-doctors.component.html',
    styleUrls: ['./list-doctors.component.css']
})
export class ListDoctorsComponent implements OnInit {

    doctors: DoctorModel[];

    constructor(private doctorService: DoctorService, private router: Router) { }

    ngOnInit() {
        this.getAllDoctors();
    }

    getAllDoctors(): void {
        this.doctorService.getAllDoctors().subscribe(data => {
            this.doctors = data;
        });
    };

    addDoctor(): void {
        this.router.navigate(['add-doctor']);
    }

    deleteDoctor(doctor: DoctorModel) {
        this.doctorService.deleteDoctor(doctor._id).subscribe(data => {
            console.log(data);
            this.getAllDoctors();
        });
    }

    updateDoctor(doctor: DoctorModel) {
        localStorage.removeItem("doctorId");
        localStorage.setItem("doctorId", doctor._id);
        this.router.navigate(['edit-doctor']);
    }

}
