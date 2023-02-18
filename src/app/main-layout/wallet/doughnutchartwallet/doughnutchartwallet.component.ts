import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartType, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-doughnutchartwallet',
  templateUrl: './doughnutchartwallet.component.html',
  styleUrls: ['./doughnutchartwallet.component.scss']
})
export class DoughnutchartwalletComponent implements OnInit {

  doughnutChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: undefined,
      title: undefined
    }
  };
  doughnutChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartLegend = false;
  doughnutChartPlugins = [];
  doughnutChartColors = [
    { // yellow
      backgroundColor: ['#FFBD17', '#3AC79B', '#f7931a', '#617dea'],
      borderWidth: 0,
    },
  ];
  doughnutChartData: ChartDataset[] = [
    { data: [55, 25, 10, 10], label: 'My Expenses' }
  ];

  constructor() { }

  ngOnInit(): void {

  }


}
