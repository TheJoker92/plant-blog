import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IPlant } from 'src/app/interfaces/IPlant';

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss']
})

export class PlantCardComponent implements OnInit {

  @Input() plant: IPlant

  constructor(private route: Router) {
  }

  ngOnInit(): void {
  }

  goToDetail(plant: IPlant) {
    this.route.navigateByUrl(`detail/${plant.id.toString()}`)
  }

}