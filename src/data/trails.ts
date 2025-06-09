export interface Trail {
  id: string
  name: string
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Expert'
  distance: string
  duration: string
  elevation: string
  description: string
  highlights: string[]
  warnings: string[]
  access: string
  parking: string
  facilities: string[]
  image: string
  coordinates: {
    lat: number
    lng: number
  }
  status: 'Open' | 'Closed' | 'Partial'
  kauriRisk: boolean
  multiDay: boolean
}

export const trails: Trail[] = [
  {
    id: 'hillary-trail',
    name: 'Hillary Trail',
    difficulty: 'Challenging',
    distance: '70km',
    duration: '3-4 days',
    elevation: '1,500m cumulative',
    description: 'Named after Sir Edmund Hillary, this epic multi-day trail traverses the entire Waitākere Ranges Regional Park. Experience diverse landscapes from native bush to rugged coastline, with overnight stops at designated campsites.',
    highlights: [
      'Complete traverse of Waitākere Ranges',
      'Diverse ecosystems and landscapes',
      'Historic kauri dams and logging sites',
      'Spectacular coastal and forest views',
      'Multi-day camping experience'
    ],
    warnings: [
      'Multi-day hike requires permits for camping',
      'Weather dependent - can be muddy and slippery',
      'Some sections may be closed due to kauri dieback',
      'Requires good fitness and hiking experience'
    ],
    access: 'Multiple entry points: Arataki, Piha, Huia, Swanson',
    parking: 'Available at trailheads (fees may apply)',
    facilities: ['Campsites', 'Water sources', 'Toilets at some locations'],
    image: 'https://ugc.same-assets.com/NOJkpH54b-WTwLW_X46Uk3juJQSEzXG0.jpeg',
    coordinates: { lat: -36.9544, lng: 174.5333 },
    status: 'Partial',
    kauriRisk: true,
    multiDay: true
  },
  {
    id: 'karamatura-falls',
    name: 'Karamatura Falls Track',
    difficulty: 'Easy',
    distance: '1.5km',
    duration: '45 minutes return',
    elevation: '100m descent',
    description: 'Short walk to a spectacular 15-meter waterfall in the southern Waitākere Ranges. Perfect for families and those wanting to experience the beauty of native bush without a long commitment.',
    highlights: [
      '15-meter waterfall',
      'Swimming hole (weather permitting)',
      'Native bush and bird life',
      'Well-maintained track',
      'Great for families'
    ],
    warnings: [
      'Can be slippery when wet',
      'Swimming at own risk',
      'Track may be muddy after rain'
    ],
    access: 'Karamatura Valley Road, Huia',
    parking: 'Small car park at trailhead',
    facilities: ['Toilets nearby', 'Picnic area'],
    image: 'https://ugc.same-assets.com/fGSM7ANY40CMJ10qbLyOqe4EZBIAV9Uv.jpeg',
    coordinates: { lat: -37.0041, lng: 174.5602 },
    status: 'Open',
    kauriRisk: false,
    multiDay: false
  },
  {
    id: 'piha-kitekite-falls',
    name: 'Piha to Kitekite Falls',
    difficulty: 'Moderate',
    distance: '3km',
    duration: '1.5 hours return',
    elevation: '200m ascent',
    description: 'Popular trail from iconic Piha Beach through native bush to the stunning three-tier Kitekite Falls. The track involves some climbing but rewards hikers with one of the most beautiful waterfalls in Auckland.',
    highlights: [
      'Three-tier waterfall',
      'Native bush walk',
      'Great views of Piha Beach',
      'Swimming opportunities',
      'Photo opportunities'
    ],
    warnings: [
      'Can be crowded on weekends',
      'Some steep sections',
      'Slippery rocks near waterfall',
      'Check tide times for beach access'
    ],
    access: 'From Piha Beach, Glen Esk Road end',
    parking: 'Piha Beach car park (can be busy)',
    facilities: ['Toilets at beach', 'Cafes nearby', 'Surf patrol station'],
    image: 'https://ugc.same-assets.com/J2mVrJqV0UQfFwzHPfUWifWG9oW9D5Tz.jpeg',
    coordinates: { lat: -36.9505, lng: 174.4691 },
    status: 'Open',
    kauriRisk: false,
    multiDay: false
  },
  {
    id: 'cascade-kauri',
    name: 'Cascade Kauri (Te Piringa)',
    difficulty: 'Easy',
    distance: '1.2km',
    duration: '30 minutes return',
    elevation: 'Minimal',
    description: 'Short walk on a well-formed track to a magnificent kauri tree estimated to be over 300 years old. The track features a photogenic kauri framing structure and interpretation boards about kauri ecology.',
    highlights: [
      '300+ year old kauri tree',
      'Educational interpretation boards',
      'Kauri photo frame structure',
      'Native forest experience',
      'Wheelchair accessible boardwalk'
    ],
    warnings: [
      'Kauri dieback prevention - use cleaning stations',
      'Stay on designated boardwalk',
      'Do not touch kauri trees'
    ],
    access: 'Scenic Drive, near Waitākere Dam',
    parking: 'Cascade Kauri car park',
    facilities: ['Toilets', 'Information boards', 'Cleaning stations'],
    image: 'https://ugc.same-assets.com/iOaNDA7eakdLpVG98bdm5NcNKRSI-Jfh.jpeg',
    coordinates: { lat: -36.8864, lng: 174.5196 },
    status: 'Open',
    kauriRisk: true,
    multiDay: false
  },
  {
    id: 'montana-heritage-trail',
    name: 'Montana Heritage Trail',
    difficulty: 'Challenging',
    distance: '15km',
    duration: '5-7 hours',
    elevation: '800m cumulative',
    description: 'One of New Zealand\'s most famous day hikes, this challenging trail takes you through diverse landscapes from bush to beach. Experience historic logging sites, native forest, and end at the dramatic west coast.',
    highlights: [
      'Historic logging tramways',
      'Diverse ecosystems',
      'Spectacular coastal views',
      'Native bird life',
      'Heritage interpretation'
    ],
    warnings: [
      'Long and strenuous hike',
      'Weather dependent',
      'Some sections may be closed',
      'Requires good fitness level',
      'Can be muddy and slippery'
    ],
    access: 'Scenic Drive near Arataki Visitor Centre',
    parking: 'Arataki Visitor Centre',
    facilities: ['Visitor centre', 'Toilets', 'Information displays'],
    image: 'https://ugc.same-assets.com/NOJkpH54b-WTwLW_X46Uk3juJQSEzXG0.jpeg',
    coordinates: { lat: -36.9167, lng: 174.5167 },
    status: 'Partial',
    kauriRisk: true,
    multiDay: false
  },
  {
    id: 'te-henga-walkway',
    name: 'Te Henga Walkway (Bethells Beach)',
    difficulty: 'Easy',
    distance: '2km',
    duration: '1 hour return',
    elevation: 'Minimal',
    description: 'Scenic coastal walk along Te Henga (Bethells Beach) with opportunities to explore sand dunes, lake, and dramatic black sand coastline. Popular for photography and birdwatching.',
    highlights: [
      'Black sand beach',
      'Sand dunes and lake',
      'Coastal bird watching',
      'Dramatic scenery',
      'Photography opportunities'
    ],
    warnings: [
      'Strong currents - swimming not recommended',
      'Can be windy',
      'Sun exposure on beach',
      'Check weather conditions'
    ],
    access: 'Bethells Road to Te Henga Beach',
    parking: 'Te Henga Beach car park',
    facilities: ['Basic toilets', 'No drinking water'],
    image: 'https://ugc.same-assets.com/J2mVrJqV0UQfFwzHPfUWifWG9oW9D5Tz.jpeg',
    coordinates: { lat: -36.9333, lng: 174.4167 },
    status: 'Open',
    kauriRisk: false,
    multiDay: false
  },
  {
    id: 'auckland-city-walk',
    name: 'Auckland City Walk',
    difficulty: 'Moderate',
    distance: '4.5km',
    duration: '2-3 hours',
    elevation: '300m cumulative',
    description: 'Popular loop track combining urban forest experience with native bush. Great views over Auckland city and Waitemata Harbour on clear days.',
    highlights: [
      'City and harbour views',
      'Mixed native and exotic forest',
      'Well-maintained tracks',
      'Accessible from city',
      'Good for regular exercise'
    ],
    warnings: [
      'Can be busy on weekends',
      'Some steep sections',
      'Track can be slippery when wet'
    ],
    access: 'Scenic Drive, multiple entry points',
    parking: 'Scenic Drive pull-offs',
    facilities: ['Limited facilities'],
    image: 'https://ugc.same-assets.com/iOaNDA7eakdLpVG98bdm5NcNKRSI-Jfh.jpeg',
    coordinates: { lat: -36.8750, lng: 174.5250 },
    status: 'Open',
    kauriRisk: false,
    multiDay: false
  },
  {
    id: 'goldie-bush-walkway',
    name: 'Goldie Bush Walkway',
    difficulty: 'Easy',
    distance: '1.8km',
    duration: '45 minutes return',
    elevation: '100m',
    description: 'Peaceful walk through regenerating native bush leading to a small waterfall. Great for families and bird watching, with minimal elevation gain.',
    highlights: [
      'Native bird life',
      'Small waterfall',
      'Regenerating bush',
      'Family-friendly',
      'Educational signage'
    ],
    warnings: [
      'Can be muddy after rain',
      'Limited parking',
      'Track may be overgrown in places'
    ],
    access: 'Goldie Bush Road, New Lynn',
    parking: 'Street parking only',
    facilities: ['No facilities at trailhead'],
    image: 'https://ugc.same-assets.com/fGSM7ANY40CMJ10qbLyOqe4EZBIAV9Uv.jpeg',
    coordinates: { lat: -36.9083, lng: 174.6917 },
    status: 'Open',
    kauriRisk: false,
    multiDay: false
  },
  {
    id: 'omanawanui-track',
    name: 'Omanawanui Track',
    difficulty: 'Moderate',
    distance: '2.8km',
    duration: '1.5 hours return',
    elevation: '250m ascent',
    description: 'Climb to one of the highest accessible points in the Waitākere Ranges for spectacular 360-degree views. On clear days, you can see from the Manukau Harbour to the Hauraki Gulf.',
    highlights: [
      '360-degree panoramic views',
      'Highest accessible viewpoint',
      'Native forest climb',
      'Clear weather views to islands',
      'Great for sunrise/sunset'
    ],
    warnings: [
      'Steep climb',
      'Can be windy at summit',
      'Views weather dependent',
      'Take warm clothing'
    ],
    access: 'Scenic Drive, Omanawanui Road',
    parking: 'Small car park at base',
    facilities: ['No facilities'],
    image: 'https://ugc.same-assets.com/iOaNDA7eakdLpVG98bdm5NcNKRSI-Jfh.jpeg',
    coordinates: { lat: -36.9500, lng: 174.5000 },
    status: 'Open',
    kauriRisk: false,
    multiDay: false
  },
  {
    id: 'waitakere-dam-tracks',
    name: 'Waitākere Dam Tracks',
    difficulty: 'Easy',
    distance: '2-5km',
    duration: '1-2 hours',
    elevation: 'Minimal',
    description: 'Network of easy walking tracks around the historic Waitākere Dam, built in 1910. Multiple loop options through native bush with views of the dam and opportunities to learn about water supply history.',
    highlights: [
      'Historic dam structure',
      'Multiple track options',
      'Native bush walks',
      'Educational interpretation',
      'Easy access from Scenic Drive'
    ],
    warnings: [
      'Some tracks may be closed for maintenance',
      'Stay away from dam structure',
      'Can be crowded on weekends'
    ],
    access: 'Scenic Drive, Waitākere Dam car park',
    parking: 'Large car park available',
    facilities: ['Toilets', 'Picnic tables', 'Information boards'],
    image: 'https://ugc.same-assets.com/iOaNDA7eakdLpVG98bdm5NcNKRSI-Jfh.jpeg',
    coordinates: { lat: -36.8836, lng: 174.5139 },
    status: 'Open',
    kauriRisk: false,
    multiDay: false
  },
  {
    id: 'mercer-bay-loop',
    name: 'Mercer Bay Loop Track',
    difficulty: 'Moderate',
    distance: '3.5km',
    duration: '1.5-2 hours',
    elevation: '150m',
    description: 'Beautiful coastal loop walk near Piha with spectacular clifftop views. The track takes you to the Te Kawerau a Maki Pou (Maori marker sculpture) and offers stunning ocean vistas. Be careful around the sea cliffs as there are no barriers.',
    highlights: [
      'Spectacular coastal cliff views',
      'Te Kawerau a Maki Pou sculpture',
      'Mix of bush and coastal scenery',
      'Views over Lion Rock and Piha Beach',
      'Native bird watching opportunities'
    ],
    warnings: [
      'Dangerous cliff edges with no barriers',
      '200m+ drop to ocean below',
      'Can be windy and exposed',
      'Stay on marked tracks at all times'
    ],
    access: 'Te Ahua Road, off Piha Road',
    parking: 'Car park at end of Te Ahua Road',
    facilities: ['Basic toilets', 'Information boards'],
    image: 'https://ugc.same-assets.com/J2mVrJqV0UQfFwzHPfUWifWG9oW9D5Tz.jpeg',
    coordinates: { lat: -36.9700, lng: 174.4678 },
    status: 'Open',
    kauriRisk: false,
    multiDay: false
  },
  {
    id: 'fairy-falls',
    name: 'Fairy Falls Track',
    difficulty: 'Easy',
    distance: '2.2km',
    duration: '1 hour return',
    elevation: '80m',
    description: 'Enchanting walk through native bush to a beautiful waterfall with a natural swimming hole. The track features wooden boardwalks and stairs, making it accessible for most fitness levels. Perfect for families and photography.',
    highlights: [
      'Beautiful tiered waterfall',
      'Natural swimming hole',
      'Well-maintained wooden boardwalks',
      'Lush native forest',
      'Photography opportunities'
    ],
    warnings: [
      'Track can be slippery when wet',
      'Swimming at own risk',
      'Can be busy on weekends',
      'No lifeguard services'
    ],
    access: 'Glen Esk Road, Piha',
    parking: 'Shared parking with Kitekite Falls',
    facilities: ['Toilets nearby', 'Picnic areas'],
    image: 'https://ugc.same-assets.com/fGSM7ANY40CMJ10qbLyOqe4EZBIAV9Uv.jpeg',
    coordinates: { lat: -36.9480, lng: 174.4650 },
    status: 'Open',
    kauriRisk: false,
    multiDay: false
  },
  {
    id: 'anawhata-beach-track',
    name: 'Anawhata Beach Track',
    difficulty: 'Moderate',
    distance: '1.5km',
    duration: '45 minutes return',
    elevation: '120m descent',
    description: 'Steep track down through native bush to a secluded black sand beach. More remote and less crowded than Piha, offering a wilder west coast experience. The beach features dramatic rock formations and powerful surf.',
    highlights: [
      'Secluded black sand beach',
      'Dramatic coastal rock formations',
      'Less crowded than other beaches',
      'Powerful surf and waves',
      'Native bush walk'
    ],
    warnings: [
      'Steep descent - tough on return',
      'Dangerous surf conditions',
      'No lifeguard services',
      'Limited facilities',
      'Can be challenging for small children'
    ],
    access: 'Anawhata Road, off Scenic Drive',
    parking: 'Small parking area at road end',
    facilities: ['No facilities'],
    image: 'https://ugc.same-assets.com/J2mVrJqV0UQfFwzHPfUWifWG9oW9D5Tz.jpeg',
    coordinates: { lat: -36.9167, lng: 174.4500 },
    status: 'Open',
    kauriRisk: false,
    multiDay: false
  },
  {
    id: 'whites-beach-track',
    name: 'Whites Beach Track',
    difficulty: 'Challenging',
    distance: '4km',
    duration: '2-3 hours return',
    elevation: '300m',
    description: 'Challenging coastal track connecting multiple beaches and headlands. This lesser-known trail offers solitude and spectacular views but requires good fitness and navigation skills. Features dramatic clifftop walking and beach access.',
    highlights: [
      'Multiple beach access points',
      'Spectacular clifftop views',
      'Less crowded than main tracks',
      'Diverse coastal ecosystems',
      'Challenging but rewarding hike'
    ],
    warnings: [
      'Requires good fitness level',
      'Navigation skills needed',
      'Exposed clifftop sections',
      'Limited track marking',
      'Weather dependent'
    ],
    access: 'Via connecting tracks from Piha area',
    parking: 'Use Piha area parking',
    facilities: ['No facilities on track'],
    image: 'https://ugc.same-assets.com/iOaNDA7eakdLpVG98bdm5NcNKRSI-Jfh.jpeg',
    coordinates: { lat: -36.9600, lng: 174.4400 },
    status: 'Open',
    kauriRisk: false,
    multiDay: false
  },
  {
    id: 'upper-nihotupu-walk',
    name: 'Upper Nihotupu Walk',
    difficulty: 'Moderate',
    distance: '5km',
    duration: '2.5-3 hours',
    elevation: '200m',
    description: 'Peaceful walk around Auckland\'s water supply reservoir through regenerating native bush. The track offers excellent bird watching opportunities and interpretation about water supply history and conservation efforts.',
    highlights: [
      'Peaceful reservoir walking',
      'Excellent bird watching',
      'Educational interpretation',
      'Water supply history',
      'Regenerating native forest'
    ],
    warnings: [
      'Restricted access to reservoir',
      'Dogs not permitted',
      'Stay on designated tracks only',
      'No swimming in reservoir'
    ],
    access: 'Huia Road, near Huia',
    parking: 'Parking area near trailhead',
    facilities: ['Toilets', 'Information boards'],
    image: 'https://ugc.same-assets.com/iOaNDA7eakdLpVG98bdm5NcNKRSI-Jfh.jpeg',
    coordinates: { lat: -36.9750, lng: 174.5500 },
    status: 'Open',
    kauriRisk: false,
    multiDay: false
  },
  {
    id: 'lion-rock-track',
    name: 'Lion Rock Track',
    difficulty: 'Moderate',
    distance: '1km',
    duration: '30-45 minutes return',
    elevation: '100m',
    description: 'Iconic climb to the top of Piha\'s famous Lion Rock for panoramic views of the west coast. This short but steep track is a Piha must-do, offering 360-degree views from the summit. Best visited at sunrise or sunset.',
    highlights: [
      '360-degree panoramic views',
      'Iconic Piha landmark',
      'Sunset and sunrise viewing',
      'Photography opportunities',
      'Historical significance'
    ],
    warnings: [
      'Steep and exposed climb',
      'Can be very windy at top',
      'Not suitable for young children',
      'Rocky and uneven surfaces',
      'Take care in wet conditions'
    ],
    access: 'Piha Beach, northern end',
    parking: 'Piha Beach car parks',
    facilities: ['Toilets at beach', 'Cafes nearby'],
    image: 'https://ugc.same-assets.com/NOJkpH54b-WTwLW_X46Uk3juJQSEzXG0.jpeg',
    coordinates: { lat: -36.9500, lng: 174.4691 },
    status: 'Open',
    kauriRisk: false,
    multiDay: false
  },
  {
    id: 'arataki-nature-trail',
    name: 'Arataki Nature Trail',
    difficulty: 'Easy',
    distance: '1km',
    duration: '30 minutes',
    elevation: 'Minimal',
    description: 'Short educational walk from the Arataki Visitor Centre showcasing native plants and offering panoramic views over the ranges. Perfect introduction to Waitākere ecology with interpretation boards and viewing platforms.',
    highlights: [
      'Educational interpretation boards',
      'Native plant identification',
      'Panoramic range views',
      'Visitor centre facilities',
      'Easy family walk'
    ],
    warnings: [
      'Can be busy with tour groups',
      'Limited shade on hot days',
      'Wheelchair accessible sections only'
    ],
    access: 'Arataki Visitor Centre, Scenic Drive',
    parking: 'Large visitor centre car park',
    facilities: ['Visitor centre', 'Toilets', 'Cafe', 'Gift shop', 'Information displays'],
    image: 'https://ugc.same-assets.com/iOaNDA7eakdLpVG98bdm5NcNKRSI-Jfh.jpeg',
    coordinates: { lat: -36.9167, lng: 174.5167 },
    status: 'Open',
    kauriRisk: false,
    multiDay: false
  },
  {
    id: 'donald-mclean-lookout',
    name: 'Donald McLean Lookout Track',
    difficulty: 'Easy',
    distance: '2km',
    duration: '1 hour return',
    elevation: '50m',
    description: 'Easy walk to one of Auckland\'s best panoramic viewpoints overlooking the city, harbours, and ranges. Named after a former Auckland mayor, this lookout offers spectacular views on clear days extending to the Hauraki Gulf islands.',
    highlights: [
      'Panoramic Auckland city views',
      'Harbour and gulf vistas',
      'Range and forest outlook',
      'Historical significance',
      'Photography platform'
    ],
    warnings: [
      'Views weather dependent',
      'Can be windy at lookout',
      'Popular spot - can be crowded',
      'Limited shade'
    ],
    access: 'Scenic Drive, near Arataki',
    parking: 'Roadside parking available',
    facilities: ['Viewing platform', 'Information board'],
    image: 'https://ugc.same-assets.com/iOaNDA7eakdLpVG98bdm5NcNKRSI-Jfh.jpeg',
    coordinates: { lat: -36.9050, lng: 174.5200 },
    status: 'Open',
    kauriRisk: false,
    multiDay: false
  },
  {
    id: 'karekare-falls-track',
    name: 'Karekare Falls Track',
    difficulty: 'Moderate',
    distance: '2.5km',
    duration: '1.5 hours return',
    elevation: '150m',
    description: 'Beautiful walk through native bush to a spectacular multi-tiered waterfall. Made famous by "The Piano" movie, this track takes you from Karekare Beach through lush forest to the impressive falls with swimming opportunities.',
    highlights: [
      'Multi-tiered waterfall',
      'Movie location from "The Piano"',
      'Swimming opportunities',
      'Lush native forest',
      'Black sand beach start point'
    ],
    warnings: [
      'Can be very slippery when wet',
      'Flash flood risk in heavy rain',
      'Swimming at own risk',
      'Some steep sections',
      'Track can be muddy'
    ],
    access: 'Karekare Beach, via Karekare Road',
    parking: 'Karekare Beach car park',
    facilities: ['Toilets at beach', 'No facilities at falls'],
    image: 'https://ugc.same-assets.com/fGSM7ANY40CMJ10qbLyOqe4EZBIAV9Uv.jpeg',
    coordinates: { lat: -36.9667, lng: 174.4500 },
    status: 'Open',
    kauriRisk: false,
    multiDay: false
  },
  {
    id: 'whatipu-beach-track',
    name: 'Whatipu Beach Track',
    difficulty: 'Easy',
    distance: '3km',
    duration: '1.5 hours return',
    elevation: 'Minimal',
    description: 'Remote coastal walk to one of Auckland\'s most spectacular and wild beaches. The track takes you through unique coastal vegetation to expansive black sand dunes and a river mouth. Great for bird watching and solitude.',
    highlights: [
      'Remote and wild atmosphere',
      'Expansive black sand beach',
      'River mouth and wetlands',
      'Excellent bird watching',
      'Unique coastal vegetation'
    ],
    warnings: [
      'Very dangerous surf conditions',
      'Strong currents and rips',
      'No lifeguard services',
      'Can be very windy',
      'Limited facilities'
    ],
    access: 'Whatipu Road, end of road',
    parking: 'Car park at road end',
    facilities: ['Basic toilets', 'Information boards'],
    image: 'https://ugc.same-assets.com/J2mVrJqV0UQfFwzHPfUWifWG9oW9D5Tz.jpeg',
    coordinates: { lat: -37.0000, lng: 174.4667 },
    status: 'Open',
    kauriRisk: false,
    multiDay: false
  }
]

export const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy':
      return 'bg-green-100 text-green-800'
    case 'Moderate':
      return 'bg-yellow-100 text-yellow-800'
    case 'Challenging':
      return 'bg-orange-100 text-orange-800'
    case 'Expert':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'Open':
      return 'bg-green-100 text-green-800'
    case 'Closed':
      return 'bg-red-100 text-red-800'
    case 'Partial':
      return 'bg-yellow-100 text-yellow-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}
