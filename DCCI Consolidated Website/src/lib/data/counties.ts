export interface OutreachCounty {
  name:  string
  slug:  string
  path:  string   // route: '/counties/leon'
  lng:   number   // WGS-84 longitude (county centroid)
  lat:   number   // WGS-84 latitude  (county centroid)
  blurb: string
}

export const OUTREACH_COUNTIES: OutreachCounty[] = [
  {
    name:  'Leon',
    slug:  'leon',
    path:  '/counties/leon',
    lng:   -84.281,
    lat:   30.438,
    blurb: 'Home to Tallahassee and the regional hub for Big Bend dementia outreach.',
  },
  {
    name:  'Wakulla',
    slug:  'wakulla',
    path:  '/counties/wakulla',
    lng:   -84.375,
    lat:   30.177,
    blurb: 'A rural coastal county with growing caregiver support networks.',
  },
  {
    name:  'Gadsden',
    slug:  'gadsden',
    path:  '/counties/gadsden',
    lng:   -84.583,
    lat:   30.588,
    blurb: 'Community outreach includes churches, libraries, and senior centers across the county.',
  },
  {
    name:  'Jefferson',
    slug:  'jefferson',
    path:  '/counties/jefferson',
    lng:   -83.869,
    lat:   30.545,
    blurb: 'A small rural county where outreach connects families to regional resources.',
  },
  {
    name:  'Madison',
    slug:  'madison',
    path:  '/counties/madison',
    lng:   -83.413,
    lat:   30.469,
    blurb: 'Serving families across a large geographic area with limited local services.',
  },
  {
    name:  'Taylor',
    slug:  'taylor',
    path:  '/counties/taylor',
    lng:   -83.582,
    lat:   30.117,
    blurb: 'Coastal and rural, Taylor County benefits from mobile outreach and traveling resource tables.',
  },
  {
    name:  'Liberty',
    slug:  'liberty',
    path:  '/counties/liberty',
    lng:   -84.978,
    lat:   30.427,
    blurb: "One of Florida's least populous counties — outreach here focuses on volunteer reach.",
  },
  {
    name:  'Franklin',
    slug:  'franklin',
    path:  '/counties/franklin',
    lng:   -84.993,
    lat:   29.726,
    blurb: 'A Gulf Coast county where resource access depends on community partnerships.',
  },
  {
    name:  'Calhoun',
    slug:  'calhoun',
    path:  '/counties/calhoun',
    lng:   -85.054,
    lat:   30.443,
    blurb: 'Western Big Bend county with deep community ties and active outreach volunteers.',
  },
]
