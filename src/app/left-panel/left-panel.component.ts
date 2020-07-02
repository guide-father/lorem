import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  viewType: string = "Para";
  MaxSent: number = 5;
  MinSent: number = 10;
  MaxWord: number = 10;
  MinWord: number = 15;
  Words: string = "";

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    let queryParams = this.route.snapshot.queryParams;
    if (queryParams.viewType) this.viewType = queryParams.viewType;
    if (queryParams.MaxSent) this.MaxSent = queryParams.MaxSent;
    if (queryParams.MinSent) this.MinSent = queryParams.MinSent;
    if (queryParams.MaxWord) this.MaxWord = queryParams.MaxWord;
    if (queryParams.MinWord) this.MinWord = queryParams.MinWord;
    if (queryParams.Words) this.Words = queryParams.Words;
  }

  updateRoute() {
    let obj = {};
    if (this.viewType = "Para") {
      obj["viewType"] = "Para",
        obj["MaxSent"] = "MaxSent",
        obj["MinSent"] = "MinSent"
    }
    const urlTree = this.router.createUrlTree([], {
      queryParams: obj,
      queryParamsHandling: "merge",
      preserveFragment: true
    });
    this.router.navigateByUrl(urlTree);
  }
}
