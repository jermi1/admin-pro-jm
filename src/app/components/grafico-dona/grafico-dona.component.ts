import { Component, OnInit, Input } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {
 @Input() public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
 @Input() public doughnutChartData: number[] = [300, 450, 100]; // MultiDataSet --> en caso sea multidimensional
 @Input() public doughnutChartType: ChartType = 'doughnut';
 @Input() public leyenda: string = 'leyenda';
  constructor() { }

  ngOnInit(): void {
  }

}
