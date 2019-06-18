import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DoctorService } from '../doctor.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
    selector: 'app-add-doctor',
    templateUrl: './add-doctor.component.html',
    styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

    constructor(private formBuilder: FormBuilder, private router: Router, private doctorService: DoctorService) { }

    addForm: FormGroup;
    submitted = false;

    ngOnInit() {
        this.addForm = this.formBuilder.group({
            _id: [],
            name: ['', Validators.required],
            patient: ['', Validators.required],
            noshow: ['', Validators.required],
            percentage: ['', Validators.required]
        });
    }

    onSubmit() {
        this.submitted = true;

        if (this.addForm.valid) {
            this.doctorService.addDoctor(this.addForm.value)
                .subscribe(data => {
                    console.log(data);
                    this.router.navigate(['doctor-list']);
                });
        }
    }

    // get the form short name to access the form fields
    get f() { return this.addForm.controls; }

}
