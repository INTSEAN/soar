import { Book, Download } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import ResourceCard from '../ui/ResourceCard';

const Resources = () => {
  return (
    <section id="resources" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Books & Resources"
          subtitle="Empowering knowledge for African entrepreneurs"
          icon={<Book className="w-8 h-8 text-purple-600" />}
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

const resources = [
  {
    title: "African Business Guide",
    description: "Comprehensive guide to starting and scaling businesses in Africa",
    type: "E-Book",
    icon: <Download className="w-5 h-5" />
  },
  {
    title: "Entrepreneurship Toolkit",
    description: "Essential tools and templates for business planning",
    type: "Template Pack",
    icon: <Download className="w-5 h-5" />
  },
  {
    title: "Market Research Reports",
    description: "In-depth analysis of African markets and trends",
    type: "Report",
    icon: <Download className="w-5 h-5" />
  }
];

export default Resources;