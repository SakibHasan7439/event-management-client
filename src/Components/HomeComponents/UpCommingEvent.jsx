import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import PrimaryButton from '../Shared/Primary-button/PrimaryButton';

const UpComingEvents = () => {
  return (
    <section className="bg-white py-20 max-w-7xl mx-auto">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 tracking-wider text-sm mb-4">OUR LATEST EVENT</p>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Our Upcoming <span className="text-gray-600">Events</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get ready for an unforgettable experience! Our upcoming event is designed to bring people together through entertainment, inspiration, and celebration. Whether you're looking to network, learn, or simply have a great time, this event has something special for everyone.
          </p>
        </div>

        {/* Event Card */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Event Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop" 
              alt="Food Truck Festival" 
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Event Details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-400 rounded-sm"></div>
              <span className="text-gray-600 font-medium">Featured Event</span>
            </div>
            
            <h3 className="text-4xl font-bold text-gray-800">
              Barcelona <span className="text-gray-600">Food Truck Festival</span>
            </h3>
            
            <p className="text-orange-500 text-lg font-semibold">
              Tickets start from $52.00
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Join us for a day filled with captivating speakers, immersive activities, live performances, delicious cuisine, and more. It's not just an event — it's a memory in the making.
            </p>
            
            {/* Event Meta */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Clock className="w-5 h-5 text-orange-400" />
                <span>Start 20:00pm - 22:00pm</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>Barcelona, Spain</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-4 pt-4">
              <PrimaryButton variant='primary' size='lg'>BOOKING TICKET</PrimaryButton>
              <PrimaryButton variant='outline' size='lg'>EVENT DETAILS</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpComingEvents;