import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading: boolean = false
  $isLoading: Subject<boolean> = new Subject<boolean>()

  //Keep track about page where the loader has to be shown because an anchor-tag is used for toggle the modal
  page = "home"     
  previouspage = ""

  constructor() { }
}
