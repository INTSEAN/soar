import React from 'react';
import ResourceCard from '../components/ui/ResourceCard';
import { Code, BarChart, Cloud } from 'lucide-react'; // Example icons

const Digital: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-950 mb-6">Soar Digital</h1>
        <p className="text-lg text-purple-600 mb-8">
          Digital transformation solutions for modern businesses.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResourceCard
            title="Web Development Bootcamp"
            description="Master the fundamentals of web development."
            type="Bootcamp"
            icon={<Code className="w-6 h-6" />}
          />
          <ResourceCard
            title="Data Analytics Workshop"
            description="Harness the power of data to drive decisions."
            type="Workshop"
            icon={<BarChart className="w-6 h-6" />}
          />
          <ResourceCard
            title="Cloud Computing Essentials"
            description="Understand the basics of cloud services."
            type="Course"
            icon={<Cloud className="w-6 h-6" />}
          />
          {/* Add more ResourceCards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Digital; 