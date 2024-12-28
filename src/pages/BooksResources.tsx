import React from 'react';
import ResourceCard from '../components/ui/ResourceCard';
import { BookOpen, ClipboardList, Wrench } from 'lucide-react';

const BooksResources: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-950 mb-6">Soar Books & Resources</h1>
        <p className="text-lg text-purple-600 mb-8">
          Access to educational resources and tools.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResourceCard
            title="Entrepreneurship Essentials"
            description="Key concepts for budding entrepreneurs."
            type="Book"
            icon={<BookOpen className="w-6 h-6" />}
          />
          <ResourceCard
            title="Business Planning Toolkit"
            description="Tools to craft your business plan effectively."
            type="Toolkit"
            icon={<ClipboardList className="w-6 h-6" />}
          />
          <ResourceCard
            title="Marketing Resources"
            description="Comprehensive resources for marketing strategies."
            type="Resource"
            icon={<Wrench className="w-6 h-6" />}
          />
        </div>
      </div>
    </div>
  );
};

export default BooksResources; 