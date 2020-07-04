import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  ViewType: string = "Para";
  MaxSent: number = 10;
  MinSent: number = 5;
  MaxWord: number = 15;
  MinWord: number = 10;
  Count: number = 1;
  constructor(private router: Router, private route: ActivatedRoute) { }

  updateRoute(obj) {
    const urlTree = this.router.createUrlTree([], {
      queryParams: obj,
      preserveFragment: true
    });
    this.router.navigateByUrl(urlTree);
  }

  checkRoute() {
    if (this.ViewType == "Para") {
      this.updateRoute({
        Count: this.Count,
        MaxSent: this.MaxSent,
        MinSent: this.MinSent,
        ViewType: this.ViewType,
        MaxWord: this.MaxWord,
        MinWord: this.MinWord
      })
    } else if (this.ViewType == "Sent") {
      this.updateRoute({
        Count: this.Count,
        MaxWord: this.MaxWord,
        MinWord: this.MinWord,
        ViewType: this.ViewType
      })
    }
  }

  checkParams(){
    let queryParams = this.route.snapshot.queryParams;
    if (queryParams.ViewType == "Para" || queryParams.ViewType == "Sent" || queryParams.ViewType == "Detail") {
      this.ViewType = queryParams.ViewType;
    }else{
      this.ViewType = "Para";
    }
    if (queryParams.Count && typeof parseInt(queryParams.Count) == 'number') {
      this.Count =  parseInt(queryParams.Count);
    }
    if (queryParams.MaxSent && typeof  parseInt(queryParams.MaxSent) == 'number') {
      this.MaxSent =  parseInt(queryParams.MaxSent);
    }
    if (queryParams.MinSent && typeof  parseInt(queryParams.MinSent) == 'number') {
      this.MinSent =  parseInt(queryParams.MinSent);
    }
    if (queryParams.MaxWord && typeof  parseInt(queryParams.MaxWord) == 'number') {
      this.MaxWord =  parseInt(queryParams.MaxWord);
    }
    if (queryParams.MinWord && typeof  parseInt(queryParams.MinWord) == 'number') {
      this.MinWord =  parseInt(queryParams.MinWord);
    }
   
  }
}
