// src/app/services/location/location.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationResponse } from '../../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'https://rickandmortyapi.com/api/location';

  constructor(private http: HttpClient) { }

  getLocations(page: number = 1): Observable<LocationResponse> {
    return this.http.get<LocationResponse>(`${this.apiUrl}?page=${page}`);
  }
}
