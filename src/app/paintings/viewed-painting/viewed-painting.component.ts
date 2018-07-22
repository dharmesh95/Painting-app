import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-viewed-painting',
  templateUrl: './viewed-painting.component.html',
  styleUrls: ['./viewed-painting.component.css']
})
export class ViewedPaintingComponent implements OnInit {

  smallScreen: boolean;
  @Input() viewedPainting: string;
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    if (window.screen.width <= 750) {
      this.smallScreen = true;
    }
  }

  closed() {
    this.close.emit("0");
  }

}
