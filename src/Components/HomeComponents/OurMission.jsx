import React from 'react';

// Simple swiper simulation (since we don't have access to react swiper)
const AutoSwiper = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-slide-infinite">
        {children}
        {/* Duplicate for seamless loop */}
        {children}
      </div>
      <style jsx>{`
        @keyframes slide-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide-infinite {
          animation: slide-infinite 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

const OurMission = () => {
  const features = [
    {
      icon: "🎉",
      title: "Unforgettable Time",
      subtitle: "We Make You Perfect Event"
    },
    {
      icon: "🤝",
      title: "Friendly Team",
      subtitle: "More Than 200 Teams"
    },
    {
      icon: "🎪",
      title: "Perfect Venues",
      subtitle: "Perfect Venues"
    },
    {
      icon: "🍷",
      title: "Unique Scenario",
      subtitle: "We Thinking Out Of The Box"
    }
  ];

  return (
    <section className="bg-gray-50 py-20 max-w-7xl mx-auto">
      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          
          {/* Left Column - Main Title */}
          <div className="lg:col-span-1">
            <p className="text-gray-400 tracking-wider text-sm mb-4">WE ARE HARMONI</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
              <span className="text-6xl lg:text-7xl">No.1</span><br />
              Events<br />
              Management
            </h1>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-colors">
              GET STARTED!
            </button>
          </div>

          {/* Middle Column - Mission */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h2>
              <div className="w-16 h-1 bg-orange-400"></div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Harmoni, our mission is to turn moments into lasting memories. We believe that every event — big or small — deserves creativity, precision, and heart. experiences that inspire connection, celebration, and joy.
            </p>
            <p className="text-gray-800 font-medium italic">
               wedding, or community gathering, our focus is always on excellence, detail, and unforgettable impact.
            </p>
          </div>

          {/* Right Column - Vision */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Vision</h2>
              <div className="w-16 h-1 bg-orange-400"></div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We aim to simplify the planning process, elevate event standards, and empower our clients with innovative solutions. Whether it's a corporate conference, wedding, or community gathering,.
            </p>
            <p className="text-gray-800 font-medium italic">
              big or small — deserves creativity, precision, and heart. experiences that inspire connection, celebration, and joy.
            </p>
          </div>
        </div>

        {/* Auto Sliding Cards */}
        <AutoSwiper>
          {features.map((feature, index) => (
            <div key={index} className="flex-shrink-0 w-80 mx-4">
              <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </AutoSwiper>

        {/* Orange Divider */}
        <div className="flex justify-center mt-16">
          <div className="w-20 h-1 bg-orange-400 rounded"></div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;