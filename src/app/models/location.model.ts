// src/app/models/location.model.ts
export interface Info {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  }
  
  export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
  }
  
  export interface LocationResponse {
    info: Info;
    results: Location[];
  }
  