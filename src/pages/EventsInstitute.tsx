import React from 'react';
import ResourceCard from '../components/ui/ResourceCard';

const EventsInstitute: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-950 mb-6">Soar Events Institute</h1>
        <p className="text-lg text-purple-600 mb-8">
          World-class training for event management professionals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Resource Cards */}
          <ResourceCard
            title="Event Planning 101"
            description="Basics of successful event planning."
            type="Course"
            icon={<svg /* your SVG icon here */ />}
          />
          {/* Add more ResourceCards as needed */}
        </div>
      </div>
    </div>
  );
};

export default EventsInstitute; 