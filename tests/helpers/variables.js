let film1 = {
  'id': '11',
  'title': 'Castle in the Sky',
  'description': 'Sheeta inherited a mysterious crystal',
  'director': 'Hayao Miyazaki',
  'producer': 'Isao Takahata',
  'release_date': '1986',
  'rt_score': '95',
  'url': 'https://ghibliapi.herokuapp.com/films/11'
};

let film2 = {
  'id': '12',
  'title': 'Grave of the Fireflies',
  'description': 'In the latter part of World War II, a boy and his sister...',
  'director': 'Isao Takahata',
  'producer': 'Toru Hara',
  'release_date': '1988',
  'rt_score': '97',
  'url': 'https://ghibliapi.herokuapp.com/films/12'
};

let film3 = {
  'id': '13',
  'title': 'From Up on Poppy Hill',
  'description': 'Kokuriko Manor sits on a hill overlooking the harbour.',
  'director': 'Gorō Miyazaki',
  'producer': 'Toshio Suzuki',
  'release_date': '2011',
  'rt_score': '83',
  'url': 'https://ghibliapi.herokuapp.com/films/13'
};

let character1 = {
  'id': '31',
  'name': 'Colonel Muska',
  'gender': 'Male',
  'age': '33',
  'eye_color': 'Grey',
  'hair_color': 'Brown',
  'url': 'https://ghibliapi.herokuapp.com/people/31',
  'films': [film1]
};

let character2 = {
  'id': '32',
  'name': 'Sheeta',
  'gender': 'Female',
  'age': 'young',
  'eye_color': 'Brown',
  'hair_color': 'Brown',
  'url': 'https://ghibliapi.herokuapp.com/people/32',
  'films': [film1]
};

let location1 = {
  'id': '21',
  'name': 'Laputa',
  'climate': 'Continental',
  'terrain': 'City',
  'surface_water': '40',
  'url': 'https://ghibliapi.herokuapp.com/locations/21',
  'residents': [character1],
  'films': [film1]
};

let location2 = {
  'id': '22',
  'name': 'The Cat Kingdom',
  'climate': 'Continental',
  'terrain': 'Plain',
  'surface_water': '30',
  'url': 'https://ghibliapi.herokuapp.com/locations/22',
  'residents': [],
  'films': []
};

let vehicle1 = {
  'id': '41',
  'name': 'Air Destroyer Goliath',
  'description': 'Military airship utilized to access Laputa',
  'vehicle_class': 'Airship',
  'length': '1,000',
  'url': 'https://ghibliapi.herokuapp.com/vehicles/41',
  'pilot': character1,
  'films': film1
};

let vehicle2 = {
  'id': '42',
  'name': 'Red Wing',
  'description': 'An experimental aircraft captured by Porco. Named Savoia S.21',
  'vehicle_class': 'Airplane',
  'length': '20',
  'url': 'https://ghibliapi.herokuapp.com/vehicles/42',
  'pilot': character2,
  'films': film3
};

export {
  film1,
  film2,
  film3,
  location1,
  location2,
  character1,
  character2,
  vehicle1,
  vehicle2
};
