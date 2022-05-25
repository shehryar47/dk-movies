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
      img:"https://images.unsplash.com/photo-1653290188582-76e0571d332a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
      quality: 'HD',
      trailer: "https://www.youtube.com/embed/qqpyWWlLevo"
    },
    {
      id: 2,
      name: 'Chakor Maal',
      year: 2004,
      quality: 'HD',
      img:"https://images.unsplash.com/photo-1653290188582-76e0571d332a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",

      trailer: "https://www.youtube.com/embed/qqpyWWlLevo"
    },
    {
      id: 3,
      name: 'Lamba Maal',
      year: 2005,
      quality: 'HD',
      img:"https://images.unsplash.com/photo-1653290188582-76e0571d332a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
      trailer: 'https://www.youtube.com/embed/qqpyWWlLevo'
    },
    {
      id: 4,
      name: 'Chota Maal',
      year: 2006,
      quality: 'HD',
      img:"https://images.unsplash.com/photo-1653290188582-76e0571d332a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
      trailer: 'https://www.youtube.com/embed/qqpyWWlLevo'
    },
    {
      id: 5,
      name: 'Mota Maal',
      year: 2007,
      quality: 'HD',
      img:"https://images.unsplash.com/photo-1653290188582-76e0571d332a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
      trailer: 'https://www.youtube.com/embed/qqpyWWlLevo'
    },

  ]


 
  
  constructor() { }

  ngOnInit(): void {
  }

}
