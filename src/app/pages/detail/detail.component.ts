import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPlant } from 'src/app/interfaces/IPlant';
import { IResponse } from 'src/app/interfaces/IResponse';
import { PlantsService } from 'src/app/plants.service';
import { LoaderService } from 'src/app/service/loader.service';
import { LangPipe } from 'src/app/utils/pipes/lang/lang.pipe';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})


export class DetailComponent implements OnInit {

  //Retrieve plant data by url id
  idPlant = Utils.getIdPlantByURL()

  constructor(private loaderService: LoaderService, 
              private route: Router,
              public plantsService: PlantsService) {
                this.loaderService.page = "detail/" + this.idPlant
    
  }

  ngOnInit(): void {

    this.loaderService.$isLoading.next(true)

    this.plantsService.getList().subscribe({
      next: (response: IResponse) => {
        //30s delay
          setTimeout(() => {
            this.plantsService.plantsList = response.message.data

            //set selected plant
            this.plantsService.selectedPlant = this.plantsService.plantsList.find((plant: IPlant) => plant.id == this.idPlant)

            this.loaderService.$isLoading.next(false)
          },3000);
      },
      error: () => {
        window.alert(LangPipe.transformation("DETAIL.ERROR"))
      }
    })
  }

  goBack() {  
    window.location.href = "home"
  }

}
