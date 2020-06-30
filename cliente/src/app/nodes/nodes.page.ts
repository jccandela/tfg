import { Component, OnInit } from '@angular/core';
import { NodesService } from '../services/nodes.service';
import { Node } from 'src/models/node';
import { Payload } from 'src/models/payload';

@Component({
  selector: 'app-sensors',
  templateUrl: './nodes.page.html',
  styleUrls: ['./nodes.page.scss'],
})
export class NodesPage implements OnInit {
  sensors: Node[];
  payloads: Payload[];

  constructor(private sensorsService: NodesService) { 
  }

  async ngOnInit() {
    await this.getNodes();
  }

  async getNodes(): Promise<void> {
    this.sensorsService.getNodes().subscribe(sensors => this.sensors = sensors);
    console.log(this.sensors);
  }

  displayNodes(){
    console.log(this.sensors);
  }
}
