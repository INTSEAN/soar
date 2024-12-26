interface ResourceCardProps {
  title: string;
  description: string;
  type: string;
  icon: React.ReactNode;
}

const ResourceCard = ({ title, description, type, icon }: ResourceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="text-purple-600">{icon}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{type}</span>
        <button className="btn-secondary">Download</button>
      </div>
    </div>
  );
};

export default ResourceCard;