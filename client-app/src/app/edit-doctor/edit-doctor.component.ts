import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DoctorService } from '../doctor.service';
import { Router } from "@angular/router";
import { DoctorModel } from '../DoctorModel';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {

    doctor: DoctorModel;
    editForm: FormGroup;
    submitted = false;
  
    constructor(private formBuilder: FormBuilder, private router: Router, private doctorService: DoctorService) { }
  
    ngOnInit() {
      let doctorId = localStorage.getItem("doctorId");
      if(!doctorId){
        alert("Something wrong!");
        this.router.navigate(['']);
        return;
      }
  
      this.editForm = this.formBuilder.group({
        _id: [],
        name: ['', Validators.required],
        patient: ['', Validators.required],
        noshow: ['', Validators.required],
        percentage: ['', Validators.required]
      });
  
      this.doctorService.getDoctorById(doctorId).subscribe(data=>{
        console.log(data);
        this.editForm.patchValue(data); //Don't use editForm.setValue() as it will throw console error
      });
    }
  
    // get the form short name to access the form fields
    get f() { return this.editForm.controls; }
  
    onSubmit(){
      this.submitted = true;
      
      if(this.editForm.valid){
        this.doctorService.updateDoctor(this.editForm.value)
        .subscribe( data => {
          console.log(data);
          this.router.navigate(['doctor-list']);
        });
      }
    }

}
