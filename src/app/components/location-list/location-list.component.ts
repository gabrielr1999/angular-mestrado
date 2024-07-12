import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from '../../services/location/location.service';
import { Location, Info } from '../../models/location.model';

@Component({
  selector: 'app-location-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  locations: Location[] = [];
  info: Info = { count: 0, pages: 0, next: null, prev: null }; // Inicializando com valores padrão
  currentPage: number = 1;

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.fetchLocations();
  }

  fetchLocations(): void {
    this.locationService.getLocations(this.currentPage).subscribe(response => {
      this.locations = response.results;
      this.info = response.info;
    });
  }

  handleNextPage(): void {
    if (this.info.next) {
      this.currentPage++;
      this.fetchLocations();
    }
  }

  handlePrevPage(): void {
    if (this.info.prev) {
      this.currentPage--;
      this.fetchLocations();
    }
  }
}
