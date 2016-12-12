import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private chartData: Array<any>;

  constructor() { }

  ngOnInit() {
    // give everything a chance to get loaded before starting the animation to reduce choppiness
    setTimeout(() => {

      this.getDatas();

      // this.generateData();

      // change the data periodically
      // setInterval(() => this.generateData(), 3000);
    }, 1000);
  }

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }

  getDatas() {
    this.chartData = [
      {
        "debut": "01/04/2015",
        "fin": "31/12/2015",
        "rate": 162,
        "operatingStatus": "Operational",
        "country": "Saudi Arabia",
        "operator": "Saudi Aramco",
        "rig": "AOD 1"
      }, {
        "debut": "01/01/2016",
        "fin": "01/07/2016",
        "rate": 125,
        "operatingStatus": "Operational",
        "country": "Saudi Arabia",
        "operator": "Saudi Aramco",
        "rig": "AOD 1"
      }, {
        "debut": "01/04/2015",
        "fin": "31/12/2015",
        "rate": 162,
        "operatingStatus": "Operational",
        "country": "Saudi Arabia",
        "operator": "Saudi Aramco",
        "rig": "AOD 2"
      }, {
        "debut": "01/01/2016",
        "fin": "01/07/2016",
        "rate": 125,
        "operatingStatus": "Operational",
        "country": "Saudi Arabia",
        "operator": "Saudi Aramco",
        "rig": "AOD 2"
      }, {
        "debut": "02/07/2016",
        "fin": "01/06/2017",
        "rate": 205,
        "operatingStatus": "Operational",
        "country": "Saudi Arabia",
        "operator": "Saudi Aramco",
        "rig": "AOD 2"
      }, {
        "debut": "01/04/2015",
        "fin": "31/12/2015",
        "rate": 162,
        "operatingStatus": "Operational",
        "country": "Saudi Arabia",
        "operator": "Saudi Aramco",
        "rig": "AOD 3"
      }, {
        "debut": "01/01/2016",
        "fin": "01/10/2016",
        "rate": 125,
        "operatingStatus": "Operational",
        "country": "Saudi Arabia",
        "operator": "Saudi Aramco",
        "rig": "AOD 3"
      }, {
        "debut": "02/10/2016",
        "fin": "01/10/2017",
        "rate": 205,
        "operatingStatus": "Operational",
        "country": "Saudi Arabia",
        "operator": "Saudi Aramco",
        "rig": "AOD 3"
      }
    ];
  }
}
