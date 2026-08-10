import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private readonly apiBaseUrl = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) {}

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiBaseUrl);
  }

  getTrip(tripCode: string): Observable<Trip[]> {
    return this.http.get<Trip[]>(
      `${this.apiBaseUrl}/${encodeURIComponent(tripCode)}`
    );
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.apiBaseUrl, trip);
  }

  updateTrip(trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(
      `${this.apiBaseUrl}/${encodeURIComponent(trip.code)}`,
      trip
    );
  }

  deleteTrip(tripCode: string): Observable<{ message: string; trip: Trip }> {
    return this.http.delete<{ message: string; trip: Trip }>(
      `${this.apiBaseUrl}/${encodeURIComponent(tripCode)}`
    );
  }
}
