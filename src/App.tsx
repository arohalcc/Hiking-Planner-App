import React, { useState, useMemo } from 'react'
import { trails, type Trail } from './data/trails'
import TrailCard from './components/TrailCard'
import TrailModal from './components/TrailModal'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [selectedTrail, setSelectedTrail] = useState<Trail | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [difficultyFilter, setDifficultyFilter] = useState('')
  const [durationFilter, setDurationFilter] = useState('')

  const handleTrailSelect = (trail: Trail) => {
    setSelectedTrail(trail)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedTrail(null)
  }

  const filteredTrails = useMemo(() => {
    return trails.filter(trail => {
      const matchesSearch = trail.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          trail.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesDifficulty = difficultyFilter === '' || trail.difficulty === difficultyFilter

      const matchesDuration = durationFilter === '' ||
        (durationFilter === 'short' && (trail.duration.includes('min') || trail.duration.includes('1 hour') || trail.duration.includes('30 minutes'))) ||
        (durationFilter === 'medium' && (trail.duration.includes('2') || trail.duration.includes('3') || trail.duration.includes('1.5'))) ||
        (durationFilter === 'long' && (trail.duration.includes('4') || trail.duration.includes('5') || trail.duration.includes('6') || trail.duration.includes('7') || trail.duration.includes('day')))

      return matchesSearch && matchesDifficulty && matchesDuration
    })
  }, [searchTerm, difficultyFilter, durationFilter])

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-stone-50">
      {/* Header */}
      <header className="bg-emerald-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌲</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Waitākere Ranges</h1>
                <p className="text-emerald-200 text-sm">Hiking Directory & Planning</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button
                onClick={() => setActiveSection('home')}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeSection === 'home' ? 'bg-emerald-600' : 'hover:bg-emerald-700'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveSection('trails')}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeSection === 'trails' ? 'bg-emerald-600' : 'hover:bg-emerald-700'
                }`}
              >
                Trails
              </button>
              <button
                onClick={() => setActiveSection('safety')}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeSection === 'safety' ? 'bg-emerald-600' : 'hover:bg-emerald-700'
                }`}
              >
                Safety
              </button>
              <button
                onClick={() => setActiveSection('planning')}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeSection === 'planning' ? 'bg-emerald-600' : 'hover:bg-emerald-700'
                }`}
              >
                Planning
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="relative h-[60vh] bg-gradient-to-r from-emerald-800 to-emerald-600 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://ugc.same-assets.com/iOaNDA7eakdLpVG98bdm5NcNKRSI-Jfh.jpeg')`
            }}
          />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Explore the Wild West
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Discover 250km+ of hiking trails through native rainforest, dramatic coastlines, and ancient kauri trees
            </p>
            <div className="space-x-4">
              <button
                onClick={() => setActiveSection('trails')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Browse Trails
              </button>
              <button
                onClick={() => setActiveSection('safety')}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Safety Info
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Quick Stats */}
      {activeSection === 'home' && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-800">250+</div>
                <div className="text-gray-600">km of trails</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-800">16,000</div>
                <div className="text-gray-600">hectares to explore</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-800">20+</div>
                <div className="text-gray-600">major trails</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-800">70km</div>
                <div className="text-gray-600">Hillary Trail</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Trails Preview */}
      {activeSection === 'home' && (
        <section className="py-12 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Featured Trails</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://ugc.same-assets.com/fGSM7ANY40CMJ10qbLyOqe4EZBIAV9Uv.jpeg"
                  alt="Karamatura Falls"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Karamatura Falls</h3>
                  <p className="text-gray-600 mb-2">Easy • 1.5km • 45 mins</p>
                  <p className="text-gray-700">Beautiful 15-meter waterfall with swimming opportunities</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://ugc.same-assets.com/J2mVrJqV0UQfFwzHPfUWifWG9oW9D5Tz.jpeg"
                  alt="Piha Beach Trail"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Piha to Kitekite Falls</h3>
                  <p className="text-gray-600 mb-2">Moderate • 3km • 1.5 hours</p>
                  <p className="text-gray-700">Iconic black sand beach to stunning three-tier waterfall</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://ugc.same-assets.com/NOJkpH54b-WTwLW_X46Uk3juJQSEzXG0.jpeg"
                  alt="Hillary Trail"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Hillary Trail</h3>
                  <p className="text-gray-600 mb-2">Challenging • 70km • 3-4 days</p>
                  <p className="text-gray-700">Epic multi-day adventure through the heart of the Ranges</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Safety Alert Banner */}
      <div className="bg-orange-100 border-l-4 border-orange-400 p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-orange-400 text-xl">⚠️</span>
            </div>
            <div className="ml-3">
              <p className="text-orange-700">
                <strong>Important:</strong> Some tracks may be temporarily closed due to Kauri Dieback disease.
                Check track status before your visit and always use cleaning stations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      {activeSection === 'trails' && (
        <section className="py-12 bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">All Trails</h2>
            <p className="text-gray-600 mb-8">Comprehensive directory of hiking trails in the Waitākere Ranges</p>

            {/* Search and Filter */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Search trails..."
                  className="px-4 py-2 border rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                  className="px-4 py-2 border rounded-lg"
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                >
                  <option value="">All Difficulties</option>
                  <option value="Easy">Easy</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Challenging">Challenging</option>
                  <option value="Expert">Expert</option>
                </select>
                <select
                  className="px-4 py-2 border rounded-lg"
                  value={durationFilter}
                  onChange={(e) => setDurationFilter(e.target.value)}
                >
                  <option value="">All Durations</option>
                  <option value="short">Under 2 hours</option>
                  <option value="medium">2-4 hours</option>
                  <option value="long">4+ hours</option>
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredTrails.length} of {trails.length} trails
              </p>
            </div>

            {/* Trail Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTrails.map(trail => (
                <TrailCard
                  key={trail.id}
                  trail={trail}
                  onSelect={handleTrailSelect}
                />
              ))}
            </div>

            {filteredTrails.length === 0 && (
              <div className="text-center text-gray-500 py-12">
                <p className="text-xl mb-2">No trails found</p>
                <p>Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </section>
      )}

      {activeSection === 'safety' && (
        <section className="py-12 bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Safety Information</h2>

            {/* Emergency Contacts */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold text-red-800 mb-4">🚨 Emergency Contacts</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">In Case of Emergency</h4>
                  <div className="space-y-1 text-red-800">
                    <p><strong>Police/Fire/Ambulance:</strong> 111</p>
                    <p><strong>Search & Rescue:</strong> 111</p>
                    <p><strong>Auckland Council:</strong> 09 301 0101</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Location Information</h4>
                  <p className="text-red-800 text-sm">
                    When calling emergency services, provide your GPS coordinates if possible,
                    or describe the nearest track markers, car park, or road access point.
                  </p>
                </div>
              </div>
            </div>

            {/* Kauri Dieback */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">🌲 Kauri Dieback Disease</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-3">What is Kauri Dieback?</h4>
                  <p className="text-orange-800 mb-4">
                    Kauri dieback is a disease that kills kauri trees of all ages. It's caused by a microscopic organism
                    called Phytophthora agathidicida that lives in soil and damages kauri roots.
                  </p>
                  <h4 className="font-semibold text-orange-700 mb-3">How to Help Prevent Spread:</h4>
                  <ul className="space-y-2 text-orange-800">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      Use cleaning stations at track entrances and exits
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      Stay on designated tracks and boardwalks
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      Clean all gear, including boots, before and after visits
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      Don't touch kauri trees or disturb soil around them
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-3">Track Closures</h4>
                  <p className="text-orange-800 mb-4">
                    Some tracks may be temporarily closed to protect kauri trees. Always check
                    the current track status before your visit.
                  </p>
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <p className="text-orange-700 font-medium mb-2">Check Track Status:</p>
                    <button
                      onClick={() => window.open('https://www.aucklandcouncil.govt.nz/environment/plants-animals/protect-trees-disease/protect-our-kauri-trees/Pages/default.aspx', '_blank')}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm transition-colors"
                    >
                      Auckland Council Kauri Map
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* General Safety */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4">🥾 Before You Go</h3>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    Check weather conditions and track status
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    Tell someone your plans and expected return time
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    Pack appropriate clothing for weather changes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    Bring plenty of water and snacks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    Carry a fully charged mobile phone
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    Wear appropriate footwear with good grip
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">🌿 On the Trail</h3>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    Stay on marked tracks at all times
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    Take your time on steep or slippery sections
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    Be aware of changing weather conditions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    Respect native wildlife - observe from a distance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    Pack out all rubbish - leave no trace
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    Turn back if conditions become unsafe
                  </li>
                </ul>
              </div>
            </div>

            {/* Weather & Conditions */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">🌦️ Weather & Conditions</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-3">Wet Weather</h4>
                  <ul className="space-y-2 text-yellow-800 text-sm">
                    <li>• Tracks become very slippery</li>
                    <li>• Stream crossings may be dangerous</li>
                    <li>• Visibility can be reduced</li>
                    <li>• Consider postponing your hike</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-3">West Coast Conditions</h4>
                  <ul className="space-y-2 text-yellow-800 text-sm">
                    <li>• Strong winds and large swells</li>
                    <li>• Dangerous currents for swimming</li>
                    <li>• Black sand gets very hot in summer</li>
                    <li>• No lifeguard services at most beaches</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-3">Bush Conditions</h4>
                  <ul className="space-y-2 text-yellow-800 text-sm">
                    <li>• Can be cool and damp year-round</li>
                    <li>• Fallen trees may block tracks</li>
                    <li>• Limited mobile phone coverage</li>
                    <li>• Tracks can be muddy after rain</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* What to Pack */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">🎒 What to Pack</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-3">Essential Items</h4>
                  <ul className="space-y-2 text-purple-800">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">•</span>
                      Plenty of water (more than you think you need)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">•</span>
                      Snacks and lunch for longer hikes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">•</span>
                      Rain jacket and warm layers
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">•</span>
                      First aid kit and personal medications
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">•</span>
                      Mobile phone with emergency contacts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">•</span>
                      Map and compass or GPS device
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-3">Recommended Items</h4>
                  <ul className="space-y-2 text-purple-800">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">•</span>
                      Sunscreen and hat
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">•</span>
                      Insect repellent
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">•</span>
                      Camera for memories
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">•</span>
                      Spare socks and underwear
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">•</span>
                      Headlamp or torch
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-600">•</span>
                      Portable charger/power bank
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'planning' && (
        <section className="py-12 bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Trip Planning</h2>

            {/* Quick Planning Guide */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">🗺️ Planning Your Waitākere Adventure</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">1️⃣</div>
                  <h4 className="font-semibold text-emerald-700 mb-2">Choose Your Trail</h4>
                  <p className="text-emerald-800 text-sm">
                    Select a trail based on your fitness level, available time, and interests.
                    Check our trail directory for detailed information.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">2️⃣</div>
                  <h4 className="font-semibold text-emerald-700 mb-2">Check Conditions</h4>
                  <p className="text-emerald-800 text-sm">
                    Verify track status, weather forecast, and any closures.
                    Prepare for changing conditions and pack accordingly.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">3️⃣</div>
                  <h4 className="font-semibold text-emerald-700 mb-2">Prepare & Go</h4>
                  <p className="text-emerald-800 text-sm">
                    Use our checklists to pack essentials, inform others of your plans,
                    and enjoy your hiking adventure safely.
                  </p>
                </div>
              </div>
            </div>

            {/* Time & Fitness Planning */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4">⏰ Time Planning</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">Difficulty Levels</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-blue-800">Easy (Family-friendly):</span>
                        <span className="text-blue-600">30min - 2 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-800">Moderate (Some fitness required):</span>
                        <span className="text-blue-600">1.5 - 4 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-800">Challenging (Good fitness):</span>
                        <span className="text-blue-600">4+ hours</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">Planning Tips</h4>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      <li>• Allow extra time for breaks and photos</li>
                      <li>• Start early to avoid crowds and heat</li>
                      <li>• Check sunset times for afternoon hikes</li>
                      <li>• Consider return journey time</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-orange-800 mb-4">🚗 Getting There</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-700 mb-2">Transportation Options</h4>
                    <ul className="space-y-2 text-orange-800 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">🚗</span>
                        <span>Car: Most convenient, parking available at most trailheads</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">🚌</span>
                        <span>Bus: Limited service to some areas (check AT schedules)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">🚐</span>
                        <span>Tour groups: Guided options available</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-700 mb-2">Parking Tips</h4>
                    <ul className="space-y-1 text-orange-800 text-sm">
                      <li>• Arrive early on weekends</li>
                      <li>• Some car parks charge fees</li>
                      <li>• Don't leave valuables visible</li>
                      <li>• Note car park closing times</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Weather Planning */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">🌦️ Weather Planning</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-3">Summer (Dec-Feb)</h4>
                  <ul className="space-y-1 text-yellow-800 text-sm">
                    <li>• Warm but can be humid</li>
                    <li>• Pack sunscreen & hat</li>
                    <li>• Early morning starts ideal</li>
                    <li>• Thunderstorms possible</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-3">Autumn (Mar-May)</h4>
                  <ul className="space-y-1 text-yellow-800 text-sm">
                    <li>• Mild temperatures</li>
                    <li>• Great hiking weather</li>
                    <li>• Pack layers for variation</li>
                    <li>• Occasional rain</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-3">Winter (Jun-Aug)</h4>
                  <ul className="space-y-1 text-yellow-800 text-sm">
                    <li>• Cool and often wet</li>
                    <li>• Tracks can be muddy</li>
                    <li>• Pack waterproof gear</li>
                    <li>• Shorter daylight hours</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-3">Spring (Sep-Nov)</h4>
                  <ul className="space-y-1 text-yellow-800 text-sm">
                    <li>• Variable conditions</li>
                    <li>• Beautiful wildflowers</li>
                    <li>• Pack for all weather</li>
                    <li>• Great for photography</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
                <p className="text-yellow-700 font-medium mb-2">Current Weather Resources:</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => window.open('https://www.metservice.com/locations/auckland', '_blank')}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm transition-colors"
                  >
                    MetService
                  </button>
                  <button
                    onClick={() => window.open('https://www.windy.com/', '_blank')}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm transition-colors"
                  >
                    Windy.com
                  </button>
                </div>
              </div>
            </div>

            {/* Packing Checklists */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-green-800 mb-4">🎒 Day Hike Checklist</h3>
                <div className="space-y-2 text-sm">
                  {[
                    'Water bottle(s)',
                    'Snacks/lunch',
                    'First aid kit',
                    'Mobile phone',
                    'Map of area',
                    'Rain jacket',
                    'Warm layer',
                    'Sun hat',
                    'Sunscreen',
                    'Insect repellent',
                    'Camera',
                    'Rubbish bag'
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-2 text-green-800">
                      <input type="checkbox" className="rounded text-green-600" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-purple-800 mb-4">🏕️ Overnight Checklist</h3>
                <div className="space-y-2 text-sm">
                  {[
                    'Camping permit',
                    'Tent & sleeping gear',
                    'Cooking equipment',
                    'Extra food & water',
                    'Headlamp/torch',
                    'Extra batteries',
                    'Warm clothes',
                    'Personal hygiene items',
                    'Garbage bags',
                    'Water purification',
                    'Emergency whistle',
                    'Backup plan'
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-2 text-purple-800">
                      <input type="checkbox" className="rounded text-purple-600" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-red-800 mb-4">🚨 Safety Checklist</h3>
                <div className="space-y-2 text-sm">
                  {[
                    'Check weather forecast',
                    'Inform someone of plans',
                    'Check track conditions',
                    'Verify phone coverage',
                    'Plan return time',
                    'Identify escape routes',
                    'Check kauri closures',
                    'Prepare emergency contacts',
                    'Review trail difficulty',
                    'Consider group fitness',
                    'Plan backup activities',
                    'Check equipment'
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-2 text-red-800">
                      <input type="checkbox" className="rounded text-red-600" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Useful Resources */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🔗 Useful Resources</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Official Information</h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => window.open('https://www.aucklandcouncil.govt.nz/parks-recreation/get-outdoors/auckland-walks/Pages/default.aspx', '_blank')}
                      className="block w-full text-left bg-white hover:bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm transition-colors"
                    >
                      🏛️ Auckland Council Parks & Recreation
                    </button>
                    <button
                      onClick={() => window.open('https://www.doc.govt.nz/', '_blank')}
                      className="block w-full text-left bg-white hover:bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm transition-colors"
                    >
                      🏞️ Department of Conservation (DOC)
                    </button>
                    <button
                      onClick={() => window.open('https://www.aucklandcouncil.govt.nz/environment/plants-animals/protect-trees-disease/protect-our-kauri-trees/Pages/default.aspx', '_blank')}
                      className="block w-full text-left bg-white hover:bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm transition-colors"
                    >
                      🌲 Kauri Dieback Information
                    </button>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Weather & Transport</h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => window.open('https://www.metservice.com/', '_blank')}
                      className="block w-full text-left bg-white hover:bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm transition-colors"
                    >
                      🌦️ MetService Weather
                    </button>
                    <button
                      onClick={() => window.open('https://at.govt.nz/', '_blank')}
                      className="block w-full text-left bg-white hover:bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm transition-colors"
                    >
                      🚌 Auckland Transport
                    </button>
                    <button
                      onClick={() => window.open('https://www.google.com/maps', '_blank')}
                      className="block w-full text-left bg-white hover:bg-gray-50 border border-gray-300 rounded-lg p-3 text-sm transition-colors"
                    >
                      🗺️ Google Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Waitākere Ranges</h3>
              <p className="text-emerald-200">
                Your comprehensive guide to hiking in Auckland's wild west
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Emergency Contacts</h3>
              <p className="text-emerald-200">Police/Fire/Ambulance: 111</p>
              <p className="text-emerald-200">Search & Rescue: 111</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <p className="text-emerald-200">Auckland Council Parks</p>
              <p className="text-emerald-200">Department of Conservation</p>
            </div>
          </div>
          <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-emerald-200">
            <p>&copy; 2025 Waitākere Ranges Hiking Guide. For informational purposes only.</p>
            <p> - For comment and feedback please email: Waitakere@aroha.biz</p>
          </div>
        </div>
      </footer>

      {/* Trail Modal */}
      <TrailModal
        trail={selectedTrail}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export default App
