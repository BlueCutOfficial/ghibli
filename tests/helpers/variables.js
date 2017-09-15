export default {

  film1: {
    'id': '11',
    'title': 'Castle in the Sky',
    'description': 'Sheeta inherited a mysterious crystal',
    'director': 'Hayao Miyazaki',
    'producer': 'Isao Takahata',
    'release_date': '1986',
    'rt_score': '95'
  },

  film2: {
    'id': '12',
    'title': 'Grave of the Fireflies',
    'description': 'In the latter part of World War II, a boy and his sister...',
    'director': 'Isao Takahata',
    'producer': 'Toru Hara',
    'release_date': '1988',
    'rt_score': '97'
  },

  film3: {
    'id': '13',
    'title': 'From Up on Poppy Hill',
    'description': 'Kokuriko Manor sits on a hill overlooking the harbour.',
    'director': 'Gorō Miyazaki',
    'producer': 'Toshio Suzuki',
    'release_date': '2011',
    'rt_score': '83'
  },

  location1: {
    'id': '21',
    'name': 'Laputa',
    'climate': 'Continental',
    'terrain': 'City',
    'surface_water': '40',
    'residents': [
      'https://ghibliapi.herokuapp.com/people/31'
    ],
    'films': [
      'https://ghibliapi.herokuapp.com/films/11'
    ]
  },

  character1: {
    'id': '31',
    'name': 'Colonel Muska',
    'gender': 'Male',
    'age': '33',
    'eye_color': 'Grey',
    'hair_color': 'Brown',
    'films': [
      'https://ghibliapi.herokuapp.com/films/11'
    ]
  },

  vehicle1: {
    'id': '41',
    'name': 'Air Destroyer Goliath',
    'description': 'A military airship utilized by the government to access Laputa',
    'vehicle_class': 'Airship',
    'length': '1,000',
    'pilot': 'https://ghibliapi.herokuapp.com/people/31',
    'films': 'https://ghibliapi.herokuapp.com/films/11'
  }

};
