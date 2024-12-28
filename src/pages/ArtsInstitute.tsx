import React from 'react';
import ResourceCard from '../components/ui/ResourceCard';
import { Paintbrush, Music, Theater } from 'lucide-react'; // Example icons

const ArtsInstitute: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-950 mb-6">Soar Arts Institute</h1>
        <p className="text-lg text-purple-600 mb-8">
          Nurturing creative talent across Africa.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResourceCard
            title="Creative Writing Workshop"
            description="Enhance your storytelling and writing skills."
            type="Workshop"
            icon={<Paintbrush className="w-6 h-6" />}
          />
          <ResourceCard
            title="Music Production 101"
            description="Learn the basics of producing music."
            type="Course"
            icon={<Music className="w-6 h-6" />}
          />
          <ResourceCard
            title="Theater Arts Program"
            description="Dive into the world of theater and performance."
            type="Program"
            icon={<Theater className="w-6 h-6" />}
          />
          {/* Add more ResourceCards as needed */}
        </div>
      </div>
    </div>
  );
};

export default ArtsInstitute; 