import { Component, OnInit } from '@angular/core';
import {UtilityService} from "../utility.service"

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {


  constructor(public utility: UtilityService) {
  }

  ngOnInit(): void {
    this.utility.checkRoute();
  }
}
