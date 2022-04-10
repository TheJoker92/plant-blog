import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { IPlant } from 'src/app/interfaces/IPlant';

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss']
})

export class PlantCardComponent implements OnInit {

  @Input() plant: IPlant

  constructor() {
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.plant) this.plant.image = "data:image/png;base64," + this.plant.image
  }

  ngOnInit(): void {
  }

}