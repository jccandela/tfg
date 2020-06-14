import { Component, OnInit } from '@angular/core';
import { SensorsService } from '../services/sensors.service';
import { Sensor } from 'src/models/sensor';
import { Payload } from 'src/models/payload';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.page.html',
  styleUrls: ['./sensors.page.scss'],
})
export class SensorsPage implements OnInit {
  sensors: Sensor[];
  payloads: Payload[];

  constructor(private sensorsService: SensorsService) { 
  }

  async ngOnInit() {
    await this.getSensors();
  }

  async getSensors(): Promise<void> {
    this.sensorsService.getSensors().subscribe(sensors => this.sensors = sensors);
  }

  displaySensors(){
    console.log(this.sensors);
  }
}
