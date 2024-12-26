import { Users } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About SOAR Africa"
          subtitle="Empowering the next generation of African leaders"
          icon={<Users className="w-8 h-8 text-purple-600" />}
        />
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="prose lg:prose-lg">
            <h3>Our Mission</h3>
            <p>
              SOAR Africa is dedicated to fostering entrepreneurship and innovation
              across the continent. We believe in the power of education,
              networking, and resource sharing to create sustainable growth and
              development.
            </p>
            <h3>Our Vision</h3>
            <p>
              To be the leading platform for entrepreneurial development in Africa,
              creating opportunities and fostering collaboration across borders.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
              alt="Team collaboration"
              className="rounded-lg shadow-lg object-cover h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;