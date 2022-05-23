import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimatedMoviesComponent } from './animated-movies/animated-movies.component';
import { BodyComponent } from './body/body.component';
import { EnglishMoviesComponent } from './english-movies/english-movies.component';
import { HeaderComponent } from './header/header.component';
import { IndianMoviesComponent } from './indian-movies/indian-movies.component';

const routes: Routes = [
  {  
    path: '',
    component: BodyComponent,
   
     },

  {  
    path: 'body',
    component: BodyComponent,
     },
     {
    path: 'indian-movies',
    component: IndianMoviesComponent,
     },
     {
    path: 'english-movies',
    component: EnglishMoviesComponent,
     },
     {
    path: 'animated',
    component: AnimatedMoviesComponent,
     },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
