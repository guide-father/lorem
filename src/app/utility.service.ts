import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  ViewType: string = "Para";
  MaxSent: number = 5;
  MinSent: number = 10;
  MaxWord: number = 10;
  MinWord: number = 15;
  Words: string = "";
  Count: number = 1;
  Format: string = "plain"
  constructor(private router: Router, private route: ActivatedRoute) { }

  updateRoute(obj) {
    const urlTree = this.router.createUrlTree([], {
      queryParams: obj,
      // queryParamsHandling: "merge",
      preserveFragment: true
    });
    this.router.navigateByUrl(urlTree);
  }

  checkRoute() {
    let queryParams = this.route.snapshot.queryParams;
    if (queryParams.ViewType !== "Para" && queryParams.ViewType !== "Sent" && queryParams.ViewType !== "Word" && queryParams.ViewType !== "Detail") {
      this.ViewType = "Para";
    }
    if (queryParams.Count && typeof queryParams.Count == 'number') {
      this.Count = queryParams.Count;
    }
    if (queryParams.MaxSent && typeof queryParams.MaxSent == 'number') {
      this.MaxSent = queryParams.MaxSent;
    }
    if (queryParams.MinSent && typeof queryParams.MinSent == 'number') {
      this.MinSent = queryParams.MinSent;
    }
    if (queryParams.MaxWord && typeof queryParams.MaxWord == 'number') {
      this.MaxWord = queryParams.MaxWord;
    }
    if (queryParams.MinWord && typeof queryParams.MinWord == 'number') {
      this.MinWord = queryParams.MinWord;
    }
    if (queryParams.Words && typeof queryParams.Words == 'string') {
      this.Words = queryParams.Words;
    }
    if (queryParams.Format && typeof queryParams.Format == 'string' && (queryParams.Format == "plain" || queryParams.Format == "html")) {
      this.Format = queryParams.Format;
    }

    if (this.ViewType == "Para") {
      this.updateRoute({
        Count: this.Count,
        MaxSent: this.MaxSent,
        MinSent: this.MinSent,
        ViewType: this.ViewType,
        Format: this.Format
      })
    } else if (this.ViewType == "Sent") {
      this.updateRoute({
        Count: this.Count,
        MaxWord: this.MaxWord,
        MinWord: this.MinWord,
        ViewType: this.ViewType,
        Format: this.Format
      })
    }
  }
}
