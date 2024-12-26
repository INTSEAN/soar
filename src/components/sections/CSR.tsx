import { Heart } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const CSR = () => {
  return (
    <section id="csr" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Corporate Social Responsibility"
          subtitle="Making a positive impact across Africa"
          icon={<Heart className="w-8 h-8 text-purple-600" />}
        />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((initiative) => (
            <div key={initiative.title} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">{initiative.title}</h3>
              <p className="text-gray-600">{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const initiatives = [
  {
    title: "Education Empowerment",
    description: "Providing scholarships and educational resources to underprivileged students across Africa."
  },
  {
    title: "Environmental Sustainability",
    description: "Supporting green initiatives and sustainable practices in African communities."
  },
  {
    title: "Community Development",
    description: "Investing in local infrastructure and community-building projects."
  }
];

export default CSR;