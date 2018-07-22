import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
import { PagerService } from './pagination/pagination.service';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.css']
})
export class PaintingsComponent implements OnInit {
  viewedPainting: string;
  currentPage: number = 1;
  pager: any = {};
  pagedItems: any[];
  allItems = _.range(29);

  constructor(private pagerService: PagerService) { }

  ngOnInit() {
    this.pager = this.pagerService.getPager(this.allItems.length, this.currentPage);
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.pagerService.getPager(this.allItems.length, page);
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  viewPainting(i) {
    this.viewedPainting = "assets/paintings/painting (" + (i + 1) + ").jpg";
  }

  close() {
    this.viewedPainting = null;
  }
}