import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPlant } from './interfaces/IPlant';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private http: HttpClient) { }

  getList(): Observable<IPlant[]> {
    return this.http.get<IPlant[]>("assets/json/responsePlantListOK.json")
  }
}
