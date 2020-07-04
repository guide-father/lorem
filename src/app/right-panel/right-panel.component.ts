import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from "../utility.service"
import * as faker from 'faker';

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
      this.result = this.generateByCount()
    })
  }

  getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  generateSentence() {
    let sentLength = this.getRandomNum(this.utility.MinWord, this.utility.MaxWord);
    let sentence = faker.lorem.sentence().split(" ");
    let newSent = sentence[0] + " ";
    if (sentLength > sentence.length) {
      for (let i = 0; i < sentLength - sentence.length; i++) {
        newSent += faker.lorem.word() + " "
      }
      for (let i = 1; i < sentence.length; i++) {
        newSent += sentence[i] + " "
      }
    } else if (sentLength < sentence.length) {
      for (let i = sentence.length - sentLength + 1; i < sentence.length; i++) {
        newSent += sentence[i] + " "
      }
    } else if (sentLength == sentence.length) {
      newSent = sentence.join(" ")
    }
    return newSent;
  }

  generatePara() {
    let paraLength = this.getRandomNum(this.utility.MinSent, this.utility.MaxSent);
    let para = "";
    for (let i = 0; i < paraLength; i++) {
      para += this.generateSentence()
    }
    return para;
  }

  generateByCount() {
    let content = "";
    for (let i = 0; i < this.utility.Count; i++) {
      if (this.utility.ViewType == "Para") {
        content += `<p>${this.generatePara()}</p>`
      } else if (this.utility.ViewType == "Sent") {
        content += `<p>${this.generateSentence()}</p>`
      }
    }
    return content
  }

  Download(type) {
    let url=""
    let fileName=""
    if(type=="html"){
      let blob = new Blob([this.result], { type: 'text/csv' });
      url = window.URL.createObjectURL(blob);
      fileName=`dummy-${new Date().toISOString().split(":")[0]}.html`
    }else{
      let blob = new Blob([this.result.replace( new RegExp("<p>","gm"),"").replace( new RegExp("</p>","gm"),"\n")], { type: 'text/csv' });
      url = window.URL.createObjectURL(blob);
      fileName=`dummy-${new Date().toISOString().split(":")[0]}.txt`

    }
    let ele=document.createElement("a");
    ele.href=url;
    ele.download=fileName
    ele.click()
  }

  Copy(type){
   
    if(type=="text"){
      this.copyStringToClipboard(this.result.replace( new RegExp("<p>","gm"),"").replace( new RegExp("</p>","gm"),"\n"))
    }
    if(type=="html"){
      this.copyStringToClipboard(this.result.replace( new RegExp("</p>","gm"),"</p>\n"))
    }
  }
  copyStringToClipboard (str) {
    function handler (event){
        event.clipboardData.setData('text/plain', str);
        event.preventDefault();
        document.removeEventListener('copy', handler, true);
    }

    document.addEventListener('copy', handler, true);
    document.execCommand('copy');
}
}