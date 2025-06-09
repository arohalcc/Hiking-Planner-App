import type React from 'react'
import { type Trail, getDifficultyColor, getStatusColor } from '../data/trails'

interface TrailCardProps {
  trail: Trail
  onSelect: (trail: Trail) => void
}

const TrailCard: React.FC<TrailCardProps> = ({ trail, onSelect }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onSelect(trail)}
    >
      <div className="relative">
        <img
          src={trail.image}
          alt={trail.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(trail.difficulty)}`}>
            {trail.difficulty}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(trail.status)}`}>
            {trail.status}
          </span>
        </div>
        {trail.kauriRisk && (
          <div className="absolute top-3 right-3">
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              ⚠️ Kauri Risk
            </span>
          </div>
        )}
        {trail.multiDay && (
          <div className="absolute bottom-3 right-3">
            <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              🏕️ Multi-day
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{trail.name}</h3>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <span>📏</span>
            <span>{trail.distance}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>⏱️</span>
            <span>{trail.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>⛰️</span>
            <span>{trail.elevation}</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {trail.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {trail.highlights.slice(0, 3).map((highlight) => (
            <span key={highlight} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs">
              {highlight}
            </span>
          ))}
          {trail.highlights.length > 3 && (
            <span className="text-gray-500 text-xs">
              +{trail.highlights.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            📍 {trail.access.split(',')[0]}
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default TrailCard
