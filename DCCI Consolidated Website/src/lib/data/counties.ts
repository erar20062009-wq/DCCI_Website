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
    lng:   -84.28,
    lat:   30.49,
    blurb: 'Home to Tallahassee and the regional hub for Big Bend dementia outreach.',
  },
  {
    name:  'Wakulla',
    slug:  'wakulla',
    path:  '/counties/wakulla',
    lng:   -84.40,
    lat:   30.11,
    blurb: 'A rural coastal county with growing caregiver support networks.',
  },
  {
    name:  'Gadsden',
    slug:  'gadsden',
    path:  '/counties/gadsden',
    lng:   -84.61,
    lat:   30.58,
    blurb: 'Community outreach includes churches, libraries, and senior centers across the county.',
  },
  {
    name:  'Jefferson',
    slug:  'jefferson',
    path:  '/counties/jefferson',
    lng:   -83.90,
    lat:   30.41,
    blurb: 'A small rural county where outreach connects families to regional resources.',
  },
  {
    name:  'Madison',
    slug:  'madison',
    path:  '/counties/madison',
    lng:   -83.48,
    lat:   30.44,
    blurb: 'Serving families across a large geographic area with limited local services.',
  },
  {
    name:  'Taylor',
    slug:  'taylor',
    path:  '/counties/taylor',
    lng:   -83.60,
    lat:   30.05,
    blurb: 'Coastal and rural, Taylor County benefits from mobile outreach and traveling resource tables.',
  },
  {
    name:  'Liberty',
    slug:  'liberty',
    path:  '/counties/liberty',
    lng:   -84.89,
    lat:   30.24,
    blurb: "One of Florida's least populous counties — outreach here focuses on volunteer reach.",
  },
  {
    name:  'Franklin',
    slug:  'franklin',
    path:  '/counties/franklin',
    lng:   -84.87,
    lat:   29.79,
    blurb: 'A Gulf Coast county where resource access depends on community partnerships.',
  },
  {
    name:  'Calhoun',
    slug:  'calhoun',
    path:  '/counties/calhoun',
    lng:   -85.19,
    lat:   30.40,
    blurb: 'Western Big Bend county with deep community ties and active outreach volunteers.',
  },
]
