import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BodyComponent } from './body/body.component';
import { IndianMoviesComponent } from './indian-movies/indian-movies.component';
import { EnglishMoviesComponent } from './english-movies/english-movies.component';
import { AnimatedMoviesComponent } from './animated-movies/animated-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    IndianMoviesComponent,
    EnglishMoviesComponent,
    AnimatedMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
