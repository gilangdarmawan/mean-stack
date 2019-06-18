import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-view-chart',
    templateUrl: './view-chart.component.html',
    styleUrls: ['./view-chart.component.css']
})
export class ViewChartComponent implements OnInit {

    chartType = 'doughnut';
    chartLabels = ['Show', 'No Show'];
    chartData: any = [];
    totalPatient: number;
    totalNoShow: number;

    public chartColors: Array<any> = [
        {
            backgroundColor: ['#16a085', '#bdc3c7']
        }
    ]

    constructor(private doctorService: DoctorService, private router: Router) { }

    showResult() {
        this.doctorService.getAllDoctors().subscribe(res => {
            this.totalPatient = res.reduce((sum, item) => sum + item.patient, 0);
            this.totalNoShow = res.reduce((sum, item) => sum + item.noshow, 0)
            this.chartData = [this.totalPatient - this.totalNoShow, this.totalNoShow];
        });
    }

    ngOnInit() {
        this.showResult();
    }

    showList() {
        this.router.navigate(['doctor-list']);
    }
}
