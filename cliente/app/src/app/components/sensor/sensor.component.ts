import { Component, OnInit } from '@angular/core';
import { TtnService } from 'src/app/services/ttn.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {
  private data: any;

  constructor(ttnservice:TtnService) { 
    ttnservice.query()
    // .then((result) => {
    //   this.data = result;
    //   console.log(result);
    // }).catch((err) => {
    //   console.log(err);
    // });;
  }

  ngOnInit(): void {
  }

}
