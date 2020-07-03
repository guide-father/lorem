import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from "../utility.service"


@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {

  result = ""
  constructor(private route: ActivatedRoute, private utility: UtilityService) { }
  ngOnInit(): void {

    this.route.queryParams.subscribe(p => {
      this.result = "est"
    })
    console.log(this.getRandomSent())
  }

  getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getRandomWord(initial = false) {
    let randomnum = this.getRandomNum(2, 10);
    let word = "";
    for (let i = 0; i < randomnum; i++) {
      let randomW = String.fromCharCode(this.getRandomNum(97, 112))
      if (initial && i == 0) {
        word += randomW.toUpperCase()
      } else {
        word += randomW
      }
    }
    return word;
  }

  getRandomSent() {
    let wordLength = this.getRandomNum(this.utility.MinWord, this.utility.MaxWord);
    let sentence = "";
    for (let i = 0; i < wordLength; i++) {
      if (i == 0) {
        sentence += this.getRandomWord(true)+" "
      }else if(i==wordLength-1){
        sentence += this.getRandomWord()+"."
      }else {
        sentence += this.getRandomWord()+" "
      }

    }
    return sentence;
  }

}