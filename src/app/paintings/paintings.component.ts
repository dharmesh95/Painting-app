import { Component, OnInit } from '@angular/core';
import { imagesUrl } from '../../assets/image-url.constant';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.css']
})
export class PaintingsComponent implements OnInit {
  horseUrlTest:string;

  ngOnInit() {
    this.horseUrlTest=imagesUrl.horseUrl;
    console.log(imagesUrl.horseUrl);
    
  }

}
