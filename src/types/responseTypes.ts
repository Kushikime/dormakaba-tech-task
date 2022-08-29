export interface People {
  birth_year: string;
  eye_color: string;
  films: string[]; //urls
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string; //url
  mass: string;
  name: string;
  skin_color: string;
  created: string; //datetime
  edited: string; //datetime
  species: string[]; //urls
  starships: string[]; //urls
  url: string; //current url
  vehicles: string[]; //urls
}

export interface Film {
  characters: string[]; //urls
  created: string; //datetime
  director: string;
  edited: string; //datetime
  episode_id: number;
  opening_crawl: string;
  planets: string[]; //urls
  producer: string;
  release_date: string;
  species: string[]; //urls
  starships: string[]; //urls
  title: string;
  url: string; //current url
  vehicles: string[]; //urls
}

export interface Starship {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string; //datetime
  crew: string;
  edited: string; //datetime
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: string[]; //urls
  pilots: string[]; //urls
  starship_class: string;
  url: string; //current url
}

export interface Vehicle {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string; //datetime
  crew: string;
  edited: string; //datetime
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string[]; //urls
  films: string[]; //urls
  url: string; //current url
  vehicle_class: string;
}

export interface Specie {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string; //datetime
  designation: string;
  edited: string; //datetime
  eye_colors: string;
  hair_colors: string;
  homeworld: string; //url
  language: string;
  name: string;
  people: string[]; //urls
  films: string[]; //urls
  skin_colors: string;
  url: string; //current url
}

export interface Planet {
  climate: string;
  created: string; //datetime
  diameter: string;
  edited: string; //datetime
  films: string[]; //urls
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[]; //urls
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string; //current url
}
