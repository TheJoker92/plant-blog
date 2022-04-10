import { Component, Input, OnInit } from '@angular/core';
import { IPlant } from 'src/app/interfaces/IPlant';

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss']
})

export class PlantCardComponent implements OnInit {

  @Input() plant: IPlant

  constructor() {
    this.plant.image = "data:image/png;base64," + this.plant.image
  }

  ngOnInit(): void {
  }

}