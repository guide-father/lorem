import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  viewType:string="Para";
  MaxSent:number=5;
  MinSent:number=10;
  MaxWord:number=10;
  MinWord:number=15;
  Words:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
