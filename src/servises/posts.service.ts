import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipost } from './../app/Shared-Classes-types/post-interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  private _url = 'https://jsonplaceholder.typicode.com/posts'

  getPosts():Observable<Ipost[]>
  {
    return this.http.get<Ipost[]>(this._url)
  }
}
