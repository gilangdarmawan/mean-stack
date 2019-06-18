import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DoctorModel } from './DoctorModel';
import { Observable, of, Subject } from 'rxjs';
import { map, count } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DoctorService {

    constructor(private http: HttpClient) { }

    baseurl: string = "http://localhost:3000/";

    getAllDoctors() {
        return this.http.get<DoctorModel[]>(this.baseurl + 'doctors');
    }

    getDoctorById(id: string) {
        return this.http.get<DoctorModel>(this.baseurl + 'doctors' + '/' + id);
    }

    addDoctor(doctor: DoctorModel) {
        return this.http.post(this.baseurl + 'doctors', doctor);
    }

    deleteDoctor(id: string) {
        return this.http.delete(this.baseurl + 'doctors' + '/' + id);
    }

    updateDoctor(doctor: DoctorModel) {
        return this.http.put(this.baseurl + 'doctors' + '/' + doctor._id, doctor);
    }

    private extractData(res: Response) {
        const body = res;
        return body || {};
    }

    getDoctors(): Observable<any> {
        return this.http.get(this.baseurl + 'doctors').pipe(
            map(this.extractData)
        );
    }

    getPatient(): Observable<number> {
        let totalPasien: number;
        var subject = new Subject<number>();
        this.getAllDoctors().subscribe(items => {
            items.map(item => {
                totalPasien = item.patient;
                subject.next(totalPasien);
            });
        });
          
        return subject.asObservable();
    }
}
