import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indian-movies',
  templateUrl: './indian-movies.component.html',
  styleUrls: ['./indian-movies.component.scss']
})
export class IndianMoviesComponent implements OnInit {

  indianMovies: any = [
    {
      id: 1,
      name: 'Gol Maal',
      year: 2003,
      quality: 'HD',
      trailerLink: 'https://www.youtube.com/watch?v=A1-PEkuuWi8'
    },
    {
      id: 2,
      name: 'Chakor Maal',
      year: 2004,
      quality: 'HD',
      trailerLink: ' https://www.youtube.com/watch?v=A1-PEkuuWi8'
    },
    {
      id: 3,
      name: 'Lamba Maal',
      year: 2005,
      quality: 'HD',
      trailerLink: ' https://www.youtube.com/watch?v=A1-PEkuuWi8'
    },
    {
      id: 4,
      name: 'Chota Maal',
      year: 2006,
      quality: 'HD',
      trailerLink: ' https://www.youtube.com/watch?v=A1-PEkuuWi8'
    },
    {
      id: 5,
      name: 'Mota Maal',
      year: 2007,
      quality: 'HD',
      trailerLink: ' https://www.youtube.com/watch?v=A1-PEkuuWi8'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
