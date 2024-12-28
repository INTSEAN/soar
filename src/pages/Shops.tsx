import React from 'react';
import ResourceCard from '../components/ui/ResourceCard';
import { ShoppingBag, Store } from 'lucide-react'; // Example icons

const Shops: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-950 mb-6">Soar Shops</h1>
        <p className="text-lg text-purple-600 mb-8">
          Supporting local artisans and entrepreneurs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResourceCard
            title="E-commerce Setup Guide"
            description="Step-by-step guide to setting up your online store."
            type="Guide"
            icon={<ShoppingBag className="w-6 h-6" />}
          />
          <ResourceCard
            title="Retail Management Course"
            description="Learn effective retail management strategies."
            type="Course"
            icon={<Store className="w-6 h-6" />}
          />
          <ResourceCard
            title="Marketing for Shops"
            description="Techniques to market your retail business."
            type="Workshop"
            icon={<Store className="w-6 h-6" />}
          />
          {/* Add more ResourceCards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Shops; 