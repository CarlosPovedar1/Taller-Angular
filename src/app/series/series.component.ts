import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  constructor(private serieService: SerieService) { }
  
  series: Array<Serie> = [];
  
  getSeries() {
    this.serieService.getSeries().subscribe(
      series => {
        this.series = series;
        console.log(series);
      }
    );
  }
  
  getPromedioTemporadas(series: Serie[]): number {
    const totalSeries = series.length;
    let totalTemporadas: number = 0;
    let promedioTemporadas: number = 0;

    series.forEach((serie) => totalTemporadas += serie.seasons);

    if (totalSeries > 0) {
      promedioTemporadas = totalTemporadas / totalSeries;
    }
    return promedioTemporadas;
  }
  
  ngOnInit() {
    this.getSeries();
  }
}
