import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Corporatemember} from '../models/corporatemember';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class ApiService {
  constructor(private http: HttpClient) {
  }

  getAllCorporatemember(): Observable<Corporatemember[]> {
    return this.http.get(`${environment.apiUrl}`)
      .pipe(map(data => data as Corporatemember[]));
  }
}