import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './../app/Shared-Classes-types/Users-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  private _Url: string = 'https://jsonplaceholder.typicode.com/users'
  getUsers():Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this._Url)
  }
}
