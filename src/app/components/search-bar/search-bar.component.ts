import { Component, OnInit } from '@angular/core';
import { PlantsService } from 'src/app/plants.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private plantsService: PlantsService) { }

  ngOnInit(): void {
  }

  /**
   * Filtered plant that respect the category
   * @param term : search term
   */
  onSearch(e: any) {
    let term = e.target.value 
    this.plantsService.filteredPlantsList = this.plantsService.plantsList.filter(plant => plant.category.includes(term))
  }

}
