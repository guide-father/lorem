import { Component, OnInit } from '@angular/core';
import { loremIpsum } from "lorem-ipsum";


@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let test=loremIpsum({
      count: 1,                // Number of "words", "sentences", or "paragraphs"
      format: "plain",         // "plain" or "html"
      paragraphLowerBound: 3,  // Min. number of sentences per paragraph.
      paragraphUpperBound: 7,  // Max. number of sentences per paragarph.
      random: Math.random,     // A PRNG function
      sentenceLowerBound: 5,   // Min. number of words per sentence.
      sentenceUpperBound: 15,  // Max. number of words per sentence.
      suffix: "\n",            // Line ending, defaults to "\n" or "\r\n" (win32)
      units: "sentences",      // paragraph(s), "sentence(s)", or "word(s)"
      words: ["ad",'me']       // Array of words to draw from
    })
    console.log(test)
  }

}
