import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Trip } from '../models/trip';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css'
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];
  message = 'Loading trips...';
  loading = true;

  constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTrips();
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  public refreshTrips(): void {
    this.getTrips();
  }

  private getTrips(): void {
    this.loading = true;
    this.tripDataService.getTrips().subscribe({
      next: (value: Trip[]) => {
        this.trips = value;
        this.message = value.length > 0
          ? `There are ${value.length} trips available.`
          : 'There are no trips available.';
        this.loading = false;
      },
      error: (error: unknown) => {
        console.error('Error retrieving trips:', error);
        this.message = 'Unable to retrieve trips from the API.';
        this.loading = false;
      }
    });
  }
}
