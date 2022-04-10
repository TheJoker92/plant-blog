import { Component, OnInit } from '@angular/core';
import { IPlant } from 'src/app/interfaces/IPlant';
import { IResponse } from 'src/app/interfaces/IResponse';
import { PlantsService } from 'src/app/plants.service';
import { LoaderService } from 'src/app/service/loader.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent implements OnInit {

  plantList: IPlant[] = []

  constructor(public plantsService: PlantsService, // service injection
              public loaderService: LoaderService
              ) { }

  //Life cycle run after constructor and ngOnChanges (no explici declaration 
  //because no @input variable exists here.
  ngOnInit(): void {
    this.loaderService.$isLoading.next(true)
    // Call service here for retrieving list because ngOnInit is called 
    //only one time after constructor and generally the list not change
    this.plantsService.getList().subscribe({
      next: (response: IResponse) => {
        setTimeout(() => {
          this.loaderService.$isLoading.next(false)
          console.log(response.message.data)
          this.plantsService.plantList = response.message.data
      },3000);
        
      }
    })
  }

}
