import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from './service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'plant-blog';

  constructor(private loaderService: LoaderService) {
    this.loaderService.$isLoading.subscribe({
      next: (isLoading: boolean) => {
        this.loaderService.isLoading = isLoading
        //Show loader if isLoading is true otherwise hide
        if (this.loaderService.page != this.loaderService.previouspage || !isLoading) {
          isLoading? window.location.href  = this.loaderService.page + "#openModal" : window.location.href  = this.loaderService.page + "#close"
          this.loaderService.previouspage = this.loaderService.page
        }
        window.history.pushState("", "", this.loaderService.page)
      }
    })
  }
}
