import type React from 'react'
import { type Trail, getDifficultyColor, getStatusColor } from '../data/trails'

interface TrailModalProps {
  trail: Trail | null
  isOpen: boolean
  onClose: () => void
}

const TrailModal: React.FC<TrailModalProps> = ({ trail, isOpen, onClose }) => {
  if (!isOpen || !trail) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <img
            src={trail.image}
            alt={trail.name}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-colors"
          >
            ✕
          </button>
          <div className="absolute bottom-4 left-4 flex gap-2">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(trail.difficulty)}`}>
              {trail.difficulty}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(trail.status)}`}>
              {trail.status}
            </span>
            {trail.kauriRisk && (
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                ⚠️ Kauri Risk
              </span>
            )}
            {trail.multiDay && (
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                🏕️ Multi-day
              </span>
            )}
          </div>
        </div>

        <div className="p-6">
          {/* Title and Basic Info */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{trail.name}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">📏</div>
              <div className="font-semibold">{trail.distance}</div>
              <div className="text-sm text-gray-600">Distance</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">⏱️</div>
              <div className="font-semibold">{trail.duration}</div>
              <div className="text-sm text-gray-600">Duration</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">⛰️</div>
              <div className="font-semibold">{trail.elevation}</div>
              <div className="text-sm text-gray-600">Elevation</div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Description</h3>
            <p className="text-gray-700 leading-relaxed">{trail.description}</p>
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {trail.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Warnings */}
          {trail.warnings.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">⚠️ Warnings & Safety</h3>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <ul className="space-y-2">
                  {trail.warnings.map((warning) => (
                    <li key={warning} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">⚠️</span>
                      <span className="text-orange-800">{warning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Access and Practical Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Access & Parking</h3>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-gray-600">Trailhead Access:</div>
                  <div className="text-gray-800">{trail.access}</div>
                </div>
                <div>
                  <div className="font-medium text-gray-600">Parking:</div>
                  <div className="text-gray-800">{trail.parking}</div>
                </div>
                <div>
                  <div className="font-medium text-gray-600">Coordinates:</div>
                  <div className="text-gray-800">
                    {trail.coordinates.lat.toFixed(4)}, {trail.coordinates.lng.toFixed(4)}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Facilities</h3>
              <div className="space-y-2">
                {trail.facilities.map((facility) => (
                  <div key={facility} className="flex items-center gap-2">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kauri Dieback Warning */}
          {trail.kauriRisk && (
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-2">🌲 Kauri Dieback Information</h3>
              <p className="text-orange-800 mb-2">
                This trail passes through areas with kauri trees that may be affected by Kauri Dieback disease.
              </p>
              <div className="text-sm text-orange-700">
                <strong>Please:</strong>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Use cleaning stations at the start and end of your walk</li>
                  <li>Stay on designated tracks and boardwalks</li>
                  <li>Clean your footwear and equipment thoroughly</li>
                  <li>Do not touch kauri trees or disturb soil around them</li>
                </ul>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t">
            <button
              onClick={() => window.open(`https://maps.google.com/?q=${trail.coordinates.lat},${trail.coordinates.lng}`, '_blank')}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              📍 Open in Maps
            </button>
            <button
              onClick={() => window.open('https://www.aucklandcouncil.govt.nz/parks-recreation/get-outdoors/auckland-walks/Pages/default.aspx', '_blank')}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              🌐 Official Info
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrailModal
