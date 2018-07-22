/* modules */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NgxImageZoomModule } from 'ngx-image-zoom';

/* components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { ViewedPaintingComponent } from './paintings/viewed-painting/viewed-painting.component';

/* services */
import { PagerService } from './paintings/pagination/pagination.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaintingsComponent,
    ViewedPaintingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    NgxImageZoomModule,
  ],
  providers: [
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
