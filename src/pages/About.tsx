import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 animate-fade-in">
        <h1 className="text-5xl font-extrabold text-slate-950 mb-8 animate-slide-in">About SOAR</h1>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 bg-white p-8 shadow-lg rounded-lg animate-fade-in">
            <h2 className="text-3xl font-semibold text-slate-950 mb-6 animate-slide-in">Our Vision</h2>
            <p className="text-lg text-slate-950 mb-6 leading-relaxed animate-fade-in">
              Our vision is to <span className="font-bold text-purple-600">redefine the landscape</span> of luxury events. We aim to <span className="font-bold text-purple-600">transcend boundaries</span> and shape the future of experiential craftsmanship, envisioning a world where every event is a masterpiece. Through our commitment to <span className="font-bold text-purple-600">innovation</span>, <span className="font-bold text-purple-600">collaboration</span>, and <span className="font-bold text-purple-600">uncompromising quality</span>, we aspire to inspire a new generation of visionaries.
            </p>
            <h2 className="text-3xl font-semibold text-slate-950 mb-6 animate-slide-in">Our Mission</h2>
            <p className="text-lg text-slate-950 mb-6 leading-relaxed animate-fade-in">
              Our mission is to <span className="font-bold text-purple-600">empower</span> aspiring luxury event professionals with the knowledge, skills, and inspiration to craft extraordinary experiences. We are committed to providing <span className="font-bold text-purple-600">unparalleled education</span>, fostering a culture of <span className="font-bold text-purple-600">creativity</span> and <span className="font-bold text-purple-600">innovation</span>, and cultivating a community of <span className="text-slate-950">entrepreneurs</span> who embody the essence of luxury.
            </p>
            <h2 className="text-3xl font-semibold text-slate-950 mb-6 animate-slide-in">Our Motto</h2>
            <p className="text-lg text-slate-950 mb-6 leading-relaxed animate-fade-in">
              Inspiring excellence.
            </p>
          </div>
          <div className="flex-none lg:ml-8 text-center animate-fade-in">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNg_cN-BJGDJWjbOulwNRAmAYh8iV9x6wgz5q2Qz9ZWGKUfY6wpo60JRoMS-UGkOw1X8&usqp=CAU" 
              alt="Founder" 
              className="w-72 h-auto mx-auto rounded-full shadow-md animate-fade-in"
            />
            <h2 className="text-3xl font-semibold text-slate-950 mt-6 mb-4 animate-slide-in">Founder Bio</h2>
            <p className="text-sm text-purple-700 max-w-md mx-auto leading-relaxed animate-fade-in">
              Victoria Ndeto, our esteemed founder, has significantly influenced the African entrepreneurial sphere. With over a decade of expertise in the luxury events sector, she has been a catalyst for innovation and expansion across the continent. Victoria is dedicated to empowering the forthcoming generation of African entrepreneurs through strategic initiatives and partnerships.
            </p>
            {/* Contact button for WhatsApp */}
            <a href="https://wa.me/+254712345678" target="_blank" className="btn mt-6 hover:bg-slate-800 animate-slide-in animate-delay-1000">Contact Victoria</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 