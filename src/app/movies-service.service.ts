import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  constructor(private http:HttpClient) { }

  getData(){
    let url='https://yts.mx/api/v2/list_movies.json';
    return this.http.get(url);
  }
}
