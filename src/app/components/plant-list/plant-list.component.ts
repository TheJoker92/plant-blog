import { Component, OnInit } from '@angular/core';
import { IPlant } from 'src/app/interfaces/IPlant';
import { PlantsService } from 'src/app/plants.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent implements OnInit {

  plantList: IPlant[] = []

  constructor(private plantsService: PlantsService // service injection
              ) { }

  //Life cycle run after constructor and ngOnChanges (no explici declaration 
  //because no @input variable exists here.
  ngOnInit(): void {
    // Call service here for retrieving list because ngOnInit is called 
    //only one time after constructor and generally the list not change
    this.plantsService.getList().subscribe({
      next: (response: IPlant[]) => {
        console.log(response)
      }
    })
  }

}
