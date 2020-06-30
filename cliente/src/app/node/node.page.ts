import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { Payload } from 'src/models/payload';
import { NodesService } from '../services/nodes.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './node.page.html',
  styleUrls: ['./node.page.scss'],
})
export class NodePage implements OnInit {

  public dev_id: string = "";
  private routeSub: Subscription;

  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;
  payloads: Payload[];

  ionViewDidEnter() {
    this.createChart();
  }

  constructor(private route: ActivatedRoute,
    private nodesService: NodesService) 
    { }

  async ngOnInit() {
    
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params); //log the entire params object
      console.log(params['devid']); //log the value of id
      this.dev_id = params['devid'];
    });

    await this.getPayloads(this.dev_id);
  }

  
  async getPayloads(dev_id: string): Promise<void> {
    this.nodesService.getNodePayloads(dev_id).subscribe(payloads => this.payloads = payloads);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  createChart() {
  this.bars = new Chart(this.barChart.nativeElement, {
    type: 'line',
    data: {
      //labels: ['1', '2', '3', '4', '5'],
      labels: this.payloads.map(
        function(x){

          return new Date(x.payload_date).getHours() + ":" + new Date(x.payload_date).getMinutes();
        }
      ),
      datasets: [{
        label: 'Temperatura',
        yAxisID: 'A',
        //data: [100, 96, 84, 76, 69],
        data: this.payloads.map(x => x.payload_fields.Temp),
        borderColor: 'rgb(227, 116, 38)',
        borderWidth: 1
      }, {
        label: 'Humedad',
        yAxisID: 'B',
        //data: [1, 1, 1, 1, 0],
        data: this.payloads.map(x => x.payload_fields.Hum),
        borderColor: 'rgb(61, 63, 209)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          id: 'A',
          type: 'linear',
          position: 'left',
        }, {
          id: 'B',
          type: 'linear',
          position: 'right'
        }]
      }
    }
  });
  }
  
}


