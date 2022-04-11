import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPlant } from './interfaces/IPlant';
import { IResponse } from './interfaces/IResponse';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  plantsList: IPlant[] = []
  filteredPlantsList: IPlant[] = []

  selectedPlant: IPlant


  constructor(private http: HttpClient) { }

  /**
   * Retrieve list of all plants
   * @returns Obsersvable of the response 
   */
  getList(): Observable<IResponse> {
    return this.http.get<IResponse>("assets/json/responsePlantListOK.json")
  }
}
