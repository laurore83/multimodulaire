import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from './models/user.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Userservice {
  private http = inject(HttpClient);

  constructor() {}
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('assets/user.json');
  }
}
