import React from 'react';
import ResourceCard from '../components/ui/ResourceCard';
import { Handshake, Heart, Globe } from 'lucide-react'; // Example icons

const CSR: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-purple-600 mb-6">Soar CSR</h1>
        <p className="text-lg text-gray-700 mb-8">
          Corporate social responsibility initiatives.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResourceCard
            title="Sustainability Practices"
            description="Implementing sustainable business operations."
            type="Guide"
            icon={<Globe className="w-6 h-6" />}
          />
          <ResourceCard
            title="Community Engagement Workshop"
            description="Strategies for effective community involvement."
            type="Workshop"
            icon={<Handshake className="w-6 h-6" />}
          />
          <ResourceCard
            title="Ethical Business Course"
            description="Building an ethical foundation for your business."
            type="Course"
            icon={<Heart className="w-6 h-6" />}
          />
          {/* Add more ResourceCards as needed */}
        </div>
      </div>
    </div>
  );
};

export default CSR; 