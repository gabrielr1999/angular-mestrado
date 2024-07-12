import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TailedBeastService } from './services/character/anime-services.service';
import { LocationService } from './services/location/location.service';
import { LocationListComponent } from './components/location-list/location-list.component'; // Verifique se o caminho está correto
import { Character } from './models/character.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, LocationListComponent], // Certifique-se de que LocationListComponent esteja aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  characters: Character[] = [];
  page = 1;
  info = { next: null, prev: null, pages: 0, count: 0 };

  constructor(private tailedBeastService: TailedBeastService) { }

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(): void {
    this.tailedBeastService.getCharacters(this.page).subscribe(response => {
      this.characters = response.results;
      this.info = response.info;
    });
  }

  handlePrevPage(): void {
    if (this.info.prev) {
      this.page--;
      this.fetchCharacters();
    }
  }

  handleNextPage(): void {
    if (this.info.next) {
      this.page++;
      this.fetchCharacters();
    }
  }
}
